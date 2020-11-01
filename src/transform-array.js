const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!Array.isArray(arr)) throw new Error();

   const res = [];
   for (let i = 0; i < arr.length; i++) {
     switch (arr[i]) {
       case '--discard-next':
         if (arr[i + 1] !== undefined && arr[i + 1] !== null) {
           res.push(null);
           i++;
         }
         break;

       case '--discard-prev':
         if (res[res.length - 1] !== undefined && res[res.length - 1] !== null) {
           res[res.length - 1] = null;
         }
         break;

       case '--double-next':
         if (arr[i + 1] !== undefined && arr[i + 1] !== null) {
           res.push(arr[i + 1]);
         }
         break;

       case '--double-prev':
         if (res[res.length - 1] !== undefined && res[res.length - 1] !== null) {
           res.push(res[res.length - 1]);
         }
         break;

       default:
         res.push(arr[i]);
     }
   }

   return res.filter(el => el !== null);
};
