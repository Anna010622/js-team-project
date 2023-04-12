export function trimString(str, size) {
  if (str.length + 3 <= size) {
    return str;
  } else {
    return str.slice(0, size - 3) + '...';
  }
}
