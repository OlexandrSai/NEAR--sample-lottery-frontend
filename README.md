#🎓 Lottery dapp
This repository contains a complete frontend applications to work with <a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)

The example here is playful. It's a toy involving a lottery.
The goal of this repository is to make it as easy as possible to get started writing frontend with VueJs and React for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## Usage

![image](https://user-images.githubusercontent.com/38455192/145136911-fe10f671-2137-483a-8326-343f857d095a.png)

<a href="" target="_blank">Video demo UI walkthrough</a>

You can use this app with contract id`s which was deployed by creators of this repo,  or you can use it with your own deployed  contractId.
If you are using not yours contractId some functions of the lottery contract will not work because  they are setted to work  only  if owner called this  functions.

Example of such  function:

![image](https://user-images.githubusercontent.com/38455192/145134082-bb64a93d-cd45-48e3-bd84-b34f366fdbcb.png)

To get possibility to work with the full functionality of the smart contract, you need to paste your contractId inside UI of VueJs deployed dapp or React deployed dapp. 
Before pasting id make sure that you deployed correct smart contract, in other case this code may  not work as expected.

<a href="" target="_blank">Link to smart contract repo</a>

<a href="" target="_blank">How to correctly deploy NCD.L1.sample--lottery smart contract (video tutorial)</a>

After you deployed  your contract, you need to paste  id in one of deployed dapps

<a href="" target="_blank">Try VueJs deployed app</a>

<a href="" target="_blank">Try React deployed app</a>

<a href="" target="_blank">How to paste  your  contractId in UI(video)</a>

### Code walkthrough for NCD students
<a href="" target="_blank">Vue.Js</a>

<a href="" target="_blank">React</a>

## Project setup
In main branch README file is presented setup for Vue.Js, React setup README file is in react branch
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
