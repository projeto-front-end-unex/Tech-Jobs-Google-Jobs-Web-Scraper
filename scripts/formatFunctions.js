function handleEmptyValue(value, defaultValue) {
  return (value === undefined || value === '') ? defaultValue : value;
}

function formatLogo(url) {
  const defaultLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthVDKH1pHRaghxgikj81A7xjDxjR647nEvAmyEtM&s';
  return handleEmptyValue(url, defaultLogo);
}

function formatDescription(description) {
  return description.replace(/\n/g, ' '); 
}

function formatSalary(salary) {
  if (salary == '' || salary == undefined) {
    return 'Não informado';
  }

  return salary.replace('por mês', '');
}

module.exports = {
  formatLogo,
  formatDescription,
  formatSalary,
};