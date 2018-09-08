# MyWanWallet

[![CircleCI][circle-image]][circle-url]
[![dependency status][dep-image]][dep-url] 
[![Coverage Status][coveralls-image]][coveralls-url]

### [https://www.mywanwallet.nl](https://www.mywanwallet.com)

### [Download the Latest Release](https://github.com/C3Devs/mywanwallet/releases/latest)

- wanwallet-vX.X.X.X.zip is the  package containing the software


### MEW Around the Web

- [Website: https://www.mywanwallet.nl/](https://www.mywanwallet.nl/)
- [tyrion70 (founder) reddit: https://www.reddit.com/user/tyrion70/](https://www.reddit.com/user/tyrion70/)
- [tyrion70 (founder) bitcointalk: https://bitcointalk.org/index.php?action=profile;u=103907](https://bitcointalk.org/index.php?action=profile;u=103907)
- [Twitter: https://twitter.com/tyrion70](https://twitter.com/tyrion70)
- [Anti-phish CX](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn)
- [Github MEW Repo: https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet)
- [MEW WAN Donation Address: 0x664949908413517B993c6784b44428d080D1a1Fa](https://wanscan.io/addr/0x664949908413517B993c6784b44428d080D1a1Fa)


### MyWanWallet

- MyWanWallet is a free, open-source, client-side tool for easily & securely interacting with the Wanchain network. As one of the leading providers of Wanchain services, MyWanWallet equips users with an easy-to-understand and accessible suite of tools for their needs.
- It was created and is maintained by [tyrion70](https://github.com/tyrion70).
- It was forked from myetherwallet.com (https://github.com/kvhnuke/etherwallet)

#### Features

- Create new wallets completely client side.
- Access your wallet via unencrypted private key, encrypted private key, keystore files, mnemonics, Ledger Nano S or TREZOR hardware wallet.
- Easily send WAN and *any* ERC-20 Standard Token.
- Generate, sign & send transactions offline, ensuring your private keys never touch an internet-connected device.
- Securely access your WAN & Tokens on your [Ledger](https://www.ledger.com?r=651b52292b63) or [TREZOR](https://shop.trezor.io?a=mywanwallet.nl) Hardware Wallet via the MyWanWallet interface.

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

1. Go to https://github.com/C3Devs/mywanwallet/releases/latest.
2. Click on wanwallet-vX.X.X.X.zip.
3. Move zip to an airgapped computer.
4. Unzip it and double-click index.html.
5. MyWanWallet.nl is now running entirely on your computer.

In case you are not familiar, you need to keep the entire folder in order to run the website, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the MyWanWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.

As we are constantly updating MyWanWallet.nl, we recommend you periodically update your saved version of the repo.


### Developers

If you want to help contribute, here's what you need to know to get it up and running and compiling.

- We use angular and bootstrap. We used to use jQuery and Bootstrap until it was converted in April 2016. If you wonder why some things are set up funky, that's why.
- Please fork and make PRs to the mercury branch
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

[dep-image]: https://david-dm.org/C3Devs/mywanwallet.svg
[dep-url]: https://david-dm.org/C3Devs/mywanwallet
[circle-image]: https://circleci.com/gh/C3Devs/mywanwallet.svg?style=svg
[circle-url]: https://circleci.com/gh/C3Devs/mywanwallet
[coveralls-image]: https://coveralls.io/repos/github/C3Devs/mywanwallet/badge.svg
[coveralls-url]: https://coveralls.io/github/C3Devs/mywanwallet
