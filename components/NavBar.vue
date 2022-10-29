<template>  
  <nav class="flex items-center justify-between flex-wrap border-black bg-gray-100 p-3 sticky top-0 z-50 border-2">
    <div class="flex items-center flex-shrink-0 mr-6">
      <NuxtLink  class="mr-3 font-semibold hover:underline" to="/">
        <span class="hidden md:inline-flex">
          XAVIER BELL |
        </span>
        <span class="inline-flex">
          MAKERXAVIER
        </span>
      </NuxtLink>
    </div>
    <div class="items-center">
      |
      <NuxtLink  to="/resources" class="hover:underline p-2"> 
        RESOURCES
      </NuxtLink>
      |
      <NuxtLink  to="/aboutme" class="hover:underline p-2">
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