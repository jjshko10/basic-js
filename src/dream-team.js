const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if (!Array.isArray(members)) {
     return false;
   }
   const firstLetters = [];
   for (const el of members) {
     if (typeof el === 'string' && el.trim().length) {
       firstLetters.push(el.trim()[0].toUpperCase());
     }
   }
   return firstLetters.sort().join('');
};
