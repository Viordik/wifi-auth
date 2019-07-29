const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 9001;
const HOSTNAME = 'localhost';

const LOGIN_USERNAME = 'ivan';
const LOGIN_CODE = 'ivan1234';

const app = express();

var jsonParser = bodyParser.json();

app.listen(PORT, HOSTNAME, () => {
  console.info(`Start server: ${HOSTNAME}:${PORT}`);
});

app.use(cors({ credentials: true, origin: true }));

app.get('/', (_, response) => {
  return response
    .status(200)
    .send('it works!');
});

function login(username, code) {
  if (username === LOGIN_USERNAME && code === LOGIN_CODE) {
    const data = {
      traffic: 10,
      minutes: 25
    };

    return [data, false];
  }

  return [{}, true];
}

app.post('/status', jsonParser, (request, response) => {
  const {
    username,
    code
  } = request.body;

  const [data, err] = login(username, code);

  if (err) {
    response.status(403);
    response.statusMessage = 'Invalid "username" or "code"';
  }

  return response.json(data);
});
