'use strict'

module.exports = {
    configure: {
        smoke: {
            specs: [
                'src/specs/smoke/login.js'
                // 'src/specs/smoke/cities.js',
                // 'src/specs/smoke/help.js'
            ]
        },
        regression: {
            specs: [
                'src/specs/regression/cities.js'
            ]
        }
    }
};
