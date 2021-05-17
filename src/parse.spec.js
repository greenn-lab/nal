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
})
