const { join } = require('path')

module.exports = function (eleventyConfig) {
  eleventyConfig.on('beforeBuild', function () {
    // reset the counter for each new build
  })
  eleventyConfig.addShortcode('preact', async function (componentPath) {
    // generate an absolute path to our component, relative to that "_includes" directory for simplicity
    const resolvedComponentPath = join( '../', componentPath)
    return `
        <div data-saltpay-navbar></div>
        <script type="module">
            import Component from ${JSON.stringify(resolvedComponentPath)};
            import { render, h } from "preact";

            const root = document.querySelector('[data-saltpay-navbar]');
            render(h(Component, {}), root);
        </script>`
  })
}