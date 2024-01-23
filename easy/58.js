/*
    ALT 1
        trim, lastIndexOf, slice, length
    ALT 2 REGEX
        (\S+) - capture one or more non
        \s* - zero or more whitespace
        $ - end of string
        [1] capture group
        Slower but more flexable
*/

const lengthOfLastWord = (s) => s.trim().split(" ").at(-1).length