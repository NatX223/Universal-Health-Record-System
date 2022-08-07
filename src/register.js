function toggleIndividual() {
    var x = document.getElementById("indidual-reg-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function toggleHospital() {
    var x = document.getElementById("hospital-reg-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function toggleInsurance() {
    var x = document.getElementById("insurance-reg-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

document.getElementById("toggle-Individualregform").onclick = toggleInsurance;
document.getElementById("toggle-Hospitalregform").onclick = toggleInsurance;
document.getElementById("toggle-Insuranceregform").onclick = toggleInsurance;

function init() {
    var x = document.getElementById("indidual-reg-form");
    x.style.display = "none";
    var y = document.getElementById("hospital-reg-form");
    y.style.display = "none";
    var z = document.getElementById("insurance-reg-form");
    z.style.display = "none";
}

init();