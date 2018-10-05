const frappe = require('frappejs');
const common = require('frappejs/common')
const models = require('../../models');
const coreModels = require('frappejs/models');
const HTTPClient = require('frappejs/backends/http');
const Observable = require('frappejs/utils/observable');

const server = 'localhost:8000';
window.frappe = frappe;
frappe.init();
frappe.registerLibs(common);
frappe.registerModels(coreModels);
frappe.registerModels(models);
frappe.fetch = window.fetch.bind();
frappe.db = new HTTPClient({ server });
frappe.docs = new Observable();

const senderEl = document.getElementById("sender");
const receiverEl = document.getElementById("receiver");
const subjectEl = document.getElementById("subject");
const messageEl = document.getElementById("message");
const saveBtn = document.getElementById("save");

saveBtn.onclick = function(){

    const sender = senderEl.value;
    const receiver = receiverEl.value;
    const subject = subjectEl.value || "No Subject";
    const message = messageEl.value;

    const data = frappe.newDoc({
        doctype: 'Email',
        sender: sender,
        receiver: receiver,
        subject: subject,
        message: message
    });

    data.insert();

    alert("Draft saved successfully !");
}