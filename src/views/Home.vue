<template>
  <!--Decoration -->
  <DecorationDots/>
  <DecorationLines/>
  <DecorationCircleLg/>
  <DecorationCircleMd/>
  <DecorationCircleSm/>

<!-- Header-->
<header class="min-h-screen">
  <Navigation />
  <PageTitle />
  <!-- <Options :owner='owner' :accountId='accountId'/> -->
</header>

<Footer/>

</template>

<script>

import DecorationDots from  '@/components/decoration/DecorationDots.vue'
import DecorationLines from '@/components/decoration/DecorationLines.vue'
import DecorationCircleLg from '@/components/decoration/DecorationCircleLg.vue'
import DecorationCircleMd from '@/components/decoration/DecorationCircleMd.vue'
import DecorationCircleSm from '@/components/decoration/DecorationCircleSm.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import Footer from '@/components/Footer.vue'

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
    Footer
  }
}
</script>