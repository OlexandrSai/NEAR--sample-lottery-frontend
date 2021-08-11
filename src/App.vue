<template>
<!--Decoration -->
  <DecorationDots/>
  <DecorationLines/>
  <DecorationCircleLg/>
  <DecorationCircleMd/>
  <DecorationCircleSm/>

<!-- Header-->
<header>
  <Navigation :isSignedIn='isSignedIn' :accountName='accountName' :balance='accountBalance' v-on:signIn='signIn' v-on:signOut='signOut'/>
  <PageTitle :chance='chance'
             :owner='owner'
             :winner='winner' 
             :fee='fee' 
             :pot='pot'
             :fee_strategy='fee_strategy'
             :has_played='has_played'
             v-on:play="play"/>
  <Options :isOwner='isOwner'/>
</header>

<Footer/>

 <loading v-model:active="loading"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>

</template>

<script>
import DecorationDots from  '@/components/DecorationDots.vue'
import DecorationLines from '@/components/DecorationLines.vue'
import DecorationCircleLg from '@/components/DecorationCircleLg.vue'
import DecorationCircleMd from '@/components/DecorationCircleMd.vue'
import DecorationCircleSm from '@/components/DecorationCircleSm.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import Options from '@/components/Options.vue'
import Footer from '@/components/Footer.vue'
import * as nearAPI from "near-api-js"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const { connect, keyStores, WalletConnection } = nearAPI

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const FeeStrategies = ['Free','Constant','Linear','Exponential']

let near,wallet,lotteryContract;



export default {
  data () {
    return {
      loading:false,
      fullpage:false,
      isSignedIn: false,
      accountName: '',
      accountBalance: '',
      chance: '20%',
      fee:'0',
      pot: '',
      last_played : '',
      has_played : false,
      winner : '',
      owner: 'NEAR',
      isOwner: false,
      fee_strategy: 'Linear'
    }
  },
  name: 'App',
  components: {
    DecorationDots,
    DecorationLines,
    DecorationCircleLg,
    DecorationCircleMd,
    DecorationCircleSm,
    Navigation,
    PageTitle,
    Options,
    Footer,
    Loading
  },
  async mounted () {
    near = await connect(config);
    wallet = new WalletConnection(near)
    this.accountName = wallet.account().accountId;
    this.isSignedIn = wallet.isSignedIn();
    this.accountBalance = await (await wallet.account().getAccountBalance()).total;
    lotteryContract = new nearAPI.Contract(
      wallet.account(),
      'dev-1626261215511-46457405895087',
      {
        viewMethods: ['explain_lottery','get_fee','get_pot','get_last_played','get_has_played','get_winner','get_owner','get_fee_strategy'],
        changeMethods: ['play']
      }
    )
    this.chance = await lotteryContract.explain_lottery()
    this.fee = await lotteryContract.get_fee()
    this.pot = await lotteryContract.get_pot()
    // this.last_played = await lotteryContract.get_last_played()
    this.has_played = await lotteryContract.get_has_played({player: this.accountName})
    this.winner = await lotteryContract.get_winner()
    this.owner = await lotteryContract.get_owner()
    this.owner==this.accountName?this.isOwner=true:
    console.log(this.owner)
    this.fee_strategy = FeeStrategies[await lotteryContract.get_fee_strategy()]
  },
  methods: {
    signIn () {
       wallet.requestSignIn(
    "dev-1624882791000-17054952591347", // contract requesting access
      );
    },
    signOut () {
      wallet.signOut()
      this.isSignedIn = wallet.isSignedIn()
    },
    async play (){
      console.log('inside')
      let response
      let feeNumber = this.fee.match(/(\d+)/)[0] //* 1000000000000000000000000
      feeNumber = feeNumber*1000000000000000
      console.log(feeNumber)
      if (this.has_played) {
        response = await lotteryContract.play(
        {
          
        },
        300000000000000,
        feeNumber
      )
      }else{
        response = await lotteryContract.play(
        {
          
        },
        300000000000000
      )
      }
      
      console.log(response)
    }
  }
}
</script>