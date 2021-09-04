var layIndex = 0;
window.App = {
    tronWebProvider: null,
    contracts: {
      usdtContract: null,
      goldContract: null,
      goldDataContract: null
    },
    address: '',
    goldAddress: 'THuB2KRY9euvkKVRnEYmLa6t7vvWhTzLVy',
    goldAbi: [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "getNum",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "invest",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    initTronWeb: function () {
        let Inval = setInterval(() => {
            App.address = window.tronWeb.defaultAddress.base58 ? window.tronWeb.defaultAddress.base58 : ''
            //当获取到地址的时候就关掉定时器
            console.log(App.address)
            if(App.address){
            window.clearInterval(Inval);
            return this.initContract();
            }
        }, 1000);
    },
    initContract: function () {
      App.contracts.goldContract = window.tronWeb.contract(App.goldAbi, App.goldAddress);
      console.log(App.contracts)
      return this.bindEvents();
    },
    bindEvents: function () {
      return App.initData()
    },
    initData: function () {
      App.getNum()
    },
    getNum: function () {
      App.contracts.goldContract.methods.getNum().call({from: App.address}).then((data) => {
       console.log(num)
      }).catch((err) => {
        console.log(err)
      })
    },
    invest: function () {
      App.contracts.goldContract.methods.invest().send({callValue: 10000000}).then((hash) => {
       App.handleTransaction(hash)
     }).catch((err) => {
       console.log(err)
     })
    },
    handleTransaction: function (id) {
        window.clearInterval(App[id]);
        App[id] = setInterval(() => {
            window.tronWeb.trx.getConfirmedTransaction(id).then(res => {
                if (res.ret[0].contractRet === "SUCCESS") {
                    
                    window.clearInterval(App[id]);
                  
                      App.initData()
                    } else {
                        window.clearInterval(App[id]);
                        
                          App.initData()
                  }
               }).catch(err => {});
        }, 2000);
    },
    dateFormat: function (time, format) {
        const t = new Date(time)
        // 日期格式
        format = format || 'Y-m-d h:i:s'
        let year = t.getFullYear()
        // 由于 getMonth 返回值会比正常月份小 1
        let month = t.getMonth() + 1
        let day = t.getDate()
        let hours = t.getHours()
        let minutes = t.getMinutes()
        let seconds = t.getSeconds()
    
        const hash = {
          'y': year,
          'm': month,
          'd': day,
          'h': hours,
          'i': minutes,
          's': seconds
        }
        // 是否补 0
        const isAddZero = (o) => {
          return /M|D|H|I|S/.test(o)
        }
        return format.replace(/\w/g, o => {
          let rt = hash[o.toLocaleLowerCase()]
          return rt > 10 || !isAddZero(o) ? rt : `0${rt}`
        })
      },
      queryParse: function (str) {
        if (!str || str === '0') {
          return {}
        }
        let dataArr = decodeURIComponent(str).split('&')
        let params = {}
        dataArr.forEach(query => {
          let queryItem = query.split('=')
          if (queryItem.length === 1) {
            params.id = queryItem[0]
          } else {
            params[queryItem[0]] = queryItem[1]
          }
        })
        return params
      }
  };
  
  (function () {
     App.initTronWeb();
  })();
  
  