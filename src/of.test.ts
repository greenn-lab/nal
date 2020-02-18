import of from './of'

describe('pattern', () => {
  it('should throws error in getUnitsByPattern', () => {

    expect(() => of('<2014>.<02>.<14>', '<yyyy><MM><dd>'))
      .toThrow('invalid pattern: <yyyy><')

    expect(() => of('<2014>.<02>.<14>', '<yyyy>.<MM><dd>'))
      .toThrow('invalid pattern: MM><')

    expect(of('<2014>.<02>.<14>', '<yyyy>.<MM>.<dd>'))
      .toBe(['yyyy', 'MM', 'dd'])

  })
})

test('should parse from yyyyMMdd pattern', () => {
  const date: Date = of('20200214', 'yyyyMMdd')
  expect(date.getFullYear()).toEqual(2020)
  expect(date.getMonth()).toEqual(1)
  expect(date.getDate()).toEqual(14)
})

test('should parse from yyyyMMdd pattern to over days', () => {
  const date: Date = of('2020230', 'yyyyMdd')
  expect(date.getFullYear()).toEqual(2020)
  expect(date.getMonth()).toEqual(2)
  expect(date.getDate()).toEqual(1)
})

test('should parse month name pattern', () => {
  const date: Date = of('2020.Feb.30', 'yyyyMMMdd')
  expect(date.getFullYear()).toEqual(2020)
  expect(date.getMonth()).toEqual(2)
  expect(date.getDate()).toEqual(1)
})
