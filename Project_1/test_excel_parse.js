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
    createGraphs(totalExpenses(json), totalIncome(json), getExpenseCategories(json), getIncomeCategories(json))
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

// Done
function getExpenseCategories(json) {
    // Create a map to store each category and the total expenses for that category
    let all_expenses = [];

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

    let color_picker = 1;
    json.forEach(function (transaction) {
        // check to see if the transaction is an expense by checking for debit value
        if (parseFloat(transaction["Debit"]) > 0){
            // Check to see if the category already exists
            let exists = false;
            let location = 0;
            for (let i = 0; i < all_expenses.length; i++) {
                if (all_expenses[i].name === transaction["Category"]){
                    exists = true;
                    location = i;
                    break;
                }
            }

            // if it does exist then add the transaction debit to the existing expense
            if (exists){
                all_expenses[location].y = all_expenses[location].y + parseFloat(transaction["Debit"]);
            }
            else {
                // if the category does not already exist create an object for it and add it to the array
                let obj = {
                    y: parseFloat(transaction["Debit"]),
                    name: transaction["Category"],
                    color: warm_colors[color_picker]
                };
                all_expenses.push(obj);
                color_picker++;
            }
        }
    });

    return all_expenses;
}


function getIncomeCategories(json) {
    // Create a map to store each category and the total expenses for that category
    let all_income = [];

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

    let color_picker = 1;
    json.forEach(function (transaction) {
        // check to see if the transaction is an expense by checking for credit value
        if (parseFloat(transaction["Credit"]) > 0){
            // Check to see if the category already exists
            let exists = false;
            let location = 0;
            for (let i = 0; i < all_income.length; i++) {
                if (all_income[i].name === transaction["Category"]){
                    exists = true;
                    location = i;
                    break;
                }
            }

            // if it does exist then add the transaction credit to the existing expense
            if (exists){
                all_income[location].y = all_income[location].y + parseFloat(transaction["Credit"]);
            }
            else {
                // if the category does not already exist create an object for it and add it to the array
                let obj = {
                    y: parseFloat(transaction["Credit"]),
                    name: transaction["Category"],
                    color: cool_colors[color_picker]
                };
                all_income.push(obj);
                color_picker++;
            }
        }
    });
    return all_income;
}


