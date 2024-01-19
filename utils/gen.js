const fs = require("fs").promises;
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = (question) => {
    return new Promise((resolve) => {
        readline.question(question, resolve)
    })
}
const genArr = () => {
    const numArr = []
    for (let i = 2; i < 2000; i += 2) {
        numArr.push(i)
    }
    return numArr
}

async function main() {
    const option = await prompt("Option: ")
    const filename = await prompt("Enter the file name: ")
    const json = JSON.stringify(genArr(), null, 2)

    try {
        await fs.writeFile(filename, json);
        console.log("File created successfully.")
    } catch (err) {
        console.error("Error writing file: ", err)
    } finally {
        readline.close()
    }
}

main()

module.exports = {
    genArr
}