<template>
<div> 
     <div class="flex w-full grid  p-2 m-2">
        <div class='text-4xl text-indigo-700'>Tell Me Bout Your Gopnik </div>
     </div>
    <div class="flex w-full grid  p-2 m-2">
        <div class="p-2 m-2">
            <Listbox as="div" v-model="selectedFace">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                <div class="text-2xl">Face: {{selectedFace.rarity}}</div>
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedFace.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="face in faces" :key="face.name" :value="face" v-slot="{ active, selectedFace }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedFace ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ face.name }}
                        </span>

                        <span v-if="selectedFace" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox>    
        </div>
    </div>
    <div class=" w-full md:flex md:grid grid-cols-3 p-2 m-2">
        <div class="col-span-1 p-2 m-2">
            <Listbox as="div" v-model="selectedBackground">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Background: {{selectedBackground.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedBackground.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="background in backgrounds" :key="background.name" :value="background" v-slot="{ active, selectedBackground }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedBackground ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ background.name }}
                        </span>

                        <span v-if="selectedBackground" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox>    
        </div>
        <div class="col-span-1 p-2 m-2">
            <Listbox as="div" v-model="selectedPants">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Pants: {{selectedPants.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedPants.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="pant in pants" :key="pant.name" :value="pant" v-slot="{ active, selectedPants }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedPants ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ pant.name }}
                        </span>

                        <span v-if="selectedPants" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox> 
        </div>
        <div class="col-span-1 p-2 m-2">
            <Listbox as="div" v-model="selectedUpperbody">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Upperbody: {{selectedUpperbody.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedUpperbody.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="body in upperbody" :key="body.name" :value="body" v-slot="{ active, selectedUpperbody }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedUpperbody ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ body.name }}
                        </span>

                        <span v-if="selectedUpperbody" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox> 
        </div>
    </div>
     <div class="w-full md:flex md:grid md:grid-cols-4 p-2 m-2 shadow-xl">
         <div class=" p-2 m-2">
             <Listbox as="div" v-model="selectedHands">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Hands: {{selectedHands.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedHands.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="hand in hands" :key="hand.name" :value="hand" v-slot="{ active, selectedHands }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedHands ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ hand.name }}
                        </span>

                        <span v-if="selectedHands" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox> 
         </div>
         <div class="col-span-1 p-2 m-2">
             <Listbox as="div" v-model="selectedFaceElm">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Face Element: {{selectedFaceElm.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedFaceElm.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="elm in face_elements" :key="elm.name" :value="elm" v-slot="{ active, selectedFaceElm }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedFaceElm ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ elm.name }}
                        </span>

                        <span v-if="selectedFaceElm" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox> 
         </div>
         <div class="col-span-1 p-2 m-2">
             <Listbox as="div" v-model="selectedHead">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Head: {{selectedHead.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedHead.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="head in heads" :key="head.name" :value="head" v-slot="{ active, selectedHead }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedHead ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ head.name }}
                        </span>

                        <span v-if="selectedHead" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox> 
         </div>
         <div class="col-span-1 p-2 m-2">
             <Listbox as="div" v-model="selectedGlasses">
                <ListboxLabel class="block text-sm font-medium text-gray-700">
                Glasses: {{selectedGlasses.rarity}}
                </ListboxLabel>
                <div class="mt-1 relative">
                <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span class="block truncate">{{ selectedGlasses.name }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="glasses in sunglasses" :key="glasses.name" :value="glasses" v-slot="{ active, selectedGlasses }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                        <span :class="[selectedGlasses ? 'font-semibold' : 'font-normal', 'block truncate']">
                            {{ glasses.name }}
                        </span>

                        <span v-if="selectedGlasses" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox> 
         </div>
     </div>
    <div class="w-full md:flex mb-4 shadow-xl ">
        <div class="text-3xl flex-grow text-gray-700 p-1 m-1 "> UNIQ Score: <br/> <span class='text-4xl text-indigo-700'>{{totalRarity}} </span> </div>
        <div class="text-3xl flex-grow p-1 m-1 "> Dopeness Score: <br/> <span class='text-4xl text-indigo-700'>{{coolScore.score}} </span> </div>
        <div class="text-3xl flex-grow p-1 m-1 "> Avg Rarez: <br/> <span class='text-4xl text-indigo-700'>{{averageRarity}} </span> </div>
    </div>

    <div class="w-full">
        <div class="grid grid-cols-3 items-center">
            <div class="col-span-1"></div>
            <div class="col-span-1">
                Tips Me Plz<i calss="fa fa-right-arrow"></i>
                
            </div>
            <div class='col-span-1' style="margin-top:-115px; margin-left:-144px"> 
                <clappy-button touserid="278" ></clappy-button>
            </div>
        </div>
    </div>
        <div> {{coolScore.description}}</div>
    <div class='w-full p-2 m-2 pt-6'>
        Send Me BSV / TSC / ETC...: <span class='bold'>1NVZHRegc5nYXBthaZ51FfX5MYY1D8m4er </span>
    </div>
      <div class='w-full pb-2'>
       Send Me NFTs: ZackWins@relayx.io
        
    </div>
     <div class='w-full p-2 m-2 ' >
          <div class="text-3xl undeline pb-4"> The Secret Legend </div>
         <div class="flex flex-col-reverse flex-grow">
            
            <div> 10 percentile = 88.3959259259 </div>
            <div> 20 percentile = 89.5555555556 </div>
            <div> 30 percentile = 90.5655555556 </div>
            <div> 40 percentile = 91.4333333333 </div>
            <div> 50 percentile = 92.1962962963 </div>
            <div> 60 percentile = 93.7540104653 </div>
            <div> 70 percentile = 96.3939063669 </div>
            <div> 80 percentile = 98.0198875076 </div>
            <div> 90 percentile = 99.114092422 </div>
            <div> 95 percentile = 99.550795326961435 </div>
            <div> 99 percentile = 99.78689115635629 </div>
         </div>
         <!-- <div class="flex flex-grow"></div> -->
          <!-- <div class="flex flex-col-reverse">
            <div> 10 percentile = 88.3959259259 </div>
            <div> 20 percentile = 89.5555555556 </div>
            <div> 30 percentile = 90.5655555556 </div>
            <div> 40 percentile = 91.4333333333 </div>
            <div> 50 percentile = 92.1962962963 </div>
            <div> 60 percentile = 93.7540104653 </div>
            <div> 70 percentile = 96.3939063669 </div>
            <div> 80 percentile = 98.0198875076 </div>
            <div> 90 percentile = 99.114092422 </div>
            <div> 95 percentile = 99.550795326961435 </div>
            <div> 99 percentile = 99.78689115635629 </div>
         </div> -->
    </div>
    <div class='w-full flex'>
        <div class='flex-grow'></div>
        <div class='flex-grow'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRroxTRMWORyknNnya4Qgj86UK0mdXwJxK0_Tkmxqc4z-bRg/viewform?embedded=true" width="640" height="1893" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <div class='flex-grow'></div>
        
    </div>
  
        
</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
let backgrounds = [
    {'name':'Red', 'rarity': 0.18666666666666668},
    {'name': 'Purple', 'rarity': 0.19},
    {'name': 'Blue', 'rarity': 0.197},
    {'name': 'Yellow', 'rarity': 0.20133333333333333},
    {'name': 'Green', 'rarity': 0.185},
    {'name': 'Radioactive', 'rarity': 0.021333333333333333},
    {'name': 'Radioactive Pink', 'rarity': 0.01866666666666667},
    ]
let pants = [
    {'name': 'Houndstooth', 'rarity': 0.023666666666666667},
    {'name': 'Black Dotted', 'rarity': 0.035666666666666664},
    {'name': 'Red Dotted', 'rarity': 0.031},
    {'name': 'Yellow', 'rarity': 0.05566666666666667},
    {'name': 'Orange', 'rarity': 0.058999999999999995},
    {'name': 'Pink Dotted', 'rarity': 0.027666666666666666},
    {'name': 'Flames', 'rarity': 0.02433333333333333},
    {'name': 'Red Cube', 'rarity': 0.03266666666666666},
    {'name': 'Black Cube', 'rarity': 0.03733333333333334},
    {'name':'Blue Dotted', 'rarity':  0.028666666666666667},
    {'name':'Yellow Cube', 'rarity':  0.03166666666666667},
    {'name':'Green Cube', 'rarity':  0.032},
    {'name':'Yellow Dotted', 'rarity':  0.027333333333333334},
    {'name':'Zebra', 'rarity':  0.022333333333333334},
    {'name':'Green', 'rarity':  0.053},
    {'name':'Jaguar', 'rarity':  0.020666666666666664},
    {'name':'Black', 'rarity':  0.05566666666666667},
    {'name':'Orange Dotted', 'rarity':  0.03166666666666667},
    {'name':'Blue', 'rarity':  0.05933333333333334},
    {'name':'Special', 'rarity':  0.021333333333333333},
    {'name':'Pink', 'rarity':  0.06166666666666667},
    {'name': 'Birds', 'rarity': 0.02},
    {'name': 'Pink Cube', 'rarity': 0.034000000000000004},
    {'name': 'Red', 'rarity': 0.05766666666666667},
    {'name': 'Green Dotted', 'rarity': 0.029000000000000004},
    {'name': 'Blue Cube', 'rarity': 0.035666666666666664},
    {'name': 'Fish', 'rarity': 0.023333333333333335},
    {'name': 'Orange Cube', 'rarity': 0.023333333333333335},
    {'name': 'Briefs', 'rarity': 0.0046666666666666673},
]

let upperbody = [
    {'name': 'Hoodie Black', 'rarity': 0.054},
    {'name': 'Hoodie Black Cube', 'rarity': 0.034000000000000004},
    {'name': 'Hoodie Pink Dotted', 'rarity': 0.03733333333333334},
    {'name': 'Hoodie Yellow', 'rarity': 0.05133333333333334},
    {'name': 'Hoodie Orange Cube', 'rarity': 0.032},
    {'name': 'Hoodie Green', 'rarity': 0.055},
    {'name': 'Hoodie Red', 'rarity': 0.05533333333333333},
    {'name': 'Hoodie Blue Cube', 'rarity': 0.034333333333333336},
    {'name': 'Hoodie Red Dotted', 'rarity': 0.029000000000000004},
    {'name': 'Hoodie Orange Dotted', 'rarity': 0.030666666666666664},
    {'name': 'Hoodie Yellow Cube', 'rarity': 0.029000000000000004},
    {'name': 'Leather Jaket Black', 'rarity': 0.005666666666666667},
    {'name': 'Hoodie Blue', 'rarity': 0.052},
    {'name': 'Hoodie Yellow Dotted', 'rarity': 0.033666666666666663},
    {'name': 'Hoodie Green Dotted', 'rarity': 0.03266666666666666},
    {'name': 'Mustard Stain', 'rarity':  0.005333333333333333},
    {'name': 'Hoodie Pink Cube', 'rarity':  0.037666666666666666},
    {'name': 'Hoodie Flames', 'rarity':  0.019333333333333333},
    {'name': 'Hoodie Pink', 'rarity':  0.05033333333333333},
    {'name': 'Hoodie Red Cube', 'rarity':  0.034000000000000004},
    {'name': 'Hoodie Black Dotted', 'rarity':  0.033333333333333335},
    {'name': 'Hoodie Special', 'rarity':  0.021},
    {'name': 'Golden Cross', 'rarity':  0.005666666666666667},
    {'name': 'Body Hair', 'rarity':  0.0046666666666666673},
    {'name': 'Hoodie Jaguar', 'rarity':  0.022333333333333334},
    {'name': 'Hoodie Fish', 'rarity':  0.021333333333333333},
    {'name': 'Hoodie Orange', 'rarity':  0.056000000000000005},
    {'name': 'Hoodie Green Cube', 'rarity':  0.030666666666666664},
    {'name': 'Leather Jaket Brown', 'rarity':  0.007666666666666666},
    {'name': 'Hoodie Houndstooth', 'rarity': 0.021},
    {'name': 'Hoodie Zebra', 'rarity': 0.017666666666666668},
    {'name': 'Hoodie Blue Dotted', 'rarity': 0.02566666666666667},
    {'name': 'Chains', 'rarity': 0.0036666666666666664},
    {'name': 'Blood Stain', 'rarity': 0.007000000000000001},
    {'name': 'None', 'rarity': 0.0046666666666666673},
    {'name': 'Marine Top', 'rarity': 0.005},
]
let hands = [
    {'name':'Bottle Green Liquid', 'rarity':  0.04366666666666666},
    {'name':'AK47', 'rarity':  0.046},
    {'name':'Metal Crow Bar', 'rarity':  0.06333333333333334},
    {'name':'KBAC', 'rarity':  0.07433333333333334},
    {'name':'Empty', 'rarity':  0.012},
    {'name':'Gopnokia Phone', 'rarity':  0.06933333333333333},
    {'name':'Bottle Blue Liquid', 'rarity':  0.05166666666666667},
    {'name':'Cigarette', 'rarity':  .10433333333333334},
    {'name':'Bottle Red Liquid', 'rarity':  0.03833333333333333},
    {'name':'Cigar', 'rarity':  0.06966666666666667},
    {'name':'Vodka', 'rarity':  0.07199999999999999},
    {'name':'Joint', 'rarity':  0.07333333333333333},
    {'name':'Bottle Purple Liquid', 'rarity':  0.04833333333333333},
    {'name':'Sunseeds Cone', 'rarity':  0.06800000000000001},
    {'name':'Bottle Pink Liquid', 'rarity':  0.04466666666666667},
    {'name':'Butterfly Knife', 'rarity':  0.06633333333333333},
    {'name':'Bottle Magic Liquid', 'rarity':  0.010666666666666667},
    {'name':'Bottle Yellow Liquid', 'rarity':  0.043999999999999995},
]

let faces = [
    {'name': 'IGOR Blue Orange Eyes with Beard', 'rarity': 0.005666666666666667},
{'name': 'BORIS Green Eyes with Punch', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Brown Eyes Drunk', 'rarity': 0.005333333333333333},
{'name': 'VLAD Blue Orange Eyes with Scar', 'rarity': 0.006333333333333333},
{'name': 'CHAD Pink Blue Eyes', 'rarity': 0.004},
{'name': 'BORIS Yellow Eyes with Punch', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Green Eyes', 'rarity': 0.006},
{'name': 'BORIS Pink Blue Eyes Drunk', 'rarity': 0.005666666666666667},
{'name': 'VLAD Green Eyes with Scar', 'rarity': 0.005},
{'name': 'IGOR Green Eyes with Eyebags', 'rarity': 0.007333333333333333},
{'name': 'VLAD Yellow Eyes with Golden Tooth', 'rarity': 0.0033333333333333337},
{'name': 'BORIS Yellow Eyes Drunk', 'rarity': 0.005666666666666667},
{'name': 'CHAD Blue Eyes with Punch', 'rarity': 0.006333333333333333},
{'name': 'IGOR Blue Eyes with Scar', 'rarity': 0.007333333333333333},
{'name': 'IGOR Green Eyes Drunk', 'rarity': 0.006333333333333333},
{'name': 'VLAD Blue Orange Eyes with Golden Tooth', 'rarity': 0.005333333333333333},
{'name': 'IGOR Blue Orange Eyes with Pumch', 'rarity': 0.005666666666666667},
{'name': 'BORIS Purple Eyes with Beard', 'rarity': 0.006},
{'name': 'VLAD Blue Eyes with Beard', 'rarity': 0.005333333333333333},
{'name': 'CHAD Blue Orange Eyes with Scar', 'rarity': 0.005333333333333333},
{'name': 'CHAD Blue Orange Eyes with Punch', 'rarity': 0.007666666666666666},
{'name': 'IGOR Green Eyes with Gold Tooth', 'rarity': 0.007666666666666666},
{'name': 'IGOR Purple Eyes with Beard', 'rarity': 0.006333333333333333},
{'name': 'IGOR Blue Eyes', 'rarity': 0.0046666666666666673},
{'name': 'CHAD Yellow Eyes', 'rarity': 0.007333333333333333},
{'name': 'IGOR Blue Eyes with Eyebags', 'rarity': 0.0033333333333333337},
{'name': 'IGOR Green Eyes with Scar', 'rarity': 0.004},
{'name': 'BORIS Blue Eyes with Scar', 'rarity': 0.006333333333333333},
{'name': 'CHAD Green Eyes with Golden Tooth', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Yellow Eyes', 'rarity': 0.006},
{'name': 'BORIS Purple Eyes with Eyebags', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Blue Eyes Drunk', 'rarity': 0.006666666666666667},
{'name': 'BORIS Brown Eyes with Eyebags', 'rarity': 0.005666666666666667},
{'name': 'VLAD Blue Eyes with Golden Tooth', 'rarity': 0.004333333333333333},
{'name': 'VLAD Blue Orange Eyes Drunk', 'rarity': 0.006},
{'name': 'VLAD Yellow Eyes with Scar', 'rarity': 0.004},
{'name': 'VLAD Blue Orange Eyes with Beard', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Purple Eyes', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Brown Eyes', 'rarity': 0.003},
{'name': 'CHAD Purple Eyes with Golden Tooth', 'rarity': 0.007333333333333333},
{'name': 'VLAD Green Eyes', 'rarity': 0.004},
{'name': 'VLAD Blue Eyes with Punch', 'rarity': 0.004333333333333333},
{'name': 'IGOR Blue Orange Eyes with Scar', 'rarity': 0.005},
{'name': 'CHAD Pink Blue Eyes with Beard', 'rarity': 0.005},
{'name': 'IGOR Brown Eyes with Punch', 'rarity': 0.0046666666666666673},
{'name': 'CHAD Blue Eyes with Eyebags', 'rarity': 0.004333333333333333},
{'name': 'BORIS Green Eyes with Scar', 'rarity': 0.005},
{'name': 'CHAD Brown Eyes with Golden Tooth', 'rarity': 0.006},
{'name': 'IGOR Yellow Eyes with Eyebags', 'rarity': 0.005666666666666667},
{'name': 'VLAD Yellow Eyes with Punch', 'rarity': 0.005666666666666667},
{'name': 'BORIS Green Eyes with Golden Tooth', 'rarity': 0.0036666666666666664},
{'name': 'BORIS Pink Blue Eyes with Golden Tooth', 'rarity': 0.008},
{'name': 'BORIS Purple Eyes with Scar', 'rarity': 0.004333333333333333},
{'name': 'BORIS Blue Eyes Drunk', 'rarity': 0.005333333333333333},
{'name': 'CHAD Yellow Eyes with Golden Tooth', 'rarity': 0.005666666666666667},
{'name': 'VLAD Yellow Eyes', 'rarity': 0.005},
{'name': 'CHAD Yellow Eyes with Beard', 'rarity': 0.008333333333333334},
{'name': 'IGOR Yellow Eyes with Gold Tooth', 'rarity': 0.005},
{'name': 'BORIS Blue Eyes with Punch', 'rarity': 0.005666666666666667},
{'name': 'CHAD Pink Blue Eyes with Scar', 'rarity': 0.005333333333333333},
{'name': 'BORIS Blue Orange Eyes', 'rarity': 0.007000000000000001},
{'name': 'IGOR Blue Orange Eyes', 'rarity': 0.007333333333333333},
{'name': 'BORIS Purple Eyes with Golden Tooth', 'rarity': 0.008333333333333334},
{'name': 'IGOR Pink Blue Eyes with Gold Tooth', 'rarity': 0.005},
{'name': 'IGOR Pink Blue Eyes with Punch', 'rarity': 0.006},
{'name': 'CHAD Yellow Eyes with Punch', 'rarity': 0.006333333333333333},
{'name': 'IGOR Purple Eyes with Scar', 'rarity': 0.005333333333333333},
{'name': 'IGOR Purple Eyes with Gold Tooth', 'rarity': 0.005333333333333333},
{'name': 'IGOR Yellow Eyes Drunk', 'rarity': 0.005333333333333333},
{'name': 'VLAD Green Eyes with Punch', 'rarity': 0.006333333333333333},
{'name': 'CHAD Blue Eyes with Scar', 'rarity': 0.007666666666666666},
{'name': 'VLAD Green Eyes with Eyebags', 'rarity': 0.005},
{'name': 'CHAD Blue Orange Eyes Drunk', 'rarity': 0.005666666666666667},
{'name': 'BORIS Yellow Eyes with Golden Tooth', 'rarity': 0.005333333333333333},
{'name': 'VLAD Brown Eyes', 'rarity': 0.006},
{'name': 'BORIS Yellow Eyes with Beard', 'rarity': 0.005333333333333333},
{'name': 'IGOR Purple Eyes Drunk', 'rarity': 0.0036666666666666664},
{'name': 'BORIS Pink Blue Eyes with Scar', 'rarity': 0.0046666666666666673},
{'name': 'VLAD Blue Orange with Eyebags', 'rarity': 0.004333333333333333},
{'name': 'VLAD Pink Blue Eyes with Golden Tooth', 'rarity': 0.005},
{'name': 'BORIS Purple Eyes with Punch', 'rarity': 0.007000000000000001},
{'name': 'CHAD Pink Blue Eyes Drunk', 'rarity': 0.006},
{'name': 'BORIS Purple Eyes Drunk', 'rarity': 0.006666666666666667},
{'name': 'CHAD Yellow Eyes with Scar', 'rarity': 0.007333333333333333},
{'name': 'CHAD Blue Orange Eyes', 'rarity': 0.005333333333333333},
{'name': 'CHAD Purple Eyes with Scar', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Blue Orange Eyes Drunk', 'rarity': 0.008666666666666666},
{'name': 'BORIS Purple Eyes', 'rarity': 0.0033333333333333337},
{'name': 'VLAD Pink Blue Eyes with Scar', 'rarity': 0.0036666666666666664},
{'name': 'VLAD Yellow with Eyebags', 'rarity': 0.0033333333333333337},
{'name': 'VLAD Blue Eyes', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Brown Eyes with Scar', 'rarity': 0.007000000000000001},
{'name': 'CHAD Green Eyes with Punch', 'rarity': 0.004333333333333333},
{'name': 'BORIS Pink Blue Eyes with Punch', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Brown Eyes with Gold Tooth', 'rarity': 0.006333333333333333},
{'name': 'VLAD Purple Eyes with Beard', 'rarity': 0.006333333333333333},
{'name': 'VLAD Purple Eyes with Golden Tooth', 'rarity': 0.005333333333333333},
{'name': 'BORIS Green Eyes with Eyebags', 'rarity': 0.006},
{'name': 'CHAD Blue Eyes with Beard', 'rarity': 0.005666666666666667},
{'name': 'IGOR Blue Orange Eyes Drunk', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Blue Orange Eyes with Eyebags', 'rarity': 0.005666666666666667},
{'name': 'CHAD Blue Orange Eyes with Eyebags', 'rarity': 0.004},
{'name': 'IGOR Purple Eyes with Punch', 'rarity': 0.005},
{'name': 'IGOR Purple Eyes with Eyebags', 'rarity': 0.004},
{'name': 'VLAD Brown Eyes with Beard', 'rarity': 0.005},
{'name': 'BORIS Brown Eyes with Punch', 'rarity': 0.004333333333333333},
{'name': 'BORIS Blue Eyes with Eyebags', 'rarity': 0.0036666666666666664},
{'name': 'VLAD Blue Eyes Drunk', 'rarity': 0.005666666666666667},
{'name': 'BORIS Blue Eyes', 'rarity': 0.005333333333333333},
{'name': 'IGOR Green Eyes with Punch', 'rarity': 0.004},
{'name': 'CHAD Brown Eyes Drunk', 'rarity': 0.005333333333333333},
{'name': 'CHAD Brown Eyes with Scar', 'rarity': 0.005},
{'name': 'VLAD Blue Orange Eyes with Punch', 'rarity': 0.006666666666666667},
{'name': 'VLAD Pink Blue Eyes with Beard', 'rarity': 0.005},
{'name': 'VLAD Brown Eyes with Punch', 'rarity': 0.004},
{'name': 'CHAD Pink Blue Eyes with Golden Tooth', 'rarity': 0.007666666666666666},
{'name': 'CHAD Brown Eyes with Beard', 'rarity': 0.005},
{'name': 'BORIS Pink Blue Eyes with Beard', 'rarity': 0.005333333333333333},
{'name': 'VLAD Blue Orange Eyes', 'rarity': 0.004333333333333333},
{'name': 'BORIS Yellow Eyes with Eyebags', 'rarity': 0.004},
{'name': 'BORIS Blue Orange Eyes with Golden Tooth', 'rarity': 0.0036666666666666664},
{'name': 'CHAD Green Eyes with Scar', 'rarity': 0.006},
{'name': 'CHAD Green Eyes Drunk', 'rarity': 0.005333333333333333},
{'name': 'IGOR Yellow Eyes', 'rarity': 0.005666666666666667},
{'name': 'VLAD Brown Eyes with Golden Tooth', 'rarity': 0.0036666666666666664},
{'name': 'IGOR Pink Blue Eyes Drunk', 'rarity': 0.007000000000000001},
{'name': 'VLAD Purple Eyes Drunk', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Blue Orange Eyes with Eyebags', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Yellow Eyes with Scar', 'rarity': 0.0036666666666666664},
{'name': 'VLAD Purple Eyes with Punch', 'rarity': 0.007000000000000001},
{'name': 'IGOR Brown Eyes', 'rarity': 0.0046666666666666673},
{'name': 'CHAD Green Eyes with Eyebags', 'rarity': 0.006666666666666667},
{'name': 'CHAD Purple Eyes with Eyebags', 'rarity': 0.006},
{'name': 'BORIS Brown Eyes with Golden Tooth', 'rarity': 0.005333333333333333},
{'name': 'CHAD Yellow Eyes Drunk', 'rarity': 0.005},
{'name': 'BORIS Blue Orange Eyes with Punch', 'rarity': 0.004333333333333333},
{'name': 'CHAD Brown Eyes', 'rarity': 0.004333333333333333},
{'name': 'IGOR Yellow Eyes with Punch', 'rarity': 0.006666666666666667},
{'name': 'IGOR Blue Eyes with Beard', 'rarity': 0.005666666666666667},
{'name': 'VLAD Green Eyes with Beard', 'rarity': 0.005333333333333333},
{'name': 'VLAD Brown with Eyebags', 'rarity': 0.0046666666666666673},
{'name': 'VLAD Yellow Eyes with Beard', 'rarity': 0.0046666666666666673},
{'name': 'IGOR Green Eyes', 'rarity': 0.008},
{'name': 'VLAD Pink Blue Eyes Drunk', 'rarity': 0.0026666666666666666},
{'name': 'VLAD Yellow Eyes Drunk', 'rarity': 0.004},
{'name': 'IGOR Green Eyes with Beard', 'rarity': 0.005333333333333333},
{'name': 'CHAD Yellow Eyes with Eyebags', 'rarity': 0.004333333333333333},
{'name': 'IGOR Blue Eyes with Punch', 'rarity': 0.005},
{'name': 'VLAD Purple Eyes with Scar', 'rarity': 0.004},
{'name': 'CHAD Pink Blue Eyes with Punch', 'rarity': 0.005666666666666667},
{'name': 'VLAD Pink and Blue Eyes', 'rarity': 0.0033333333333333337},
{'name': 'BORIS Blue Eyes with Golden Tooth', 'rarity': 0.005333333333333333},
{'name': 'BORIS Blue Orange Eyes with Beard', 'rarity': 0.0033333333333333337},
{'name': 'CHAD Green Eyes with Beard', 'rarity': 0.007666666666666666},
{'name': 'IGOR Blue Eyes with Gold Tooth', 'rarity': 0.005},
{'name': 'VLAD Blue Eyes with Eyebags', 'rarity': 0.006333333333333333},
{'name': 'VLAD Purple Eyes', 'rarity': 0.004},
{'name': 'BORIS Green Eyes with Beard', 'rarity': 0.005},
{'name': 'VLAD Green Eyes with Golden Tooth', 'rarity': 0.0023333333333333336},
{'name': 'CHAD Blue Eyes Drunk', 'rarity': 0.004},
{'name': 'CHAD Purple Eyes Drunk', 'rarity': 0.0026666666666666666},
{'name': 'CHAD Purple Eyes with Punch', 'rarity': 0.006},
{'name': 'IGOR Yellow Eyes with Beard', 'rarity': 0.006},
{'name': 'IGOR Blue Orange Eyes with Gold Tooth', 'rarity': 0.005666666666666667},
{'name': 'VLAD Brown Eyes with Scar', 'rarity': 0.0036666666666666664},
{'name': 'CHAD Blue Orange Eyes with Beard', 'rarity': 0.0033333333333333337},
{'name': 'CHAD Blue Eyes with Golden Tooth', 'rarity': 0.0026666666666666666},
{'name': 'IGOR Brown Eyes with Eyebags', 'rarity': 0.005},
{'name': 'VLAD Blue Eyes with Scar', 'rarity': 0.003},
{'name': 'VLAD Brown Eyes Drunk', 'rarity': 0.006},
{'name': 'BORIS Green Eyes Drunk', 'rarity': 0.006333333333333333},
{'name': 'CHAD Blue Orange Eyes with Golden Tooth', 'rarity': 0.0033333333333333337},
{'name': 'CHAD Blue Eyes', 'rarity': 0.006666666666666667},
{'name': 'BORIS Brown Eyes Drunk', 'rarity': 0.0026666666666666666},
{'name': 'IGOR Brown Eyes with Beard', 'rarity': 0.004333333333333333},
{'name': 'BORIS Brown Eyes with Beard', 'rarity': 0.005},
{'name': 'CHAD Green Eyes', 'rarity': 0.006},
{'name': 'CHAD Brown Eyes with Punch', 'rarity': 0.004},
{'name': 'VLAD Pink Blue Eyes with Punch', 'rarity': 0.005},
{'name': 'VLAD Purple Eyes with Eyebags', 'rarity': 0.005666666666666667},
{'name': 'IGOR Brown Eyes with Scar', 'rarity': 0.006333333333333333},
{'name': 'BORIS Pink and Blue Eyes', 'rarity': 0.004333333333333333},
{'name': 'CHAD Brown Eyes with Eyebags', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Blue Orange Eyes with Scar', 'rarity': 0.005666666666666667},
{'name': 'VLAD Green Eyes Drunk', 'rarity': 0.005666666666666667},
{'name': 'IGOR Pink Blue Eyes with Beard', 'rarity': 0.004333333333333333},
{'name': 'CHAD Pink Blue Eyes with Eyebags', 'rarity': 0.005666666666666667},
{'name': 'CHAD Purple Eyes with Beard', 'rarity': 0.003},
{'name': 'IGOR Pink Blue Eyes with Scar', 'rarity': 0.0046666666666666673},
{'name': 'BORIS Blue Eyes with Beard', 'rarity': 0.0026666666666666666},
{'name': 'CHAD Purple Eyes', 'rarity': 0.005333333333333333},
{'name': 'BORIS Yellow Eyes with Scar', 'rarity': 0.0033333333333333337},
    ]

let face_elements = [
    {'name':'Kiss', 'rarity': 0.159},
{'name':'Bandage', 'rarity': 0.15633333333333333},
{'name':'None', 'rarity': 0.27266666666666666},
{'name':'Scar', 'rarity': 0.11799999999999999},
{'name':'Mole', 'rarity': 0.108},
{'name':'Tattoo', 'rarity': 0.157},
{'name':'3rd Eye', 'rarity': 0.028666666666666667},
]

let heads = [
    {'name': 'Buzz Cut', 'rarity': .15433333333333332},
    {'name': 'Beanie Red', 'rarity': 0.09866666666666667},
    {'name': 'Egg', 'rarity': 0.017999999999999998},
    {'name': 'Bandages', 'rarity': 0.07166666666666667},
    {'name': 'Beanie', 'rarity': 0.09366666666666665},
    {'name': 'Ushanka', 'rarity': 0.066000000000000005},
    {'name': 'Blonde', 'rarity': 0.06433333333333334},
    {'name': 'Slav Hat', 'rarity': 0.162},
    {'name': 'Military Hat', 'rarity': 0.06466666666666667},
    {'name': 'Fish', 'rarity': 0.01633333333333333},
    {'name': 'Beanie Green', 'rarity': .10266666666666667},
    {'name': 'Fried Egg', 'rarity': 0.017333333333333332},
    {'name': 'Fur Hat', 'rarity': 0.05766666666666667},
    {'name': 'Golden Egg', 'rarity': 0.012666666666666666},
]

let sunglasses = [
    {'name': 'None', 'rarity': 0.391},
{'name': 'Cyclop Sunglasses', 'rarity': 0.14666666666666666},
{'name': 'Viper Sunglasses', 'rarity': 0.15533333333333331},
{'name': 'Aviator Sunglasses', 'rarity': 0.168},
{'name': 'Dolge&Gopnikz', 'rarity': 0.13900000000000002},
]
export default {
    components: {
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        CheckIcon,
        SelectorIcon,
    },
    setup () {
        const state = reactive({
            count: 0,
        })
        const selectedBackground = ref("")
        const selectedPants = ref("")
        const selectedUpperbody = ref("")
        const selectedHands = ref("")
        const selectedFaceElm = ref("")
        const selectedFace = ref("")
        const selectedHead= ref("")
        const selectedGlasses= ref("")
        console.log(backgrounds)
        return {
            selectedBackground,
            selectedPants,
            selectedUpperbody,
            selectedHands,
            selectedFace,
            selectedFaceElm,
            selectedHead,
            selectedGlasses,
            backgrounds, 
            pants, 
            upperbody, 
            hands, 
            faces,
            face_elements,
            heads,
            sunglasses,
            ...toRefs(state),
        }
    },
    computed: {
        totalRarity(){
            return (100 - (( this.selectedBackground.rarity * this.selectedPants.rarity  * this.selectedUpperbody.rarity * this.selectedHands.rarity * this.selectedFace.rarity * this.selectedFaceElm.rarity * this.selectedHead.rarity * this.selectedGlasses.rarity) * 10000000000))
        },
        averageRarity(){
            return 100 - (100 * ((this.selectedBackground.rarity + this.selectedPants.rarity  + this.selectedUpperbody.rarity + this.selectedHands.rarity + this.selectedFace.rarity + this.selectedFaceElm.rarity + this.selectedHead.rarity + this.selectedGlasses.rarity) / 9));
        },
        coolScore(){
            let _totalCool = {}
            let _description = ""
            let result = this.isMatching()
            _totalCool.score = result.score; 
            _description = _description + result.description;
            
            result = this.holding()
            _totalCool.score = _totalCool.score + result.score;
            _description = _description + result.description;

            result = this.glasses()
            _totalCool.score = _totalCool.score + result.score;
            _description = _description + result.description;

            _totalCool.description = _description;
            console.log(_description)
            return _totalCool
        },
    },
    methods:{
        isMatching(){
            let _score = 0; 
            let _description = ""
            let _pantsArr = this.selectedPants ? this.selectedPants.name.split(' ') : [];
            _pantsArr.forEach((w)=> {
                if(this.selectedUpperbody.name && this.selectedUpperbody.name.includes(w)){
                    _score = _score +1; 
                    _description = _description +  "+1 Matching Outfit"
                }
            })
            console.log(this.selectedHead.name);
            if(this.selectedHead.name &&  (this.selectedHead.name.includes('Slav') || this.selectedHead.name ==='Beanie')){
                console.log("Black hat")
                if(this.selectedUpperbody.name && this.selectedUpperbody.name.includes('Black')){
                    console.log("Black hat & top")
                    _score = _score +1; 
                    _description = _description +  "+1 the Hat To Match"
                    if(this.selectedPants.name && this.selectedPants.name.includes('Black')){
                         _score = _score +1; 
                        _description = _description +  "+1 Black on Black on Black"
                    }
                }
            }
            return {score: _score, description: _description}; 
        },
        holding(){
             let _score = 0; 
            let _description = ""
            if(this.selectedHands.name && this.selectedHands.name.includes('AK')){
                _score = _score + 1;
                _description = _description = " +1 Has AK" 
            }
            return {score: _score, description: _description};
        },
        glasses(){
             let _score = 0; 
            let _description = ""
            if(this.selectedGlasses.name && this.selectedGlasses.name.includes('Dolge')){
                _score = _score + 1;
                _description = _description = " +1 Has Dolge" 
            }
            return {score: _score, description: _description};
        }
    }
}
</script>

<style scoped>
#clappy-button-wrapper{
  height: 30px;
  width:30px;
}
</style>