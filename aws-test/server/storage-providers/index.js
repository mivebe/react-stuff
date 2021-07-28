module.exports = function (config) {
    if (!config) { return; }

    if (config.STORAGE_PROVIDER) {
        return require('./' + config.STORAGE_PROVIDER)(config[config.STORAGE_PROVIDER]);
    }
}