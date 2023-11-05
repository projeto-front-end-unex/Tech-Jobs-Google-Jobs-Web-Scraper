const cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('0,30 * * * *', () => {
  // Obtenha a hora atual
  const now = new Date();
  const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  console.log(`Executando main.js às ${formattedTime}`);

  exec('node main.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar main.js: ${error}`);
      return;
    }

    console.log(`API atualizada com sucesso: ${stdout}`);
  });
});
