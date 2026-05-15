function showBuild() {

    let choice = document.getElementById("choice").value;
    let budget = document.getElementById("budget").value;

    if (
        (choice.includes("Gaming") && budget.includes("40000")) ||
        (choice.includes("Editing") && budget.includes("60000")) ||
        (choice.includes("Programming") && budget.includes("40000")) ||
        (choice.includes("General Use") && budget.includes("40000"))
    ) {

        document.getElementById("result").innerHTML =
        "Recommended Build: CPU - Intel i5 12400F, GPU - NVIDIA GTX 1660 Super";

    }

    else if (
        (choice.includes("Gaming") && budget.includes("60000")) ||
        (choice.includes("Editing") && budget.includes("40000")) ||
        (choice.includes("Programming") && budget.includes("60000")) ||
        (choice.includes("General Use") && budget.includes("60000"))
    ) {

        document.getElementById("result").innerHTML =
        "Recommended Build: CPU - AMD Ryzen 5 5600X, GPU - NVIDIA RTX 3060";

    }

    else {

        document.getElementById("result").innerHTML =
        "Please select valid options for both purpose and budget.";

    }
} 

function checkCompatibility() {

    let cpu = document.getElementById("cpu").value;
    let motherboard = document.getElementById("motherboard").value;

    if (
        (cpu.includes("Intel") && motherboard.includes("B660")) ||
        (cpu.includes("AMD") && motherboard.includes("B550"))
    ) {

        document.getElementById("result").innerHTML = "Compatible ✅";

    } else {

        document.getElementById("result").innerHTML = "Not Compatible ❌";

    }
}

function noobpro(){
    document.getElementById("result").innerHTML = "you are a Noob user, but you can be a Pro with our help! 😎";
}