export default function shuffleArr(...arr) {
  // shuffle options array
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    // swapping
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
