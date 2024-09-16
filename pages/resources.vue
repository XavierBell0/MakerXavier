<template>
    <div class="flex flex-col h-screen">
        <div class="md:block hidden">
            <BannerRes />
        </div>
        <div>
            <NavBar />
        </div>
        <br>
        <div class="mx-2 md:mx-40 lg:mx-72 mb-auto">
            <div class="p-3">
            <h1 class="text-3xl mb-2">
                HELPFUL LINKS
            </h1>
            <hr class="mb-2">
            <div class="ml-5 md:ml-16">
                <span class="grid grid-cols-4 md:flex md:flex-auto justify-between p-1">
                    <p class="grid col-span-3">Helpful on literally all things drones</p>
                    <div class="ml-2 col-span-1">
                        <a class="hover:underline text-blue-600" href="https://oscarliang.com/">Oscarliang</a>
                    </div>
                </span>
                <hr class="block sm:hidden">
                <span class="grid grid-cols-4 md:flex md:flex-auto justify-between p-1">
                    <p class="col-span-3">Good chances someone's made it before and its on a CAD library</p>
                    <div class="ml-2 col-span-1">
                        <a class="hover:underline text-blue-600" href="https://grabcad.com/library">GrabCAD,</a>
                        <a class="hover:underline text-blue-600" href="https://www.thingiverse.com/">Thingiverse</a>
                    </div>
                </span>
                <hr class="block sm:hidden">
                <span class="grid grid-cols-4 md:flex md:flex-auto justify-between p-1">
                    <p class="col-span-3">Old but great for editting STLs downloaded from above. Fusion 360 is newer</p>
                    <div class="ml-2 col-span-1">
                        <a class="hover:underline text-blue-600" href="https://www.meshmixer.com/">MeshMixer</a>
                    </div>
                </span>
                <hr class="block sm:hidden">
                <span class="grid grid-cols-4 md:flex md:flex-auto justify-between p-1">
                    <p class="col-span-3">Powerful online cloud-based CAD free for students - cleaner than SolidWorks</p>
                    <div class="ml-2 col-span-1">
                        <a class="hover:underline text-blue-600" href="https://www.onshape.com/en/">Onshape</a>
                    </div>
                </span>
                <hr class="block sm:hidden">
                <span class="grid grid-cols-4 md:flex md:flex-auto justify-between p-1">
                    <p class="col-span-3">Online Lithophane maker - just upload photo and configure </p>
                    <div class="ml-2 col-span-1">
                        <a class="hover:underline text-blue-600" href="https://lithophanemaker.com/">Lithophane Maker</a>
                    </div>
                </span>
                <hr class="block sm:hidden">
                <span class="grid grid-cols-4 md:flex md:flex-auto justify-between p-1">
                    <p class="col-span-3">A general 3D printers Wiki including useful terminology and interesting applications</p>
                    <div class="ml-2 col-span-1">
                        <a class="hover:underline text-blue-600" href="https://www.uprinting.com/guide-to-3d-printing.html">UPrinting Guides</a>
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
            <ol class="ml-8 md:ml-20 list-decimal">
                <li>Everything takes at least twice as longs you expect</li>
                <li>Take pride in your creations</li>
                <li>Don't have pet ideas</li>
                <li>Brainstorm for longer than you want</li>
                <li>Gain perspective on your problem</li>
                <li>Depth first search the first prototype, optimize later</li>
                <li>Think of crazy ideas - some might have a useful realistic element</li>
                <li>Abstract the concept of an idea during the brainstorming</li>
                <li>Spend a lot of time in CAD before manufacturing final parts</li>
                <li>The time it takes to make a template or jig is almost always worth it</li>
                <li>3D print small test cases before screwing up the entire thing and having to reprint</li>
                <li>Forum posts from over 10 years ago are your best friends</li>
                <li>Often the simpliest solution is also the best</li>
                <li>Start strong &#40;straight stock, square corners, clean install&#41; to finish strong</li>
                <li>Buy one extra</li>
                <li>Never 3D print a box</li>
                <li>Don't use 3D printer for a job done better by a laser cutter or woodworking tools</li>
                <li>Don't lean too hard on CAD</li>
                <li>The issue is always that the 3D printer bed isn't level</li>
                <li>Use the right tool</li>
                <li>Carry a screw up all the way through - find what lessons you learn at the end of the process</li>
                <li>Depth first search the first prototype, optimize later</li>
                <li>Choose as few reference points for dimensioning as possible (tolerance stackup)</li>

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
.mdwrap{
 display: flex;
 flex: 1 1 auto;
 justify-content: space-between;
}
.smwrap{
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
}
</style>