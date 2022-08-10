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

async function _retrivePatientHealthRecord() {
    const parent = document.getElementById("patient-view");
    let patient_address = document.getElementById("address").value;
    
    // execute the function and get return object data
    const Contract = new ethers.Contract(contractAddress, abi, web3provider);

    const data = await Contract.retrivePatientHealthRecord(patient_address);

    console.log(data);
    // for(let i = 0; i < data.length; i++) {
    //     let record = data[i];
    //     // let record = JSON.parse(_record);
        
              
    //   let htmlstring = 
    //   `    <div class="card">
    //       <img src="${}" alt="icon">
    //       <div class="card-body">
    //       <h6 class="card-title">Record</h6>
    //       <p class="card-text">Diagnosis: ${record[0]}</p>
    //       <p class="card-text">Presscription: ${record[1]}</p>
    //       <p class="card-text">Form of treatment: ${record[2]}</p>
    //       <p class="card-text">Doctor: ${record[3]}</p>
    //       <p class="card-text">Admission Date: ${record[4]}</p>
    //       <p class="card-text">Discharge Date: ${record[5]}</p>
    //       <p class="card-text">Treatment summary: ${record[6]}</p>
    //       </div>
    //   </div>`;
  
    //   let col = document.createElement("div");
    //   col.className = "col col-md-3"
    //   col.innerHTML = htmlstring;
    //   parent.appendChild(col);
    // }
  }
  
  async function _retrivePatientInsuranceRecord() {
    const parent = document.getElementById("patient-view");
    let patient_address = document.getElementById("address").value;
    
    const data = await Contract.retrivePatientInsuranceRecord(patient_address);

    console.log(data);
    // for(let i = 0; i < data.length; i++) {
    //     let record = data[i];
    //     // let record = JSON.parse(_record);
        
              
    //   let htmlstring = 
    //   `    <div class="card">
    //       <img src="${}" alt="icon">
    //       <div class="card-body">
    //       <h6 class="card-title">Record</h6>
    //       <p class="card-text">Diagnosis: ${record[0]}</p>
    //       <p class="card-text">Presscription: ${record[1]}</p>
    //       <p class="card-text">Form of treatment: ${record[2]}</p>
    //       <p class="card-text">Doctor: ${record[3]}</p>
    //       <p class="card-text">Admission Date: ${record[4]}</p>
    //       <p class="card-text">Discharge Date: ${record[5]}</p>
    //       <p class="card-text">Treatment summary: ${record[6]}</p>
    //       </div>
    //   </div>`;
  
    //   let col = document.createElement("div");
    //   col.className = "col col-md-3"
    //   col.innerHTML = htmlstring;
    //   parent.appendChild(col);
    // }
  }
  
async function addMedicalData() {
    let address = document.getElementById("Haddress");
    let diagnosis = document.getElementById("diagnosis summary");
    let presscription = document.getElementById("prescribtion");
    let treatmentForm = document.getElementById("treatment");
    let doctor = document.getElementById("doctor");
    let _admission = document.getElementById("admission");
    let _discharge = document.getElementById("discharge");
    let summary = document.getElementById("treatment-summary");

    let admission = string(_admission);
    let discharge = string(_discharge);

    // calling function to store Insurance data
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await Contract.addHealthRecord(address, diagnosis, treatmentForm, doctor, admission, discharge, summary);

    const receipt = await tx.wait();
    alert("You have succesfully added a patient's medical data. RecordHash: " + receipt.transactionHash);
}

async function addInsuranceData() {
    let address = document.getElementById("Iaddress");
    let number = document.getElementById("policy-number");
    let name = document.getElementById("policy-name");
    let type = document.getElementById("policy-type");
    let limit = document.getElementById("policy-limit");
    let agent = document.getElementById("policy-agent");
    let _start = document.getElementById("policy-start");
    let _end = document.getElementById("policy-end");
    let summary = document.getElementById("policy-summary");

    let start = string(_start);
    let end = string(_end);

    // calling function to store Insurance data
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await Contract.addInsuranceRecord(address, name, number, type, limit, agent, start, end, summary);

    const receipt = await tx.wait();
    alert("You have succesfully added a patient's medical data. RecordHash: " + receipt.transactionHash);
}
  
  function toggleMedical() {
    var x = document.getElementById("medical-form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  function toggleInsurance() {
    var x = document.getElementById("insurance-form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
  
  document.getElementById("toggle-medicalform").onclick = toggleMedical;
  document.getElementById("toggle-insuranceform").onclick = toggleInsurance;
  document.getElementById("btn-retrieve-medical").onclick = _retrivePatientHealthRecord;
  document.getElementById("btn-retrieve-insurance").onclick = _retrivePatientInsuranceRecord;
  document.getElementById("btn-medsummit").onclick = addMedicalData;
  document.getElementById("btn-insuresummit").onclick = addInsuranceData;
  document.getElementById("Connect").onclick = connectWallet;

  async function init() {
    var x = document.getElementById("medical-form");
    x.style.display = "none";
    var x = document.getElementById("insurance-form");
    x.style.display = "none";
    
  }

  init();