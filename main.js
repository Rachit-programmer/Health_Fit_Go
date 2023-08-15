function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        document.getElementById("result").innerHTML = bmi.toFixed(2);
    }
}