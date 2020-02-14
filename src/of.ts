import dateUnits from './units'

const PATTERN_DATE_UNITS = new RegExp(
  Object.keys(dateUnits).join('+|') + '+',
  'g'
)

export default (date: string, pattern: string): Date => {
  const refineDate = /\d+/.exec(date)
  if (!refineDate)
    throw new Error(`invalid date value: ${date}`)

  date = refineDate[0]

  if (!date || !pattern)
    throw new Error('requires date and pattern!')

  if (date.length < pattern.length)
    throw new Error('date is not match pattern!')

  const units: string[] = []
  const afterCompilePattern =
    pattern.replace(PATTERN_DATE_UNITS, (unit: string) => {
      units.push(unit)
      return ''
    })

  if (afterCompilePattern)
    throw new Error(`unknown characters: "${pattern}"`)


  const result = new Date(0, 0, 1)
  let i = 0,
    index = 0

  for (; i < units.length - 1; i++) {
    const unitLength = units[i].length
    parse(units[i], date.substr(index, unitLength), result)

    index += unitLength
  }

  parse(units[i], date.substring(index), result)

  return result
}

const parse = (unit: string, value: string, date: Date) => {
  const key = unit[0]
  dateUnits[key].parse(date, value)
}
