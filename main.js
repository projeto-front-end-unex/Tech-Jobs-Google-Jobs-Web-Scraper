const { fetchPageData } = require('./scripts/fetchPageData');
const { parseData } = require('./scripts/parseData');
const { saveToJSON } = require('./scripts/saveToJSON');
const { setupAPI } = require('./api/jobs.js');

const jobUrls = [
  {
    label: 'desenvolvedor-back-end-jr',
    url: 'https://www.google.com/search?q=Desenvolvedor+Back-end+Júnior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htilrad=-1.0&htichips=&htischips=&htiltype=1&htidocid=BJ1N8ByRp5B9IZOwAAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-front-end-jr-estagiario',
    url: 'https://www.google.com/search?q=Desenvolvedor+Front-end+estagio&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=RdlDCsa4tq3htr43AAAAAA%3D%3D',
  },
  {
    label: 'estagiario-de-desenvolvimento-web',
    url: 'https://www.google.com/search?q=Estagiário+de+Desenvolvimento+Web&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=RdlDCsa4tq3htr43AAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-mobile-junior',
    url: 'https://www.google.com/search?q=Desenvolvedor+Mobile+Júnior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htiltype=1&htidocid=cvKrgXdSct93gwBqAAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-php-junior',
    url: 'https://www.google.com/search?q=desenvolvedor+junior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=gk4aQox_YQpbkOoEAAAAAA%3D%3D'
  },
  {
    label: 'desenvolvedor-junior-presencial',
    url: 'https://www.google.com/search?q=desenvolvedor+junior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=gk4aQox_YQpbkOoEAAAAAA%3D%3D',
  }
];

(async () => {
  console.time('tempo-execucao');
  try {
    for (const job of jobUrls) {
      const { label, url } = job;
      const html = await fetchPageData(url);
      const jobList = parseData(html);
      const fileName = `${label}.json`;
      saveToJSON(jobList, fileName);
      
      console.log(`\nDados das vagas '${label}' salvos em jobs/${label}`);
    }
  } catch (error) {
    console.error(error);
  }
  
  setupAPI();
  console.timeEnd('tempo-execucao');
})();

