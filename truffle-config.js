module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // Change to 8545 if Ganache uses that
      network_id: "*",
      networkCheckTimeout: 1000000 // Increase timeout
    }
  }
};
