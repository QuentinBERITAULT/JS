function sum1(numbers){
    let n = 0;
    for(let i=0; i < numbers.length; i++){
        n = numbers[i] + n;
    }
    return n;
}

function sum2(numbers){
    let n = 0;
    for(num of numbers){
        n += num;
    }
    return n;
}

function longestWord(words){
    let taille = words.length;
    let longest = 0;
    let result;
    for(let i = 0; i < taille; i++){
        if(words[i].length>longest){
            result = words[i];
            longest = words[i].length;
        }
    }
    return result;
}

function range(min, max, step){
    let t = [];
    while(min <= max){
        t.push(min);
        min += step;
    }
    return t;
}

function nbOccurences(wordList, word){
    let number = 0;
    let tab = wordList.split(" ");
    for(let i = 0; i < tab.length; i++){
        if(value === word){
            number++;
        }
    }
    return number;
}