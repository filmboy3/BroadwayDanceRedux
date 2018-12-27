const WebSocket = require('ws');
const pgController = require("./pgController");

const wss = new WebSocket.Server({ port: 8989 });
const PORT = process.env.PORT || "2468";

const users = [];

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();

app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.json());

app.get("/adminLogin", pgController.adminLogin);

app.get("/toggleChat", pgController.toggleChat);

app.post("/passwordAdmin", pgController.adminChangePassword);

app.get("/chatCheck", pgController.chatCheck);


const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length;
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break;
        }
        case 'ADD_MESSAGE':
          broadcast({
            type: 'ADD_MESSAGE',
            message: data.message,
            author: data.author
            }, ws)
            break;
        default:
            break;
        }
      })

      ws.on('close', () => {
        users.splice(index, 1)
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
      })
    })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})