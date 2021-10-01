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
             v-on:play="play"/>
  <Options :isOwner='isOwner'/>
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
import { useLottery } from "@/composables/near"

//const FeeStrategies = ['Free','Constant','Linear','Exponential']


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
    //hasPlayed
    const  { owner, winner, pot, fee, feeStrategy, lastPlayed, active, feesExplanation, lotteryExplanation}  = useLottery();

    return  {
      owner,
        winner,
        pot,
        fee,
        feeStrategy,
        //hasPlayed,
        lastPlayed,
        active,
        feesExplanation,
        lotteryExplanation
    }
  }
}
</script>