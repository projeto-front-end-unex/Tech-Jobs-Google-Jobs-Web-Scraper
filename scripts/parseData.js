const cheerio = require('cheerio');
const format = require('./formatFunctions');

function parseData(html) {
  const $ = cheerio.load(html);

  const jobList = $('.pE8vnd.avtvi');
  const jobs = [];
  jobList.each(function(){
    const title = $(this).find('h2.KLsYvd').text();
    const company = $(this).find('.nJlQNd.sMzDkb').text();
    const location = $(this).find('.sMzDkb:nth-of-type(2)').text();
    const salary = $(this).find('.I2Cbhb.bSuYSc .LL4CDc span').text();
    const description = $(this).find('.YgLbBe.YRi0le .HBvzbc').text().trim() 
    const companyLogo = $(this).find('.eZUcuf img').attr('src');
    const links = [];
    $(this).find('.B8oxKe.BQC79e.xXyUwe span a').each(function () {
      const linkText = $(this).text();
      const linkHref = $(this).attr('href');
      links.push({ content: linkText, href: linkHref });
    });
    
    jobs.push({
      title: title,
      salary: format.formatSalary(salary),
      location: location,
      company: company,
      companyLogo: format.formatLogo(companyLogo),
      description: format.formatDescription(description),
      links: links
    });
  });

  return jobs;
}

module.exports = {
  parseData,
};
