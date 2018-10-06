module.exports = {
    name: "Event",
    doctype: "DocType",
    isSingle: 0,
    fields: [
        {
            fieldname: "date",
            label: "Date",
            fieldtype: "Date",
            required: 1
        },
        {
            fieldname: "time",
            label: "Time",
            fieldtype: "Time",
            required: 1
        },
        {
            fieldname: "title",
            label: "Title",
            fieldtype: "Data"
        },
        {
            fieldname: "description",
            label: "Description",
            fieldtype: "Long Text",
            required: 1
        }
    ]
};