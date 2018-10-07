const frappe = require('frappejs');
const common = require('frappejs/common')
const models = require('../../models');
const coreModels = require('frappejs/models');
const HTTPClient = require('frappejs/backends/http');
const Observable = require('frappejs/utils/observable');
window.$ = require('jquery');
const db = require('./db');

const server = 'localhost:8000';
window.frappe = frappe;
frappe.init();
frappe.registerLibs(common);
frappe.registerModels(coreModels);
frappe.registerModels(models);
frappe.fetch = window.fetch.bind();
frappe.db = new HTTPClient({ server });
frappe.docs = new Observable();

init();

function init() {
    db.retrieveEvents();
    localStorage.event = null;
}

function resetFields() {
    localStorage.event = null;
    $('#date').val("");
    $('#time').val("");
    $('#title').val("");
    $('#description').val("");
}

$('#save').on('click', function() {
    if(localStorage.event) {
        db.updateEvent(localStorage.event);
    } else {
        db.insertEvent();
    }
});

$(document).on('click','.card', function() {
    $id = this.id;
    localStorage.event = $id;
    db.showEvent($id);
});

$(document).on('click','.del', function() {
    $id = this.id;
    $name = $id.split("-")[1];
    resetFields();
    db.deleteEvent($name);
});