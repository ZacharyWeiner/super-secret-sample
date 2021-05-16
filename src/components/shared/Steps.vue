<template>
  <div class="flow-root">
    <ul class="-mb-8">
      <li v-for="(event, eventIdx) in timeline" :key="event.id">
        <div class="relative pb-12">
          <span v-if="(eventIdx !== timeline.length - 1)" class="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="[event.iconBackground, 'h-12 w-12 rounded-full flex items-center justify-center ring-12 ring-white']">
                <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-lg text-gray-500 text-left">
                  {{ event.content }}
                </p>
                <p class="text-sm text-gray-500 text-left">
                  {{ event.subtext }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { GiftIcon, KeyIcon, PencilIcon, SparklesIcon } from '@heroicons/vue/solid'

const timeline = [
  {
    id: 1,
    content: 'Take The Journey',
    //target: 'Front End Developer',
    //href: '#',
    //date: 'Sep 20',
    //datetime: '2020-09-20',
    subtext: "Each game is a unique journey through a story.  At every stage you'll be presented with a decision. Every decision will progress your journey.",
    icon: SparklesIcon,
    iconBackground: 'bg-purple-400',
  },
  {
    id: 2,
    content: 'Write Your Story For Eternity',
    subtext: "At the end of your journey, you'll be presented the opportunity to store your answers on the blockchain forever. After you save your answers, the game can check if you've won.", 
    icon: PencilIcon,
    iconBackground: 'bg-pink-500',
  },
  {
    id: 3,
    content: 'Unlock The Puzzle',
    subtext: "Every game has a finite set of possible answers. Only one combination of answers, in the right order, will unlock the puzzle. To check if you've won it'll cost a few Duros, if you didnt win at least 50% of those Duros go into the games purse. ",
    icon: KeyIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 4,
    content: 'Win The Game',
    subtext: "Each game is both a puzzle and a purse. When you are the first to save the winning journey on the blockchain, the game will end, other players can no longer play, ownership of the game and all its remaining UXTOs (Duros/satoshis) are transferred to you.",
    icon: GiftIcon,
    iconBackground: 'bg-green-500',
  },
]

export default {
  setup() {
    return {
      timeline,
    }
  },
}
</script>