<template>
    <div>
        <div class="relative bg-gray-800">
            <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/t42BuA-aCmbaku5z613Yc8n7uZoPCe-UrcuoWb1JfG5EO1oTrHJxktYRoVRpS6_sYjF2JHwsfGmt3sh94PH125pSTku5uM4Uu95hurvi=s1600" alt="" />
            </div>
            <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
                <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Earn Cred Just For Playing
                </h2>
                <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Every Play becomes an NFT 
                </p>
                <p class="mt-3 text-lg text-gray-300">
                    Dont count on them being worth money, but as you accumulate answer NFTs new privilges will be unlocked. They might even be used to vote on new features. 
                </p>
                <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                    <a href="/profile" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Get Started 
                    <CashIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {  CashIcon } from "@heroicons/vue/outline";

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    },
    components:{
        CashIcon
    }
}
</script>

<style lang="scss" scoped>

</style>