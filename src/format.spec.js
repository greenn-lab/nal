import './index'
import format from './format'

describe('format', () => {
  it('format by default pattern', () => {
    const date = new Date(2020, 1, 2, 3, 4, 5, 6)

    const formatted = format(date)

    expect(formatted).toBe('20200202030405')
  })

  it('format changed i18n', () => {
    Date.prototype.i18n.pm = 'Post meridiem'

    const date = new Date(2021, 2, 3, 14)

    const formatted = date.format('d/M/yy h a')

    expect(formatted).toBe('3/3/21 2 Post meridiem')
  })

  it('format by full pattern', () => {
    const date = new Date(2020, 1, 2, 3, 4, 5, 6)

    const formatted = format(
      date,
      'yyyy년 MM월 dd일 a HH시 mm분 ss초 (SSS)'
    )

    expect(formatted).toBe(
      '2020년 02월 02일 오전 03시 04분 05초 (006)'
    )
  })
})
