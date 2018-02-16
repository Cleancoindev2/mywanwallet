'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    WAN: "WAN",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'wan_mew': {
        'name': 'WAN',
        'blockExplorerTX': 'https://explorer.wanchain.org/block/trans/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.wanchain.org/block/addr/[[address]]',
        'type': nodes.nodeTypes.WAN,
        'eip155': false,
        'chainId': 1,
        'tokenList': require('./tokens/wanTokens.json'),
        'abiList': require('./abiDefinitions/wanAbi.json'),
        'service': 'mywanwallet.nl',
        'lib': new nodes.customNode('https://mywanwallet.nl:8545', '')
    },
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'myetherapi.com',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
