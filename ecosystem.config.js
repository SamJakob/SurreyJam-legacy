module.exports = {
    apps: [{
        name: "SurreyJam",
        script: 'index.js',
        watch: '.'
    }],

    /*
    If you aren't deploying the project, ignore this section.
     */
    deploy: {
        production: {
            // This will need to be configured in your ~/.ssh/config
            host: 'surreyjamhost',
            repo: 'git@github.com:SamJakob/SurreyJam.git',

            user: 'surreyjam',
            ref: 'origin/master',
            path: '/var/www/surreyjam',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};
