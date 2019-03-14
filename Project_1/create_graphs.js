// Code tutorial found online https://www.html5rocks.com/en/tutorials/file/dndfiles
// Also found info on stackoverflow

function readExcel() {
    // Check if the browser supports file reading
    if (window.File && window.FileReader && window.FileList && window.Blob){
        this.parseExcel = function(file) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach(function(sheetName) {
                    // Here is your object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);
                    //console.log(json_object);
                    JSON.parse(json_object);
                    jQuery( '#xlx_json' ).val( json_object );
                })
            };

            // logs error if occurs
            reader.onerror = function(ex) {
                console.log(ex);
            };

            reader.readAsBinaryString(file);

        };

    } else{
        alert("This browser does not support file reading.")
    }
}

// Called when a file is uploaded
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    console.log("files\n" + files);
    var xl2json = readExcel();
    console.log("xl2json\n" + xl2json);
    xl2json.parseExcel(files[0]);
    console.log("xl2json after parseExcel\n" + xl2json);
}

// Activated when a file is uploaded
document.getElementById('upload').addEventListener('change', handleFileSelect, false);


function createExpenseVariables(JSON) {
    return expenses;
}


function createIncomeVariables(JSON) {
    return income;
}