var layIndex = 0;
App = {
    tronWebProvider: null,
    contracts: {
      usdtContract: null,
      goldContract: null,
      goldDataContract: null
    },
    address: '',
    goldAddress: 'TAwwUiHjsBwaRSvK2qcApHstHysQneKugE',
    usdtAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    goldDataAddress: 'TUM81tzdck6YxY2mxAYg5UT8pt4LuCjdDX',
    tokenAbi: [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
    goldAbi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_investContract",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "oldAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAddress",
            "type": "address"
          }
        ],
        "name": "ChangeReceiveAddressed",
        "type": "event"
      },
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
        "name": "USDT",
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
            "name": "_receiveAddress",
            "type": "address"
          }
        ],
        "name": "changeReceiveAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "name": "invest",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
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
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "withdrawalUsdt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    goldDataAbi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "rootIntro",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "_access",
            "type": "bool"
          }
        ],
        "name": "AccessAllowedAddress",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "investAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "string",
            "name": "typeStr",
            "type": "string"
          }
        ],
        "name": "Invested",
        "type": "event"
      },
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
        "name": "USDT",
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
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "allowAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "denyAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getInvesHistory",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "investAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isInvested",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "getUser",
        "outputs": [
          {
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isExisted",
            "type": "bool"
          },
          {
            "internalType": "address[]",
            "name": "children",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "records",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "investAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "name": "invest",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
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
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdrawalAllUsdt",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "withdrawalUsdt",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
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
            setInterval(() => {
            if ($('#loginstatus').val() == '1') {
                let address = window.localStorage.getItem('loginAddress')
                if (address != window.tronWeb.defaultAddress.base58) {
                   location.href = '/index.php/DmsUser/Public/logout'
                   window.sessionStorage.removeItem('loginAddress')
                }
            }
            }, 2000)
            return this.initContract();
            }
        }, 1000);
    },
    initContract: function () {
      App.contracts.goldContract = window.tronWeb.contract(App.goldAbi, App.goldAddress);
      App.contracts.usdtContract = window.tronWeb.contract(App.tokenAbi, App.usdtAddress);
      App.contracts.goldDataContract = window.tronWeb.contract(App.goldDataAbi, App.goldDataAddress);
      console.log(App.contracts)
      return this.bindEvents();
    },
    bindEvents: function () {
      $(document).on('click', '#investButton', App.invest);
      $(document).on('click', '#transfer', App.transfer);
      $(document).on('click', '#approve', App.approve);
      return App.initData()
    },
    initData: function () {
       App.getIntro()
       App.getAllowance()
       App.getBlance()
    },
    getBlance: function () {
      App.contracts.usdtContract.methods.balanceOf(App.address).call().then(async (data) => {
        let decimals = await App.contracts.usdtContract.methods.decimals().call();
        let balance = Number(data.toString()/Math.pow(10, decimals)).toFixed(4)
        $('#balance').text(balance)
      })
    },
    getAllowance: function () {
        App.contracts.usdtContract.methods.allowance(App.address, App.goldAddress).call().then((data) => {
          if (Number(data.toString()) > 0) {
            $('#investButton').show()
            $('#approve').hide()
          } else {
            $('#investButton').hide()
            $('#approve').show()
          }
        })
    },
    invest: async function (event) {
      event.preventDefault();
      let decimals = await App.contracts.usdtContract.methods.decimals().call();
      let blance = await App.contracts.usdtContract.methods.balanceOf(App.address).call();
      let type = '1';
      // if(!type) {
      //   layer.open({
      //       content: investTip
      //       , skin: 'msg'
      //       , time: 1 //2秒后自动关闭
      //     });
      //     return
      // }
      let amount = '10000000000';
      // if (!amount) {
      //   layer.open({
      //       content: investAmontTip
      //       , skin: 'msg'
      //       , time: 1 //2秒后自动关闭
      //     });
      //     return
      // }
      // if (Number(blance.toString()/Math.pow(10, decimals)) < amount) {
      //   layer.open({
      //       content: noBlanceTip
      //       , skin: 'msg'
      //       , time: 1 //2秒后自动关闭
      //     }); 
      //   return
      // }
      amount = amount * Math.pow(10, decimals) + ''
      let intro = 'TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY';
      console.log(App.contracts.goldContract, amount, intro, type)
      App.contracts.goldContract.methods.invest(amount, intro, type).send({from: App.address}).then((hash) => {
       App.handleTransaction(hash)
       $('#investAmount').val('')
       layIndex = layer.open({type: 2, shadeClose: false, content: transitionPacking + '...'});
     }).catch(() => {
      // layer.open({
      //   content: transitionFail
      //   , skin: 'msg'
      //   , time: 1 //2秒后自动关闭
      // });
     })
    },
    approve: function (event) {
      event.preventDefault();
      App.contracts.usdtContract.methods.approve(App.goldAddress, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').send({from: App.address}).then((hash) => {
        // layIndex = layer.open({type: 2, shadeClose: false, content: transitionPacking + '...'});
        // App.handleTransaction(hash)  
      }).catch(() => {
        // layer.open({
        //   content: transitionFail
        //   , skin: 'msg'
        //   , time: 1 //2秒后自动关闭
        // });
       })
    },
    transfer: function (event) {
      event.preventDefault();
      App.contracts.usdtContract.methods.transfer(App.goldAddress, '100').send({from: App.address}).then((hash) => {
        // layIndex = layer.open({type: 2, shadeClose: false, content: transitionPacking + '...'});
        // App.handleTransaction(hash)  
      }).catch(() => {
        // layer.open({
        //   content: transitionFail
        //   , skin: 'msg'
        //   , time: 1 //2秒后自动关闭
        // });
       })
    },
    handleTransaction: function (id) {
        window.clearInterval(App[id]);
        App[id] = setInterval(() => {
            window.tronWeb.trx.getConfirmedTransaction(id).then(res => {
                if (res.ret[0].contractRet === "SUCCESS") {
                    layer.close(layIndex);
                    window.clearInterval(App[id]);
                      layer.open({
                        content: transitionSuccess
                        , skin: 'msg'
                        , time: 1 //2秒后自动关闭
                      });
                      App.initData()
                    } else {
                        window.clearInterval(App[id]);
                        layer.close(layIndex);
                        layer.open({
                            content: transitionFail
                            , skin: 'msg'
                            , time: 1 //2秒后自动关闭
                          });
                          App.initData()
                  }
               }).catch(err => {});
        }, 2000);
    },
    getIntro: function () {
        let href = window.location.href.replace(/#/g, '')
        if (href.includes('?')) {
          var search = href.slice(href.indexOf('?') + 1, href.length)
          var params = App.queryParse(search)
          var rec = String(params.rec).trim()
          if (rec && window.tronWeb.isAddress(params.rec)) {
            $('#intro-address').val(params.rec)
          }
        }
    },
    doLogin() {
        var intro = $('#intro-address').val()
        $.post(window.location.origin + '/index.php/DmsUser/Public/getNonce', { address: App.address }).then((data) => {
          var nonce = JSON.parse(data).nonce
          console.log(nonce)
          window.tronWeb.trx.sign(window.tronWeb.toHex(nonce)).then((data) => {
            $.post(window.location.origin + '/index.php/DmsUser/Public/logincheck', { address: App.address, signature: data, intro: intro }).then((res) => {
              var result = JSON.parse(res)
              if (result.status == 1) {
                var url = result.loginurl
                window.localStorage.setItem('loginAddress', App.address)
                window.location.href = url
              } else {
                layer.open({
                  content: result.info
                  , skin: 'msg'
                  , time: 1 //2秒后自动关闭
                });
              }
    
            })
          })
        })
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
  
  