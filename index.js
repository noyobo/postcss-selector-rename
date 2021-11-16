const selectorParser = require('postcss-selector-parser');
const postcss = require('postcss');

module.exports = postcss.plugin('postcss-selector-parser', function (options = {}) {
  const opts = Object.assign(
    {
      test: () => true,
      selector: { classes: true, ids: false, tags: true },
      rename: (value) => value,
    },
    options
  );
  if (typeof opts.test !== 'function' && !(opts.test instanceof RegExp)) {
    throw new Error(`Options.test invalid`);
  }
  const test = opts.test instanceof RegExp ? (name) => opts.test.test(name) : opts.test;

  function renameNode(type, node) {
    const name = node.value;
    if (test(name, type)) {
      node.value = opts.rename(name, type);
    }
  }

  const selectorProcessor = selectorParser((selectors) => {
    opts.selector.classes && selectors.walkClasses(renameNode.bind(null, 'classes'));
    opts.selector.ids && selectors.walkIds(renameNode.bind(null, 'ids'));
    opts.selector.tags && selectors.walkTags(renameNode.bind(null, 'tags'));
  });

  function isAtRuleChild(rule) {
    return rule.parent && rule.parent.type === 'atrule';
  }

  return function (root) {
    root.walkRules(function (rule) {
      if (!isAtRuleChild(rule)) {
        return selectorProcessor.process(rule);
      }
    });
  };
});
