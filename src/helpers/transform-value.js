//    transformValue : value : type -> value
const transformValue = (value, type) => {
  if (type === 'number') return Number(value)
  if (type === 'bool') return JSON.parse(value || false)

  return value
}

export default transformValue
