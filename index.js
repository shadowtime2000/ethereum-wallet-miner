var Web3 = require("web3");

var web3 = new Web3();

require("yargs")
  .scriptName("ethereum-wallet-decrypter")
  .usage("$0 <cmd> <args>")
  .command("decrypt <publickey>", "find private key to public key", (yargs) => {
    yargs.positional("publickey", {
      type: "string",
      describe: "the public key to decrypt"
    })
    yargs.positional("entropy", {
      type: "number",
      describe: "value to increase unpredictability",
      default: 32
    })
  }, function (argv) {
    console.log("Starting private key discovery of public key " + argv.publickey);
    var antiSolved = true;
    var i = 0;
    while (antiSolved) {
      var account = web3.eth.accounts.create(web3.utils.randomHex(argv.entropy));
      i = i+1;
      if (account.address == argv.publickey) {
        console.log("Private key: " + account.privateKey);
        console.log("Completed after " + i + " iterations.");
        break;
      }
    }
  })
  .help()
  .argv
