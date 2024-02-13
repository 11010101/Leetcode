const reverseBits = (n) => {
    let result = 0
    let numBits = 32

    while (numBits--) {

      // get the least significant bit of n
      const leastSignificantBit = n & 1
  
      // shift the bits of result to the left by 1
      // add the least significant bit to the right
      result = (result << 1) | leastSignificantBit
  
      // shift the bits of n to the right by 1
      n >>>= 1
    }
    return result
}

const ex2 = 4294967293

console.log( (ex2 >>> 0).toString(2) )

console.log( (reverseBits(ex2) >>> 0).toString(2) )


console.log(reverseBits(ex2))