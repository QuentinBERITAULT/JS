function repeatTests(){
    console.log(sum1([]));
    console.log(sum1([42,404,1337]));

    
    console.log(sum2([]));
    console.log(sum2([42,404,1337]));


    console.log(longestWord(["lot", "of", "words", "of", "different", "sizes"]));


    console.log(range(3, 8, 1));
    console.log(range(40, 90, 20));


    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); 
    console.log(nbOccurences(text, "quux")); 
    console.log(nbOccurences(text, "baz")); 
}