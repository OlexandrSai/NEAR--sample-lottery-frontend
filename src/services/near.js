import { keyStores, Near, WalletConnection,  utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = process.env.VUE_APP_CONTRACT_ID;
const gas = new BN(process.env.VUE_APP_gas);

export const near = new Near({
    networkId: process.env.VUE_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: process.env.VUE_APP_nodeUrl,
    walletUrl: process.env.VUE_APP_walletUrl,
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
export const getHasPlayed = (accountId) => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_has_played", {player: accountId});
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

// -----------------------------------------------------------------------------------
// change functions
// -----------------------------------------------------------------------------------

//function to play lottery
export const play = (fee,hasPlayed) => {
      let response
      let feeNumber = fee.match(/(\d+)/)[0] //* 1000000000000000000000000
      console.log(feeNumber)
      if (hasPlayed) {
        console.log(utils.format.parseNearAmount(feeNumber))
        response = wallet.account().functionCall({
        contractId: CONTRACT_ID,
        methodName: "play",
        gas,
        attachedDeposit:utils.format.parseNearAmount(feeNumber)
        }) 
      }else{
        response = wallet.account().functionCall({
            contractId: CONTRACT_ID,
            methodName: "play",
            gas
            }) 
        }
      console.log(response)
}

//function to configure Lottery
export const configureLottery = ({chance}) => {
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "configure_lottery",
      args: {chance}
  })
}

//function to configure Fee
export const configureFee = ({strategy}) => {
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "configure_fee",
      args: {strategy}
  })
}

//function to reset  lottery
export const reset = () => {
  let  response =  wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "reset",
      args: { accountId:CONTRACT_ID }
  })
  console.log(response)
}