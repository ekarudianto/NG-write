describe('Binding angular starter template homepage', function () {

    beforeEach(function () {
        browser.get('#/home');
    });

    it('should print correct title', function () {
        expect(browser.getTitle()).toBe('Binding angular starter template');
    });

});
