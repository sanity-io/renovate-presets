# Renovate Presets used & maintained by the Ecosystem team

[![Test](https://github.com/sanity-io/renovate-presets/actions/workflows/test.yml/badge.svg)](https://github.com/sanity-io/renovate-presets/actions/workflows/test.yml)
[![🤖 Auto Prettier ✨](https://github.com/sanity-io/renovate-presets/actions/workflows/prettier.yml/badge.svg)](https://github.com/sanity-io/renovate-presets/actions/workflows/prettier.yml)
[![🤖 Auto studio-v3.json ✨](https://github.com/sanity-io/renovate-presets/actions/workflows/sync-studio-v3.yml/badge.svg?event=schedule)](https://github.com/sanity-io/renovate-presets/actions/workflows/sync-studio-v3.yml)

## Usage

Default setup:

`renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>sanity-io/renovate-presets//ecosystem/auto"]
}
```

Opt-in to Studio v3:

`renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>sanity-io/renovate-presets//ecosystem/auto",
    "github>sanity-io/renovate-presets//ecosystem/studio-v3"
  ]
}
```

Using only the preset that groups all Sanity related packages into the same PR:

`renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>sanity-io/renovate-presets//ecosystem/group"]
}
```

## Cherry-picking

If you like most of the presets but disagree with one or two, use `ignorePresets` instead of starting from scratch.

For example, you're happy with `github>sanity-io/renovate-presets//ecosystem/auto` except you don't want it to give [PRs labels automatically](https://user-images.githubusercontent.com/81981/187027000-de482541-e28a-481a-83f3-166e31175c38.png)?
`renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>sanity-io/renovate-presets//ecosystem/auto"],
  "ignorePresets": ["github>sanity-io/renovate-presets//ecosystem/labels"]
}
```

It doesn't matter how many levels it's nested, `ignorePresets` is like `!important` in CSS.
`renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>sanity-io/renovate-presets//ecosystem/base"],
  "ignorePresets": [":ignoreModulesAndTests"]
}
```

works just as well as

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>sanity-io/renovate-presets//ecosystem/auto"],
  "ignorePresets": [":ignoreModulesAndTests"]
}
```

## Troubleshoot

You may need to [add the repo to the Renovatebot allowlist](https://github.com/organizations/sanity-io/settings/installations/2371209#:~:text=requests%2C%20and%20workflows-,Repository%20access,-All%20repositories), as we don't enable it by default on all repos.
