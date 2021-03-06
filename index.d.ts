declare namespace plugin {
  interface Options {
    test?: ((name: string, type: 'classes' | 'tags' | 'ids') => boolean) | RegExp;
    selector?: Partial<Record<'classes' | 'tags' | 'ids', boolean>>;
    rename: (name: string, type: 'classes' | 'tags' | 'ids') => string;
  }
}
declare const plugin: (options?: plugin.Options) => {
  postcssPlugin: 'postcss-selector-rename';
};
export default plugin;
