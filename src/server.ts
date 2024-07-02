import express from 'express';
import { server as serverConfig } from 'config';

const app = express();
const PORT = serverConfig.port;

app.get('/', (req, res) => {
  res.send('Hello NOD Readers!');
});

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});
