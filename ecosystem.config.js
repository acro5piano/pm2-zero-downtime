module.exports = {
  apps: [
    {
      name: 'foo',
      script: 'npm start',
      instances: 3,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  // deploy: {
  //   production: {
  //     key: '~/.ssh/id_rsa_fx',
  //     user: 'ubuntu',
  //     host: '3.113.9.3',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:acro5piano/fx.git',
  //     path: '/var/app',
  //     ssh_options: 'StrictHostKeyChecking=no',
  //     'post-deploy':
  //       'cp .env.production .env && yarn && env NODE_ENV=production yarn db:migrate && pm2 restart ecosystem.config.js --env production --wait-ready --listen-timeout 1500',
  //   },
  // },
}
