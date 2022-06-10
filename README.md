#  🎓 NCD.L2.sample--thanks dapp
This repository contains a complete frontend applications (React) to work with 
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:
1. React (master branch)

The goal of this repository is to make it as easy as possible to get started writing frontend with React for AssemblyScript contracts built to work with NEAR Protocol.

## DEMO:
<a href="https://sample-lottery-react.onrender.com" target="_blank">Open demo</a>

## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.

![image](https://user-images.githubusercontent.com/48129985/173155384-f8870d4f-05e9-4710-9481-166febc725c5.png)

## ⚡  Usage
I recorded a short video in Loom, where I review "what is do" this project
<a href="https://www.loom.com/share/fb45fe683a4b48279dd0c751b29a35d2" target="_blank">UI walkthrough</a>


To deploy sample--lottery to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">this repo (smart contract deployment instructions are inside):</a> 


After you successfully deployed registry and thanks contracts and you have contract ids, you can input them on a deployed <a href="https://sample-lottery-react.onrender.com" target="_blank">website </a> or you can clone the repo and put contract ids inside .env file :

```
REACT_APP_CONTRACT_ID = "put your smart-contract id here"
```
After you input your values inside .env file, you need to :
1. Install all dependencies 
```
yarn
```
2. Run the project locally
```
yarn start
```
Other commands:

Compiles and minifies for production
```
yarn build
```
Lints and fixes files
```
yarn lint
```

## 👀 Code walkthrough for Near university students

I recorded a short video in Loom, where I review the code
<a href="https://www.loom.com/share/d37f6f8be8654329b92b9c415d08bef4" target="_blank">Code walkthrough video</a>

We are using ```near-api-js``` to work with NEAR blockchain. In ``` /services/near.js ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, WalletConnection, utils } from "near-api-js";
```
Then we are connecting to NEAR:
```
// connecting to NEAR, new NEAR is being used here to avoid async/await
export const config = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});
``` 
and creating wallet connection
```
const getContractID = () => localStorage.getItem('CONTRACT_ID');
const wallet = () => new WalletConnection(near, getContractID()));
```
After this by using API we can use ```wallet``` and call ```signIn()``` and ```signOut()``` functions of wallet object. By doing this, login functionality can now be used in any component. 

And also we in return statement we are returning wallet object, we are doing this to call ``` wallet.getAccountId()``` to show accountId in ``` /hooks/useLottery.jsx ```

```wallet``` code :
```
export const signIn = () => {
  return wallet().requestSignIn({ contractId: getContractID() });
};

export const signOut = () => {
  return wallet().signOut(getContractID());
};
```

To work with smart thanks and registry smart contracts we are loading the contracts inside  ``` /services/near.js:```
```
export const contract = () =>
  new Contract(wallet().account(), getContractID(), {
    viewMethods: [
      'get_owner',
      'get_winner',
      'get_pot',
      'get_fee',
      'get_fee_strategy',
      'get_has_played',
      'get_last_played',
      'get_active',
      'explain_fees',
      'explain_lottery',
    ],
    changeMethods: ['play', 'configure_lottery', 'configure_fee', 'reset'],
    sender: wallet().account(),
  });
```

and we are creating function to export for each contract function

example of a call with no params: 
```
//function to get winner
export const getWinner = () => {
  return contract().get_winner();
};
```

example of call with params 
```
//function to play game
export const play = (fee, hasPlayed) => {
  const feeNumber = fee.match(/(\d+)/)[0]; //* 1000000000000000000000000
  const attachedDeposit = utils.format.parseNearAmount(feeNumber);
  if (hasPlayed) {
    return contract().play({}, gas, attachedDeposit);
  } else {
    return contract().play();
  }
};
```

Then in ```hooks/useLottery.jsx``` and ```hooks/useSign.jsx``` we are just importing all logic from ```services/near.js```:
For example in useSign component
```
import { signIn, signOut, wallet } from '../services/near';
```

and using it to store some state of contracts and to call contracts functions: 
```
export const useSign = ({ setApiError }) => {
  const [accountId, setAccountId] = useState('');

  const getAccountId = useCallback(async () => {
    try {
      setAccountId(await wallet().getAccountId());
    } catch (error) {
      setApiError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAccountId();
  }, [getAccountId]);

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
    getAccountId();
  };

  return {
    accountId,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
};
```

Inside ```/src/pages/Home.jsx``` we have lifecycle hook ``` useEffect() ``` where we are getting all the data from the smart contract
And we are using API request from ```services/near.js``` as an example :
```
export const Home = () => {
  const { owner, winner, pot, fee, feeStrategy, hasPlayed, lotteryExplanation, play, reset } = useLottery({
    setApiError,
  });

  const { accountId, signIn, signOut } = useSign({ setApiError });
```
