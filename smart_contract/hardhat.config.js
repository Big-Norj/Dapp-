require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/A4yUZK5jLss1PwVgo-4bEkc8hZktBUDt',
      accounts: [ 'edc7f4d6dde0c34f5fdfd82d451b3a9ccc2375975b9d08d5a422dcb3e1b5fd06' ]
    }
  }
}