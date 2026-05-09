document.getElementById("app").innerHTML = `
    <h2>Listing CSV Upload</h2>
    <input type="file" id="csvFile" accept=".csv">
    <button id="loadCsvBtn">Load CSV</button>
    <div id="results"></div>
`;

document.getElementById("loadCsvBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("csvFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a CSV file first.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        const rows = text.split("\n").map(r => r.split(","));

        const totalListings = rows.length - 1;

        document.getElementById("results").innerHTML = `
            <h3>CSV Loaded</h3>
            <p><strong>Total Listings:</strong> ${totalListings}</p>
        `;
    };

    reader.readAsText(file);
});
