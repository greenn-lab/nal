import './index'

describe('parse', () => {
  it('should it parse', () => {
    const date = Date.of(
      '2019년 1월 19일 오후 11시',
      'yyyy년 M월 dd일 a hh시'
    )
    expect(date.getFullYear()).toBe(2019)
    expect(date.getMonth()).toBe(0)
    expect(date.getDate()).toBe(19)
    expect(date.getHours()).toBe(23)
  })

  it('parse pull format', () => {
    const date = Date.of(
      '2021-05-01 오후 11시 22분 33초 (012)',
      'yyyy-MM-dd a HH시 mm분 ss초 (SSS)'
    )
    expect(date.getFullYear()).toBe(2021)
    expect(date.getMonth()).toBe(4)
    expect(date.getDate()).toBe(1)
    expect(date.getHours()).toBe(23)
    expect(date.getMinutes()).toBe(22)
    expect(date.getSeconds()).toBe(33)
    expect(date.getMilliseconds()).toBe(12)
  })
})
