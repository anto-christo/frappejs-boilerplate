module.exports = {
    name: "Email",
    doctype: "DocType",
    isSingle: 0,

    keywordFields:[
        "receiver",
        "subject",
        "message"
    ],

    fields: [
        {
            fieldname: "sender",
            label: "Sender Name",
            fieldtype: "Data",
            required: 1
        },
        {
            fieldname: "receiver",
            label: "Receiver Name",
            fieldtype: "Data",
            required: 1
        },
        {
            fieldname: "subject",
            label: "Subject",
            fieldtype: "Data"
        },
        {
            fieldname: "message",
            label: "Message",
            fieldtype: "Long Text",
            required: 1
        }
    ]
};