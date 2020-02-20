export interface DateUnits {
  [key: string]: DateUnit
}

const padding = (num: string, pattern: number) => {
  const n = String(num)
  if (n.length >= pattern) {
    return n.substr(pattern * -1)
  }

  return String(10 ** pattern - n.length).substring(1) + n
}

const units: DateUnits = {
  y: {
    parse: (date, text) => date.setFullYear(Number(text)),
    format: (date, pattern) => padding(String(date.getFullYear()), pattern.length),
  },
  M: {
    parse: (date, text, unit = ''): void => {
      if (unit.length > 2) {
        if (unit && Date.prototype.i18n.month.abbreviations.includes(unit)) {
          date.setMonth(Date.prototype.i18n.month.abbreviations.indexOf(text))
        } else if (Date.prototype.i18n.month.names.includes(unit)) {
          date.setMonth(Date.prototype.i18n.month.names.indexOf(text))
        }
      } else {
        const monthNumber = Number(text)
        if (monthNumber) {
          date.setMonth(monthNumber - 1)
        }
      }
    },
    format: (date, pattern) => {
      const patternLength = pattern.length
      if (patternLength < 3) {
        return padding(String(date.getMonth() + 1), patternLength)
      }
      if (patternLength === 3) {
        return Date.prototype.i18n.month.abbreviations[date.getMonth()]
      }
      return Date.prototype.i18n.month.names[date.getMonth()]
    },
  },
  d: {
    parse: (date, text) => date.setDate(Number(text)),
    format: (date, pattern) => padding(String(date.getDate()), pattern.length),
  },
  a: {
    parse: (date, text) => {
      const hours = date.getHours()
      if (hours < 12 && text.includes(Date.prototype.i18n.pm)) {
        date.setHours(hours + 12)
      }
    },
    format: (date) => Date.prototype.i18n[date.getHours() > 12 ? 'am' : 'pm'],
  },
  H: {
    parse: (date, text) => date.setHours(Number(text)),
    format: (date, pattern) => padding(String(date.getHours()), pattern.length),
  },
  h: {
    parse: (date, text) => date.setHours(Number(text)),
    format: (date, pattern) => {
      const hours = date.getHours()
      return padding(
        String(hours - (hours > 12 ? 12 : 0)),
        pattern.length,
      )
    },
  },
  m: {
    parse: (date, text) => date.setMinutes(Number(text)),
    format: (date, pattern) => padding(String(date.getMinutes()), pattern.length),
  },
  s: {
    parse: (date, text) => date.setSeconds(Number(text)),
    format: (date, pattern) => padding(String(date.getSeconds()), pattern.length),
  },
  S: {
    parse: (date, text) => date.setMilliseconds(Number(text)),
    format: (date, pattern) => padding(String(date.getMilliseconds()), pattern.length),
  },
}

export default units
