# gatsby-plugin-reason
Provides drop-in support for [Reason](https://reasonml.github.io/).

## Install
`yarn add gatsby-plugin-reason`

## How to use
1. Include the plugin in your `gatsby-config.js` file.
2. Add `bsconfig.json` file on your root directory.
3. Write your components in Reason.

`gatsby-config.js`
```javascript
plugins: [
  `gatsby-plugin-reason`,
]
```

`bsconfig.json`
```json
{
  "name": "my-project-name",
  "sources": [
    "src"
  ],
  "bs-dependencies": [
    "reason-react"
  ],
  "reason": {
    "react-jsx": 2
  }
}
```
