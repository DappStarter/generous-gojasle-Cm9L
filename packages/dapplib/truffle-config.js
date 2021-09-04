require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain unknown heavy argue swallow skate'; 
let testAccounts = [
"0x076d22edc49141be5686b6536ee454c90e13bb9a71e4e6b4b86db11bc0d2856a",
"0x3772d0ecc48618c75bcb16a0fe0355b2a59e843f3e8799d5222c378023e0f95d",
"0x34ce3db1e503c56c24f14415a98259f2810088e2d6fe9c159e590d7c6fd5cf9d",
"0x973f9bf8034cb822d62f1209dcfbc3769b2ffbb44166f4fc8b79ef39bfa0da56",
"0x952a55f63a308d0f1b913ebd245118e108bc9fc2b142a52a29419874df093cc8",
"0x0c185336348986409bd2eaacdbb4612a571cd796e68701d255ab594f0a17c80a",
"0xbf58fb4d3c088e46aee0aaec9fdcd572ddb285c1b42db7e363601ceee5cfdda7",
"0x6f04c1ab48a7f9f3b6765b627ae3b74bad375723633a84adf8c52d380820d8c4",
"0x818aed38b6825b7c5796549ebc3ed8042f92316e6542da4bd8e9a6a93e475489",
"0x1e2ef83715e90e67c874ac7804312dcf1e2c983d288a65ebc4ecfcc73df449e4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


