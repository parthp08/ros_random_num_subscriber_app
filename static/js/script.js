// connection
var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function () {
    console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
    console.log('Connection to websocket server closed.');
});

// Subscriber
var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/random_float_num',
    messageType: 'std_msgs/Float64'
});

listener.subscribe(function (message) {
    // console.log('Received message on ' + listener.name + ': ' + message.data);
    document.body.innerHTML = "<h2>" + "random float number = " + message.data + "</h2 > "
    // listener.unsubscribe();
});
