
export function createCookies(name, vlaue, days) {
  if (days) {
    let date = new Date();

    date.setTime(date.getDate() + days * 24 * 60 * 60 * 1000);
    let expiryDate = `expires=` + date.toUTCString();
    document.cookie = `${name}=${vlaue}`;
    `expires=${expiryDate}`;
  } else {
    document.cookie = `${name}=${vlaue}`;
  }
}

export function deleteCookie(key) {
  let date = new Date();

  document.cookie = `${key}=;expires=${date.toUTCString()}`;
}

export function clearCookies() {
  let date = new Date();

  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let [key, value] = cookies[i].split("=");
    document.cookie = `${key}=;expires=${date.toUTCString()}`;
  }
}


export function getAllcookies() {
    let cookies = document.cookie.split("; ");
    let cookiesArr = [];
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        cookiesArr[key] = value;
    }
    return cookiesArr;
}

export function hasCookie(cKey) {
    let cookies = document.cookie.split("; ");
    let keys = [];
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        keys.push(key);
    }
    return keys.includes(cKey);
}