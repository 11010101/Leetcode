/*
    ALT 1
        use a stack for a bfs
    ALT 2
        use not isInbounds with or operator allowing short circuiting, less clear code, somehow slower
*/


const numIslands = (grid) => {
    let islandCount = 0

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {

            if (grid[y][x] === "1") {
                islandCount++

                const search = (y, x) => {
                    const isInbounds = (grid, y, x) => x >= 0 && x < grid[0].length && y >= 0 && y < grid.length

                    if (isInbounds(grid, y, x) && grid[y][x] === "1") {
                        grid[y][x] = "0"
    
                        search(y - 1, x) // down
                        search(y, x - 1) // left
                        search(y + 1, x) // up
                        search(y, x + 1) // right
                    }
                }
                search(y, x)
            }
        }
    }
    return islandCount
}

module.exports = {
    numIslands
}