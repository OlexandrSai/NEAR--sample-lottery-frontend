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

  //function to get explanation about lottery 
  export const explainLottery = () => {
      return wallet.account().viewFunction(CONTRACT_ID, "explain_lottery")
  }

  //function to get fee of lottery 
  export const getFee = () => {
    return wallet.account().viewFunction(CONTRACT_ID, "get_fee")
    }

    //function to get pot
  export const getPot = () => {
    return wallet.account().viewFunction(CONTRACT_ID, "get_pot")
    }

    //get last played
  export const getLastPlayed = () => {
        return wallet.account().viewFunction(CONTRACT_ID, "get_last_played")
        }

        //is lottery played or no
        export const getHasPlayed = () => {
            return wallet.account().viewFunction(CONTRACT_ID, "get_has_played")
            }

//get winner of lottery, if exists
export const getWinner = () => {
    return wallet.account().viewFunction(CONTRACT_ID, "get_winner")
    }
    
//get owner of lottery
export const getOwner = () => {
    return wallet.account().viewFunction(CONTRACT_ID, "get_owner")
    }

//get fee strategy  of lottery
export const getFeeStrategy = () => {
    return wallet.account().viewFunction(CONTRACT_ID, "get_fee_strategy")
    }

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


