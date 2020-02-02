const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#3665F3',
            '@link-color': '@primary-color',
            '@text-color': '#111820',
            '@text-color-secondary': '#767676',
            '@border-radius-base': '0',
            '@box-shadow-base': '1px 4px 10px rgba(0, 0, 0, 0.15)',
            '@layout-header-background': '#ffffff',
            '@layout-body-background': '#ffffff',
            '@menu-item-color': '#111820',
            '@input-border-color': '#C7C7C7',
            '@button-border-color': '#41413F',
            '@item-hover-bg': '#f5f5f5',
        }
    })
);
