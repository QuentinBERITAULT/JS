function repeat(s,n){
    return s.repeat(n);
}

function truncate(s,n){
    //return s.truncate(n);
    let z = (s.substring(0, n));
    if (s.length >= n) {
        z += "...";
        console.log(z);
    } else {
        console.log(z);
    }
}

function isPalindrome(s){
    let y = (s.length);
    let z = 0;
    for (let i = 0; i < y / 2; i++) {
        if (s[i] == s[y - i - 1]) {
            z = z + 1;
        } else {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

function swapCase(s){
    let y = (s.length);
    let z = "";
    for (let i = 0; i < y; i++) {
        if (s[i].charAt() <= 'Z' && s[i].charAt() >= 'A') {
            z += s[i].toLowerCase();
        } else {
            z += s[i].toUpperCase();
        }
    }
    return z;
}