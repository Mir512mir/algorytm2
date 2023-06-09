// 1 уровень сложности: Реализуйте в виде кода, текста или псевдокода одно из следующих заданий на выбор:

// public static int countConsonantIteration(String str) {
//    int count = 0;
//    for (int i = 0; i < str.length(); i++) {
//        if (isConsonant(str.charAt(i))) {
//            count++;
//        }
//    }
//    return count;
// }


// Реализовать метод countConsonantRecursion(str, strLength)
// Для решения использовать рекурсивный подход

function countConsonantRecursion(str, n) {
    let res = 0;
    if (n === 1) {
        res = isConsonant(str[0]) ? 1 : 0;
        console.log('Now res=${res}');
    }
    if (isConsonant(str[n - 1])) {
        res = countConsonantRecursion(str, n - 1) + 1;
        console.log('Now res=${res}');
        return res;

    } else {
        res = countConsonantRecursion(str, n - 1);
        console.log('Now res=${res}');
        return res

    }

}