import BN from 'bn.js';
import { keyStores, Near, WalletConnection, utils, Contract } from 'near-api-js';

const gas = new BN('70000000000000');
const getContractID = () => localStorage.getItem('CONTRACT_ID');

export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

export const wallet = () => new WalletConnection(near, getContractID());

export const signIn = () => {
  return wallet().requestSignIn({ contractId: getContractID() });
};

export const signOut = () => {
  return wallet().signOut(getContractID());
};

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

// -----------------------------------------------------------------------------------
// view functions
// -----------------------------------------------------------------------------------

//function to get owner  of the  contract
export const getOwner = () => {
  return contract().get_owner();
};

//function to get winner  of the  contract,  if  exists
export const getWinner = () => {
  return contract().get_winner();
};

//function to get current amount  of  pot  (in  NEAR)
export const getPot = () => {
  return contract().get_pot();
};

//function to get current amount  of  fee  (in  NEAR)
export const getFee = () => {
  return contract().get_fee();
};

//function to get current strategy  of  fee
export const getFeeStrategy = () => {
  return contract().get_fee_strategy();
};

//function to get bool value  has  lottery played or  no
export const getHasPlayed = (accountId) => {
  return contract().get_has_played({ player: accountId });
};

//function to get id of last player account
export const getLastPlayed = () => {
  return contract().get_last_played();
};

//function to get flag  is lottery active  or no
export const getActive = () => {
  return contract().get_active();
};

//function to get string  explanation of current fees
export const getExplainFees = () => {
  return contract().explain_fees();
};

//function to get string  explanation of current lottery  info
export const getExplainLottery = () => {
  return contract().explain_lottery();
};

// -----------------------------------------------------------------------------------
// change functions
// -----------------------------------------------------------------------------------

//function to play lottery
export const play = (fee, hasPlayed) => {
  const feeNumber = fee.match(/(\d+)/)[0]; //* 1000000000000000000000000
  const attachedDeposit = utils.format.parseNearAmount(feeNumber);
  if (hasPlayed) {
    return contract().play({}, gas, attachedDeposit);
  } else {
    return contract().play();
  }
};

// -----------------------------------------------------------------------------------
// Admin functions
// -----------------------------------------------------------------------------------

//function to configure Lottery
export const configureLottery = ({ chance }) => {
  return contract().configure_lottery({
    chance,
  });
};

//function to configure Fee
export const configureFee = ({ strategy }) => {
  return contract().configure_fee({ strategy });
};

//function to reset  lottery
export const reset = () => {
  return contract().reset();
};
