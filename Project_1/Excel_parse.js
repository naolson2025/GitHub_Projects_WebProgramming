//<!--stackoverflow below-->
//<!--https://www.html5rocks.com/en/tutorials/file/dndfiles/-->

var ExcelToJSON = function() {

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

};

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var xl2json = new ExcelToJSON();
    console.log(xl2json);
    xl2json.parseExcel(files[0]);
    console.log(xl2json);

}


document.getElementById('upload').addEventListener('change', handleFileSelect, false);
