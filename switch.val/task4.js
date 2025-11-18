function GradeDescription(grade) {
  const upperCaseGrade = grade.toUpperCase();

  let description;

  switch (upperCaseGrade) {
    case "A":
      description = "Excellent";
      break;
    case "B":
      description = "Good";
      break;
    case "C":
      description = "Average";
      break;
    case "D":
      description = "Poor";
      break;
    case "F":
      description = "Fail";
      break;
    default:
      description = "Invalid Grade";
      console.error(`Invalid grade input: ${grade}`);
  }

  return description;
}

console.log(`Grade A: ${GradeDescription("A")}`);
console.log(`Grade b: ${GradeDescription("b")}`);
console.log(`Grade C: ${GradeDescription("C")}`);
console.log(`Grade d: ${GradeDescription("d")}`);
console.log(`Grade F: ${GradeDescription("F")}`);
