# ethereum-wallet-decrypter
A proof-of-concept project to show how cryptocurrency wallets are not as secure as you would think.

One of the key features of cryptocurrency is that you officialy own the crypto locked behind a secure wallet no one can hack into. A crypto wallet is only as secure as the variations of wallet strings that can be generated for that cryptocurrency. This program is meant to show how that if you have a computer go on a repeated loop generating wallets until the public key matches, you can discover someone's private key.

## Dependencies
This project was created with:
* NodeJS Version: 12.16.1
* Node Package Manager Version: 6.13.4
* Web3js Version: 1.2.8
* yargs Version: 15.3.1

## How To Use
Please do not use this application for any other purpose besides educational purposes.
To run this project:
```
> cd ethereum-wallet-decrypter
> npm install
> npm start decrypt <publickey>
```
