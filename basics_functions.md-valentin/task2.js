function compareBMI(mass1, height1, mass2, height2) {
  let pers1 = mass1 / (height1 * height1);
  let pers2 = mass2 / (height2 * height2);
  return pers1 > pers2 ? true : false;
}

console.log(compareBMI(70, 185, 68, 187));