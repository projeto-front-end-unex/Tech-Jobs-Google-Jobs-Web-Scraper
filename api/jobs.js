const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

const getJobData = (label) => {
  const filePath = path.join('./jobs/', `${label}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  } catch (error) {
    console.log(error)
  }
};

app.use(cors());

const setupAPI = () => {
  const PORT = process.env.PORT || 3000;

  app.get('/api/jobs/:label', (req, res) => {
    const label = req.params.label;
    const job = getJobData(label);

    if (job.error) {
      res.status(404).json({ error: 'Vagas não encontradas' });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(job, null, 2));
    }
  });

  // Lidar com rotas não encontradas
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Rota não encontrada' });
  });

  app.listen(PORT, () => {
    console.log(`API iniciada na porta ${PORT}`);
  });
};


module.exports = { setupAPI };
