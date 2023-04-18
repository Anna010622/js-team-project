
// export function toLocalStorage(key, value) {
//   try {
//     const stringValue = JSON.stringify(value);
//     localStorage.setItem(key, stringValue);
//   }
//   catch (error) {
//     console.error(error.message)
//   }
// }

export const toLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.messege);
  }
};
export const getFromStorage = key => {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.messege);
  }
};

