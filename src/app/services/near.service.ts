import { Injectable } from '@angular/core';
import { keyStores, Near, WalletConnection, utils, Contract } from "near-api-js";
import {environment} from "../../environments/environment";

// @ts-ignore
import BN from "bn.js";

@Injectable({
  providedIn: 'root'
})
export class NearService {
  public near: Near;
  public wallet: WalletConnection;
  public lotteryContract: any;
  public CONTRACT_ID: any;

  constructor() {
    // connecting to NEAR
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });

    // create wallet connection
    this.wallet = new WalletConnection(this.near, "lottery");
    this.CONTRACT_ID = localStorage.getItem('CONTRACT_ID') ?? environment.CONTRACT_ID;
    // get contract
    this.lotteryContract = this.getLotteryContract();
  }

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

  // --------------------------------------------------------------------------
  // functions to call contract Public VIEW methods
  // --------------------------------------------------------------------------

  // get owner  of the  contract
  async getOwner() {
    return await this.lotteryContract.get_owner();
  };

  // get winner  of the  contract,  if  exists
  async getWinner() {
    return await this.lotteryContract.get_winner();
  };

  // get current amount  of  pot  (in  NEAR)
  async getPot() {
    return await this.lotteryContract.get_pot();
  };

  // get current amount  of  fee  (in  NEAR)
  async getFee() {
    return await this.lotteryContract.get_fee();
  };

  // get current strategy  of  fee
  async getFeeStrategy() {
    return await this.lotteryContract.get_fee_strategy();
  };

  // get bool value  has  lottery played or  no by  player
  async getHasPlayed( accountId: any ) {
    return await this.lotteryContract.get_has_played(
      {player: accountId}
    );
  };

  // get id of last player account
  async getLastPlayed() {
    return await this.lotteryContract.get_last_played();
  };

  // get flag  is lottery active  or no
  async getActive() {
    return await this.lotteryContract.get_active();
  };

  // get string  explanation of current fees
  async getExplainFees() {
    return await this.lotteryContract.explain_fees();
  };

  // get string  explanation of current lottery  info
  async getExplainLottery() {
    return await this.lotteryContract.explain_lottery();
  };

  // --------------------------------------------------------------------------
  // functions to call contract Public CHANGE methods
  // --------------------------------------------------------------------------

  // play lottery
  async play(fee: any,hasPlayed: any) {
    let response;
    let feeNumber = fee.match(/(\d+)/)[0];

    if (hasPlayed) {
      const attachedDeposit = utils.format.parseNearAmount(feeNumber);
      response = await this.lotteryContract.play(
        {},
        environment.GAS,
        attachedDeposit
      )
    }else{
      response = await this.lotteryContract.play(
        {},
        environment.GAS
      );
    }

    console.log(response)
  }

  // configure Lottery
  async configureLottery({chance}: {chance: any}) {
    return await this.lotteryContract.configure_lottery(
      { chance }
    )
  }

  // configure Fee
  async configureFee({strategy}: {strategy: any}) {
    return await this.lotteryContract.configure_fee(
      { strategy }
    )
  }

  // reset  lottery
  async reset() {
    let  response = await this.lotteryContract.reset(
      { accountId: this.CONTRACT_ID }
    );

    console.log(response)
  }
}
