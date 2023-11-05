const cheerio = require('cheerio');

function parseData(html) {
  const $ = cheerio.load(html);

  const jobList = $('.pE8vnd.avtvi');
  const jobs = [];
  jobList.each(function(){
    const title = $(this).find('h2.KLsYvd').text();
    const location = $(this).find('.sMzDkb').text();
    const company = $(this).find('.nJlQNd').text();
    const salary = $(this).find('.LL4CDc span').text();
    jobs.push({
      Title: title,
      Location: location,
      Company: company,
      Salary: salary
    });
  });

  return jobs;
}

module.exports = {
  parseData,
};
