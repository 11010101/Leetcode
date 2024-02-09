/* 
    ALT 1
        iterate through edge cells, DFS on "O", store co-ords or set cell to "M" (marked)
        iterate through board, if "M" cell = "O" else "X"
    ALT 2
        iterate through board, DFS on "O", store co-ords in a var, if contains edge cell add var to global co-ords, change every cell to "X"
        iterate through global co-ords setting cells to "O"
*/


const solve = (board) => {
    const yMax = board.length - 1
    const xMax = board[0].length - 1

    const sides = [
        [0, 0, 0, xMax], // top
        [yMax, 0, yMax, xMax], // bottom
        [1, 0, yMax - 1, 0], // left
        [1, xMax, yMax - 1, xMax] // right
    ]
    
    // iterate through sides, using nested for loops to set x and y
    // change to manually setting a x and y var?
    for (const side of sides) {
        for (let y = side[0]; y <= side[2]; y++) {
            for (let x = side[1]; x <= side[3]; x++) {
                    const dfs = (board, y, x) => {
                        // check if not out of bounds
                        if (x < 0 || y < 0 || x > xMax || y > yMax) return
                        // check if not "O"
                        if (board[y][x] === "X" || board[y][x] === "M") return

                        board[y][x] = "M"

                        dfs(board, y - 1, x) // down
                        dfs(board, y, x - 1) // left
                        dfs(board, y + 1, x) // up
                        dfs(board, y, x + 1) // right
                    }
                    dfs(board, y, x)
            }
        }
    }

    // change marked cells to "O" and all rest to "X"
    for (let y = 0; y <= yMax; y++) {
        for (let x = 0; x <= xMax; x++) {
            if (board[y][x] === "M") {
                board[y][x] = "O"
            } else {
                board[y][x] = "X"
            }
        }
    }
}