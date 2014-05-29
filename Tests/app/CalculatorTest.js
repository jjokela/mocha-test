describe('Calculator', function() {

    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('should be able to add 1 and 1', function () {
        var result = calculator.add(1, 1);
        expect(result).to.equal(2);
    });

    it('should be able to divide 3 and 3', function () {
        var result = calculator.divide(3, 3);
        expect(result).to.equal(1);
    });

    it('should be able to divide a rational number', function () {
        var result = calculator.divide(1, 3);
        expect(result).to.be.within(0.3, 0.34);
    });

    /* passing parameters to function that is tested */
    it('should throw error when dividing by zero', function () {

        /* The parameters are passed with the help of the bind function.
         This function was introduced with ECMAScript 5.
         It basically creates a wrapper function so that you don't have to manually
         create an anonymous function. Via http://www.ecofic.com/about/blog/testing-for-exceptions-with-jasmine
         */
        expect(calculator.divide.bind(null, 1, 0)).to.throw(Error);
    });

    /*
     * UI tests
     * */
    describe('Calculator UI', function () {

        var calculator;
        beforeEach(function () {
            $('body').append('<div id="calcDiv"></div>');
            calculator = new Calculator();
        });

        // async test
        it('should work with a visual effect', function (done) {

            var callback = function () {
            };

            calculator.hideResult(callback());

            setTimeout(function() {
                expect($('#calcDiv').css('display')).to.equal('none');
                done();
            }, 1100);
        });
    });
});




