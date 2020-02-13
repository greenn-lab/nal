/**
 * @jest-environment node
 */

import './DateOf'

it('should run Date.of', () => {
  const date = Date.of('20200214', 'yyyyMMdd')
})
