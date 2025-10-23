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
# Python snippet: random data generator
import random
import string

def random_string(length=10):
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))

for _ in range(5):
    print(random_string())
// JavaScript snippet: simple countdown timer
let counter = 10;
const interval = setInterval(() => {
    console.log(`Countdown: ${counter}`);
    counter--;
    if (counter < 0) clearInterval(interval);
}, 1000);
<!-- HTML snippet: weird floating div -->
<div style="position: absolute; top: 50px; left: 50px; width: 100px; height: 100px; background: linear-gradient(to right, red, yellow); animation: float 2s infinite alternate;"></div>

<style>
@keyframes float {
    0% { transform: translateY(0); }
    100% { transform: translateY(50px); }
}
</style>
// JSON snippet: weird config
{
  "name": "NevariaTest",
  "enabled": true,
  "max_players": 42,
  "features": ["glitch", "redacted", "chaos"],
  "nested": {
    "key": "value",
    "arr": [1,2,3,null,true,false]
  }
}
/* CSS snippet: glitch text effect */
.glitch {
  font-size: 3rem;
  color: white;
  position: relative;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  overflow: hidden;
}
.glitch::before { left: 2px; text-shadow: -2px 0 red; }
.glitch::after { left: -2px; text-shadow: 2px 0 blue; }
