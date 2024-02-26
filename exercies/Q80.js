/* Question 80: WAP program to find the types of a given angle.

Types of angles:
• Acute angle: An angle between 0 and 90 degrees.
• Right angle: An 90 degree angle.
• Obtuse angle: An angle between 90 and 180 degrees.
• Straight angle: A 180 degree angle. */

const angleType = (inputAsParam) => {
  if (inputAsParam < 0 || inputAsParam > 180) {
    return "Invalid Input || Range is between 0 to 180 Degree";
  }

  if (inputAsParam < 90) {
    return "Acute angle";
  } else if (inputAsParam === 90) {
    return "Right angle";
  } else if (inputAsParam < 180 && inputAsParam > 90) {
    return "Obtuse angle";
  } else if (inputAsParam === 180) {
    return "Straight angle";
  }
};

console.log(angleType(-9));
console.log(angleType(47));
console.log(angleType(90));
console.log(angleType(145));
console.log(angleType(180));
console.log(angleType(182));
