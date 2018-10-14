const frappe = require('frappejs');
const common = require('frappejs/common')
const models = require('../../models');
const coreModels = require('frappejs/models');
const HTTPClient = require('frappejs/backends/http');
const Observable = require('frappejs/utils/observable');
window.$ = require('jquery');
const db = require('./db');
const misc = require('./misc');

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

async function init() {
    localStorage.event = null;
    await db.retrieveEvents();
}

$('.add').on('click', function() {
    misc.resetFields();
});

$('#save').on('click', async function() {
    if(localStorage.event != 'null') {
        await db.updateEvent(localStorage.event);
    } else {
        await db.insertEvent();
        misc.resetFields();
    }
});

$(document).on('click','.card', async function(e) {
    if(e.target.innerHTML == 'delete') {
        $id = e.target.id;
        $name = $id.split("-")[1];
        await db.deleteEvent($name);
        misc.resetFields();
    } else {
        $id = this.id;
        localStorage.event = $id;
        await db.showEvent($id);
    }
});