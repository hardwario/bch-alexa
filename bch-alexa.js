var awsIot = require('aws-iot-device-sdk');
var os = require('os');
var path = require('path');
var fs = require("fs");
const mqtt = require ('mqtt');
var client  = mqtt.connect('mqtt://localhost');
var messgae_aws
var topic_aws = "";
var message_localhost = "";
var topic_localhost = "";
var userid;

client.on('connect', function () {
    client.subscribe("alexa/#");
    fs.readFile(os.homedir().toString() + path.join("/bigclown-cert/") + "id.txt", function (err, data) {
        if (err) throw err;
        else {

            if (process.platform == "darwin") {
                userid = (data.toString("utf-8")).substring(0, (data.length)-1);
            }

            else if (process.platform == "linux") {
                userid = (data.toString("utf-8")).substring(0, (data.length));
            }

            else if (process.platform == "win32") {
                userid = (data.toString("utf-8")).substring(0, (data.length));
            }

            var device = awsIot.device({
                keyPath: os.homedir().toString() + path.join("/bigclown-cert/") + userid + ".private.key",
               certPath: os.homedir().toString() + path.join("/bigclown-cert/") + userid + ".cert.pem",
                 caPath: os.homedir().toString() + path.join("/bigclown-cert/") + "root-CA.crt",
               clientId: userid,
                   host: "a2toxim9bns8ia.iot.eu-west-1.amazonaws.com"
               });
            
                client.on('message', function (topic, message){

                        message_localhost = message.toString();
                        topic_localhost = topic.toString();

                        if (message.toString() != messgae_aws) {
                            device.publish((topic_localhost.replace("alexa", userid)), message.toString());
                        }
                });
            




                device
                    .on("connect", function() {
                        device.subscribe('b74991e8ce894821dddb94ad802d38de/#');
                    })

                device
                    .on('message', function(topic, payload) {

                        messgae_aws = payload.toString();
                        topic_aws = topic.toString();

                        if (payload.toString() != message_localhost) {
                            client.publish(((topic.toString()).replace(userid, "alexa")), payload.toString());
                        }
                    });
        }});
    });
