var PdfTable = require('voilab-pdf-table'),
    PdfDocument = require('pdfkit');

module.exports = {
    create: function (positions) {
        // מייצר פידיאף וטייבל
        var pdf = new PdfDocument({
            autoFirstPage: false
        }),
            table = new PdfTable(pdf, {
                bottomMargin: 30,
            });

        table
            // הוספת פלאגין לסידור הרוחב
            .addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
                align: 'left'
            }))
            // ערכים דיפולטיביים לעמודות
            .setColumnsDefaults({
                headerBorder: 'B',
                align: 'center',
                padding: [0, 5, 5, 5],
                headerPadding: [0, 5, 5, 5],
            })
            // עמודות של הטבלה
            .addColumns([
                {
                    id: 'Num',
                    header: 'Nm',
                    align: 'left',
                    width: 30,
                    align: 'center'

                },
                {
                    id: 'Operation',
                    header: 'Op',
                    width: 30,
                    align: 'center'
                },
                {
                    id: 'StartDate',
                    header: 'StartDate',
                    width: 75,
                    align: 'center'
                },
                {
                    id: 'EndDate',
                    header: 'EndDate',
                    width: 75,
                    align: 'center'
                },
                {
                    id: 'StartPrice',
                    header: 'StartPrice',
                    width: 60,
                    align: 'center'
                },
                {
                    id: 'EndPrice',
                    header: 'EndPrice',
                    width: 60,
                    align: 'center'
                },
                {
                    id: 'tp',
                    header: 'TP',
                    width: 40,
                    align: 'center'
                },
                {
                    id: 'sp',
                    header: 'SP',
                    width: 40,
                    align: 'center'
                },
                {
                    id: 'succeeded',
                    header: 'succees',
                    width: 60,
                    align: 'center'
                },
                {
                    id: 'PipsesCents',
                    header: 'Pipses',
                    width: 60,
                    align: 'center'
                },
                {
                    id: 'Precent',
                    header: 'Success rate',
                    width: 70,
                    align: 'center'
                },

            ])
            // הוספת כותרת לכל עמוד
            .onPageAdded(function (tb) {
                tb.addHeader();
            });

        // הוספת עמוד נוסף
        pdf.addPage();

        // הכנסת הפוזיציות לבודי של הטבלה
        table.addBody(
            positions
        );

        return pdf;
    }
}