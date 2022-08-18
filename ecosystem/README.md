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

## Troubleshoot

You may need to [add the repo to the Renovatebot allowlist](https://github.com/organizations/sanity-io/settings/installations/2371209#:~:text=requests%2C%20and%20workflows-,Repository%20access,-All%20repositories), as we don't enable it by default on all repos.
