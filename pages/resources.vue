<template>
    <div class="flex flex-col h-screen">
        <div>
            <BannerRes />
            <NavBar />
        </div>
        <br>
        <div class="mx-12 md:mx-32 lg:mx-64 mb-auto">
            <div class="p-3">
            <h1 class="text-3xl mb-2">
                HELPFUL LINKS
            </h1>
            <hr class="mb-2">
            <div class="ml-20">
                <span class="flex flex-auto justify-between">Helpful on literally all things drones
                    <div>
                        <a class="hover:underline text-blue-600" href="https://oscarliang.com/">Oscarliang</a>
                    </div>
                </span>
                <span class="flex flex-auto justify-between">Good chances someone's made it before and its on a CAD library
                    <div>
                        <a class="hover:underline text-blue-600" href="https://grabcad.com/library">GrabCAD, </a>
                        <a class="hover:underline text-blue-600" href="https://www.thingiverse.com/">Thingiverse</a>
                    </div>
                </span>
                <span class="flex flex-auto justify-between">Old but great for editting STLs downloaded from above. Fusion good too
                    <div>
                        <a class="hover:underline text-blue-600" href="https://www.meshmixer.com/">MeshMixer</a>
                    </div>
                </span>
                <span class="flex flex-auto justify-between">Powerful cloud-based CAD free for students - cleaner than SolidWorks
                    <div>
                        <a class="hover:underline text-blue-600" href="https://www.onshape.com/en/">Onshape</a>
                    </div>
                </span>
                <span class="flex flex-auto justify-between">Online Lithophane maker - just upload photo and configure 
                    <div>
                        <a class="hover:underline text-blue-600" href="https://lithophanemaker.com/">Lithophane Maker</a>
                    </div>
                </span>
            </div>
            </div>
            
            <div class="p-3">
            <h1 class="text-3xl mb-1">
                TIPS
            </h1>
            <p class="p-1 text-gray-500">
                Honestly these are mostly for my own reference later
            </p>
            <hr class="mb-2">
            <ol class="ml-20 list-decimal">
                <li>The time it takes to make a template or jig is always worth it</li>
                <li>3D print small test cases before screwing up the entire thing and having to reprint</li>
                <li>Everything takes at least twice as long as you expect</li>
                <li>Forum posts from over 10 years ago are your best friends</li>
                <li>Often the simpliest solution is also the best</li>
                <li>Start strong &#40;straight stock, square corners, clean install&#41; to finish strong</li>
                <li>Buy one extra</li>
                <li>Never 3D print a box</li>
                <li>Don't use 3D printer for a job done better by a laser cutter or woodworking tools</li>
                <li>Don't lean too hard on CAD</li>
                <li>Make sure your 3D print orientation is least time/least support</li>
                <li>The issue is always that the bed isn't level</li>
                <li>Use the right tool</li>
                <li>Take pride in your creations</li>

            </ol>
            </div>
        </div>
        <div class="mt-20">
                <Footer />
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>