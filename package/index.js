function formatPhoneNumber (phone) {
   //Filter only numbers from the input
   let cleaned = ('' + phone).replace(/\D/g, '');
  
   //Check if the input is of correct length
   let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
 
   if (match) {
     return '(' + match[1] + ') ' + match[2] + '-' + match[3]
   };
 
   return null
}

function formatCnpjNumber (cnpj) {
   //Filter only numbers from the input
   let cleaned = ('' + cnpj).replace(/\D/g, '');
  
   //Check if the input is of correct length
   let match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
 
   if (match) {
     return match[1] + '.' + match[2] + '.' + match[3] + '/' + match[4] + '-' + match[5]
   };
 
   return null
}


module.exports = { formatPhoneNumber, formatCnpjNumber };