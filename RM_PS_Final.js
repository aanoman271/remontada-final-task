/**
 * 01. Solve Me First
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function (a, b) {
  return a + b;
};

/**
 * 02. Multiply
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var multiply = function (a, b) {
  return a * b;
};

/**
 * 03. Even or Odd
 * @param {number} number
 * @return {string}
 */
var evenOrOdd = function (number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

/**
 * 04. Return Negative
 * @param {number} number
 * @return {number}
 */
var makeNegative = function (number) {
  return number < 0 ? number : -number;
};

/**
 * 05. Opposite Number
 * @param {number} number
 * @return {number}
 */
var opposite = function (number) {
  return -number;
};

/**
 * 06. Simple Array Sum
 * @param {number[]} ar
 * @return {number}
 */
var simpleArraySum = function (ar) {
  return ar.reduce((sum, current) => sum + current, 0);
};

/**
 * 07. sleepIn
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

/**
 * 08. monkeyTrouble
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function (aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
};

/**
 * 09. sumDouble
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var sumDouble = function (a, b) {
  return a === b ? (a + b) * 2 : a + b;
};

/**
 * 10. diff21
 * @param {number} n
 * @return {number}
 */
var diff21 = function (n) {
  const diff = Math.abs(n - 21);
  return n > 21 ? diff * 2 : diff;
};

/**
 * 11. parrotTrouble
 * @param {boolean} talking
 * @param {number} hour
 * @return {boolean}
 */
var parrotTrouble = function (talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

/**
 * 12. makes10
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

/**
 * 13. nearHundred
 * @param {number} n
 * @return {boolean}
 */
var nearHundred = function (n) {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

/**
 * 14. posNeg
 * @param {number} a
 * @param {number} b
 * @param {boolean} negative
 * @return {boolean}
 */
var posNeg = function (a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
};

/**
 * 15. notString
 * @param {string} str
 * @return {string}
 */
var notString = function (str) {
  if (str.startsWith("not")) {
    return str;
  }
  return "not " + str;
};

/**
 * 16. Compare the Triplets
 * @param {number[]} a
 * @param {number[]} b
 * @return {number[]}
 */
var compareTriplets = function (a, b) {
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }
  return [alicePoints, bobPoints];
};

/**
 * 17. A Very Big Sum
 * @param {number[]} ar
 * @return {number}
 */
var aVeryBigSum = function (ar) {
  return ar.reduce((sum, current) => sum + current, 0);
};

/**
 * 18. Staircase
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    result.push(spaces + hashes);
  }
  return result.join("\n");
};

/**
 * 19. Grading Students
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    if (nextMultipleOf5 - grade < 3) {
      return nextMultipleOf5;
    }
    return grade;
  });
};

/**
 * 20. Time Conversion
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  let modifier = s.slice(-2);
  let h = s.slice(0, 2);
  let rest = s.slice(2, 8);

  let hours = parseInt(h, 10);
  if (modifier === "PM") {
    if (hours !== 12) {
      hours += 12;
    }
  } else {
    if (hours === 12) {
      hours = "00";
    } else {
      hours = h;
    }
  }

  return `${String(hours).padStart(2, "0")}${rest}`;
};

/**
 * 21. String Repeat
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  return s.repeat(n);
};

/**
 * 22. Reversed Strings
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  return str.split("").reverse().join("");
};

/**
 * 23. Sum of Positive
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  return arr.filter((x) => x > 0).reduce((sum, current) => sum + current, 0);
};

/**
 * 24. Grasshopper - Summation
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

/**
 * 25. Convert a Boolean to a String
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return String(b);
};
