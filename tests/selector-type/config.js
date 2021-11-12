module.exports = {
  selector: { tags: true },
  rename(value, selectorType) {
    return "ty-" + value;
  },
};
