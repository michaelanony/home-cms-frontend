export const getCookie = (key: string) => {
    const name = key + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function clearAllCookie() {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    console.log("需要删除的cookie名字：" + keys);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + "=0; expire=" + date.toUTCString() + "; path=/";
    }
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
