# eventum-ui-components

...

## Run demo

```sh
yarn
yarn storybook
```
Go to: http://localhost:6006


## Use as npm package

```sh
yarn add eventum-ui-components
```

To ensure this package is built correctly in your project you need to transpile eventum-ui-components 
(e.g. '@weco/next-plugin-transpile-modules'). Then you will need an image loader (e.g. 'next-images') 
to ensure icons are inlined and base64 encoded, and lastly you need 'styled-jsx' (in-built in Next.js).


## Publish

Update version in project.clj and package.json.
```sh
scripts/deploy.sh
npm publish
```
Package is now published for cljs and js usage.
