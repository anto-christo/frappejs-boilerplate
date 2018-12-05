const frappe = require('frappejs');
const common = require('frappejs/common')
const models = require('../../models');
const coreModels = require('frappejs/models');
const SQLite = require('frappejs/backends/sqlite');
const Observable = require('frappejs/utils/observable');
const path = require('path');
window.$ = require('jquery');
const db = require('./db');
const misc = require('./misc');

window.frappe = frappe;
frappe.init();
frappe.registerLibs(common);
frappe.registerModels(coreModels);
frappe.registerModels(models);
frappe.fetch = window.fetch.bind();
frappe.docs = new Observable();

async function connectToDatabase() {
    const SQLite = require('frappejs/backends/sqlite');
    const dbPath = path.resolve(process.cwd(),'test.db');
    frappe.isServer = true;
    frappe.login('Administrator');
    frappe.db = new SQLite({ dbPath: dbPath });
    await frappe.db.connect();
    await frappe.db.migrate();
}

async function init() {
    localStorage.event = null;
    await connectToDatabase();
    await db.retrieveEvents();
}

init();

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