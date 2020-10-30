'use strict'

module.exports = {
    configure: {
        smoke: {
            specs: [
                'src/specs/smoke/login.js',
                'src/specs/smoke/cities.js'
            ]
        },
        regression: {
            specs: [
                'src/specs/regression/cities.js',
                'src/specs/regression/get_ride.js',
                'src/specs/regression/how_can_we_help.js'
            ]
        }
    }
};
