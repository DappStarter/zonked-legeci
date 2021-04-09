require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift renew night uncover gloom end army genuine'; 
let testAccounts = [
"0xb7825a5e924a2edaaa9b9c4e08d3bbf172bcc34ab52d9b378aa7b71efab4af1a",
"0xfc4507d50f02c6799c2baf20a676bf6ab48826b02e6ff457b1c3c7b3803db8ec",
"0x03299c6f9a3c9a057dc05e744149452bf6aa454e3a66ef9f83d645dfc1564865",
"0x1a0be9fe0e2ffc86e6818f2c4005ec361610e5e2081775af08c2f0f9ee801dbb",
"0x7afa6a5d63b9b899ea2a2dc5840e4786e2a6cd6d63557a1e1733ef65a8cd8335",
"0x53f063e20019cad06d5637d513e94841ec9ce4db8d19b91bfbd8759c81209b7f",
"0x4fdf4398fce4115b60b75d3f3f7d418f7b47fe2eacc629b25f66fb494092ce17",
"0x083b93a964128dcfb49d93e68fed605bb6d0a06bcafa28cf7cc5db7105fabb86",
"0x2ee7ade81cb4c771cb110ae0f4cf2e0b78ac3b7439d8508fbaf1d0251a8390bc",
"0x2bb486276eeec26b5fbd383a852a88227e7e372cde8e38b8f851d604601ff03f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

