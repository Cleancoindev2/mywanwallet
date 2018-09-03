'use strict'
var nodes = function () {}
nodes.customNode = require('./nodeHelpers/customNode')
nodes.metamaskNode = require('./nodeHelpers/metamask')
nodes.nodeTypes = {
    WAN: 'WAN',
    Custom: 'CUSTOM ETH',
}
nodes.ensNodeTypes = [nodes.nodeTypes.WAN]
nodes.domainsaleNodeTypes = [nodes.nodeTypes.WAN]
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
    'lib': null,
}
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
        'lib': new nodes.customNode('https://mywanwallet.nl/api', ''),
    },
}


nodes.wanPrice = require('./nodeHelpers/wanPrice')
module.exports = nodes
