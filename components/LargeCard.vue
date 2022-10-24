<template>
    <router-link :to="card.url">
        <div class="card rounded-md">
                <img class="block w-full max-h-80 object-cover object-center" :src="require(`@/assets/Media/.MainCards/${card.image || 'Amogus.jpg'}`)" alt="">
                <div class="p-4">
                    <span class="flex flex-auto justify-between flex-row">
                        <h3 class="font-medium text-base lg:text-lg">
                            {{ card.title }}
                        </h3>
                        <span>
                            <span class="mx-1 inline-block h-4 w-4 rounded-full" :class="tag" v-for="tag in card.tags" v-bind:key="tag"></span>
                        </span>
                    </span>
                    <p class="mt-2 mb-1 hidden font-normal text-sm md:text-base md:block text-gray-700">
                        {{card.snippet }}
                    </p>
                </div>
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
    .art {
    background-color: #457B9D;
    }
    .code {
    background-color: #264653;
    }
    .team {
    background-color: #2A9DAF;
    }
    .electronics {
    background-color: #E9C46A;
    }
    .CAD {
    background-color: #F4A261;
    }
    .research {
    background-color: #E76F51;
    }
    .woodworking {
    background-color: #AE2012;
    }
</style>