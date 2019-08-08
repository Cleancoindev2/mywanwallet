'use strict'
var nodes = function () {}
nodes.customNode = require('./nodeHelpers/customNode')
nodes.metamaskNode = require('./nodeHelpers/metamask')
nodes.nodeTypes = {
    WAN: 'WAN',
    Testnet: 'WAN',
    Pluto: 'WAN',
    Custom: 'WAN',
}
nodes.ensNodeTypes = [nodes.nodeTypes.WAN, nodes.nodeTypes.Testnet]
nodes.domainsaleNodeTypes = [nodes.nodeTypes.WAN, nodes.nodeTypes.Testnet]
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
        'name': 'WAN Mainnet',
        'blockExplorerTX': 'https://www.wanscan.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://www.wanscan.org/address/[[address]]',
        'type': nodes.nodeTypes.WAN,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/wanTokens.json'),
        'abiList': require('./abiDefinitions/wanAbi.json'),
        'validatorList': require('./validators/wanMainnetValidators.json'),
        'service': 'mywanwallet.nl',
        'lib': new nodes.customNode('https://mywanwallet.nl/api', ''),
    },
    'wan_mew_testnet': {
        'name': 'WAN Testnet',
        'blockExplorerTX': 'https://testnet.wanscan.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://testnet.wanscan.org/address/[[address]]',
        'type': nodes.nodeTypes.Testnet,
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/wanTestnetTokens.json'),
        'abiList': require('./abiDefinitions/wanTestnetAbi.json'),
        'validatorList': require('./validators/wanTestnetValidators.json'),
        'service': 'mywanwallet.nl',
        'lib': new nodes.customNode('https://mywanwallet.nl/testnet', ''),
    },
    'wan_mew_pluto': {
        'name': 'WAN Pluto',
        'blockExplorerTX': 'http://47.104.61.26/block/trans/[[txHash]]',
        'blockExplorerAddr': 'http://47.104.61.26/block/addr/[[address]]',
        'type': nodes.nodeTypes.Pluto,
        'eip155': true,
        'chainId': 6,
        'tokenList': require('./tokens/wanPlutoTokens.json'),
        'abiList': require('./abiDefinitions/wanPlutoAbi.json'),
        'validatorList': require('./validators/wanPlutoValidators.json'),
        'service': 'mywanwallet.nl',
        'lib': new nodes.customNode('https://mywanwallet.nl/pluto', ''),
    },
}


nodes.wanPrice = require('./nodeHelpers/wanPrice')
module.exports = nodes
