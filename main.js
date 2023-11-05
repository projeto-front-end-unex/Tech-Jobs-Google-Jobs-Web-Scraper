const { fetchPageData } = require('./scripts/fetchPageData');
const { parseData } = require('./scripts/parseData');
const { saveToJSON } = require('./scripts/saveToJSON');

const url = 'https://www.google.com/search?q=desenvolvedor+back+end+jr&source=lmns&bih=955&biw=1270&client=opera&hs=75q&hl=pt-BR&sa=X&ibp=htl;jobs&ved=2ahUKEwjhx_vh3KuCAxVWIbkGHeblBTUQudcGKAF6BAgNEAk&sxsrf=AM9HkKlGITkTc7jIznwS_bQyuN89QfALXw:1699148323554#fpstate=tldetail&htivrt=jobs&htichips=&htischips=&htilrad=-1.0&htiltype=1&htidocid=BJ1N8ByRp5B9IZOwAAAAAA%3D%3D';

(async () => {
  try {
    const html = await fetchPageData(url);
    const jobList = parseData(html);
    saveToJSON(jobList, 'jobs.json');
  } catch (error) {
    console.error(error);
  }
})();
