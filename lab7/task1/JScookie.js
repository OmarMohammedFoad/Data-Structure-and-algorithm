export function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value};expires=${expires}`;
    } else {
        document.cookie = `${name}=${value}`;
    }
}

export function deleteCookie(key) {
    var date = new Date();
    document.cookie = `${key}=;expires=${date.toUTCString()}`;
}
export function clearCookies() {
    var date = new Date();
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var [key, value] = cookies[i].split("=");
        document.cookie = `${key}=;expires=${date.toUTCString()}`;
    }
}
export function getAllcookies() {
    var cookies = document.cookie.split("; ");
    var cookiesArr = [];
    for (var i = 0; i < cookies.length; i++) {
        var [key, value] = cookies[i].split("=");
        cookiesArr[key] = value;
    }
    return cookiesArr;
}

export function hasCookie(cKey) {
    var cookies = document.cookie.split("; ");
    var keys = [];
    for (var i = 0; i < cookies.length; i++) {
        var [key, value] = cookies[i].split("=");
        keys.push(key);
    }
    return keys.includes(cKey);
}