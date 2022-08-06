import fs from 'fast-glob'
import validator from 'json-schema-remote'
import { readFile } from 'fs/promises'
import { get } from 'https'

/*
const schema = 'https://docs.renovatebot.com/renovate-schema.json'
await validator.preload(schema)
// */
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
  fs('*.json', { ignore: ['package*'] }),
])

await Promise.all(
  files.map(async (file) => {
    const url = new URL(`./${file}`, import.meta.url)
    const json = JSON.parse(await readFile(url))
    try {
      console.group(`validating ${file}`)
      await validator.validate(json, schema)
    } finally {
      console.groupEnd()
    }
  })
)
