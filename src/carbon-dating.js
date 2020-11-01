const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   if (
     typeof sampleActivity !== "string" ||
     isNaN(parseFloat(sampleActivity)) ||
     parseFloat(sampleActivity) <= 0
   ) {
     return false;
   }
   const result = Math.ceil(
     (HALF_LIFE_PERIOD *
       Math.log(parseFloat(sampleActivity) / MODERN_ACTIVITY)) /
       -0.693
   );
   return result > 0 && result;
};
