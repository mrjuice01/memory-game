export default function shuffleArr(emojis) {
  let emojiArray = emojis;
  for (let i = emojiArray.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = emojiArray[i];
    emojiArray[i] = emojiArray[random];
    emojiArray[random] = temp;
  }
  return emojiArray;
}
