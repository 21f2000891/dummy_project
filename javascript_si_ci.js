/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/
function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
    // Validate inputs
    if (!principal || !dailyInterest || !startingDate || !endingDate) {
      return -1;
    }
  
    try {
      const start = new Date(startingDate);
      const end = new Date(endingDate);
      
      // Check if dates are valid
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return -1;
      }
      
      // Calculate number of days between dates
      const timeDiff = end.getTime() - start.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      // Return -1 if days difference is negative or invalid
      if (daysDiff < 0) {
        return -1;
      }
      
      // Calculate simple interest
      const interest = (principal * dailyInterest * daysDiff) / 100;
      return Math.floor(interest);
    } catch (error) {
      return -1;
    }
  }
  