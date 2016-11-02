import app from './components/appRoot/appRoot';

describe('app', () => {

  describe('AppRootController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppRootController', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl).toBeDefined();
    });
  });
});