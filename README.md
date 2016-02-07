# PeerTweet

> Decentralized feeds using BitTorrent's DHT. Idea from Arvid and The_8472 "DHT RSS feeds" http://libtorrent.org/dht_rss.html


## Abstract

BitTorrent's DHT is probably one of the most resilient and censorship-resistant networks on the internet. PeerTweet uses this network to allow users to broadcast *tweets* to anyone who is listening. When you start PeerTweet, it generates a hash `@6749b98157c5dd22f6178c38072fe87c08515537` which is similar to your Twitter username (ex. `@lmatteis`). The difference is that you have entire control over what can be posted because only you own the private key. Furthermore, thanks to the DHT, what you post cannot be stopped by any government or institution.

Once you find other PeerTweet's accounts you trust (and are not spam), you can follow them. This configures your client to store this user's tweets and broadcasts them to the DHT every once in a while to keep their feed alive. This cooperation of following accounts, allows for feeds to stay alive in the DHT network. The PeerTweet protocol also publishes your actions such as `I just followed @919c..` or `I just liked @9139..` and `I just retweeted @5789..`. This allows the possibility for new users to find other addresses they can trust; if I trust the user `@6749..` and they're following `@9801..`, then perhaps I can mark `@9801..` as not spam. This idea of publicly tweeting about your actions also allows for powerful future crawling analysis of this social graph.

<!-- In terms of storing tweets on the network, things are implemented similarly to this proposal: http://libtorrent.org/dht_rss.html - Each tweet is an immutable object which is `put()` on the network and contains an important `next` property which a list of exactly 3 hashes and allows for the implementation of a Skip list. These 3 hashes are the hashes of the item 1, 2 and 4 hops away. This allows for parallel `get()` requests when iterating over someones feed. The head is the only mutable object of the feed and contains information such as the user's name, a little description and an HTTP url to their avatar. -->



# Screenshot

![PeerTweet](http://i.imgur.com/ndCBA8V.png)



## Install

Install dependencies.

```bash
$ npm install
```

## Installing native modules

The app comes with some native bindings. I used this code to make it run on my computer:

Source: https://github.com/atom/electron/blob/master/docs/tutorial/using-native-node-modules.md

```bash
npm install --save-dev electron-rebuild

# Every time you run "npm install", run this
./node_modules/.bin/electron-rebuild

# On Windows if you have trouble, try:
.\node_modules\.bin\electron-rebuild.cmd
```


## Run

Run this two commands __simultaneously__ in different console tabs.

```bash
$ npm run hot-server
$ npm run start-hot
```

*Note: requires a node version >= 4 and an npm version >= 2.*

#### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

*See [electron-debug](https://github.com/sindresorhus/electron-debug) for more information.*

#### Toggle Redux DevTools

- All platforms: <kbd>Ctrl+H</kbd>

*See [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more information.*


## Externals

If you use any 3rd party libraries which can't be built with webpack, you must list them in your `webpack.config.base.js`：

```javascript
externals: [
  // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
]
```

You can find those lines in the file.


## CSS Modules support

Import css file as [css-modules](https://github.com/css-modules/css-modules) using `.module.css`.


## Package

```bash
$ npm run package
```

To package apps for all platforms:

```bash
$ npm run package-all
```

#### Options

- --name, -n: Application name (default: ElectronReact)
- --version, -v: Electron version (default: latest version)
- --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
- --icon, -i: Application icon
- --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for darwin (osx), linux and win32 (windows) platform. After build, you will find them in `release` folder. Otherwise, you will only find one for your os.

`test`, `tools`, `release` folder and devDependencies in `package.json` will be ignored by default.

#### Default Ignore modules

We add some module's `peerDependencies` to ignore option as default for application size reduction.

- `babel-core` is required by `babel-loader` and its size is ~19 MB
- `node-libs-browser` is required by `webpack` and its size is ~3MB.

> **Note:** If you want to use any above modules in runtime, for example: `require('babel/register')`, you should move them form `devDependencies` to `dependencies`.

#### Building windows apps from non-windows platforms

Please checkout [Building windows apps from non-windows platforms](https://github.com/maxogden/electron-packager#building-windows-apps-from-non-windows-platforms).


## Native-like UI

If you want to have native-like User Interface (OS X El Capitan and Windows 10), [react-desktop](https://github.com/gabrielbull/react-desktop) may perfect suit for you.


## Maintainers

This is a fork of the https://github.com/chentsulin/electron-react-boilerplate project.

- [C. T. Lin](https://github.com/chentsulin)
- [Jhen-Jie Hong](https://github.com/jhen0409)

## License
MIT