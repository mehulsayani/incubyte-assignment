const runAssignment = require("./src/assignment");

function main() {
  // Assignment starts

  // Initial test cases
  runAssignment();
  runAssignment("");
  runAssignment("1");
  runAssignment("1,  5");
  runAssignment("1,  5,6, 8,12,15,21");

  // Second set of test cases
  runAssignment("1\n2,3");
  runAssignment("//;\n1;2;3;6;9;15;21");
  runAssignment("//;\n1;2;-3;-6;9;15;-21");
  // Assignment ends
}

main();
