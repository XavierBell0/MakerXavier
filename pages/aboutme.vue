<template>
    <div class="flex flex-col h-screen">
        <div class="md:block hidden">
            <BannerRes />
        </div>
        <div>
            <NavBar />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 mx-8 md:mx-32 lg:mx-50 mt-8 mb-auto">
            <img class="p-2 mx:10 lg:col-span-1" src="~/assets/Media/RobotOnHead.jpeg">
            <div class="mt-4 lg:col-span-2 md:mr-16">
                <span class="flex flex-wrap sm:flex-auto justify-between">
                    <h1 class="text-5xl font-normal">
                    XAVIER | BELL
                    </h1>
                    <span class="flex mr-5">
                             <a target="_blank" href="mailto:zoro@mit.edu" class="py-3 mx-2 grow-0 transition-shadow">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/xavier-bell-810377236" class="py-3 mx-2 transition-shadow">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a target="_blank" href="https://github.com/XavierBell0" class="py-3 mx-2 transition-shadow">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                    </span>
                </span>
                <br>
                <hr>
                <p class="mt-8">
                Hello! I am currently a senior at MIT studying Mechanical Engineering with a minor in Computer Science and with a focus on Autonomous Machines through MIT's NEET program. I
                am also a Gordan Engineering Leadership Scholar which is a leader development program that focuses on being an effective member or leader
                of industry engineering teams.
                My dream is to make space robots. I also like medical devices, drones, additive manufacturing, autonomous control, and gesture controlled robotics. I have 
                experience in many fields from the various projects I have completed. I want to keep creating cool projects, either because I find them aesthetically
                appealing or functionally so &#40;sometimes both&#41;. When I'm not making robots or doing MIT work, I like playing basketball, making music,
                traveling, anime, going on seriously long walks &#40;like across RI&#41;, hiking, and stargazing. I have lived in Australia and Colorado so 
                talk to me about beaches or mountains and I'll say I've seen better.
                </p>
            <br>
            <p>
            If you would like to learn more about me, click on the icons above or contact me at zoro at mit dot edu
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