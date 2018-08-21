### [https://www.MyWanWallet.nl](https://www.MyWanWallet.com)

### [Download the Latest Release](https://github.com/kvhnuke/etherwallet/releases/latest)

- etherwallet-vX.X.X.X.zip is the smaller package containing the gh-pages branch aka MyWanWallet.nl
- chrome-extension-vX.X.X.X.zip is the chrome extension package
- source code is the full source for developers to get started with (although cloning or forking the mercury branch is probably a better choice)


### MEW Around the Web

- [Website: https://www.mywanwallet.nl/](https://www.mywanwallet.nl/)
- [Anti-phish CX](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn)
- [Twitter: https://twitter.com/tyrion70](https://twitter.com/tyrion70)
- [Github MEW Repo: https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet)
- [tyrion70 (founder) reddit: https://www.reddit.com/user/tyrion70/](https://www.reddit.com/user/tyrion70/)
- [tyrion70 (founder) bitcointalk: https://bitcointalk.org/index.php?action=profile;u=103907] (https://bitcointalk.org/index.php?action=profile;u=103907)
-  MEW WAN Donation Address: 0x664949908413517B993c6784b44428d080D1a1Fa


### MyWanWallet

- MyWanWallet is a free, open-source, client-side tool for easily & securely interacting with the Wanchain network. As one of the leading providers of Wanchain services, MyWanWallet equips users with an easy-to-understand and accessible suite of tools for their needs.
- It was created and is maintained by [tyrion70](https://github.com/tyrion70).
- It was forked from myetherwallet.com (https://github.com/kvhnuke/etherwallet)

#### Features

- Create new wallets completely client side.
- Access your wallet via unencrypted private key, encrypted private key, keystore files, mnemonics, Ledger Nano S or TREZOR hardware wallet.
- Easily send WAN and *any* ERC-20 Standard Token. [Many tokens included as default.](https://myetherwallet.groovehq.com/knowledge_base/topics/can-i-send-my-steem-slash-btc-slash-ltc-slash-nem-slash-to-myetherwallet)
- Generate, sign & send transactions offline, ensuring your private keys never touch an internet-connected device.
- Securely access your WAN & Tokens on your [Ledger or TREZOR Hardware Wallet](https://myetherwallet.groovehq.com/knowledge_base/topics/hardware-wallet-recommends) via the MyWanWallet interface (Chrome & Opera natively, Firefox w/ [add-on](https://addons.mozilla.org/en-US/firefox/addon/u2f-support-add-on/))
- Supports URI Strings on Send Transaction Page.
    - to=[address]
    - value=[number]
    - sendMode=[ether | token]
    - tokenSymbol=[ARC | ICN | MKR | ....]
    - gasLimit=[number] OR gas=[number]
    - data=[hex data]
    - Example 1: https://www.mywanwallet.nl/?to=0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8&value=1&tokenSymbol=REP&gaslimit=50000#send-transaction
    - Example 2: https://www.mywanwallet.nl/?to=0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8&value=1&gaslimit=23000&data=0x5468616e6b20796f752c204d455720322e30#send-transaction



### Our Philosophy

 - **Empower the people**: Give people the ability to interact with the Wanchain blockchain easily, without having to run a full node.
 - **Make it easy & free**: Everyone should be able to create a wallet and send Ether & Tokens without additional cost.
 - **People are the Priority**: People are the most important & their experience trumps all else. If monetization worsens the experience, we don't do it. (e.g. ads)
 - **A learning experience, too**: We want to educate about Wanchain, security, privacy, the importance of controlling your own keys, how the blockchain works, and how Wanchain and blockchain technologies enable a better world.
 - **If it can be hacked, it will be hacked**: Never save, store, or transmit secret info, like passwords or keys.
 - **Offline / Client-Side**: User should be able to run locally and offline without issue.
 - **Private**: No tracking!!! No emails. No ads. No demographics. We don't even know how many wallets have been generated, let alone who / what / where you are.
 - **Open source & audit-able**




### Users (non-developers)

- [It is recommended you start here.](https://myetherwallet.github.io/knowledge-base/getting-started/getting-started-new.html)
- You can run MyWanWallet.nl on your computer. You can create a wallet completely offline & send transactions from the "Offline Transaction" page.

1. Go to https://github.com/kvhnuke/etherwallet/releases/latest.
2. Click on dist-vX.X.X.X.zip.
3. Move zip to an airgapped computer.
4. Unzip it and double-click index.html.
5. MyWanWallet.nl is now running entirely on your computer.

In case you are not familiar, you need to keep the entire folder in order to run the website, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the MyWanWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.

As we are constantly updating MyWanWallet.nl, we recommend you periodically update your saved version of the repo.


### Developers

If you want to help contribute, here's what you need to know to get it up and running and compiling.

- We use angular and bootstrap. We used to use jQuery and Bootstrap until it was converted in April 2016. If you wonder why some things are set up funky, that's why.
- Please fork and make PRs to the dev branch
- We use npm / gulp for compiling. There is a lot of stuff happening in the compilation.

**Getting Started**

- Start by running `npm install`.
- Run `npm run dev`. Gulp will then watch & compile everything and then watch for changes to the HTML, JS, or CSS.
- For distribution, run `npm run dist`.

**Folder Structure**
- `fonts` and `images` get moved into their respective folders. This isn't watched via gulp so if you add an image or font, you need to run `gulp` again.
- `includes` are the pieces of the pages / the pages themselves. These are pretty self-explanatory and where you will make most frontend changes.
- `layouts` are the pages themselves. These basically take all the pieces of the pages and compile into one massive page. The navigation is also found here...sort of.
    * `index.html` is for MyWanWallet.nl.

- The wallet decrypt directives are at `scripts/directives/walletDecryptDrtv.js`. These show up on a lot of pages.
- The navigation is in `scripts/services/globalServices.js`. Again, we control which navigation items show up in which version of the site in this single file.
- As of September 2016, almost all the copy in the .tpl files are only there as placeholders. It all gets replaced via angular-translate. If you want to change some copy you need to do so in `scripts/translations/en.js` folder. You should also make a note about what you changed and move it to the top of the file so that we can make sure it gets translated if necessary.
- `styles` is all the less. It's a couple custom folders and bootstrap. This badly needs to be redone. Ugh.


### Contact
If you can think of any other features or run into bugs, let us know. You can fork, open a PR, open an issue, or support at mywanwallet dot nl.

### Announcement History

- 08/21/2018: First Beta release of myWanWallet released

#### MyWanWallet.nl is licensed under The MIT License (MIT).
