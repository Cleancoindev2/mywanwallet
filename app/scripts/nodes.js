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
        'blockExplorerTX': 'https://wanscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://wanscan.io/addr/[[address]]',
        'type': nodes.nodeTypes.WAN,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/wanTokens.json'),
        'abiList': require('./abiDefinitions/wanAbi.json'),
        'service': 'mywanwallet.nl',
        'lib': new nodes.customNode('https://mywanwallet.nl/api', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
