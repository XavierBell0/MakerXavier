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
        <p class="snippet mt-1 mb-2">
          {{ cardInfo[0].snippet }}
        </p>
        <hr>
      <div class="grid grid-cols-1 justify-center lg:grid-cols-3 gap-4 sm:mx-12 md:mx-32 lg:mx-50 mt-6 mb-16">
        <LargeCard
          v-for="card in cardInfo[0].cards"
          :key="card.id"
          :card="card"
        />
      </div>
        <h4 class="header">
          {{ cardInfo[1].title }}
        </h4>
        <p class="snippet mt-1 mb-2">
          {{ cardInfo[1].snippet }}
        </p>
        <hr>
      <div class="grid grid-cols-1 justify-center lg:grid-cols-4 gap-4 mx-12 md:mx-32 lg:mx-50 mt-6 mb-16">
        <LargeCard
          v-for="card in cardInfo[1].cards"
          :key="card.id"
          :card="card"
        />
        </div>
        <!-- <h4 class="header">
          {{ cardInfo[2].title }}
        </h4>
        <p class="snippet">
          {{ cardInfo[2].snippet }}
        </p>
      <div class="grid grid-cols-2 justify-center lg:grid-cols-5 gap-4 mx-32 lg:mx-50">
        <LargeCard
          v-for="card in cardInfo[2].cards"
          :key="card.id"
          :card="card"
        />
      </div> -->
    </div>
  <br>
  <br>
  <br>
  <div>
    <Footer />
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
}

.header {
  font-weight: 400;
  font-size: 3rem;
}
.snippet {
  color: darkslategray;
  font-size: 1.25rem;
}
</style>