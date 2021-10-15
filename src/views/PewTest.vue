<template>
    <div class="flex flex-1 w-full ">
        <div class="text-right w-full">
            <button class='m-2 p-2 rounded-xl ring-2 ring-indigo-500' v-if="hasHandcashToken" @click="logout"> Logout </button>
        </div>
    </div>
    <div class="flex flex-1  p-2">
        <div class='flex-grow w-full shadow rounded p-2'>
            <div class="flex-col p-2">
                <div class="text-4xl text-left"> Settings: </div>
                <hr>
                <div class="text-xl text-left"> 
                    App ID:
                    {{store.state.handcash_app_id}}
                </div>
                <div class="text-xl text-left"> 
                    <span class='text-sm' > New App ID:</span>
                    <input v-model="newAppID" class='ring-1 ring-indigo-500 rounded-xl p-2 m-2' />
                    <button @click="setNewAppID" class='ring-2 ring-indigo-500 rounded-xl m-2 p-2'> Set App Id </button>
                </div>
                <div class="text-left">
                    <a v-if="!hasHandcashToken" :href="generateRedirect()" target="_blank" id="connectButton" class='px-2 py-4 m-2 font-bold'> Connect Handcash </a>
                </div>
            </div>
        </div>
        <div class='flex-grow w-full -2 m-2 rounded shadow'>
            <div class="w-full">
                <div class="text-xl text-left"> Add a list of Handcash $handles, paymail adddresses, or BSV addresses: </div>
                <hr/>
                <textarea rows="5" type='text-area' class='w-full h-20 ring-2 rounded-xl' v-model="accountsString" /> 
            </div>
            <div class='text-right'>
                 <button class='m-2 p-2 rounded-xl ring-2 ring-indigo-500'  @click="setAccounts"> Set Accounts </button>
            </div>
            <div class='w-full text-left'>
                <div class='text-2xl'> Pew list</div>
                <div rows="5" class='w-full'> {{accountsString}}</div>
            </div>
             <div clas='w-full'>
                <button class='m-2 p-2 rounded-xl bg-green-500 text-white text-xl w-full text-center' v-if="hasHandcashToken && stagedTransactions.length > 0"  @click="sendPayment"> Send To Pew List</button>
            </div>
        </div>
        <div class='flex-grow w-full p-2 m-2 rounded shadow'>
            <div clas='m-6'>
                <div class='text-2xl'>1 at a time with custom message.</div>
                <hr>
                 <div class='flex-col text-left p-2 m-2 shadow-xl'>
                    <div> # of Sends </div>
                    <div> <input class='rounded ring-1 ring-indigo-400 w-full' v-model="counter" /> </div>
                    <div> Seconds between Send</div>
                    <div> <input class='rounded ring-1 ring-indigo-400 w-full' v-model="seconds" /> </div>
                    <div> Message (20 chars max)</div>
                    <div> <input class='rounded ring-1 ring-indigo-400 w-full' v-model="message" /> </div>
                </div>
                <div class=""></div>
            </div>
            <button v-if="hasHandcashToken && stagedTransactions.length > 0" class='m-2 p-2 rounded-xl bg-green-500 text-white w-4/5'  @click="sendOnTimer">Timed Send</button>
        </div>
    </div>
    <div class='m-2 p-2'>
        <button class='m-2 p-2 rounded-xl ring-2 ring-indigo-500' @click="sendMultiMessage">Multi Message Send</button>
        <button class='m-2 p-2 rounded-xl ring-2 ring-indigo-500' @click="saveFriends">Save Friends</button>
   </div>
   <div> 
       <div class='text-xl'> Sent To: </div>
       <div> 
           {{outputReport}}
       </div>
   </div>
   <button @click='doOtherStuff'> Do Other Stuff </button>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import {useStore} from "vuex"
import Run from 'run-sdk';
const {HandCashConnect} = require('@handcash/handcash-connect');


export class Tip extends Run.Jig {
  init(message, pubkey, amount) {
    this.message = message
    this.owner = pubkey
    this.satoshis = amount
  }

  withdraw() {
    this.satoshis = 0
  }
}
export default {
    async setup () {
        let store = useStore()
        let accountList = ref([]);
        let stagedTransactions = ref([]);
        let newAppID = "";
        let appid= "";
        let outputReport = "";
        let _duroCount = 0;
        appid = store.state.handcash_app_id;
        if(store.state.handcash_app_id.length === 0){
            store.commit("setHandcashAppID", '6149da299921e20b68db4fac')
            appid = "6149da299921e20b68db4fac"
        }else{
            appid = store.state.handcash_app_id;
        }

        const handCashConnect = new HandCashConnect(appid);
        const state = reactive({
            duroCount: _duroCount,
            newAppID: newAppID,
            counter: 0,
            seconds: 0,
            accountsString: "",
            message: "Follow Us",
            outputReport: outputReport,
            
        })
    
        return {
            store,
            accountList, 
            stagedTransactions,
            handCashConnect,
            ...toRefs(state),
        }
    },
    methods:{
       async doOtherStuff(){
            // let run = new Run({trust:"*", network: 'test', purse:'cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz', owner:'cT3wEerRrpkheyFogv6xHXeV7tCGLwRPKWXrm6o6bCuxw1tSCMzB'})

            // //let tip = new Tip('I like your videos', 'mhcASxbdkyeP3HFmiVCd7GKGfqsM4Zt1Eq', 100000)
            // run.activate();
            // await run.inventory.sync();
            // console.log(run.inventory.jigs.length);
            // // console.log(await tip.sync());
            // // console.log(tip);

            let run = new Run({trust:"*", network: 'test', purse:'cQdpg2oTVvbeb47GzRxqn467RmJNp8rJzfoPMfkSBRyzqEdbJcSz', owner:'cSnmUm9MbvrSSHsY6pExpHrzfgELN38RiAkEiGWW3DBcMjda7dQH'})
            console.log(run.owner.address)
            await run.sync();
            await run.inventory.sync()
            console.log(run.inventory.jigs.length);
        },
        generateRedirect(){
          const redirectionLoginUrl =  this.handCashConnect.getRedirectionUrl();
          console.log({redirectionLoginUrl})
          return redirectionLoginUrl;
        },
        async  sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },

        async sendPayment(){
           
            console.log(this.$store.state.handcash_client_id);
            let _payments = [
                    { destination: 'zack', currencyCode: 'DUR', sendAmount: 8 },
                ]
            console.log(_payments);
            if(this.stagedTransactions.length <= 0 ){
                console.log("No Staged Transactions");
                 const paymentParameters = {
                        description: "Thanx 4 Engaging",
                        appAction: "Party",
                        payments: _payments
                    };
                    const account = await this.handCashConnect.getAccountFromAuthToken(this.$store.state.handcash_client_token);
                    const paymentResult = await account.wallet.pay(paymentParameters);
                    console.log(paymentResult);
            }else {
                const account = await this.handCashConnect.getAccountFromAuthToken(this.$store.state.handcash_client_token);
                while(this.stagedTransactions.length > 0){
                    let _txs = []
                    for (let i = 0; i < 20 ; i++) { 
                        if(this.stagedTransactions.length > 0){
                            _txs.push(this.stagedTransactions.pop())
                        }
                    }
                    console.log(_txs);
                    const paymentParameters = {
                        description: "Lit Sh*t Only!",
                        appAction: "Party",
                        payments: _txs
                    };
                    const paymentResult = await account.wallet.pay(paymentParameters);
                    console.log(paymentResult);
                    this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                    await this.sleep(15000);
                    console.log(this.stagedTransactions.length)
                }
            }
        },

        logout(){
            this.$store.commit("setHandcashClientToken", "");
        },

        setAccounts(){
            this.accountList = this.accountsString.split("$")
            console.log(this.accountList)
            this.stageTransactions(this.accountList);
        },

        setNewAppID(){
            this.$store.commit("setHandcashAppID", this.newAppID)
        },
        stageTransactions(accountsArray){
            let txArray = []
            accountsArray.forEach(a => {
                let handle = a.replace(",", "").trim();
                if(handle.length > 0){
                    txArray.push({ destination: handle, currencyCode: 'DUR', sendAmount: 5 },)
                }
            })
            console.log(txArray)
            this.stagedTransactions = txArray;
        },

        saveFriends(){
            
        },

        async sendOnTimer(){
            try{
                for(let i = 0; i < this.counter; i++){
                let _payments = [
                    this.stagedTransactions.pop(),
                ]
                const paymentParameters = {
                        description: this.message,
                        appAction: "Party",
                        payments: _payments
                    };
                    const account = await this.handCashConnect.getAccountFromAuthToken(this.$store.state.handcash_client_token);
                    const paymentResult = await account.wallet.pay(paymentParameters);
                    console.log(paymentResult);
                    this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                    await this.sleep(this.seconds * 1000);
                }
            }
            catch(err){console.log(err)}
            
        },
        async sendMultiMessage(){
            const account = await this.handCashConnect.getAccountFromAuthToken(this.$store.state.handcash_client_token);
            let _txs = [];
            //let durosSent = 0;
            while(this.stagedTransactions.length > 0){
                 _txs.push(this.stagedTransactions.pop())
                 let paymentParameters = {
                    description: "To Follow Us",
                    appAction: "Party",
                    payments: _txs
                };
                let paymentResult = await account.wallet.pay(paymentParameters);
                console.log(paymentResult);
                this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                await this.sleep(1000)

                //  _txs.push(this.stagedTransactions.pop())
                //  paymentParameters = {
                //     description: "Buy The Fuk Shorts",
                //     appAction: "Party",
                //     payments: _txs
                // };
                // paymentResult = await account.wallet.pay(paymentParameters);
                // console.log(paymentResult);
                // this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                // await this.sleep(1000)

                // paymentParameters = {
                //     description: "To Follow Us",
                //     appAction: "Party",
                //     payments: _txs
                // };
                // paymentResult = await account.wallet.pay(paymentParameters);
                // console.log(paymentResult);
                // this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                // await this.sleep(1000);      
                paymentParameters = {
                    description: "Tell your Friends ",
                    appAction: "Party",
                    payments: _txs
                };
                paymentResult = await account.wallet.pay(paymentParameters);
                console.log(paymentResult);
                this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                await this.sleep(1000);

                paymentParameters = {
                    description: "This is a PewParty",
                    appAction: "Party",
                    payments: _txs
                };
                paymentResult = await account.wallet.pay(paymentParameters);
                console.log(paymentResult);
                this.outputReport = this.outputReport + " " + paymentResult.participants[0].alias;
                _txs = [];
                //await this.sleep(15000);
                //this.accountsString = this.accountsArray.toString();
            }
        }
    },
    computed:{
        hasHandcashToken(){
            return this.$store.state.handcash_client_token.length > 0
        },
    },
}
</script>

<style lang="scss" scoped>

</style>