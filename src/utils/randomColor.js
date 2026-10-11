export function randomBrightColor() {
  const h = Math.floor(Math.random() * 360);
  const s = 80 + Math.random() * 20;  // 80-100%
  const l = 50 + Math.random() * 15;  // 50-65%
  return `hsl(${h}, ${s}%, ${l}%)`;
}