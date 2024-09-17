<template>
    <div :class="['card rounded-md shadow-lg', cardClass]">
        <img class="block w-full max-h-72 object-cover object-center" :src="require(`@/assets/Media/.MainCards/${card.image || 'Amogus.jpg'}`)" alt="">
        <div class="p-4">
            <span class="flex flex-auto justify-center flex-row">
                <h3 class="font-medium text-base lg:text-lg">
                    {{ card.title }}
                </h3>
                <span>
                    <!-- <span class="group relative mx-1 inline-block font-normal text-base lg:text-lg">
                        {{ card.date }}
                    </span> -->
                </span>
            </span>
            <p class="mt-2 mb-1 font-normal text-sm md:text-base md:block text-gray-700">
                {{card.snippet }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['card'],
    computed: {
        cardClass() {
            return this.card.importance === 2 ? 'lg:col-span-2' : '';
        }
    }
}
</script>

<style scoped>
    .card {
        border: 1px dashed slategray;
        background: rgb(243 244 246);
        overflow: hidden;
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
    .col-span-2 {
        grid-column: span 2;
    }
</style>