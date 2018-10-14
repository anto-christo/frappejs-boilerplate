module.exports = {
    resetFields: function() {
        localStorage.event = null;
        $('#date').val("");
        $('#venue').val("");
        $('#title').val("");
        $('#description').val("");
    }
}