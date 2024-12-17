import crypto from 'crypto-browserify';
crypto.webcrypto = globalThis.crypto;
crypto.getRandomValues = function (abv) {
  var l = abv.length;
  while (l--) {
    var bytes = crypto.randomBytes(7);
    var randomFloat = (bytes[0] % 32) / 32;
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i];
      randomFloat = (randomFloat + byte) / 256;
    }
    abv[l] = Math.floor(randomFloat * 256);
  }
  return abv;
}
crypto.randomUUID = function () {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, function (c) {
    return  (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16);
  });
}
export default crypto;
export var Cipher = crypto.Cipher;
export var Cipheriv = crypto.Cipheriv;
export var Decipher = crypto.Decipher;
export var Decipheriv = crypto.Decipheriv;
export var DiffieHellman = crypto.DiffieHellman;
export var DiffieHellmanGroup = crypto.DiffieHellmanGroup;
export var Hash = crypto.Hash;
export var Hmac = crypto.Hmac;
export var Sign = crypto.Sign;
export var Verify = crypto.Verify;
export var constants = crypto.constants;
export var createCipher = crypto.createCipher;
export var createCipheriv = crypto.createCipheriv;
export var createCredentials = crypto.createCredentials;
export var createDecipher = crypto.createDecipher;
export var createDecipheriv = crypto.createDecipheriv;
export var createDiffieHellman = crypto.createDiffieHellman;
export var createDiffieHellmanGroup = crypto.createDiffieHellmanGroup;
export var createECDH = crypto.createECDH;
export var createHash = crypto.createHash;
export var createHmac = crypto.createHmac;
export var createSign = crypto.createSign;
export var createVerify = crypto.createVerify;
export var getCiphers = crypto.getCiphers;
export var getDiffieHellman = crypto.getDiffieHellman;
export var getHashes = crypto.getHashes;
export var listCiphers = crypto.listCiphers;
export var pbkdf2 = crypto.pbkdf2;
export var pbkdf2Sync = crypto.pbkdf2Sync;
export var privateDecrypt = crypto.privateDecrypt;
export var privateEncrypt = crypto.privateEncrypt;
export var prng = crypto.prng;
export var pseudoRandomBytes = crypto.pseudoRandomBytes;
export var publicDecrypt = crypto.publicDecrypt;
export var publicEncrypt = crypto.publicEncrypt;
export var randomBytes = crypto.randomBytes;
export var randomFill = crypto.randomFill;
export var randomFillSync = crypto.randomFillSync;
export var rng = crypto.rng;
export var webcrypto = crypto.webcrypto;
export var getRandomValues = crypto.getRandomValues;
export var randomUUID = crypto.randomUUID;
