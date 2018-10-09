// Demo and explanation:

const myName = 'WebpackBase64GeneratedScriptPlugin';

function toBase64(text) {
  return Buffer.from(text).toString('base64');
}

class WebpackBase64GeneratedScriptPlugin {
  constructor(options) {
    this.assetName = options['assetName'];
    this.placeholder = options['placeholder']
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(myName, compilation => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(myName, (pluginArgs) => {
        const bundleSource = compilation.assets[this.assetName].source();
        pluginArgs.html = pluginArgs.html.replace(this.placeholder, toBase64(bundleSource));
      });
    });
    //    compiler.hooks.emit.tap(myName, (compilation) => {
    //      console.log('compilation', compilation);
    //      const asset = compilation.assets[this.assetName];
    //      if (asset) {
    //        const generatedBundleCode = asset.source();
    //        compilation.assets[this.assetName] = toBase64(generatedBundleCode);
    //      }
    //    });
  }

}

module.exports = WebpackBase64GeneratedScriptPlugin;
