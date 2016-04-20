describe('Reverse filter testcases :', function () {

    beforeEach(module('app.filters'));
    beforeEach(inject(function (_$filter_) {
        this.filter = _$filter_;
    }));

    it('Should print "testcase" in reverse order', function () {
        var filter = this.filter('reverse')('testcase');
        expect(filter).toBe('esactset');
    });

});
