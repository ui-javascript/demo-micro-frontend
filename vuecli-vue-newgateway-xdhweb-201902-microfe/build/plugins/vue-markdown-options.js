const markdownIt = require('markdown-it')()
const markdownItContainer = require('markdown-it-container')
const cheerio = require('cheerio');

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function wrap(render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

function strip(str, tags) {
  const $ = cheerio.load(str, {decodeEntities: false});
  if (!tags || tags.length === 0) {
    return str;
  }
  tags = !Array.isArray(tags) ? [tags] : tags;
  let len = tags.length;
  
  while (len--) {
    $(tags[len]).remove();
  }
  return $.html();
}

module.exports = {
  raw: true,
  use: [
    [markdownItContainer, 'demo', {
      validate: function (params) {
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render: function (tokens, idx) {
        let m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          let description = (m && m.length > 1) ? m[1] : '';
          let content = tokens[idx + 1].content;
          let html = convert(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          let descriptionHTML = description
            ? markdownIt.render(description)
            : '';
          
          return `<demo-block class="demo-box">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }],
    [markdownItContainer, 'page', {
      validate: function (params) {
        return params.trim().match(/^page\s*(.*)$/)
      },
      render: function (tokens, idx) {
        // let m = tokens[idx].info.trim().match(/^page\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          let content = tokens[idx + 1].content;
          let html = convert(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          return `<page-block>
                    <div class="page-preview">${html}</div>
                    <div class="page-code" slot="code">`;
        }
        return '</div></page-block>\n';
      }
    }],
    [markdownItContainer, 'tip'],
    [markdownItContainer, 'warning']
  ],
  preprocess: function (it, source) {
    it.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    it.renderer.rules.fence = wrap(it.renderer.rules.fence);
    return source;
  }
}
