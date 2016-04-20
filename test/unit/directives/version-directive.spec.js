describe('Version directive testcases :', function () {

    beforeEach(module('app'));
    beforeEach(module('app.directives'));
    beforeEach(inject(function (CONFIG) {
        this.config = CONFIG;
    }));

    it('Should print correct template', function () {

        inject(function ($compile, $rootScope) {
            var elm = $compile('<version></version>')($rootScope);
            expect(elm.text()).toBe('Version : {{version}}');
        });

    });

});
