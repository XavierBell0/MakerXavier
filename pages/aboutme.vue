<template>
    <div>
        <div>
            <NavBar />
        </div>
        <div class="flex flex auto mx-12 md:mx-32 lg:mx-50 mt-12">
            <img class="max-w-xl p-2" src="~/assets/Media/MountainMe.jpg">
            <div class="mx-24 block mt-4">
                <span class="flex flex-auto justify-between">
                    <h1 class="text-5xl font-normal">
                    XAVIER | BELL
                    </h1>
                    <span>
                        zoro at mit dot edu
                    </span>
                </span>
                
                <p class="mt-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet massa vitae congue. Phasellus a pharetra magna,
                tincidunt lacinia augue. Vestibulum non quam eu urna suscipit lobortis. Sed mattis et justo quis volutpat. Pellentesque laoreet
                 nunc a porttitor interdum. Proin tellus elit, euismod in tincidunt sed, rutrum ut odio. Donec pulvinar faucibus viverra. Curabitur
                  quis urna lacus. Integer facilisis arcu purus, et blandit leo faucibus vitae. Sed eget lacinia lorem. Pellentesque aliquam purus
                   non metus lacinia, quis ornare nisi ullamcorper. Mauris lobortis aliquam mattis. Vivamus in vehicula magna, vitae vulputate purus.

                Cras at libero sit amet nunc feugiat vehicula. Proin condimentum felis a ipsum eleifend, id ultrices neque ornare. Morbi at accumsan
                 nibh. Praesent tincidunt semper ex in porttitor. Curabitur viverra ex eros, sed pharetra sem vehicula sed. Nunc tincidunt fringilla
                  mi quis hendrerit. Suspendisse sit amet orci eget arcu pellentesque tincidunt id condimentum nunc. Duis dapibus ex eget libero malesuada,
                   id malesuada mauris scelerisque. Integer tristique congue nibh, nec sodales ex faucibus ut.
            </p>
            </div>
        </div>
        <div class="mt-20">
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
    export default {
  components: { Footer },
        
    }
</script>

<style scoped>

</style>