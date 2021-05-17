import i18n from './definitions/i18n'

import parse from './parse'
import format from './format'

Date.prototype.i18n = i18n

Date.prototype.format = function (pattern) {
  return format(this, pattern)
}

Date.of = parse

Date.parseOf = parse
