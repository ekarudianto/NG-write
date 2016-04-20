describe('Creator service testcases :', function () {

    beforeEach(module('app.services'));
    beforeEach(inject(function (creatorService) {
        this.service = creatorService;
    }));

    it('Must verify that the service is exist', function () {
        expect(this.service).not.toEqual(null);
    });

    it('Get method must returns correct value', function () {
        expect(this.service.get()).toBe('Eka Rudianto');
    });

});
