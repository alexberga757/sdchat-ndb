const express = require("express");
const confighost = require("./confighost.json");
const unixts = require("./etc/uts");
const random = require("./etc/random");

const app = express();

let message_content = {
	sub: "",
	author: "System",
	content: "hi!",
	timesend: 0,
	messageid: "-1"
}

app.get("/",(req,res) => {
	res.send("hello, world!");
})

app.get("/message/get",(req,res) => {
	res.send(message_content);
}) 

app.post("/message/put",(req,res) => {
	message_content = {
		sub: "",
		author: req.body.author,
		content: req.body.content,
		timesend: unixts.jsonToUnixTimestamp(convertTimeToJSON()),
		messageid: random.randomstr()
	}
	res.send({
		"status":"sended",
	});
	console.log("message: new message found!");
})


app.listen(confighost.port, function() {
	console.log(`SDCHAT is online! port: ${confighost.port}`);
})




