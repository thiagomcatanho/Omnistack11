const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        console.log(id)
        expect(id).toHaveLength(8);
    })
});