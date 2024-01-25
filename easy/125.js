const isPalindrome = (s) => {
    /*
    ^ - not
    /g globally
    /i case insensitive
    */
    s = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    let forwardIndex = 0
    let reverseIndex = s.length - 1

    while(leftPointer<rightPointer){
        let forwardChar=s.charAt(forwardIndex)
        let reverseChar=s.charAt(reverseIndex)

        if(forwardChar!=reverseChar) return false

        forwardIndex++
        reverseIndex--
    }

    return true
}