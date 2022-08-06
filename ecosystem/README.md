# Renovate Presets used & maintained by the Ecosystem team

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
