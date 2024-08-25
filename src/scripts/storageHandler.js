function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

//   checking availability:

//   if (storageAvailable("localStorage")) {
//     // Yippee! We can use localStorage awesomeness
//   } else {
//     // Too bad, no localStorage for us
//   }
function setUpLocalStorage(jsonString)
{
    if (storageAvailable("localStorage")) {
            return true;
    } else {
            // Too bad, no localStorage for us
            return false;
          }
}

export {setUpLocalStorage};