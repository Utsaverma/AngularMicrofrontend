const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host',

  remotes: {
    insuranceDetails: 'http://localhost:4201/remoteEntry.js',
    premiumPayment: 'http://localhost:4202/remoteEntry.js',
  },
  exposes: {
    './SharedService': './projects/insurance-app/shared/shared-service.service.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
