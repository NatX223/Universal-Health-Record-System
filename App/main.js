/* Moralis init code */
// const { Moralis } = require("moralis");
const serverUrl = "https://wzogi8ep6qbv.usemoralis.com:2053/server";
const appId = "Iv88JqdsIHpsmt66CfDh4CtfFdZ7mNomEvEbhX6b";
Moralis.start({ serverUrl, appId });

// function to connect wallet
async function connectWalet() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
          alert("You've successfuly connected your wallet");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

document.getElementById("btn-login").onclick = connectWalet;
document.getElementById("btn-registerPatient").onclick = register; 