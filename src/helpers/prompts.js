module.exports = [
  {
    name: 'c',
    message: 'Where are your components?',
    validate: (answer) => answer !== ''
  },
  {
    name: 'd',
    message: 'Where do you want generated specs to live?',
    validate: (answer) => answer !== ''
  },
  {
    type: 'confirm',
    name: 'm',
    message: 'Do you want to automagically generate component mapping?',
    default: true
  }
]
