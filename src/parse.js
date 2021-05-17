import i18n from './definitions/i18n'
import units from './definitions/units'

/**
 * 정의된 항목(unit)으로 날짜를 추출 해요.
 * @param text
 * @param pattern?
 * @returns {Date}
 */
const parse = (text, pattern = i18n.pattern.default) => {
  if (!text) {
    throw new Error('required text')
  }

  const date = new Date(0, 0, 1)

  const joinUnitKeys = Object.keys(units).join('|')
  const effectedRegExp = new RegExp(joinUnitKeys)

  let patternIndex = 0
  let textIndex = 0
  let matched
  while (
    (matched = effectedRegExp.exec(pattern.substring(patternIndex)))
  ) {
    const key = matched[0]
    patternIndex += matched.index + key.length

    const [unit, setter] = units[key]
    if (unit) {
      textIndex += matched.index

      const [value] = unit().exec(text.substring(textIndex)) || []

      if (value) {
        setter.call(date, value)

        textIndex += value.length
      }
    }
  }

  return date
}

export default parse
