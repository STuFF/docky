/* jslint node: true */
'use strict';

module.exports =  {
    build: {
        files: [
            {
                expand: true,
                cwd: 'app/',
                src: '**',
                dest: 'build/',
                flatten: false
            }
        ]
    }
};
