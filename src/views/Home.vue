<template>
  <!--Decoration -->
  <DecorationDots/>
  <DecorationLines/>
  <DecorationCircleLg/>
  <DecorationCircleMd/>
  <DecorationCircleSm/>

<!-- Header-->
<header>
  <Navigation />
  <PageTitle :chance='lotteryExplanation'
             :owner='owner'
             :winner='winner' 
             :fee='fee' 
             :pot='pot'
             :fee_strategy='feeStrategy'
             :has_played='hasPlayed'
             :play="play"
             :reset="reset"/>
  <Options :owner='owner' :accountId='accountId'/>
</header>

<Footer/>

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
import {wallet } from '@/services/near'
import { useLottery } from "@/composables/near"

export default {
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
    Footer
  },
  setup(){
    const accountId = wallet.getAccountId();
    const  { owner, winner, pot, fee, feeStrategy,hasPlayed, lastPlayed, active, feesExplanation, lotteryExplanation,  play,  reset}  = useLottery();

    return  {
        accountId,
        owner,
        winner,
        pot,
        fee,
        feeStrategy,
        hasPlayed,
        lastPlayed,
        active,
        feesExplanation,
        lotteryExplanation,
        play,
        reset
    }
  }
}
</script>