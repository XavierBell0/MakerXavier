<template>
  <div>
    <div>
      <Banner />
      <NavBar />
    </div>
    <h1 class="p-3 text-center"> Here is a collection of most of the projects I have made over the years
       &#40;that I can talk about&#41;. Find more about me at the
      <NuxtLink  to="/aboutme" class="font-medium hover:underline">About Me</NuxtLink> page.
    </h1>
    <!--Get the Featured card info--> 
    <div class="mx-12 md:mx-40 lg:mx-48 xl:mx-64">
      <h4 class="header text-center md:text-left">
          {{ cardInfo[0].title }}
        </h4>
        <span class="flex-wrap justify-between hidden md:flex">
        <p class="snippet mb-2">
          {{ cardInfo[0].snippet }}
        </p>
        <!-- <Legend /> -->
        </span>
        <hr class="mt-2">
      <div class="grid grid-cols-1 xl:grid-cols-3 justify-center gap-4 mt-6 mb-8">
        <LargeCard
          v-for="card in cardInfo[0].cards"
          :key="card.id"
          :card="card"
        />
      </div>
        <!--Get the past projects card info--> 
        <h4 class="header text-center md:text-left">
          {{ cardInfo[1].title }}
        </h4>
        <span class="flex-wrap justify-between hidden md:flex">
        <p class="snippet mb-2">
          {{ cardInfo[1].snippet }}
        </p>
        <!-- <Legend /> -->
        </span>
        <hr class="mt-2">
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-4 mt-6 mb-16">
        <LargeCard
          v-for="card in cardInfo[1].cards"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>
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
  /* color: rgb(100 116 139); */
  font-size: 1.25rem;
}
</style>