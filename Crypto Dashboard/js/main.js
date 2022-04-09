var button = document.querySelector('.btn-search');
var inputValue = document.querySelector('.form-control');

var cryptonameBTC = document.querySelector('.crypto-nameBTC');
var priceBTC = document.querySelector('.priceBTC');
var twofourhprocentBTC = document.querySelector('.twofourhprocentBTC');
var volumeBTC = document.querySelector('.volumeBTC');

var cryptonameETH = document.querySelector('.crypto-nameETH');
var priceETH = document.querySelector('.priceETH');
var twofourhprocentETH = document.querySelector('.twofourhprocentETH');
var volumeETH = document.querySelector('.volumeETH');

var cryptonameDOGE = document.querySelector('.crypto-nameDOGE');
var priceDOGE = document.querySelector('.priceDOGE');
var twofourhprocentDOGE = document.querySelector('.twofourhprocentDOGE');
var volumeDOGE = document.querySelector('.volumeDOGE');

var cryptonameTERRA = document.querySelector('.crypto-nameTERRA');
var priceTERRA = document.querySelector('.priceTERRA');
var twofourhprocentTERRA = document.querySelector('.twofourhprocentTERRA');
var volumeTERRA = document.querySelector('.volumeTERRA');

var cryptonameSTELLAR = document.querySelector('.crypto-nameSTELLAR');
var priceSTELLAR = document.querySelector('.priceSTELLAR');
var twofourhprocentSTELLAR = document.querySelector('.twofourhprocentSTELLAR');
var volumeSTELLAR = document.querySelector('.volumeSTELLAR');

var nameSEARCH = document.querySelector('.crypto-nameSearch');
var priceSearch = document.querySelector('.priceSearch');
var twofourhprocentSearch = document.querySelector('.twofourhprocentSearch');
var volumeSearch = document.querySelector('.volumeSearch');

    // Only crypto price and %

function startliveupdate(){
    //const textviewcount = document.querySelector('.crypto-name');

    setInterval(function(){
        fetch('https://www.binance.com/api/v3/ticker/24hr')
        .then(response => response.json())
        .then(data => {
            //var cryptonameBTCValue = data['417']['symbol']
            var priceBTCValue = data['417']['askPrice']
            var twofourhprocentBTCValue = data['417']['priceChangePercent']
            var volumeBTCValue = data['417']['volume']

            var priceETHValue = data['418']['askPrice']
            var twofourhprocentETHValue = data['418']['priceChangePercent']
            var volumeETHValue = data['418']['volume']

            var priceDOGEValue = data['558']['askPrice']
            var twofourhprocentDOGEValue = data['558']['priceChangePercent']
            var volumeDOGEValue = data['558']['volume']
          
            var priceTERRAValue = data['958']['askPrice']
            var twofourhprocentTERRAValue = data['958']['priceChangePercent']
            var volumeTERRAValue = data['958']['volume']

            var priceSTELLARValue = data['334']['askPrice']
            var twofourhprocentSTELLARValue = data['334']['priceChangePercent']
            var volumeSTELLARValue = data['334']['volume']
            console.log(data);
        //   console.log(cryptonameValue);
        //   cryptonameBTC.innerHTML = cryptonameBTCValue;
          priceBTC.innerHTML = Math.round(priceBTCValue) + '$';
          twofourhprocentBTC.innerHTML = twofourhprocentBTCValue + '%';
          volumeBTC.innerHTML = '$' + volumeBTCValue;

          priceETH.innerHTML = Math.round(priceETHValue) + '$';
          twofourhprocentETH.innerHTML = twofourhprocentETHValue + '%';
          volumeETH.innerHTML = '$' + volumeETHValue;

          priceDOGE.innerHTML = priceDOGEValue + '$';
          twofourhprocentDOGE.innerHTML = twofourhprocentDOGEValue + '%';
          volumeDOGE.innerHTML = '$' + volumeDOGEValue;

          priceTERRA.innerHTML = priceTERRAValue + '$';
          twofourhprocentTERRA.innerHTML = twofourhprocentTERRAValue + '%';
          volumeTERRA.innerHTML = '$' + volumeTERRAValue;

          priceSTELLAR.innerHTML = priceSTELLARValue + '$';
          twofourhprocentSTELLAR.innerHTML = twofourhprocentSTELLARValue + '%';
          volumeSTELLAR.innerHTML = '$' + volumeSTELLARValue;
        })
    }, 5000)
}
document.addEventListener('DOMContentLoaded', function(){
    startliveupdate();
});

    // Only Crypto name 

fetch('https://api.binance.com/api/v3/exchangeInfo')
.then(response => response.json())
.then(data => {
    var cryptonameBTCValue = data['symbols']['417']['baseAsset']
    var cryptonameETHValue = data['symbols']['418']['baseAsset']
    var cryptonameDOGEValue = data['symbols']['558']['baseAsset']
    var cryptonameTERRAValue = data['symbols']['958']['baseAsset']
    var cryptonameSTELLARValue = data['symbols']['334']['baseAsset']
  console.log(data);
//   console.log(cryptonameValue);
  cryptonameBTC.innerHTML = cryptonameBTCValue;
  cryptonameETH.innerHTML = cryptonameETHValue;
  cryptonameDOGE.innerHTML = cryptonameDOGEValue;
  cryptonameTERRA.innerHTML = cryptonameTERRAValue;
  cryptonameSTELLAR.innerHTML = cryptonameSTELLARValue;
})


button.addEventListener('click', function startliveupdateSearch(){

        //const textviewcount = document.querySelector('.crypto-name');
    
        
       
        setInterval(function(){
fetch('https://api.binance.com/api/v3/ticker/24hr?symbol='+inputValue.value+'')
.then(response => response.json())
.then(data => {
    // var nameValue = data['symbol'];
    var nameSEARCHValue = data['symbol']
    var priceSearchValue = data['askPrice']
    var twofourhprocentSearchValue = data['priceChangePercent']
    var volumeSearchValue = data['volume']
    console.log(data);
    // nameCrypto.innerHTML = nameValue;
    nameSEARCH.innerHTML = nameSEARCHValue;
    priceSearch.innerHTML = 'Price: ' + Math.round(priceSearchValue);
    twofourhprocentSearch.innerHTML = '24H%: ' + twofourhprocentSearchValue + '%';
    volumeSearch.innerHTML = 'Volume: ' + '$' + volumeSearchValue;
     })
    }, 5000)
    
    if (inputValue.value != '') {
        document.getElementById('crypto-search-div').classList.toggle('visible');
    }else{
        alert('enter a crypto');
    }
    document.addEventListener('DOMContentLoaded', function(){
        startliveupdateSearch();
    });
    
})




// onload = ( function() {
//  fetch('https://www.binance.com/api/v3/ticker/24hr')
//    .then(response => response.json())
//    .then(data => {
//        var cryptonameValue = data['417']['askPrice']
//      console.log(data);
//      console.log(cryptonameValue);
//      cryptoname.innerHTML = cryptonameValue;
//    })


   

//    .catch(err => alert(''));
//  })