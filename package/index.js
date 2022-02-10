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

module.exports = formatPhoneNumber;