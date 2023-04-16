
export function toLocalStorage(key, value) {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }
  catch (error) {
    console.error(error.message)
  }
}