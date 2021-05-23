<template>
<div class='m-4 p-4'> 
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Fund With Handcash
      </h3>
      <div class="mt-5">
        <div class="rounded-md bg-gray-50 px-6 sm:flex sm:items-start sm:justify-between">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 sm:mt-0 ">
              <div class="text-sm font-medium text-gray-900 lg:text-left">
                Select An Amount
              </div>
              <div class="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                <div @click="setAmount(100)">
                  100 Duros
                </div>
                <span class="hidden sm:mx-2 sm:inline" aria-hidden="true">
                  &middot;
                </span>
                <div @click="setAmount(500)" class="mt-1 sm:mt-0">
                  500 Duros
                </div>
                 <span class="hidden sm:mx-2 sm:inline" aria-hidden="true">
                  &middot;
                </span>
                <div @click="setAmount(1000)" class="mt-1 sm:mt-0">
                  1000 Duros
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
            <button type="button" id="connectButton" class="">
              Send {{amount}} Duros
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import  {HandCashConnect} from '@handcash/handcash-connect';
import RunStore from "./../../store/RunStore.js"


export default {
    setup (props) {
        const state = reactive({
            amount: 0,
            purseAdd: props.purseAddress
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods:{
        async fund(){
            const account = HandCashConnect.getAccountFromAuthToken(this.$store.state.handcash_client_token);
            let run = RunStore.useRun(this.$store);
            const paymentParameters = {
                description: "Funding 💥👜POWpurse ",
                appAction: "fund",
                payments: [
                    { destination: run.purse.address, currencyCode: 'DUR', sendAmount: this.amount },
                ]
            };
            const paymentResult = await account.wallet.pay(paymentParameters);
            alert(paymentResult);
        },
        clearToken(){
            this.$store.commit("setHandcashClientToken", "");
        },
        setAmount(_amount){
            this.amount = _amount;
        }
    },
    props:[
        "purseAddress"
    ]
}
</script>

<style scoped>

</style>