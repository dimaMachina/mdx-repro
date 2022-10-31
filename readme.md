```sh
$ yarn lint
yarn run v1.22.17
warning package.json: No license field
$ eslint --ignore-path .gitignore .

/Users/dimitri/Desktop/mdx-repro/test.mdx
  2:19  error  Curly braces are unnecessary here  react/jsx-curly-brace-presence
  5:1   error  Empty components are self-closing  react/self-closing-comp
  5:11  error  Curly braces are unnecessary here  react/jsx-curly-brace-presence
```
