<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="game in games" :key="game.location" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div class="flex-1 flex flex-col p-8">
        <img class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" :src="game.details.gameImgUrl" alt="" />
        <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ game.details.title }}</h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dt class="sr-only">Category</dt>
          <dd v-if="game.details.description" class="text-gray-500 text-sm">{{ game.details.description.substring(0, 80) + "..." }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ game.satoshis/500 }} Duros</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`/play-game?id=${game.location}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <PlayIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Play</span>
            </a>
          </div>
          <!-- <div class="-ml-px w-0 flex-1 flex">
            <a :href="`tel:${person.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Call</span>
            </a>
          </div> -->
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {  PlayIcon } from '@heroicons/vue/solid'
import {  reactive, toRefs } from 'vue'
export default {
  components: {
    PlayIcon
  },
  setup (props) {
        const state = reactive({
            games: props.games
        })
    
        return {
            ...toRefs(state),
        }
    },
  props: {
    games: Array
  },
}
</script>