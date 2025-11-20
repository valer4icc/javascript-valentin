function makeBanner(text) {
  const borderLength = text.length + 4; 
  const border = '*'.repeat(borderLength);
  const paddedText = `* ${text} *`;

  return `${border}\n${paddedText}\n${border}`;
}

console.log(makeBanner("Welcome to DUNGEON"))
