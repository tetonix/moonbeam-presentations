const Web3 = require('web3');
const web3 = new Web3('wss://wss.testnet.moonbeam.network'); //Only change for Moonbeam

web3.eth
   .subscribe('newBlockHeaders', (error) => {
      if (error) console.error(error);
   })
   .on('connected', function (subscriptionId) {
      console.log(subscriptionId);
   })
   .on('data', function (log) {
      console.log(log);
   });
