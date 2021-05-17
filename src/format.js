import i18n from './definitions/i18n'
import units from './definitions/units'

/**
 * 정의된 항목(unit)으로 날짜를 포맷팅 해요.
 * @param date
 * @param pattern
 * @returns {string}
 */
const format = (date, pattern = i18n.pattern.default) => {
  return pattern.replace(
    new RegExp(`(${Object.keys(units).join('|')})`, 'g'),
    function (unit) {
      return units[unit][2].call(date)
    }
  )
}

export default format
