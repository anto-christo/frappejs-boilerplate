module.exports = {
    insertEvent: function() {
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
            this.retrieveEvents();
        })
    },

    retrieveEvents: async function() {
        let events = await frappe.db.getAll({ doctype:'Event', fields:["*"] });
        $('#events').empty();    
        for(let event of events) {
            $('#events').append(
                `<div id="${event.name}" class="card" style="width: 100%; margin-top: 5%">
                    <div class="card-header">
                        <h5 class="card-title">${event.date}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${event.time}</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${event.title}</p>
                    </div>
                </div>`
            );
        }
    },

    showEvent: async function(name) {
        let event = await frappe.getDoc('Event', name);
        console.log(event);
        $('#date').val(event.date);
        $('#time').val(event.time);
        $('#title').val(event.title);
        $('#description').val(event.description);
    }
}