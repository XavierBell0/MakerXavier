<template>
    <div class="card rounded-md shadow-lg flex max-h-64">
            <img class="inline-block max-w-xl max-h-64 xl:max-h-52 object-cover object-center" :src="require(`@/assets/Media/.MainCards/${card.image || 'Amogus.jpg'}`)" alt="">
            <div class="p-4">
               <span class="flex flex-auto justify-between flex-row">
                    <h3 class="font-medium text-base lg:text-lg">
                        {{ card.title }}
                    </h3>
                    <span>
                        <span class="group relative mx-1 inline-block h-4 w-4 rounded-full" :class="tag" v-for="tag in card.tags" v-bind:key="tag">
                            <span
                            class="pointer-events-none absolute -top-7 right-2 w-max rounded bg-gray-900 px-2 py-1 w-max text-sm
                            font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100"
                            >
                            {{tag}}
                            </span>
                        </span>
                    </span>
                </span>
                <p class="p-5 mt-2 mb-1 hidden font-normal text-sm md:text-xl md:block text-gray-700">
                    {{card.snippet }}
                </p>
            </div>
    </div>
</template>

<script>
    export default {
        props: ['card'],
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
</style>