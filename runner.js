
// fetch
// feed to haskell
// get prediction
// send email

var toggl = require('./fetching/toggl'),
    toshl = require('./fetching/toshl'),
    EventEmitter = require('events').EventEmitter,
    _ = require('underscore');

var Data = {toshl: false,
            toggl: false};

var emitter = new EventEmitter();

toggl.fetch_data(function (data) {
    console.log("toggl'd", data);
    Data.toggl = data;
    emitter.emit('fetched');
});

toshl.fetch_data(function (data) {
    console.log("toshl'd", data);
    Data.toshl = data;
    emitter.emit('fetched');
});


emitter.on('fetched', function () {
    if (!(Data.toshl && Data.toggl)) return;

    console.log(_.size(Data.toshl), _.size(Data.toggl));
});
