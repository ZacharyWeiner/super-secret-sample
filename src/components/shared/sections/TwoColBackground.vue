<template>
     <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-base max-w-prose lg:max-w-none">
          <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              <slot name="title">Title</slot>
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <slot name="subtitle">Subtitle goes here </slot>
          </p>
        </div>
      </div>
      <div class="relative">
        <svg class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
        </svg>
        <svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
        </svg>
        <div class="relative md:bg-white md:p-6">
          <div class="lg:grid lg:grid-cols-2 lg:gap-6">
            <div class="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <slot name="left">
                    Left Side 
                </slot>      
            </div>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                 <slot name="right">
                    Right Side 
                </slot>    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue/'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>