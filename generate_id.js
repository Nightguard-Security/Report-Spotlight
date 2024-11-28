function generateRandomString(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const usedIDs = [
  "SfzkRD"
];

let generatedID = generateRandomString();
while(usedIDs.find((id)=>id===generatedID)) {
  generatedID = generateRandomString();
}

console.log(generatedID);