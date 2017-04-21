export default (name, path) => (
  `import ${name} from '${path}';
  export {${name}};\n`
)
