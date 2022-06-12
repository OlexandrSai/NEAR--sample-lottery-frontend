#  🎓 Lottery dApp
This repository contains a complete frontend application to work with

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
3. Angular (angular branch)

The example here is playful. It's a toy involving a lottery.
The goal of this repository is to make it as easy as possible to get started writing frontend with VueJs and React for AssemblyScript contracts built to work with NEAR Protocol.

## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspirational purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.

## Usage

![image](https://user-images.githubusercontent.com/38455192/145136911-fe10f671-2137-483a-8326-343f857d095a.png)

<a href="https://www.loom.com/share/835719fe8e2e45c4a2970ed435f62a56" target="_blank">UI walkthrough</a>

You can use this app with contract IDs that were deployed by the creators of this repo,  or you can use it with your own deployed contractId.
If you are using not your contractId some functions of the lottery contract will not work because they are set to work only if the owner called these functions.

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery/blob/680f2bda0c121ad0276513e985ca13ca55dbe5ec/src/lottery/assembly/index.ts#L122" target="_blank">Example of such  function:</a>

![image](https://user-images.githubusercontent.com/38455192/145134082-bb64a93d-cd45-48e3-bd84-b34f366fdbcb.png)

To get the possibility to work with the full functionality of the smart contract, you need to paste your contractId inside the UI of deployed dApp.
Before pasting id make sure that you deployed the correct smart contract, in other cases this code may not work as expected.

## Project setup
To deploy sample--lottery to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">this repo (smart contract deployment instructions are inside)</a>

Also you can watch this video :

<a href="https://www.loom.com/share/1060f789861a4652bfef96ef357cdbb3" target="_blank">![image](https://user-images.githubusercontent.com/38455192/169353150-81bf6d02-1a9e-428b-88eb-23f3c2c14328.png)</a>

After you deployed  your contract, and you have contract ids, you can input them on a deployed website or you can clone the repo and put contract ids inside src/environments/environment.ts file :
```
CONTRACT_ID = "put your thanks contract id here"
...
```

After you input your values inside environment.ts file, you need to :
1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="https://www.loom.com/share/6a669c2de52d45b9a6b915eeaf89d567" >Code walk-through video | TBA |</a>

### -- Contract --

To work with lottery contract was separated inside ``` src/app/services/near.service.ts```.
```
  getLotteryContract() {
    return new Contract(
      this.wallet.account(), // the account object that is connecting
      environment.CONTRACT_ID, // name of contract you're connecting to
      {
        viewMethods: ['get_owner', 'get_winner', 'get_pot', 'get_fee', 'get_fee_strategy', 'get_has_played', 'get_last_played', 'get_active', 'explain_fees', 'explain_lottery'], // view methods do not change state but usually return a value
        changeMethods: ['play', 'configure_lottery', 'configure_fee', 'reset'] // change methods modify state
      }
    )
  }
```

### -- Main Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/services/near.service.ts ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

The class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });
``` 
and creating wallet connection
```
this.wallet = new WalletConnection(this.near, "lottery");
```

that class contain

### -- Lottery Service --

``` src/app/services/lottery.service.ts ``` represents the main container for the functionality needed in the app

We use that class to store all shared data and functions:
```
  public FeeStrategies = ['Free', 'Constant', 'Linear', 'Exponential']
  public owner = '';
  ...
  
  updateValues() {...};
  handlePlay() {...};
  handleReset() {...};
  handleSignIn() {...};
```

With dependency injection, we are able to share everything with other components. ``` src/app/components/page-title/page-title.component.spec.ts ``` as an example :
```
  constructor(public lotteryService: LotteryService) {
  }

  async handlePlay() {
    await this.lotteryService.handlePlay();
  }
```

## Examples
``` src/app/services/near.service.ts ```
### - Function | No Parameters -
```
// get winner of the contract, if exists
getWinner() {
  return await this.lotteryContract.get_winner();
};
```

### - Function | With Parameters -
```
// configure Fee
configureFee({strategy}: {strategy: any}) {
  return await this.lotteryContract.configure_fee(
    { strategy }
  )
}
```

