import checkURL from '../client/js/checkURL';

describe('test checkURL to be exist', () => {
    test('should be true', () => {
        expect(checkURL).toBeDefined()
    })
})


describe('test checkURL to be a function', () => {
    test('should be a function', () => {
        expect(typeof checkURL).toBe('function')
    })
})