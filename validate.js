import fs from 'fast-glob'
import validator from 'json-schema-remote'
import { readFile } from 'fs/promises'
import { get } from 'https'

const [schema, files] = await Promise.all([
  (async () =>
    JSON.parse(
      await new Promise((resolve, reject) => {
        get('https://docs.renovatebot.com/renovate-schema.json', (res) => {
          let data = ''
          res.on('data', (chunk) => (data += chunk))
          res.on('end', () => resolve(data))
        }).on('error', (err) => reject(err))
      })
    ))(),
  fs('**/*.json', { ignore: ['package*', 'node_modules/**'] }),
])

await Promise.all(
  files.map(async (file) => {
    console.log(`validating ${file}`)
    const url = new URL(`./${file}`, import.meta.url)
    const json = JSON.parse(await readFile(url))
    await validator.validate(json, schema)
  })
)
