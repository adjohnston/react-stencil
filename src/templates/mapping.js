module.exports = (name, path) => (
  `import ${name} from '${path}';
  export {${name}};\n`
)
