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
            fieldname: "venue",
            label: "Venue",
            fieldtype: "Data",
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