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

var web3provider;

var signer;

async function connectWallet() {
    web3provider = await Moralis.enableWeb3({ provider: "metamask"});
    
    await web3provider.send("eth_requestAccounts", []);
    signer = web3provider.getSigner();
    var x = document.getElementById("main");
    x.style.display = "block";
    var y = document.getElementById("init");
    y.style.display = "none";
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
    var x = document.getElementById("individual-reg-form");
    x.style.display = "none";
    var y = document.getElementById("hospital-reg-form");
    y.style.display = "none";
    var z = document.getElementById("insurance-reg-form");
    z.style.display = "none";
}

init();