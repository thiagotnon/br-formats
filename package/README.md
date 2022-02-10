# br-formats 🇧🇷 

#### Supported format

Phone: 00000000000 -> (00) 99999-9999

CPF: 00000000000 -> 000.000.000-00

CNPJ: 00.000.000/0000-00

#### How to use
```
//Import the format type
const formatPhoneNumber = require('br-format');
```

#### Insert the phone number
```
console.log(formatPhoneNumber('00000000000'));
// (00) 00000-0000
```