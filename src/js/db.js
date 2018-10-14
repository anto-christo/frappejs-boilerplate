module.exports = {
    insertEvent: async function() {
        const date = $('#date').val();
        const venue = $('#venue').val();
        const title = $('#title').val();
        const description = $('#description').val();
        const event = frappe.newDoc({
            doctype: 'Event',
            date,
            venue,
            title,
            description
        });
        event.insert().then(() => {
            this.retrieveEvents();
        })
    },

    updateEvent: async function(name) {
        let event = await frappe.getDoc('Event', name);
        event.date = $('#date').val();
        event.venue = $('#venue').val();
        event.title = $('#title').val();
        event.description = $('#description').val();
        event.update().then(() => {
            this.retrieveEvents();
        });
    },

    retrieveEvents: async function() {
        function compare(a,b) {
            if (a.date < b.date)
              return -1;
            if (a.date > b.date)
              return 1;
            return 0;
        }
        let events = await frappe.db.getAll({ doctype:'Event', fields:["*"] });
        events.sort(compare);
        $('#events').empty();
        if(events.length == 0) {
            $('#events').append(
                `<div class="card" style="width: 100%; margin-top: 3%">
                    <div class="card-body">
                        <center>No events to display.</center>
                    </div>
                </div>`
            );
        } else {
            for(let event of events) {
                $('#events').append(
                    `<div id="${event.name}" class="card" style="width: 100%; margin-top: 3%">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h6 class="card-title">${event.date}</h6>
                                </div>
                                <div class="col-lg-6">
                                    <i id="del-${event.name}" class="material-icons float-right del">delete</i>
                                </div>
                            </div>
                            <h6 class="card-subtitle mb-2 text-muted">${event.venue}</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text">${event.title}</p>
                        </div>
                    </div>`
                );
            }
        }
    },

    deleteEvent: async function(name) {
        let event = await frappe.getDoc('Event', name);
        event.delete().then(() => {
            this.retrieveEvents();
        });
    },

    showEvent: async function(name) {
        let event = await frappe.getDoc('Event', name);
        console.log(event);
        $('#date').val(event.date);
        $('#venue').val(event.venue);
        $('#title').val(event.title);
        $('#description').val(event.description);
    }
}