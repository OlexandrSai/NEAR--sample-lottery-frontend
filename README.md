#  🎓 Lottery dapp
This repository contains a complete frontend applications to work with

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
3. Angular (angular branch)

The example here is playful. It's a toy involving a lottery.
The goal of this repository is to make it as easy as possible to get started writing frontend with VueJs and React for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## Usage

![image](https://user-images.githubusercontent.com/38455192/145136911-fe10f671-2137-483a-8326-343f857d095a.png)

<a href="https://www.loom.com/share/835719fe8e2e45c4a2970ed435f62a56" target="_blank">UI walkthrough</a>

You can use this app with contract id`s which was deployed by creators of this repo,  or you can use it with your own deployed  contractId.
If you are using not yours contractId some functions of the lottery contract will not work because  they are setted to work  only  if owner called this  functions.

Example of such  function:

```
  // reset lottery
  reset = () => {
    let  response =  this.wallet.account().functionCall({
      contractId: localStorage.getItem('CONTRACT_ID') ?? "",
      methodName: "reset",
      args: { accountId:this.CONTRACT_ID }
    })
    console.log(response)
  }
```

To get possibility to work with the full functionality of the smart contract, you need to paste your contractId inside UI of VueJs deployed dapp or React deployed dapp.
Before pasting id make sure that you deployed correct smart contract, in other case this code may  not work as expected.

## Project setup
To deploy sample--lottery to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">this repo (smart contract deployment instructions are inside)</a>

Also you can watch this video :

<a href="https://www.loom.com/share/1060f789861a4652bfef96ef357cdbb3" target="_blank">![image](https://user-images.githubusercontent.com/38455192/169353150-81bf6d02-1a9e-428b-88eb-23f3c2c14328.png)</a>

After you deployed  your contract, and you have contract ids, you can input them on a deployed website or you can clone the repo and put contract ids inside src/environments/environment.ts file :
```
CONTRACT_ID = "put your thanks contract id here"
...
```

<a href="https://sample-lottery-ng.onrender.com/" target="_blank">Try Angular deployed app</a>

After you input your values inside environment.ts file, you need to :
1. Install all dependencies
```
npm i -g @angular/cli && npm i
```
2. Run the project locally
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

To work with lottery contract were separated inside ``` src/app/services/near.service.ts```.
```
  getLotteryContract = () => {
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

Class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
    this.near = new Near({
      networkId: "testnet",
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

``` src/app/services/lottery.service.ts ``` represent the main container for functionality needed in the app

We use that class to store all shared data and function's:
```
  public FeeStrategies = ['Free', 'Constant', 'Linear', 'Exponential']
  public owner = '';
  ...
  
  updateValues = async () => {...};
  handlePlay = async () => {...};
  handleReset = async () => async () => {...};
  handleSignIn = async () => {...};
```

And inside components we are using the same ``` this.wallet``` and ``` this.[...contracts]``` functions to manage state of dapp. ``` src/app/components/page-title/page-title.component.spec.ts ``` as an example :
```
  constructor(public lotteryService: LotteryService) {
  }

  async handlePlay(): Promise<any> {
    await this.lotteryService.handlePlay();
  }
```

## Examples
``` src/app/services/near.service.ts ```
### - Function | No Parameters -
```
// get winner  of the  contract,  if  exists
getWinner = async () => {
  return await this.lotteryContract.get_winner();
};
```

### - Function | With Parameters -
```
// configure Fee
configureFee = async ({strategy}: {strategy: any}) => {
  return await this.lotteryContract.configure_fee(
    { strategy }
  )
}
```

