const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe ("ProfileContract", function () {
    async function deployContract() {

        const [Deployer, Patient, Hospital, Insurance] = await ethers.getSigners();

        const Profile = await ethers.getContractFactory("Records");
        const profile = await Profile.deploy();

        return {profile, Deployer, Patient, Hospital, Insurance};
    }

    describe("Profile functions", function () {
        it("should deploy properly", async function () {
            const {profile, Deployer} = await loadFixture(deployContract);

            expect(await profile.deployer()).to.equal(Deployer.address);
        });
    })

    describe("Main functions", function () {
        it("should succesfully add patient record", async function () {
            const {profile, Deployer, Hospital} = await loadFixture(deployContract);

            const diagnosis = "Malaria";
            const prescription = "Amatem";
            const treatmentForm = "Drugs";
            const Doctor = "Dr. Joe";
            const admissionDate = "8-8-22";
            const dischargeDate = "10-8-22";
            const summary  = "The patient had malaria";

            await profile.connect(Hospital).addToList();
            await profile.grantAccess(Hospital.address);
            await expect (profile.connect(Hospital).addHealthRecord(Deployer.address, diagnosis, prescription, treatmentForm, Doctor, admissionDate, dischargeDate, summary)).not.to.be.reverted;
        });

        it("should succesfully add patient record", async function () {
            const {profile, Deployer, Hospital} = await loadFixture(deployContract);

            const diagnosis = "Malaria";
            const prescription = "Amatem";
            const treatmentForm = "Drugs";
            const Doctor = "Dr. Joe";
            const admissionDate = "8-8-22";
            const dischargeDate = "10-8-22";
            const summary  = "The patient had malaria";

            await profile.connect(Hospital).addToList();
            await profile.grantAccess(Hospital.address);
            await profile.connect(Hospital).addHealthRecord(Deployer.address, diagnosis, prescription, treatmentForm, Doctor, admissionDate, dischargeDate, summary);
            expect(await profile.connect(Hospital).retrievePatientHealthRecord(Deployer.address)).to.equal(diagnosis);
        });

    })
})