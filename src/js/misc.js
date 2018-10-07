module.exports = {
    resetFields: function() {
        localStorage.event = null;
        $('#date').val("");
        $('#time').val("");
        $('#title').val("");
        $('#description').val("");
    }
}