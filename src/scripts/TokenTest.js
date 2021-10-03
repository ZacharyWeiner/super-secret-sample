let Run = require("run-sdk")

///////////////// Factory Owner / Application Creds 
//MAIN NET 
//Purse - PrivateKey L4cpXSjTR2RHjvHNHQG2esHGMQtuQjAgBj8h2AVVVVUeVcRBZQGB 
//Purse - Address 1FUgg82vdX4Pqcrz7a1wzKmhgHbwimEEeN 
//Owner - PrivateKey Kxa9ccpWY1pWR32tnUFvhqk9x8jCSeGRvBKenwZJ4TF8jpdWkL6f 
//Owner - Address 1Fs3CAyFwUCVNCCpE8xuNYU8KHx74Yx3HL



//TEST NET 
//Purse - PrivateKey cPsvMPjC5rXYbnN1No2gSfxZeyHQcdDS7ATNau9K4iSbcgSWp9a5 
//Purse - Address mtb3Wdj4KPsQmmu8XH1RWQLZtxsrXx1c27 
//Owner - PrivateKey cN1Yu87kRP9K2yDZ786CAeFEDyHb2t2od8U3Cq1s92GLf1PS9v7b 
//Owner - Address n1BJAY2iCcogLrJ5GhPHCxCBAZC91JjZFp
//




///////User Creds /////////
// Purse - PrivateKey cSwAQpEutMDufC9BhCLNbQyoxR3QWQvy93nJ3GByJM1WCKwZjofC 
//Purse - Address mxKeXKdKKHQqwpZZMzLZVe4FtSBv7hXjM3 
// Owner - PrivateKey cRUxdssrRbqYiFYc81CaTXx5ySnNZNGaFHo4fXXeGBKCZFfAkCf8 
// Owner - Address n22N5XoK6UpNXM2oCvhKyqJZALKo8dFVxC



const TEST_FACTORY_ORIGIN = '2939bc946660e1501b1c6f38a37ac6e134ca5011fdb5d0fa6b703400ef63c3f3_o2';
const testPursePrivKey = 'cPsvMPjC5rXYbnN1No2gSfxZeyHQcdDS7ATNau9K4iSbcgSWp9a5';
const testPurseAddress = 'mtb3Wdj4KPsQmmu8XH1RWQLZtxsrXx1c27';
const testOwnerPrivKey = 'cNg7kxEbmDZf3QxnhJmX6qi82b76gz7meqKDCJdZ3Y6aTMSLgyjB';
const testOwnerAddress = 'mrgq9YL1MF3Jm295hq8nFkAAatBuj17qwT';

const mainPursePrivKey = 'L4cpXSjTR2RHjvHNHQG2esHGMQtuQjAgBj8h2AVVVVUeVcRBZQGB';
const mainPurseAddress = '1FUgg82vdX4Pqcrz7a1wzKmhgHbwimEEeN';
const mainOwnerPrivKey = 'Kxa9ccpWY1pWR32tnUFvhqk9x8jCSeGRvBKenwZJ4TF8jpdWkL6f';
const mainOwnerAddress = '1Fs3CAyFwUCVNCCpE8xuNYU8KHx74Yx3HL';



const testUserPursePrivKey = 'cPsvMPjC5rXYbnN1No2gSfxZeyHQcdDS7ATNau9K4iSbcgSWp9a5';
const testUserPurseAddress = 'mtb3Wdj4KPsQmmu8XH1RWQLZtxsrXx1c27';
const testUserOwnerPrivKey = 'cNGMRj2bBjbbd9veoxMRwvKCFBdtczNDo5qXFCX1EfSYFKicmrNZ';
const testUserOwnerAddress = 'mnMA1UVN6JNKzgZ8pGHTL23o9v5VaKyr61';

// const mainPursePrivKey = '';
// const mainPurseAddress = '';
// const mainOwnerPrivKey = '';
// const mainOwnerAddress = '';
const _network = "test";

class NFTFactory extends Run.Jig{
    createNFT(to, imgTXID){
        return new NFT(to, imgTXID)
    }    
}

class NFT extends Run.Jig {
    init(to, imageTXID){
        this.owner = to;
        this.image = imageTXID
    }
}

NFTFactory.deps = {NFT}

async function main(){
    var ppk = ''
    var opk = ''
    if(_network === "test"){
        ppk = testPursePrivKey;
        opk = testOwnerPrivKey;
    }else {
        ppk = mainPursePrivKey;
        opk = mainOwnerPrivKey;
    }
    //let _run = new Run({trust: "*", network: "test", purse: ppk, owner: opk});
    //_run.splits = 6;
    let _run = new Run({trust: "*", network: "test", purse: ppk, owner: testUserOwnerPrivKey});
    // console.log(_run.purse.privkey, _run.purse.address, _run.owner.privkey, _run.owner.address)
    await _run.sync()
    // // console.log(_run.purse.privkey, _run.purse.address, _run.owner.privkey, _run.owner.address)
    //  console.log(await _run.purse.balance())
    await _run.inventory.sync()
    // // // console.log(_run.inventory.jigs.length)
    // // //let tx = new Run.Transaction();
    //let _factory = new NFTFactory();
    //await _run.sync();
    // await _run.inventory.sync()
    // //let nft = _run.inventory;
    console.log(_run.inventory.jigs)
    // let jig = _run.inventory.jigs[0];
     //const nfts = _run.inventory.jigs.find((jig) => jig.constructor.origin === '2939bc946660e1501b1c6f38a37ac6e134ca5011fdb5d0fa6b703400ef63c3f3_o2')
     //console.log(nfts)
    // let _factory = await _run.load("2939bc946660e1501b1c6f38a37ac6e134ca5011fdb5d0fa6b703400ef63c3f3_o3")
    // await _factory.sync();

    //1e9de7f3e5768de640a94b94978cb2feb4293846c558de9b143818bc9ef91ac3
    //fc3fcf53c545720533d2b3a913b43deda55fb478f0c7a74544121a91c1f2418c
    // let _nft = _factory.createNFT("n22N5XoK6UpNXM2oCvhKyqJZALKo8dFVxC", '1e9de7f3e5768de640a94b94978cb2feb4293846c558de9b143818bc9ef91ac31');
    // await _nft.sync();
    // console.log(_nft);

    // let _factory = new NFTFactory();
    // // //await _run.sync();
    // await _factory.sync();
    // let _tx = new Run.Transaction();
    // _tx.update(()=> _factory.createNFT(testUserOwnerAddress, '1e9de7f3e5768de640a94b94978cb2feb4293846c558de9b143818bc9ef91ac3'))
    // _tx.update(()=> _factory.createNFT(testUserOwnerAddress, 'fc3fcf53c545720533d2b3a913b43deda55fb478f0c7a74544121a91c1f2418c'))
    
    // // for(let i = 0; i < 100; i++){
    // //     let increments = '1e9de7f3e5768de640a94b94978cb2feb4293846c558de9b143818bc9ef91ac3' + i.toString();
    // //      _tx.update(()=> _factory.createNFT('n22N5XoK6UpNXM2oCvhKyqJZALKo8dFVxC', increments))
    // // }
    //console.log(await _tx.publish());
    // // return;
}

main();