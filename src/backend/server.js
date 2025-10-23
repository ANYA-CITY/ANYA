import express from 'express';
import bodyParser from 'body-parser';
import { validateSubmission } from './validator.js';

const app = express();
app.use(bodyParser.json());

app.post('/submit-signal', async (req, res) => {
  const { phrase } = req.body;
  const ok = await validateSubmission(phrase);
  res.json({ valid: ok });
});

app.listen(3000, () => console.log('Server running on port 3000'));