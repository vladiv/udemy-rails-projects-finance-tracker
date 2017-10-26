const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.set(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default'],
    Rails: 'rails-ujs',
    Turbolinks: 'turbolinks'
  })
)

module.exports = environment
