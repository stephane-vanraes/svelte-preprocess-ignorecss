/**
 * Removes all CSS that is added through a file matching any of the paths provided.
 * @param {*} paths Array of paths to ignored (this uses regex for matching)
 */
function ignoreCss(paths = ['node_modules']) {
    return {
        style: ({ content, filename }) => ({
            code: paths.some(r => filename.match(r)) ? '' : content
        })
    };
};

module.exports = ignoreCss;
