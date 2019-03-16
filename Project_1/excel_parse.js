//<!--stackoverflow below-->

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
                JSON.parse(json_object);
                getJsonVariable(json_object);
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
    var json_var = json;
    console.log(json_var);
}

function createChart() {
    
}