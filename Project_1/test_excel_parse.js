//Used stack overflow to find how to read an Excel file and parse to JSON

var ExcelToJSON = function() {

    this.parseExcel = function(file) {
        // create file reader to accept Excel
        var reader = new FileReader();

        // When the excel loads parse the spreadsheet
        reader.onload = function(e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            // create the json object and send it to the getJsonVariable function
            workbook.SheetNames.forEach(function(sheetName) {
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                var json_object = JSON.stringify(XL_row_object);
                //JSON.parse(json_object);
                getJsonVariable(JSON.parse(json_object));
                // Paste the json into the text field
                //jQuery( '#xlx_json' ).val( json_object );
            })
        };

        // logs error if occurs
        reader.onerror = function(ex) {
            console.log(ex);
        };

        reader.readAsBinaryString(file);

    };

};

// Triggered by the addEventListener change
function handleFileSelect(evt) {
    // Get the file
    var files = evt.target.files; // FileList object

    // Call the parse method
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
}

// Detect upload of a file and trigger the handle file select
document.getElementById('upload').addEventListener('change', handleFileSelect, false);


// put the json into a variable to be used
function getJsonVariable(json){
    // Total expenses = Done
    // Total income = Done
    createGraphs(totalExpenses(json), totalIncome(json), createExpenseChart(json), createIncomeChart(json))
}

// calculate the total expense from the json data
function totalExpenses(json) {
    // set total expenses variable which will be returned
    let total_expenses = 0;

    // Get the debit value from all transactions and add them together
    json.forEach(function (transaction) {
        if (parseFloat(transaction["Debit"]) > 0){
            total_expenses += parseFloat(transaction["Debit"]);
        }
    });

    return total_expenses;
}

// calculate the total income from the json data
function totalIncome(json) {
    // set total income variable
    let total_income = 0;

    // Get the credit value from all transactions and add them together
    json.forEach(function (transaction) {
        if (parseFloat(transaction["Credit"]) > 0){
            total_income += parseFloat(transaction["Credit"]);
        }
    });

    return total_income;
}

function createExpenseChart(json) {
    // Create an object of colors
    // Expenses will be warm colors
    var warm_colors = {
        1 : "#ff0000",
        2 : "#ff2a00",
        4 : "#ff4300",
        5 : "#ff8300",
        8 : "#faff0c",
        6 : "#ffbe0c",
        9 : "#d2ff0c",
        7 : "#ffde0c",
        3 : "#ff4242",
        10 : "#ff6868",
        11 : "#ff8787",
        12 : "#ffb5b5",
        13 : "#ffd8d8",
        14 : "#ffe59e",
        15 : "#fffb87",
    };

    var chart_object = {
        "Total Expenses": [{
        click: expensesChartDrillDownHandler,
        cursor: "pointer",
        explodeOnClick: false,
        innerRadius: "75%",
        legendMarkerType: "square",
        name: "Total Expenses",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
            // Need to find a way to create an object for each expense on the Excel
            // The y number should change based on the Excel, will need to put variables in place
            // Colors should all be different, but warm colors for expenses: red, orange, yellow - darker for largest expense
            // Expense name will need to be a variable too
            { y: 300000, name: "Alcohol", color: "#ef0b2e" },
            { y: 363040, name: "Amazon Prime", color: "#546BC1" },
            { y: 363040, name: "Car Loan", color: "#546BC1" },
            { y: 363040, name: "Eating Out", color: "#546BC1" },
            { y: 363040, name: "Entertainment", color: "#546BC1" },
            { y: 363040, name: "Gas", color: "#546BC1" },
            { y: 363040, name: "Groceries", color: "#546BC1" },
            { y: 363040, name: "MCTC Parking", color: "#546BC1" },
            { y: 363040, name: "Medical", color: "#546BC1" },
            { y: 363040, name: "Misc", color: "#546BC1" },
            { y: 363040, name: "Rent", color: "#546BC1" },
            { y: 363040, name: "Stocks", color: "#546BC1" },
            { y: 363040, name: "Student Loan", color: "#546BC1" },
            { y: 363040, name: "Spotify", color: "#546BC1" },
            { y: 363040, name: "Utilities", color: "#546BC1" }
        ]
    }],
        "Alcohol": [{
        color: "#E7823A",
        name: "Alcohol",
        type: "pie",
        dataPoints: [
            { x: new Date("1 Jan 2015"), y: 33000 },
            { x: new Date("1 Feb 2015"), y: 35960 },
            { x: new Date("1 Mar 2015"), y: 42160 },
            { x: new Date("1 Apr 2015"), y: 42240 },
            { x: new Date("1 May 2015"), y: 43200 },
            { x: new Date("1 Jun 2015"), y: 40600 },
            { x: new Date("1 Jul 2015"), y: 42560 },
            { x: new Date("1 Aug 2015"), y: 44280 },
            { x: new Date("1 Sep 2015"), y: 44800 },
            { x: new Date("1 Oct 2015"), y: 48720 },
            { x: new Date("1 Nov 2015"), y: 50840 },
            { x: new Date("1 Dec 2015"), y: 51600 }
        ]
    }],
    }
}

function createIncomeChart(json) {
    // chart of colors income will be in cool colors
    var cool_colors = {
        1 : "#76ff00",
        2 : "#afff6b",
        4 : "#26ff00",
        5 : "#148c00",
        8 : "#6bffad",
        6 : "#0bed70",
        9 : "#07f4ec",
        7 : "#56fff9",
        3 : "#51b0ff",
        10 : "#008bff",
        11 : "#005ead",
        12 : "#0b1ae8",
        13 : "#a465f7",
        14 : "#8509ea",
        15 : "#cb00ff",
    };

    var incomeData = {
        "Total Income": [{
            click: incomeChartDrilldownHandler,
            cursor: "pointer",
            explodeOnClick: false,
            innerRadius: "75%",
            legendMarkerType: "square",
            name: "Total Income",
            radius: "100%",
            showInLegend: true,
            startAngle: 90,
            type: "doughnut",
            dataPoints: [
                // Need to find a way to create an object for each expense on the Excel
                // The y number should change based on the Excel, will need to put variables in place
                // Colors should all be different, but warm colors for expenses: red, orange, yellow - darker for largest expense
                // Expense name will need to be a variable too
                {y: 14.27, name: "Alcohol", color: "#ef0b2e"},
                {y: 363040, name: "Amazon Prime", color: "#546BC1"},
                {y: 363040, name: "Car Loan", color: "#546BC1"},
                {y: 363040, name: "Eating Out", color: "#546BC1"},
                {y: 363040, name: "Entertainment", color: "#546BC1"},
                {y: 363040, name: "Gas", color: "#546BC1"},
                {y: 363040, name: "Groceries", color: "#546BC1"},
                {y: 363040, name: "MCTC Parking", color: "#546BC1"},
                {y: 363040, name: "Medical", color: "#546BC1"},
                {y: 363040, name: "Misc", color: "#546BC1"},
                {y: 363040, name: "Rent", color: "#546BC1"},
                {y: 363040, name: "Stocks", color: "#546BC1"},
                {y: 363040, name: "Student Loan", color: "#546BC1"},
                {y: 363040, name: "Spotify", color: "#546BC1"},
                {y: 363040, name: "Utilities", color: "#546BC1"}
            ]
        }],
    };
}


