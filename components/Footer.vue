<template>
    <div>
        <nav class="flex flex-auto justify-center gap-10 border-black p-10 bg-blue-100 text-black">
            <NuxtLink  to="/aboutme" class="font-medium hover:underline">XAVIER BELL</NuxtLink>
            <NuxtLink  to="/aboutme" class="hover:underline">Resume</NuxtLink>
            <NuxtLink  to="https://www.linkedin.com/in/xavier-bell-810377236/" class="hover:underline">LinkedIn</NuxtLink>
            <NuxtLink  to="https://github.com/XavierBell0" class="hover:underline">Github</NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
    name: "Footer",
    };
</script>

<style scoped>

</style>