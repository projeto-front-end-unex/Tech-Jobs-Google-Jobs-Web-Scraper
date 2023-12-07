const { fetchPageData } = require('./scripts/fetchPageData');
const { parseData } = require('./scripts/parseData');
const { saveToJSON } = require('./scripts/saveToJSON');
const { setupAPI } = require('./api/jobs.js');

const jobUrls = [
  {
    label: 'desenvolvedor-front-end-jr',
    url: 'https://www.google.com/search?q=Desenvolvedor+Front-end+Júnior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=wlOig2jB39xFLSpxAAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-back-end-jr',
    url: 'https://www.google.com/search?q=Desenvolvedor+Back-end+Júnior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htilrad=-1.0&htichips=&htischips=&htiltype=1&htidocid=BJ1N8ByRp5B9IZOwAAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-mobile-junior',
    url: 'https://www.google.com/search?q=Desenvolvedor+Mobile+Júnior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htiltype=1&htidocid=b34cZiWrLPqMNXFaAAAAAA%3D%3D',
  },
  {
    label: 'designer-ui-ux-jr',
    url: 'https://www.google.com/search?q=Designer+UI/UX+Júnior&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=6LLPJ3U_zXMImjPHAAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-front-end-estagio',
    url: 'https://www.google.com/search?q=Desenvolvedor+Front-end+estágio&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=Pch6YGNa1lkN6xvnAAAAAA%3D%3D',
  },
  {
    label: 'desenvolvedor-mobile-estagio',
    url: 'https://www.google.com/search?q=Desenvolvedor+mobile+estágio&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=WRUPKAkg7Bui7TS2AAAAAA%3D%3D'
  },
  {
    label: 'desenvolvedor-back-end-estagio',
    url: 'https://www.google.com/search?q=Desenvolvedor+Back-end+estágio&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=p_XTYd76VXHy0lLcAAAAAA%3D%3D',
  },
  {
    label: 'designer-ui-ux-estagio',
    url: 'https://www.google.com/search?q=Designer+UI/UX+estágio&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htidocid=hgzIQ0ig1_1z5OHfAAAAAA%3D%3D',
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

