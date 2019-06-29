module.exports = {
  apps: [
    {
      name: 'foo',
      script: 'npm start',
      instances: 3,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      host: 'localhost',
      ref: 'origin/master',
      repo: 'git@github.com:acro5piano/pm2-zero-downtime.git',
      path: `/tmp/deploy-test/app`,
      'post-deploy':
        'yarn && pm2 restart ecosystem.config.js --env production --wait-ready --listen-timeout 15000',
    },
  },
}
