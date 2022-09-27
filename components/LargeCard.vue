<template>
    <router-link :to="card.url">
        <div class="border rounded px-4 border-black">
                <img class="mx-auto block" :src="require(`@/assets/cards/${card.image || 'Amogus.jpg'}`)" alt="">
                <h3 class="font-medium text-xl lg:text-lg">{{ card.title }}</h3>
                <p class="text-[0px] lg:text-base text-gray-500">
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
        width: 30%;
        height: 20%;
        border: 1px solid black;
        overflow: hidden;
        /* top | right | bottom | left */
        padding: .05rem .7rem .5rem .7rem;
        cursor: pointer;
        text-align: center;
        /* font-family: Arial, Helvetica, sans-serif; */
    }
    
    .image {
        height: 40%;
    }
    .header {
        font-size: 1.15rem;
        margin-top: 0.4rem;
    }
    .snippet {
        color: grey
    } 
</style>