describe('my first suite', function () {

    before(function () {
        console.log('before');
    });

    beforeEach(function () {
        console.log('before each');
    });

    afterEach(function () {
        console.log('after each');
    });

    after(function () {
        console.log('after');
    });

    it('should be my first test', function () {
        expect(1).to.equal(1);
    });
    
});