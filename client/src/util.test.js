import { convertToRange } from './util'
describe('util', () => {
  describe('#convertToRange', () => {
    // m = 109 - 97 => 12
    it('given a value in one range, it returns a number in the target range', () => {
      expect(convertToRange(12, 25, 3)).toEqual(1)
    })

    describe('when target range is smaller than origial range', () => {
      it('given a value in one range, it returns a number in the target range', () => {
        expect(convertToRange(2, 3, 25)).toEqual(16)
      })
    })

    describe('when traget range is 0', () => {
      expect(convertToRange(12, 25, 0)).toEqual(-0)
    })
  })
})
