async function retrivePatientRecord() {
    const parent = document.getElementById("app");
    let patient_address = document.getElementById("address").value;
    
    // getting the caller address
    const currentUser = Moralis.User.current();
    let accounts = currentUser.get("accounts");
    
    // calling function to retrieve patient data called by patient
    const patientRecord = {
        // deploy contract and get address
        contractAddress: "",
        functionName: "retrievePatient",
        abi: contractabi,
        params: {
            patient: patient_address
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
      </div>`;
  
      let col = document.createElement("div");
      col.className = "col col-md-3"
      col.innerHTML = htmlstring;
      parent.appendChild(col);
  }
  
    
  // function to add hospital
  async function registerHospital() {
  
      let name = document.getElementById("name").value;
      let address = document.getElementById("address").value;
      let website = document.getElementById("website").value;
      let email = document.getElementById("email").value;
  
      // calling function to store hospital data
      const hospitalRecord = {
          // deploy contract and get address
          contractAddress: "",
          functionName: "setRecordHospital",
          abi: contractabi,
          params: {
              _name: name, _hospitalAddress: address, _email: email, _website: website
          }
        }
  
        // TODO
        // sub function to add hospital address as a hospital in database
  
      const record = await Moralis.executeFunction(hospitalRecord);
  
      console.log(record);
  
      await record.wait().on("receipt", function (receipt) {
          // assert that the function returns true
          // then make an alert
          alert("You have created new hospital record. Record hash: " + receipt.transactionHash)
      })
  }
  
  // function to add insurance
  async function registerInsurance() {
  
      let name = document.getElementById("name").value;
      let address = document.getElementById("address").value;
      let website = document.getElementById("website").value;
      let email = document.getElementById("email").value;
  
      // calling function to store insurance data
      const insuranceRecord = {
          // deploy contract and get address
          contractAddress: "",
          functionName: "setRecordInsurance",
          abi: contractabi,
          params: {
              _name: name, _insuranceAddress: address, _email: email, _website: website
          }
        }
  
        // TODO
        // sub function to add insurance address as a insurance in database
  
      const record = await Moralis.executeFunction(insuranceRecord);
  
      console.log(record);
  
      await record.wait().on("receipt", function (receipt) {
          // assert that the function returns true
          // then make an alert
          alert("You have created new insurance record. Record hash: " + receipt.transactionHash)
      })
  }

  // function to add patient
  async function updateRecord() {

    let address = document.getElementById("address").value;
    let hash = document.getElementById("hash").value;
  
    // calling function to update recordhash of patient data
    const recordHash = {
        // deploy contract and get address
        contractAddress: "",
        functionName: "addPatientRecord",
        abi: contractabi,
        params: {
            patient: address, ipfsHash: hash
        }
      }
  
      // TODO
      // sub function to add record to patient document, upload to IPFS and receive hash 
  
    const record = await Moralis.executeFunction(recordHash);
  
    await record.wait().on("receipt", function (receipt) {
        alert("You have successfuly added to patient record. Transaction hash:" + receipt.transactionHash)
    })
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

  async function init() {
    var x = document.getElementById("medical-form");
    x.style.display = "none";
    var x = document.getElementById("insurance-form");
    x.style.display = "none";
    
  }

  init();