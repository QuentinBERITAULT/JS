function repeatTests(){
    console.log(repeat("foo",3));
    console.log(repeat("salut",2));

    console.log(truncate("unchanged text", 20));
    console.log(truncate("unchanged text", 14));
    console.log(truncate("truncated text", 10));

    console.log(isPalindrome("bonjour"));
    console.log(isPalindrome("toto"));
    console.log(isPalindrome("kayak"));
    console.log(isPalindrome("ressasser"));

    console.log(swapCase("HELLO"));
    console.log(swapCase("bye"));
    console.log(swapCase("GooD NighT"));
}