const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'premiumPayment',

  exposes: {
    './Component': './projects/pay-premium/src/app/app.component.ts',
    './PremiumComponent': './projects/pay-premium/premium-component/premium-component.component.ts'
  },

  remotes: {
    host: 'http://localhost:4200/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
