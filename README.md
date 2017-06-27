# etcher.io 🔥💿🔥💿

```
yarn install
```

dev
```
yarn start
```

build static site
```
yarn run export
```

build static site
```
yarn run deploy
```

note for banners

If a banner is intended to be script-free, the relevant tags
(`<link>`, `<script>`) need to be removed manually, and moved to `static_html/`
which will be automatically copied on `export`. There is also a sub-command
`copy-static` available, which allows you to do this step without re-running
`export`.

