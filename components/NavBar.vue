<template>  
  <nav class="nav flex items-center justify-between flex-wrap border-black p-3 sticky top-0 z-50 border-2">
    <div class="flex items-center flex-shrink-0 mr-6">
      <NuxtLink  class="ml-3 font-semibold hover:underline text-lg" to="/">
          maker|XAVIER
      </NuxtLink>
    </div>
    <div class="items-center">
      <!-- |
      <NuxtLink  to="/gallery" class="hover:underline p-2"> 
        GALLERY
      </NuxtLink> -->

      |
      <NuxtLink  to="/resources" class="hover:underline p-2 text-base"> 
        RESOURCES
      </NuxtLink>
      |
      <NuxtLink  to="/aboutme" class="hover:underline p-2 text-base">
        ABOUT ME
      </NuxtLink>
      |
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
  .nav{
    background-color: rgb(224 242 254);
  }

</style>