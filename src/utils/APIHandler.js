// Send request API Handler
const request = (value) => {
    // simulate async fetch / post by Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 1300);
  });
}

export default request;