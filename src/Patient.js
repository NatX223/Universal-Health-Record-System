const serverUrl = "https://wzogi8ep6qbv.usemoralis.com:2053/server";
const appId = "Iv88JqdsIHpsmt66CfDh4CtfFdZ7mNomEvEbhX6b";
Moralis.start({ serverUrl, appId });

const ethers = Moralis.web3Library;

const contractAddress = "0xC9FC8CfB8f374673F273505ba3926673746BC838";

const abi = contractabi;

var web3provider;

const Contract = new ethers.Contract(contractAddress, abi, web3provider);

async function connectWallet() {
    web3provider = await Moralis.enableWeb3({ provider: "metamask"});
}


// function to grant access to patient record
async function grantAccess() {

    let address = document.getElementById("address").value;

    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await Contract.grantAccess(address);

    const receipt = await tx.wait();
    alert("You have succesfully granted institution access to your medical and insurance. RecordHash: " + receipt.transactionHash);
}

// function to revoke access to patient record
async function revokeAccess() {
    
    let address = document.getElementById("address").value;

    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await Contract.revokeAccess(address);

    const receipt = await tx.wait();
    alert("You have succesfully revoked institution access to your medical and insurance. RecordHash: " + receipt.transactionHash);

}

// TODO 
// write function to get user details on load
async function displayRecord(){

}


  async function retriveHospital() {
    const parent = document.getElementById("Hospital-view");
    let hospital_address = document.getElementById("address").value;

    const data = await Contract.retriveHospital(hospital_address);

    console.log(data);

    // TODO 
    // display data returned from the call and embed in parent object
  }

  async function retriveInsurance() {
    const parent = document.getElementById("Insurance-view");
    let hospital_address = document.getElementById("address").value;

    const data = await Contract.retriveInsurance(hospital_address);

    console.log(data);

    // TODO 
    // display data returned from the call and embed in parent object
  }
  
async function init() {
    getaddress();
    displayRecord();
}