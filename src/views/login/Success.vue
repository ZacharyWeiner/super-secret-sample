<template>
    <div>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {useStore } from 'vuex'
import {useRouter} from "vue-router"
const {HandCashConnect} = require('@handcash/handcash-connect');


export default {
    async setup () {
        const store = useStore();
        //let run;
        let router = useRouter();
        console.log("Current Route:", router.currentRoute)
        console.log(router.currentRoute.value.query.authToken)
        store.commit("setHandcashClientToken", router.currentRoute.value.query.authToken);
        let handCashConnect = null;
        if(store.state.handcash_app_id !== ""){
            handCashConnect = new HandCashConnect(store.state.handcash_app_id);
        }else{
             handCashConnect = new HandCashConnect('60a4315c49a57e0ba0aa357a');
        }
        
        const account = handCashConnect.getAccountFromAuthToken(store.state.handcash_client_token);
        console.log("Wallet:", account.wallet)
        const { publicProfile } = await account.profile.getCurrentProfile();
        console.log(publicProfile);
        const state = reactive({
            count: 0,
        })
        router.push("/profile")
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>