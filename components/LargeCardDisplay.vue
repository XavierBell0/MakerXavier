<template>
    <div class="text-center">
        <h4 class="header">
            {{ cardsSection.title }}
        </h4>
        <p class="snippet" >
            {{ cardsSection.snippet }}
        </p>
        <div class="grid grid-cols-2 justify-center lg:grid-cols-4 gap-4 mx-16">
             <LargeCard
                v-for="card in cardsSection.cards"
                :key="card.id"
                :card="card"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cardsSection']
    }
</script>

<style scoped>
 .container {
    /* margin-top: 2rem; */
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

.header {
    font-weight: 700;
    font-size: 1.5rem;
}
.snippet {
    color: grey;
    margin-bottom: 1.5rem;
}
/* .cards-container {
    display: flex;
    justify-content: space-evenly;
} */
</style>