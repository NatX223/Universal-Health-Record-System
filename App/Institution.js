const serverUrl = "https://wzogi8ep6qbv.usemoralis.com:2053/server";
const appId = "Iv88JqdsIHpsmt66CfDh4CtfFdZ7mNomEvEbhX6b";
Moralis.start({ serverUrl, appId });

const ethers = Moralis.web3Library;

const contractAddress = "0xC9FC8CfB8f374673F273505ba3926673746BC838";

const contractabi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_diagnosis",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_prescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_treatmentForm",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Doctor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_admissionDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dischargeDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_summary",
				"type": "string"
			}
		],
		"name": "addHealthRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_policyName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_policyId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_policyType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_policyLimit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_policyAgent",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_startDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_endDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_summary",
				"type": "string"
			}
		],
		"name": "addInsuranceRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			}
		],
		"name": "grantAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "b",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			}
		],
		"name": "revokeAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "b",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospitalAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_website",
				"type": "string"
			}
		],
		"name": "setRecordHospital",
		"outputs": [
			{
				"internalType": "bool",
				"name": "b",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_insuranceAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_website",
				"type": "string"
			}
		],
		"name": "setRecordInsurance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "b",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_height",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_weight",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_patient_address",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			}
		],
		"name": "setRecordPatient",
		"outputs": [
			{
				"internalType": "bool",
				"name": "b",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "addPatientRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "b",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deployer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			}
		],
		"name": "getPatient",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hospital",
				"type": "address"
			}
		],
		"name": "retrieveHospital",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "insurance",
				"type": "address"
			}
		],
		"name": "retrieveInsurance",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			}
		],
		"name": "retrievePatient",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			}
		],
		"name": "retrievePatientHealthRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "diagnosis",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "prescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "treatmentForm",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Doctor",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "admissionDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dischargeDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "summary",
						"type": "string"
					}
				],
				"internalType": "struct Records.patientHealthRecord[]",
				"name": "p",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			}
		],
		"name": "retrievePatientInsuranceRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "policyName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "policyId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "policyType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "policyLimit",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "policyAgent",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "startDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "endDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "summary",
						"type": "string"
					}
				],
				"internalType": "struct Records.patientInsuranceRecord[]",
				"name": "p",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const abi = contractabi;

var signer;

var web3provider;

async function connectWallet() {
    web3provider = await Moralis.enableWeb3({ provider: "metamask"});
    await web3provider.send("eth_requestAccounts", []);
    signer = web3provider.getSigner();
    var x = document.getElementById("main");
    x.style.display = "block";
    var y = document.getElementById("init");
    y.style.display = "none";

    displayaddress();
}

async function displayaddress() {
    var parent = document.getElementById("institutionaddress");
    let address = await signer.getAddress();
    let p = `<p>${address}</p>`;
    parent.innerHTML = p;
}

async function _retrivePatientHealthRecord() {
    const parent = document.getElementById("patient-view");
    let patient_address = document.getElementById("address").value;
    
    // execute the function and get return object data
    const Contract = new ethers.Contract(contractAddress, abi, signer);

    const data = await Contract.retrievePatientHealthRecord(patient_address);

    console.log(data);
    for(let i = 0; i < data.length; i++) {
        let _record = data[i];
        let record = JSON.parse(_record);
        
              
      let htmlstring = 
      `    <div class="card">
          <img src="https://www.flaticon.com/free-icon/man_1132080?related_id=1132080" alt="icon">
          <div class="card-body">
          <h6 class="card-title">Record</h6>
          <p class="card-text">Diagnosis: ${record.diagnosis}</p>
          <p class="card-text">Presscription: ${record.prescription}</p>
          <p class="card-text">Form of treatment: ${record.treatmentForm}</p>
          <p class="card-text">Doctor: ${record.doctor}</p>
          <p class="card-text">Admission Date: ${record.admissionDate}</p>
          <p class="card-text">Discharge Date: ${record.dischargeDate}</p>
          <p class="card-text">Treatment summary: ${record.summary}</p>
          </div>
      </div>`;
  
      let col = document.createElement("div");

      col.className = "col col-md-3"
      col.innerHTML = htmlstring;
      parent.appendChild(col);
    }
  }
  
  async function _retrivePatientInsuranceRecord() {
    const parent = document.getElementById("patient-view");
    let patient_address = document.getElementById("address").value;
    
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const data = await Contract.retrievePatientInsuranceRecord(patient_address);

    console.log(data);
    for(let i = 0; i < data.length; i++) {
        let _record = data[i];
        let record = JSON.parse(_record);
        
              
      let htmlstring = 
      `    <div class="card">
          <img src="https://www.flaticon.com/free-icon/man_1132080?related_id=1132080" alt="icon">
          <div class="card-body">
          <h6 class="card-title">Record</h6>
          <p class="card-text">Policy Name: ${record.policyName}</p>
          <p class="card-text">Policy Id: ${record.policyId}</p>
          <p class="card-text">Policy Type: ${record.PolicyType}</p>
          <p class="card-text">Policy Limit: ${record.policyLimit}</p>
		  <p class="card-text">Policy Limit: ${record.policyAgent}</p>
          <p class="card-text">Start Date: ${record.startDate}</p>
          <p class="card-text">End Date: ${record.endDate}</p>
          <p class="card-text">Summary: ${record.summary}</p>
          </div>
      </div>`;
  
      let col = document.createElement("div");
      col.className = "col col-md-3"
      col.innerHTML = htmlstring;
      parent.appendChild(col);
    }
  }
  
async function addMedicalData() {
    let address = document.getElementById("Haddress");
    let diagnosis = document.getElementById("diagnosis summary");
    let prescription = document.getElementById("prescribtion");
    let treatmentForm = document.getElementById("treatment");
    let doctor = document.getElementById("doctor");
    let _admission = document.getElementById("admission");
    let _discharge = document.getElementById("discharge");
    let summary = document.getElementById("treatment-summary");

    let admission = String(_admission);
    let discharge = String(_discharge);

    // calling function to store Insurance data
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await Contract.addHealthRecord(address, diagnosis, prescription, treatmentForm, doctor, admission, discharge, summary);

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

    let start = String(_start);
    let end = String(_end);

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
  document.getElementById("connect").onclick = connectWallet;

  async function init() {
    var x = document.getElementById("medical-form");
    x.style.display = "none";
    var y = document.getElementById("insurance-form");
    y.style.display = "none";
    var z = document.getElementById("main");
    z.style.display = "none";
    
  }

  init();