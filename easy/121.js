const maxProfit = (prices) => {
    let lowestPrice = prices[0]
    let highestProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]
        const profit = price - lowestPrice
        
        if (profit > highestProfit) highestProfit = profit
        if (price < lowestPrice) lowestPrice = price
    }

    return highestProfit
}

module.exports = {
    maxProfit
}