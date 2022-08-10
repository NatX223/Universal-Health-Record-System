const serverUrl = "https://wzogi8ep6qbv.usemoralis.com:2053/server";
const appId = "Iv88JqdsIHpsmt66CfDh4CtfFdZ7mNomEvEbhX6b";
Moralis.start({ serverUrl, appId });

const ethers = Moralis.web3Library;

const contractAddress = "0xC9FC8CfB8f374673F273505ba3926673746BC838";

const abi = contractabi;

var web3provider;

var signer;

async function connectWallet() {
    web3provider = await Moralis.enableWeb3({ provider: "metamask"});
    
    await web3provider.send("eth_requestAccounts", []);
    signer = web3provider.getSigner();
  }

// function to add hospital
  async function registerHospital() {
  
    let name = document.getElementById("hospital-name").value;
    let address = document.getElementById("hospital-address").value;
    let website = document.getElementById("hospital-website").value;
    let email = document.getElementById("hospital-email").value;

    // calling function to store hospital data
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const register = await Contract.setRecordHospital(name, address, email, website);

    const receipt = await register.wait();
    alert("You have succesfully registered a Hospital. RecordHash: " + receipt.transactionHash);
}

// function to add an Insurance agency
async function registerInsurance() {
  
  let name = document.getElementById("insurance-name").value;
  let address = document.getElementById("insurance-address").value;
  let website = document.getElementById("insurance-website").value;
  let email = document.getElementById("insurance-email").value;

  // calling function to store Insurance data
  const Contract = new ethers.Contract(contractAddress, abi, signer);
  const register = await Contract.setRecordInsurance(name, address, email, website);

  const receipt = await register.wait();
  alert("You have succesfully registered an Insurance Agency. RecordHash: " + receipt.transactionHash);
}

async function registerIndividual() {
  let name = document.getElementById("Individual-name").value;
  let age = document.getElementById("Individual-age").value;
  let gender = document.getElementById("gender-name").value;
  let height = document.getElementById("Individual-height").value;
  let weight = document.getElementById("Individual-weight").value;
  let address = document.getElementById("Individual-address").value;
  let phone = document.getElementById("Individual-phone").value;
  let _email = document.getElementById("Individual-email").value;

  let email = string(_email);

  // calling function to store Insurance data
  const Contract = new ethers.Contract(contractAddress, abi, signer);
  const register = await Contract.setRecordPatient(name, age, gender, height, weight, address, phone, email);
  const receipt = await register.wait();
  alert("You have succesfully registered as a patient. RecordHash: " + receipt.transactionHash);
}

function toggleIndividual() {
    var x = document.getElementById("individual-reg-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function toggleHospital() {
    var y = document.getElementById("hospital-reg-form");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
}

function toggleInsurance() {
    var z = document.getElementById("insurance-reg-form");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
}

document.getElementById("toggle-Individualregform").onclick = toggleIndividual;
document.getElementById("toggle-Hospitalregform").onclick = toggleHospital;
document.getElementById("toggle-Insuranceregform").onclick = toggleInsurance;
document.getElementById("connect").onclick = connectWallet;
document.getElementById("btn-reg-hospital").onclick = registerHospital;
document.getElementById("btn-reg-insurance").onclick = registerInsurance;
document.getElementById("btn-reg-individual").onclick = registerIndividual;


function init() {
    var x = document.getElementById("indidual-reg-form");
    x.style.display = "none";
    var y = document.getElementById("hospital-reg-form");
    y.style.display = "none";
    var z = document.getElementById("insurance-reg-form");
    z.style.display = "none";
}

init();