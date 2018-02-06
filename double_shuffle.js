//needed a quick and dirty shuffling algo
//shuffles two separate arrays in
//exacty the same way

const letters = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5];

function shuffle(a, b) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        y = b[i];
        a[i] = a[j];
        b[i] = b[j];
        a[j] = x;
        b[j] = y;
    }
    var z = [a, b];
    return z;
}