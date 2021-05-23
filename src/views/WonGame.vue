<template>
    <div>
        <Won /> 
    </div>
    
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import {useRouter } from "vue-router"
import Won from "./../components/games/Won.vue"

export default {
    setup () {
        const store = useStore();
        let router = useRouter();
        if(router.currentRoute.value.query.id){
            store.commit("setGameLocation", router.currentRoute.value.query.id);
        }
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