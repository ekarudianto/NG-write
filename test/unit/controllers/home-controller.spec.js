describe('Home controller testcases :', function () {

    beforeEach(module('app.controllers'));
    beforeEach(module('app.services'));
    beforeEach(module('app.directives'));
    beforeEach(module('app.filters'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        this.$controller = _$controller_;
        this.$rootScope = _$rootScope_;
        this.$scope = this.$rootScope.$new();

        this.Ctrl = this.$controller('homeCtrl', {
            $scope: this.$scope
        });
    }));

    it('Must verify that the controller is exist', function () {
        expect(this.Ctrl).not.toEqual(null);
    });

    it('Should print creatorService correct value', function () {
        expect(this.$scope.creator).toBe('Eka Rudianto');
    });

});
