const DATE_PATTERN = /y+|M+|d+|H+|h+|m+|s+|S+|[aA]+/g

Date.prototype._i18n = {
  am: '오전',
  pm: '오후'
}

Date.prototype._units = {
  yyyy: {
    get: Date.prototype.getFullYear,
    set: Date.prototype.setFullYear,
    parser: /\d{4}/
  },
  yy: {
    get: function (this: Date) {
      return String(this.getFullYear()).substring(2)
    },
    set: function (this: Date, year: number) {
      this.setFullYear(year)
    },
    parser: /\d{2}/
  }
}

Date.prototype.format = function (pattern) {
  return (pattern || '').replace(DATE_PATTERN, (word) => {
    if (word === 'yyyy') return this.getFullYear().toString()
    else if (word === 'yy') return this.getFullYear().toString().slice(-2)
    else if (word === 'MM') return ('0' + (this.getMonth() + 1)).slice(-2)
    else if (word === 'M') return String(this.getMonth() + 1)
    else if (word === 'dd') return ('0' + this.getDate()).slice(-2)
    else if (word === 'd') return this.getDate().toString()
    else if (word === 'HH') return ('0' + this.getHours()).slice(-2)
    else if (word === 'H') return this.getHours().toString()
    else if (word === 'hh') return ('0' + (this.getHours() > 11 ? this.getHours() - 12 : this.getHours())).slice(-2)
    else if (word === 'h') return String(this.getHours() > 11 ? this.getHours() - 12 : this.getHours())
    else if (word === 'mm') return ('0' + this.getMinutes()).slice(-2)
    else if (word === 'm') return this.getMinutes().toString()
    else if (word === 'ss') return ('0' + this.getSeconds()).slice(-2)
    else if (word === 's') return this.getSeconds().toString()
    else if (word === 'SSS') return this.getMilliseconds().toString() || '000'
    else if (word === 'SS') return String(this.getMilliseconds() / 10) || '00'
    else if (word === 'S') return String(this.getMilliseconds() / 100) || '0'
    else if (/a/i.exec(word)) return this.getHours() > 11 ? 'PM' : 'AM'

    return ''
  })
}

