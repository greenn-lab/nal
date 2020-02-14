import DateOf from './of'

test('should parse from yyyyMMdd pattern', () => {
  const date: Date = DateOf('20200214', 'yyyyMMdd')
  expect(date.getFullYear()).toEqual(2020)
  expect(date.getMonth()).toEqual(1)
  expect(date.getDate()).toEqual(14)
})

test('should parse from yyyyMMdd pattern to over days', () => {
  const date: Date = DateOf('2020230', 'yyyyMdd')
  expect(date.getFullYear()).toEqual(2020)
  expect(date.getMonth()).toEqual(2)
  expect(date.getDate()).toEqual(1)
})
