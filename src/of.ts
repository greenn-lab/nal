import dateUnits from './units'

const PATTERN_DATE_UNITS = new RegExp(
  ((): string => {
    const dateUnitCharacters = Object.keys(dateUnits).join('')
    const nonUnitCharacterPattern = `([^${dateUnitCharacters}]*)`

    return `${nonUnitCharacterPattern}(${Object.keys(dateUnits).join('+|')}+)${nonUnitCharacterPattern}`
  })(),
)

const parse = (unit: string, value: string, date: Date): void => {
  if (value) {
    const key = unit[0]
    dateUnits[key].parse(date, value, unit)
  }
}

interface Apart {
  prefix: string
  suffix: string
  unit: string
  keyUnit: string
  value?: string
}

export default (date: string, pattern: string): Date => {
  if (!date || !pattern) {
    throw new Error('requires date and pattern!')
  }

  const parts: Apart[] = []
  while (pattern) {
    const [text, prefix, unit, suffix] = PATTERN_DATE_UNITS.exec(pattern)
    parts.push({
      prefix,
      suffix,
      unit,
      keyUnit: unit[0]
    })

    if (!unit) {
      throw new Error(`invalid pattern: ${pattern}`)
    }

    pattern = pattern.substring(text.length)
  }

  const result = new Date(0, 0, 0)
  for (let i = 0; i < parts.length - 1; i += 1) {
    if (parts[i].keyUnit !== 'M') {
      parts[i].value = date.substring(0, parts[i].unit.length)
      date = date.substring(parts[i].unit.length)
    }
  }

  parts.forEach((part: Apart) => {
    Date.prototype.units[part.keyUnit].parse(result, date, part.unit)
  })

  return result
}
