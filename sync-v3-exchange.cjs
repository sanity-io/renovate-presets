const fs = require('fs/promises')
const path = require('path')
const createClient = require('@sanity/client')
const client = createClient({
  projectId: '81pocpw8',
  dataset: 'production',
  apiVersion: '2022-08-01',
  useCdn: true,
});

async function main() {
  const plugins = await client.fetch(
    /* groq */ `*[studioVersion == 3 || defined(v3DistTag)] {packageName, v3DistTag}`
  )
  const v3DistTags = new Set()
  const groups = new Map()
  for (const plugin of plugins.filter((plugin) => Boolean(plugin.v3DistTag))) {
    v3DistTags.add(plugin.v3DistTag)

    const group = groups.get(plugin.v3DistTag) || []
    group.push(plugin.packageName)
    groups.set(plugin.v3DistTag, group)
  }

  const preset = require('./ecosystem/studio-v3.json')
  for (const followTag of [...v3DistTags]) {
    let packageRuleIndex = preset.packageRules.findIndex(
      (rule) => rule.followTag === followTag
    )
    if (packageRuleIndex === -1) {
      packageRuleIndex = preset.packageRules.push({}) - 1
    }
    Object.assign(preset.packageRules[packageRuleIndex], {
      groupName: `sanity-${followTag}-plugins`,
      packageNames: [...groups.get(followTag)].sort(),
      followTag,
      rangeStrategy: 'pin',
      schedule: ['at any time'],
    })
  }

  fs.writeFile(
    path.resolve(__dirname, 'ecosystem', 'studio-v3.json'),
    JSON.stringify(preset, null, 2)
  )

  console.log(plugins)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
