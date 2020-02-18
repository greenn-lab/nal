import dateUnits from './units'

const PATTERN_DATE_UNITS = new RegExp(
  ((): string => {
    const dateUnitCharacters = Object.keys(dateUnits).join('')
    const nonUnitCharacterPattern = `([^${dateUnitCharacters}]*)`

    return `${nonUnitCharacterPattern}(${Object.keys(dateUnits).join('+|')}+)${nonUnitCharacterPattern}`
  })(),
)

export default (date: string, pattern: string): Date => {
  if (!date || !pattern) {
    throw new Error('requires date and pattern!')
  }

  const result = new Date(0, 0, 0)

  while (pattern) {
    const [text, prefix, unit, suffix] = PATTERN_DATE_UNITS.exec(pattern)

    if (!unit || !date.startsWith(prefix)) {
      throw new Error(`invalid pattern: ${text}`)
    }

    pattern = pattern.substring(text.length)
    date = date.substring(prefix.length)

    if (/M{3,}/.test(unit)) {
      // TODO month parse by i18n names
    } else {

    }
  }


  const units: string[] = getUnitsByPattern(date, pattern)
  const afterCompilePattern = pattern.replace(PATTERN_DATE_UNITS, (unit: string) => {
    units.push(unit)
    return ''
  })

  if (afterCompilePattern) {
    throw new Error(`unknown characters: "${pattern}"`)
  }


  let i = 0
  let index = 0

  for (; i < units.length - 1; i++) {
    const unitLength = units[i].length
    parse(units[i], date.substr(index, unitLength), result)

    index += unitLength
  }

  parse(units[i], date.substring(index), result)

  return result
}

const parse = (unit: string, value: string, date: Date): void => {
  if (value) {
    const key = unit[0]
    dateUnits[key].parse(date, value, unit)
  }
}
