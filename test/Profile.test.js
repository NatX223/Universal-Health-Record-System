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
})