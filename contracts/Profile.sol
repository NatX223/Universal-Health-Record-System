// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Records {

    // the deployer of the contract
    address public deployer;

    // a struct to keep of patients basic information
    struct Patient {
        address owner;
        string name;
        uint age;
        string gender;
        uint256 height;
        uint256 weight;
        string patient_address;
        uint256 phone;
        string email;
        uint256 dateCreated;
        string recordhash; // the folder hash of the IPFS folder where records will be kept
    }

    // mapping a patients record to an address
    mapping (address => Patient) internal patientList;

    // struct for a hospital instance
    struct Hospital {
        address owner;
        string name;
        string hospitalAddress;
        string email;
        string website;
    }

    // mapping to keep hold of hospitals list
    mapping (address => bool) hospitalList;
    // mapping to keep hold of hospitals records
    mapping (address => Hospital) hospitalRecord;

    // mapping for an insurance instance
    struct Insurance {
        address owner;
        string name;
        string insuranceAddress;
        string email;
        string website;
    }

    // mapping to keep hold of insurance list
    mapping (address => bool) insuranceList;
    // mapping to keep hold of insurance records
    mapping (address => Insurance) insuranceRecord;

    // mapping to keep track of patients access list
    mapping (address => mapping(address => bool)) accessList;

    constructor() {
        deployer = msg.sender;
    } 

    // function to retrive patient information
    function retrievePatient(address patient) public view returns(Patient memory p) {
        require(accessList[patient][msg.sender] == true);
        require(insuranceList[msg.sender] == true || hospitalList[msg.sender] == true);

        p = patientList[patient];

        return p;
    }

    // function to grant access
    function grantAccess(address reciever) public returns(bool b) {
        accessList[msg.sender][reciever] = true;
        b = true;
        return b;
    }

    // function to revoke access
    function revokeAccess(address reciever) public returns(bool b) {
        accessList[msg.sender][reciever] = false;
        b = true;
        return b;
    }

    // function to setup patient record
    function setRecordPatient(
        string memory _name,
        uint256 _age,
        string memory _gender,
        uint256 _height,
        uint256 _weight,
        string memory _patient_address,
        uint256 _phone,
        string memory _email) public returns(bool b) {
        Patient memory p;

        p.owner = msg.sender;
        p.name = _name;
        p.age = _age;
        p.gender = _gender;
        p.height = _height;
        p.weight = _weight;
        p.patient_address = _patient_address;
        p.phone = _phone;
        p.email = _email;
        p.dateCreated = block.timestamp;
        // setting the innitial record hash to empty string, will be later updated to contain real record hash
        p.recordhash = " ";

        patientList[msg.sender] = p;

        b = true;

        return b;

    }

    // function to setup hospital record
    // NB: will work on using an API for verification or pass through a verification to ensure security
    function setRecordHospital(
        string memory _name,
        string memory _hospitalAddress,
        string memory _email,
        string memory _website) public returns(bool b) {
        Hospital memory h;

        h.owner = msg.sender;
        h.name = _name;
        h.email = _email;
        h.hospitalAddress = _hospitalAddress;
        h.website = _website;

        hospitalRecord[msg.sender] = h;

        b = true;
        return b;
    }

    // function to setup insurance record
    // NB: will work on using an API for verification or pass through a verification to ensure security
    function setRecordInsurance(
        string memory _name,
        string memory _insuranceAddress,
        string memory _email,
        string memory _website) public returns(bool b) {
        Insurance memory i;

        i.owner = msg.sender;
        i.name = _name;
        i.email = _email;
        i.insuranceAddress = _insuranceAddress;
        i.website = _website;

        insuranceRecord[msg.sender] = i;

        b = true;
        return b;
    }

}
