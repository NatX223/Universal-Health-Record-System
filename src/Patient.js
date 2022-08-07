const ethers = Moralis.web3Library;
// function to add patient
async function register() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    // calling function to store patient data
    const patientRecord = {
        contractAddress: "0x1BC8045348013ab0F8B63E01B7c37031B2568B29",
        functionName: "setRecordPatient",
        abi: contractabi,
        params: {
            _name: name, _age: age, _gender: gender, _height: height, _weight: weight, _patient_address: address, _phone: phone, _email: email
        }
      }

      // TODO
      // sub function to add patient address as a patient in database

    const record = await Moralis.executeFunction(patientRecord);

    await record.wait().on("receipt", function (receipt) {
        alert("You have created new patient record. Transaction hash:" + receipt.transactionHash)
    });
}

// async function showForm(params) {
    
// }

// function to grant access to patient record
async function grantAccess() {

    let address = document.getElementById("address").value;

    // calling grantAccess function
    const request = {
        contractAddress: "0x1BC8045348013ab0F8B63E01B7c37031B2568B29",
        functionName: "grantAccess",
        abi: contractabi,
        params: {
            receiver: address
        }
      }

    const record = await Moralis.executeFunction(request);

    await record.wait().on("receipt", function (receipt) {
        alert("You have created new patient record. Transaction hash:" + receipt.transactionHash)
    });
}

// function to revoke access to patient record
async function revokeAccess() {

    let address = document.getElementById("address").value;

    // calling grantAccess function
    const request = {
        contractAddress: "0x1BC8045348013ab0F8B63E01B7c37031B2568B29",
        functionName: "revokeAccess",
        abi: contractabi,
        params: {
            receiver: address
        }
      }

    const record = await Moralis.executeFunction(request);

    await record.wait().on("receipt", function (receipt) {
        alert("You have created new patient record. Transaction hash:" + receipt.transactionHash)
    });
}

async function displayRecord(){
    const parent = document.getElementById("app");
  
    // getting the caller address
    const currentUser = Moralis.User.current();
    let accounts = currentUser.get("accounts");
    let callerAddress = accounts[0];
    
    // calling function to retrieve patient data called by patient
    const patientRecord = {
        // deploy contract and get address
        contractAddress: "",
        functionName: "getPatient",
        abi: contractabi,
        params: {
            patient: callerAddress
        }
      };

      const data = await Moralis.executeFunction(patientRecord);
      
      console.log(data);

      // get the IPFS address format and insert the hash to get the address
      recordsURI = ipfs + data[9];
      
      let htmlstring = 
      `    <div class="card">
          <img src="${metadata.image}" alt="NFT image">
          <div class="card-body">
          <h5 class="card-title">Name: ${data[0]}</h5>
          <h6 class="card-title">Record</h6>
          <p class="card-text">Age: ${data[1]}</p>
          <p class="card-text">Gender: ${data[2]}</p>
          <p class="card-text">Height: ${data[3]}</p>
          <p class="card-text">Weight: ${data[4]}</p>
          <p class="card-text">Phone: ${data[6]}</p>
          <p class="card-text">Email: ${data[7]}</p>
          <a href="${recordsURI}" class="btn btn-primary">View all records</a>
          </div>
      </div>`

      let col = document.createElement("div");
      col.className = "col col-md-3"
      col.innerHTML = htmlstring;
      parent.appendChild(col);  
  }

  async function retriveHospitalRecord() {
    const parent = document.getElementById("app");
    let hospital_address = document.getElementById("address").value;
    
    // calling function to retrieve patient data called by patient
    const hospitalRecord = {
        // deploy contract and get address
        contractAddress: "",
        functionName: "retrieveHospital",
        abi: contractabi,
        params: {
            patient: hospital_address
        }
        };
  
        const data = await Moralis.executeFunction(hospitalRecord);
        
        console.log(data);
        
        let htmlstring = 
        `    <div class="card">
            <img src="${metadata.image}" alt="NFT image">
            <div class="card-body">
            <h5 class="card-title">Name: ${data[0]}</h5>
            <p class="card-text">Address: ${data[1]}</p>
            <p class="card-text">Email: ${data[2]}</p>
            <a href="${data[3]}" class="btn btn-primary">Visit site</a>
            </div>
        </div>`;
  
        let col = document.createElement("div");
        col.className = "col col-md-3"
        col.innerHTML = htmlstring;
        parent.appendChild(col);
  }
  
  async function retriveInsuranceRecord() {
    const parent = document.getElementById("app");
    let insurance_address = document.getElementById("address").value;
    
    // calling function to retrieve patient data called by patient
    const insuranceRecord = {
        // deploy contract and get address
        contractAddress: "",
        functionName: "retrieveInsurance",
        abi: contractabi,
        params: {
            patient: insurance_address
        }
      };
  
      const data = await Moralis.executeFunction(insuranceRecord);
      
      console.log(data);
      
      let htmlstring = 
      `    <div class="card">
          <img src="${metadata.image}" alt="NFT image">
          <div class="card-body">
          <h5 class="card-title">Name: ${data[0]}</h5>
          <p class="card-text">Address: ${data[1]}</p>
          <p class="card-text">Email: ${data[2]}</p>
          <a href="${data[3]}" class="btn btn-primary">Visit site</a>
          </div>
      </div>`;
  
      let col = document.createElement("div");
      col.className = "col col-md-3"
      col.innerHTML = htmlstring;
      parent.appendChild(col);
    }

async function init() {
    getaddress();
    displayRecord();
}