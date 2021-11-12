declare namespace plugin {
  interface Options {
    test?: ((name: string, type: 'classes' | 'tags' | 'ids') => boolean) | RegExp;
    selector?: Record<'classes' | 'tags' | 'ids', true>;
    rename(name: string, type: 'classes' | 'tags' | 'ids'): string;
  }
}
declare const plugin: (options?: plugin.Options) => {
  postcssPlugin: 'postcss-selector-rename';
};
export default plugin;
