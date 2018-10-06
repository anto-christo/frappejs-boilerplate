const frappe = require('frappejs');
const common = require('frappejs/common')
const models = require('../../models');
const coreModels = require('frappejs/models');
const HTTPClient = require('frappejs/backends/http');
const Observable = require('frappejs/utils/observable');
window.$ = require('jquery');

const server = 'localhost:8000';
window.frappe = frappe;
frappe.init();
frappe.registerLibs(common);
frappe.registerModels(coreModels);
frappe.registerModels(models);
frappe.fetch = window.fetch.bind();
frappe.db = new HTTPClient({ server });
frappe.docs = new Observable();

const db = require('./db');

db.retrieveEvents();

$('#save').on('click', function() {
    db.insertEvent();
});

$(document).on('click','.card', function() {
    $id = this.id;
    db.showEvent($id);
});