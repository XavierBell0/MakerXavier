<template>
  <div>
    <div>
      <Banner />
      <NavBar />
    </div>
    <h1 class="p-2 text-center"> Here is a collection of most of the projects I have worked on or made over the years. Find more about me at the
      <NuxtLink  to="/aboutme" class="font-medium hover:underline">About Me</NuxtLink> page.
    </h1>
    <br>
    <div class="mx-12 md:mx-32 lg:mx-50">
      <h4 class="header underline">
          {{ cardInfo[0].title }}
        </h4>
        <span class=" flex-wrap justify-between hidden md:flex">
        <p class="snippet mt-1">
          {{ cardInfo[0].snippet }}
        </p>
        <Legend />
        </span>
        <hr>
      <div class="grid grid-cols-1 justify-center lg:grid-cols-3 gap-4 mt-6 mb-16">
        <LargeCard class="max-w-xl"
          v-for="card in cardInfo[0].cards"
          :key="card.id"
          :card="card"
        />
      </div>
        <h4 class="header underline">
          {{ cardInfo[1].title }}
        </h4>
        <span class="flex-wrap justify-between hidden md:flex">
        <p class="snippet mt-1">
          {{ cardInfo[1].snippet }}
        </p>
        <Legend />
        </span>
        <hr>
      <div class="grid grid-cols-1 justify-center lg:grid-cols-4 gap-4 mt-6 mb-16">
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
  color: rgb(100 116 139);
  font-size: 1.25rem;
}
</style>