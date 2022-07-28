// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Records {

    // a struct to keep of patients basic information
    struct Patient {
        address owner;
        string name;
        uint age;
        string gender;
        string height;
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
        string _address;
        string email;
        string website;
    }

    // mapping to keep hold of hospitals list
    mapping (address => bool) hospitalList;

    // mapping for an insurance instance
    struct Insurance {
        address owner;
        string name;
        string _address;
        string email;
        string website;
    }

    // mapping to keep hold of hospitals list
    mapping (address => bool) insuranceList;

    // mapping to keep track of patients access list
    mapping (address => mapping(address => bool)) accessList;

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
}