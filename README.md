# nal.js
A most simple date formatting and parsing.
```javascript
new Date().format() // default format pattern "yyyyMMddHHmmss"
// "20210501112233" 

new Date().format('yyyy년 MM월 dd일 a HH시 mm분 ss초 (SSS)')
// "2021년 05월 01일 오전 11시 22분 33초 (444)"

Date.of('2021-05-01 오전 11시 22분 33초', 'yyyy-MM-dd a HH:mm:ss')
// Mon May 1 2021 11:22:33 GMT+0900 (대한민국 표준시) instanceof Date 
```

## change i18n
```javascript
Date.prototype.i18n.am = 'Ante meridiem'
Date.prototype.i18n.pm = 'Post meridiem'

new Date(2021, 2, 3, 14).format('d/M/yy h a')
// "3/3/21 2 Post meridiem"
```

## browser supported
>= IE 11 (use by babel with core-js 3)

#### nal
The nal is date in korean. It prounance /'nɑːl/.

