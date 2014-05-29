describe('App', function () {
    it('should be true', function() {
        expect(true).to.be.true;
    });
    it('should throw an exception', function () {
        expect(ExceptionThrower).to.throw(Error);
    });
    xit('should be skipped', function () {
        expect(true).to.be.false;
    });
});