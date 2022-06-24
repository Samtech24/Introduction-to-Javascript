let myScreenOutput = document.getElementById('result');
let myInfo = {
    myName: 'Samuel Oisemaye',
    myHeight: 5.7 + ' ft',
    myCountry: 'Nigeria',
}

myScreenOutput.innerHTML = '<h2>'+ 'Name: ' +myInfo.myName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> '  +'Country: '+ myInfo.myCountry+ '</h2>';


console.log(myInfo);