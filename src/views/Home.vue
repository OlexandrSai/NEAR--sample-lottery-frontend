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


//const FeeStrategies = ['Free','Constant','Linear','Exponential']


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
    Footer
  },
}
</script>