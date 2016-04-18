describe('Home controller', function () {

    beforeEach(module('app.controllers'));
    beforeEach(module('app.services'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        this.$controller = _$controller_;
        this.$rootScope = _$rootScope_;
        this.$scope = this.$rootScope.$new();

        this.Ctrl = this.$controller('homeCtrl', {
            $scope: this.$scope
        });
    }));

    it('controller must exist', function () {
        expect(this.Ctrl).not.toEqual(null);
    });

    it('should print creator service correct value', function () {
        expect(this.$scope.creator).toBe('Eka Rudianto');
    });

});
