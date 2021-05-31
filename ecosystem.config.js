module.exports = {
  apps: [
    {
      name: "app",
      script: "./node_modules/.bin/ts-node",
      args:"./src/index.ts",
      instances: 1, //TEST CODE => 0
      exec_mode: "cluster",
      wait_ready: true,
      listen_timeout: 5000000,
      kill_timeout: 50000,
      max_memory_restart: "2000G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
