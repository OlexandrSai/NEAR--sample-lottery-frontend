import { keyStores, Near, WalletConnection } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = "dev-1632981095270-35568974700849";
const gas = new BN("70000000000000");

export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  export const wallet = new WalletConnection(near, "lottery");

  // -----------------------------------------------------------------------------------
  // view functions
  // -----------------------------------------------------------------------------------

  //function to get owner  of the  contract
export const getOwner = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_owner");
};

    //function to get winner  of the  contract,  if  exists
export const getWinner = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_winner");
};

//function to get current amount  of  pot  (in  NEAR)
export const getPot = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_pot");
};

//function to get current amount  of  fee  (in  NEAR)
export const getFee = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_fee");
};

//function to get current strategy  of  fee
export const getFeeStrategy = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_fee_strategy");
};

//function to get bool value  has  lottery played or  no
export const getHasPlayed = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_has_played");
};

//function to get id of last player account 
export const getLastPlayed = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_last_played");
};

//function to get flag  is lottery active  or no
export const getActive = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_active");
};

//function to get string  explanation of current fees
export const getExplainFees = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "explain_fees");
};

//function to get string  explanation of current lottery  info
export const getExplainLottery = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "explain_lottery");
};

//function to play lottery
export const play = () => {
      let response
      let feeNumber = getFee().match(/(\d+)/)[0] //* 1000000000000000000000000
      feeNumber = feeNumber*1000000000000000
      console.log(feeNumber)
      if (this.getHasPlayed()) {
          //+fee
        response = wallet.account().functionCall({
        contractId: CONTRACT_ID,
        methodName: "say",
        gas,

        }) 
      }else{
        response = wallet.account().functionCall({
            contractId: CONTRACT_ID,
            methodName: "say",
            gas,
    
            }) 
        }
      console.log(response)
}


