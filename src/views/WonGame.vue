<template>
    <div>
        <won /> 
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Won from "./../components/games/Won.vue"

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
        Won
    }
}
</script>

<style lang="scss" scoped>

</style>