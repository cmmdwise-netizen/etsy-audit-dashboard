document.getElementById('loadCsvBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please choose a CSV file first.");
        return;
    }

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            const rows = results.data;

            // Total rows (all variations)
            const totalRows = rows.length;

            // Unique listings based on TITLE
            const uniqueTitles = new Set();
            rows.forEach(row => {
                if (row.TITLE && row.TITLE.trim() !== "") {
                    uniqueTitles.add(row.TITLE.trim());
                }
            });

            const uniqueListingCount = uniqueTitles.size;

            // Display results in a table
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `
                <h3>Listings Summary</h3>
                <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 10px;">
                    <tr>
                        <th>Metric</th>
                        <th>Count</th>
                    </tr>
                    <tr>
                        <td><strong>Unique Listings</strong></td>
                        <td>${uniqueListingCount}</td>
                    </tr>
                    <tr>
                        <td><strong>Total Rows (Variations)</strong></td>
                        <td>${totalRows}</td>
                    </tr>
                </table>
            `;
        }
    });
});
