# renovate-presets

A central place to add and maintain sanity.io related renovate presets (https://docs.renovatebot.com/config-presets)

## sanity-template

This preset will automerge all `@sanity` and `sanity-plugin-*` packages

Usage:

```json
{
  "extends": ["github>sanity-io/renovate-presets:sanity-template"]
}
```

Live example: https://github.com/sanity-io/sanity-template-eleventy-blog/blob/master/renovate.json

## Syncing ecosystem/studio-v3.json

To sync the list over v3 plugins from the exchange run this command:

```bash
npm run sync:studio-v3
```
