function clearNumber (number) {
  return ('' + number).replace(/\D/g, '');
}

function formatPhoneNumber (phone) {
   let cleaned = clearNumber(phone);
   let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
 
   if (match) {
     return '(' + match[1] + ') ' + match[2] + '-' + match[3];
   };
   return null;
}

function formatCnpjNumber (cnpj) {
   let cleaned = clearNumber(cnpj);
   let match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
 
   if (match) {
     return match[1] + '.' + match[2] + '.' + match[3] + '/' + match[4] + '-' + match[5];
   };
   return null;
}

function formatCpfNumber (cpf) {
  let cleaned = clearNumber(cpf);
  let match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);

  if (match) {
    return match[1] + '.' + match[2] + '.' + match[3] + '/' + match[4] + '-' + match[5];
  };
  return null;
}


module.exports = { formatPhoneNumber, formatCnpjNumber, formatCpfNumber };