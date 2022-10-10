export const user = new RegExp(/^[a-zA-Z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{4,}(?: [a-zA-Z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+){0,7}$/)
export const login = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
export const password = new RegExp(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$ %^&-]).{8,}$/)
export const number = new RegExp (/[0-9]/);
export const lowercase = new RegExp(/[a-z]/);
export const uppercase = new RegExp (/[A-Z]/);
export const sCharacter  = new RegExp (/[[<>|;:°º~´`_+¨!@#$=§%&*()?/^{}]/);