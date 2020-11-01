const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let alphaCount = 0;
    for (let i = 0; i < message.length; i++) {
      let charToAdd;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let messageIndex = message.charCodeAt(i) - 65;
        let keyIndex = key.charCodeAt(alphaCount++ % key.length) - 65;
        charToAdd = String.fromCharCode((messageIndex + keyIndex) % 26 + 65);
      } else {
        charToAdd = message[i];
      }
      res += charToAdd;
    }
    if (!this.isDirect) res = res.split('').reverse().join('');
    return res;
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error();
    key = key.toUpperCase();
    let res = '';
    let alphaCount = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charToAdd;
      if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) {
        let encryptedMessageIndex = encryptedMessage.charCodeAt(i) - 65;
        let keyIndex = key.charCodeAt(alphaCount++ % key.length) - 65;
        charToAdd = String.fromCharCode((encryptedMessageIndex - keyIndex + 26) % 26 + 65);
      } else {
        charToAdd = encryptedMessage[i];
      }
      res += charToAdd;
    }
    if (!this.isDirect) res = res.split('').reverse().join('');
    return res;
  }
}

module.exports = VigenereCipheringMachine;
