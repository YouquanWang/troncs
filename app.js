var tronWeb
const metacoinConfig = {
  fullHost: 'https://api.trongrid.io',
  privateKey:'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
  headers: { "TRON-PRO-API-KEY": '98cc9336-ec50-4f2d-9882-af521f720fe2' },
}
try {
  contractAddress = metacoinConfig.contractAddress;
  tronWeb = new TronWeb(metacoinConfig);
  // new window.Trust(metacoinConfig);
  //  tronWeb.defaultAddress={
  //                           hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
  //                           base58: 'TT12Rizx4AagfWpvn5YF1NRUZoBXbC43eD'
  //                         };
  //  tronWeb.resultManager = function(data) {
  //    console.log(data, '-------')
  //      console.debug(JSON.stringify(arguments));
  //      for(var i = 0; i < arguments.length; i++){ console.debug(arguments[i]);}
  //  };
   function resultManager(transaction, callback) {
    if (transaction.Error) return callback(transaction.Error);
    console.log(transaction)
    // if (transaction.result && transaction.result.message) {
    //   return callback(this.tronWeb.toUtf8(transaction.result.message));
    // }
  
    // return callback(null, transaction);
  }
  //  tronWeb.setAddress(tronWeb.defaultAddress.hex);
  //  window.web3 = new window.Web3(tronWeb);
  //  window.web3.tronWeb.defaultAccount = config.address;
    // window.chrome = {webstore: {}};
} catch (err) {
  alert(err)
}

