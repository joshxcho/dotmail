const mjml2html = require('mjml');
const { loadTemplate } = require('./helpers');

class MJMLTranspiler {
  constructor() {
    this.options = {
      minify: true,
    };
  }

  transpile(path, callback) {
    loadTemplate(path, (err, mjml) => {
      if (err) {
        callback(err);
      }
      const htmlOutput = mjml2html(mjml, this.options);
      callback(null, htmlOutput.html);
    });
  }
}

module.exports = MJMLTranspiler;