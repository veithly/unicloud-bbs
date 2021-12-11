const ql = (schema) => {
  let field = ``
  for (let v of schema) {
    const [k, output] = v.split('|')
    field += (output ? `${k} as ${output}` : `${k}`) + ','
  }
  field = field.replace(/,$/, '')
  return field
}

ql.useFk = (prefix, i = 0) =>
  (v, alias = v) => `arrayElemAt(${prefix}.${v}, ${i})|${alias}`

ql.aE = (k, i = 0) => `arrayElemAt(${k}, ${i})`

export default ql