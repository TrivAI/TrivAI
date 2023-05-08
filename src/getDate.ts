export function getDate(daysInAdvance : number = 0) {
  const date = new Date();
  date.setDate(date.getDate() + daysInAdvance);
  return date.toLocaleDateString();
}