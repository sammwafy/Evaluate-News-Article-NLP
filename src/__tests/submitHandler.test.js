import submitHandler from '../client/js/submitHandler';

describe('test submitHandler to be exist', () => {
    test('should be true', () => {
        expect(submitHandler).toBeDefined()
    })
})


describe('test submitHandler to be a function', () => {
    test('should be a function', () => {
        expect(typeof submitHandler).toBe('function')
    })
})