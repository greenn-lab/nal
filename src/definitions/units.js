import i18n from './i18n'

const DP = Date.prototype
const D2 = () => /\d\d/
const D12 = () => /\d\d?/

/**
 * 날짜의 패턴문자를 정의 해요.
 */
const units = {
  /**
   * 각 unit 별, 정의 내용은 아래와 같아요.
   * array[0] - 형식에 맞는 정규표현식
   * array[1] - setter 함수
   * array[2] - getter 함수
   */
  yyyy: [() => /\d{4}/, DP.setFullYear, DP.getFullYear],
  yy: [
    D2,
    function (v) {
      this.setFullYear(
        Math.floor(new Date().getFullYear() / 1000) * 1000 + v
      )
    },
    function () {
      return this.getFullYear().toString().substring(2)
    }
  ],
  MM: [
    D2,
    function (v) {
      this.setMonth(v - 1)
    },
    function () {
      return `0${this.getMonth() + 1}`.substr(-2)
    }
  ],
  M: [
    D12,
    function (v) {
      this.setMonth(v - 1)
    },
    function () {
      return this.getMonth() + 1
    }
  ],
  dd: [
    D2,
    DP.setDate,
    function () {
      return `0${this.getDate()}`.substr(-2)
    }
  ],
  d: [
    D12,
    DP.setDate,
    function () {
      return this.getDate()
    }
  ],
  HH: [
    D2,
    function (v) {
      this.setHours(this.getHours() + Number(v))
    },
    function () {
      return `0${this.getHours()}`.substr(-2)
    }
  ],
  H: [
    D12,
    function (v) {
      this.setHours(this.getHours() + Number(v))
    },
    function () {
      return this.getHours()
    }
  ],
  hh: [
    D2,
    function (v) {
      this.setHours(this.getHours() + Number(v))
    },
    function () {
      return `0${this.getHours() % 12 || 12}`.substr(-2)
    }
  ],
  h: [
    D12,
    function (v) {
      this.setHours(this.getHours() + Number(v))
    },
    function () {
      return this.getHours() % 12 || 12
    }
  ],
  mm: [
    D2,
    function (v) {
      this.setMinutes(this.getMinutes() + Number(v))
    },
    function () {
      return `0${this.getMinutes()}`.substr(-2)
    }
  ],
  m: [
    D12,
    function (v) {
      this.setMinutes(this.getMinutes() + Number(v))
    },
    function () {
      return this.getMinutes()
    }
  ],
  ss: [
    D2,
    function (v) {
      this.setSeconds(this.getSeconds() + Number(v))
    },
    function () {
      return `0${this.getSeconds()}`.substr(-2)
    }
  ],
  s: [
    D12,
    function (v) {
      this.setSeconds(this.getSeconds() + Number(v))
    },
    function () {
      return this.getSeconds()
    }
  ],
  SSS: [
    () => /\d{1,3}/,
    DP.setMilliseconds,
    function () {
      return `00${this.getMilliseconds()}`.substr(-3)
    }
  ],
  SS: [
    D2,
    DP.setMilliseconds,
    function () {
      return `0${this.getMilliseconds()}`.substr(-2)
    }
  ],
  S: [
    () => /\d/,
    DP.setMilliseconds,
    function () {
      return this.getMilliseconds().toString().substring(0, 1)
    }
  ],
  a: [
    () => new RegExp([i18n.am, i18n.pm].join('|')),
    function (v) {
      v = i18n.pm === v ? 12 : 0
      this.setHours(this.getHours() + v)
    },
    function () {
      return [i18n.am, i18n.pm][Math.floor(this.getHours() / 12)]
    }
  ]
}

export default units
