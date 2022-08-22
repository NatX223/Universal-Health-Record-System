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
    displayaddress();
}

async function displayaddress() {
  var parent = document.getElementById("patientaddress");
  let address = await signer.getAddress();
  let p = `<p>${address}</p>`;
  parent.innerHTML = p;
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

  async function retriveHospital() {
    const parent = document.getElementById("Hospital-view");
    let hospital_address = document.getElementById("address").value;

	const Contract = new ethers.Contract(contractAddress, abi, signer);
    const data = await Contract.retriveHospital(hospital_address);

    console.log(data);

    let image = "https://www.flaticon.com/free-icon/hospital_3063205?term=hospital&related_id=3063205;";

          let htmlstring = 
      `    <div class="card">
          <img src="${image}" alt="icon">
          <div class="card-body">
          <h6 class="card-title">${data[0]}</h6>
          <p class="card-text">Address: ${data[1]}</p>
          <p class="card-text">Email: ${data[2]}</p>
          <p class="card-text">Website: ${data[3]}</p>
          </div>
      </div>`;
  
      let col = document.createElement("div");
      col.className = "col col-md-3";
      col.innerHTML = htmlstring;
      parent.appendChild(col);
  }

  async function retriveInsurance() {
    const parent = document.getElementById("Insurance-view");
    let hospital_address = document.getElementById("address").value;
	
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    const data = await Contract.retriveInsurance(hospital_address);

    console.log(data);

    let image = "https://www.flaticon.com/free-icon/organization_1006553?term=organization&related_id=1006553;";

    let htmlstring = 
    `    <div class="card">
        <img src="${image}" alt="icon">
        <div class="card-body">
        <h6 class="card-title">${data[0]}</h6>
        <p class="card-text">Address: ${data[1]}</p>
        <p class="card-text">Email: ${data[2]}</p>
        <p class="card-text">Website: ${data[3]}</p>
        </div>
    </div>`;

    let col = document.createElement("div");
    col.className = "col col-md-3";
    col.innerHTML = htmlstring;
    parent.appendChild(col);
}

document.getElementById("connect").onclick = connectWallet;
document.getElementById("btn-grant").onclick = grantAccess;
document.getElementById("btn-revoke").onclick = revokeAccess;
document.getElementById("btn-view-hospital").onclick = retriveHospital;
document.getElementById("btn-view-insurance").onclick = retriveInsurance;

async function init() {
  var z = document.getElementById("main");
  z.style.display = "none";
}

init();