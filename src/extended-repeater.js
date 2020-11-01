const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   const main = [];
   const additional = [];
   let {
     repeatTimes,
     separator = '+',
     addition,
     additionRepeatTimes,
     additionSeparator = '|'
   } = options;
   if (typeof str !== 'string') str = str + '';
   if (typeof addition !== 'undefined' && typeof addition !== 'string') addition = addition + '';
   if (!repeatTimes) {
     main.push(str);
   } else {
     for (let i = 0; i < repeatTimes; i++) {
       main.push(str);
     }
   }
   if (!additionRepeatTimes) {
     additional.push(addition);
   } else {
     for (let i = 0; i < additionRepeatTimes; i++) {
       additional.push(addition);
     }
   }
   return main.map(el => el + additional.join(additionSeparator)).join(separator);
};
  