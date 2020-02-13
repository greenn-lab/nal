'use strict'
Date.prototype.format = function (pattern, t) {
    t = this
    return (pattern || '').replace(/y+|M+|d+|H+|h+|m+|s+|S+|(a|A)+/g, function (p, r) {
        if (p === 'yyyy')
            r = t.getFullYear()
        else if (p === 'yy')
            r = t.getFullYear().toString().slice(-2)
        else if (p === 'MM')
            r = ('0' + (t.getMonth() + 1)).slice(-2)
        else if (p === 'M')
            r = t.getMonth() + 1
        else if (p === 'dd')
            r = ('0' + t.getDate()).slice(-2)
        else if (p === 'd')
            r = t.getDate()
        else if (p === 'HH')
            r = ('0' + t.getHours()).slice(-2)
        else if (p === 'H')
            r = t.getHours()
        else if (p === 'hh')
            r = ('0' + (t.getHours() > 11 ? t.getHours() - 12 : t.getHours())).slice(-2)
        else if (p === 'h')
            r = t.getHours() > 11 ? t.getHours() - 12 : t.getHours()
        else if (p === 'mm')
            r = ('0' + t.getMinutes()).slice(-2)
        else if (p === 'm')
            r = t.getMinutes()
        else if (p === 'ss')
            r = ('0' + t.getSeconds()).slice(-2)
        else if (p === 's')
            r = t.getSeconds()
        else if (p === 'SSS')
            r = t.getMilliseconds() || '000'
        else if (p === 'SS')
            r = (t.getMilliseconds() / 10) || '00'
        else if (p === 'S')
            r = (t.getMilliseconds() / 100) || '0'
        else if (/a/i.exec(p))
            r = t.getHours() > 11 ? 'PM' : 'AM'
        return r ? r.toString() : ''
    })
}
//# sourceMappingURL=index.js.map
