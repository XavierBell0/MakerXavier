<template>
 <div>
  <Banner />
  <p class="title"> dis da home page, test</p> 
  <center><a href="/MagBall">2.00b MagBall</a></center>
  
  <LargeCardDisplay
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
</template>
<script>
import { largeCardSections } from "@/assets/data.js"
export default {
  data(){
    return {
      largeCardInfo: largeCardSections,
    }
  }
}
</script>


