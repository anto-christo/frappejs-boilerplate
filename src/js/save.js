const frappe = require('frappejs');
const common = require('frappejs/common')
const models = require('../../models');
const coreModels = require('frappejs/models');
const HTTPClient = require('frappejs/backends/http');
const Observable = require('frappejs/utils/observable');
const $ = require('jquery');

const server = 'localhost:8000';
window.frappe = frappe;
frappe.init();
frappe.registerLibs(common);
frappe.registerModels(coreModels);
frappe.registerModels(models);
frappe.fetch = window.fetch.bind();
frappe.db = new HTTPClient({ server });
frappe.docs = new Observable();

$('#save').on('click', function() {
    const date = $('#date').val();
    const time = $('#time').val();
    const title = $('#title').val();
    const description = $('#description').val();

    const event = frappe.newDoc({
        doctype: 'Event',
        date,
        time,
        title,
        description
    });

    event.insert().then(() => {
        alert('Event added successfully!');
    })
});