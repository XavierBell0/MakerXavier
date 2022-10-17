<template>
    <router-link :to="card.url">
        <div class="card rounded">
                <img class="block w-full max-h-80 object-cover object-center" :src="require(`@/assets/Media/.MainCards/${card.image || 'Amogus.jpg'}`)" alt="">
                <h3 class="mx-3 mt-3 mb-1 font-medium text-base lg:text-lg">
                    {{ card.title }}
                </h3>
                <span class="mx-1 inline-block h-4 w-4 rounded-full" :class="tag" v-for="tag in card.tags" v-bind:key="tag"></span>
                <p class="mt-2 mb-5 mx-3 hidden font-normal text-sm md:text-base md:block">
                    {{card.snippet }}
                </p>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['card'],
    }
</script>

<style scoped>
    .card {
        border: 1px solid black;
        background: rgb(243 244 246);
        overflow: hidden;
        box-shadow: 2rem;
        text-align: center;
        /* font-family: Arial, Helvetica, sans-serif; */
    }
    .header {
        font-size: 1.15rem;
    }
    .snippet {
        color: grey
    }
    .school {
    background-color: rgb(46, 31, 147);
    }
    .team {
    background-color: rgb(31, 147, 58);
    }
    .electronics {
    background-color: rgb(219, 170, 9);
    }
    .print {
    background-color: rgb(9, 219, 198);
    }
    .CAD {
    background-color: rgb(219, 9, 72);
    }
</style>