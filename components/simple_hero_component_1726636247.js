<!--
INSTRUCTION: Summary: The hero component contains the following two parts:
INSTRUCTION: - To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
INSTRUCTION: - To the right: There is an image relevant to the app.
-->

<template>
    <section id="hero-section" style="min-height: 710px" class="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex-1" ><div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28" style=""><div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg" style=""><div id="hero-title-container-text" class="flex" style=""><h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white" style="">Bolt Up with the Ultimate Chargers Fan Experience</h1></div> <div id="hero-subtitle-container" class="flex" style=""><p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-pink-100 lg:mb-8 md:text-lg lg:text-xl" style="" data-mf-new="true">Connect, Celebrate, and Cheer for the Los Angeles Chargers Like Never Before's</p></div> <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4" style=""><div id="hero-button-1-container" class="flex"><a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-purple-900 bg-pink-300 bg-opacity-70 rounded-lg sm:w-auto hover:bg-pink-400 hover:bg-opacity-80 focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out">Join the Bolt Brigade</a></div> <div id="hero-button-2-container" class="flex" style=""><a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-pink-100 bg-purple-600 bg-opacity-50 rounded-lg sm:w-auto hover:bg-purple-700 hover:bg-opacity-70 focus:ring-4 focus:ring-purple-500 transition duration-300 ease-in-out" style="" data-mf-new="true">Exploring The World</a></div></div></div> <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex" style=""><img id="hero-image" src="https://makeinfinite-mentat-dev.azurewebsites.net/get_image/Chargers_Creation_App_1726635544/hero.png" alt="hero image" class="rounded-lg shadow-lg" style=""></div></div></section>
</template>

<script>
export default {
    name: "SimpleHeroComponent",
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
