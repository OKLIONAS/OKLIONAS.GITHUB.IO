let Svar = document.getElementById("Output");

function getPersonNr() {
    console.log("click");
    fetch(
        `https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763?_limit=1&_offset=${Math.floor(Math.random() * 20000)}`,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            let responsearray = response.results;
            console.log(responsearray[0]);
            const prsnr = responsearray[0].testpersonnummer;
            const trimmedPrsnr = prsnr.substring(2); // Remove the first two characters
            Svar.innerHTML = trimmedPrsnr;
        })
        .catch(error => console.log(error));  
}


function checkButtClick() {
    // Check input and set output
    var input = document.getElementById("prsnr_input").value;
    var outputContainer = document.getElementById("outputContainer");
    var output = document.getElementById("Output");
    // Perform validation or processing
    // ...
    // Set the output text
    output.textContent = "Result: " + input;
    // Show the output container and copy button
    outputContainer.style.display = "block";
}

function copyText() {
    var output = document.getElementById("Output");
    var text = output.textContent;
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied: " + text);
}