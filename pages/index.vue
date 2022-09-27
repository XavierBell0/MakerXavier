<template>
  <div>
    <div>
      <Banner />
      <NavBar />
    </div>
    <br>
    <br>
    <div class="text-center">
      <h4 class="header">
          {{ cardInfo[0].title }}
        </h4>
        <p class="snippet">
          {{ cardInfo[0].snippet }}
        </p>
      <div class="grid grid-cols-2 justify-center lg:grid-cols-4 gap-4 mx-12 lg:mx-30">
        <LargeCard
          v-for="card in cardInfo[0].cards"
          :key="card.id"
          :card="card"
        />
      </div>
        <h4 class="header">
          {{ cardInfo[1].title }}
        </h4>
        <p class="snippet">
          {{ cardInfo[1].snippet }}
      <div class="grid grid-cols-2 justify-center lg:grid-cols-5 gap-4 mx-12 lg:mx-30">
        <LargeCard
          v-for="card in cardInfo[1].cards"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { cardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      cardInfo: cardSections,
    };
  },
  created() {
    // props are exposed on `this`
    console.log("card:");
    console.log(cardSections);
  },
};
</script>


<style scoped>
.container {
  /* margin-top: 2rem; */
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  font-weight: 400;
  font-size: 3rem;
}
.snippet {
  color: grey;
  margin-bottom: 1.5rem;
}
</style>