describe('Binding angular starter template how to use page', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('#/how');
    });

    it('should print correct first title', function () {
        expect(element.all(by.css('h2')).first().getText()).toBe('Installation');
    });

    afterEach(function () {
        browser.ignoreSynchronization = false;
    });

});
