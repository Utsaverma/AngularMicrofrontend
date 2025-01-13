const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'insuranceDetails',

  remotes: {
    host: 'http://localhost:4200/remoteEntry.js',
  },

  exposes: {
    './Component': './projects/insurance-details/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
