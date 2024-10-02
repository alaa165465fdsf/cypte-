function checkCode() {
    let inputCode = document.getElementById('code').value;
    let btcBalance = document.getElementById('btc');
    
    if (inputCode === 'alaking005') {
      btcBalance.innerHTML = '0.2 BTC';
      alert('Code correct, your balance is now 0.2 BTC!');
    } else {
      alert('Invalid code!');
    }
  }
  