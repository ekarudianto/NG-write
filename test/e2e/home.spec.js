describe('Binding angular starter template homepage', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('#/home');
    });

    it('should print correct title', function () {
        expect(browser.getTitle()).toBe('NG-write, Angularjs starter template');
    });

});
