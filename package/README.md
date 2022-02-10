# br-formats 🇧🇷 

#### Supported format

```
Phone: 00000000000 
Return (00) 00000-0000| 11 digits

CPF: 00000000000
Return: 000.000.000-00 | 11 digits

CNPJ: 00000000000000
Return: 00.000.000/0000-00 | 14 digits

```
#### How to use
```
//import the format type
const formatPhoneNumber = require('br-format');
```

#### Insert the phone number
```
console.log(formatPhoneNumber('00000000000'));
// (00) 00000-0000
```