function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        document.getElementById("result").innerHTML = bmi.toFixed(2);
    }
}

function submitButton() {
    var com = document.getElementById("comment").value;
    var name = document.getElementById("name").value;
    console.log(name + "," + com);
    document.getElementById("popup").style.display = "block";
    document.getElementById("comment").value = "";
    document.getElementById("name").value = "";

}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

