// 1 deposit money
// 2 determine number of lines to bet 
// 3 collect bet amount
// 4 spin slot machine 
// 5 check if user won
// 6 take/give money
// 7 play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

//1
const deposit = () => {
    while (true) {
        const depositAomout = prompt("Enter a deposit amount: ");

        const numberDepositAmount = parseFloat(depositAomout);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit, please try again");
        } else {
            return numberDepositAmount;
        }
    }
}
//2
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");

        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0) {
            console.log("Invalid number of lines, please try again");
        } else {
            return numberOfLines;
        }
    }
}
//3
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per lines ");

        const numberBet = parseFloat(lines);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, please try again");
        } else {
            return numberBet;
        }
    }
}
//4
// const spin = () => {
//     const symbols = [];
//     for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
//         for (let i = 0; i < count; i++){
//             symbols.push(symbol);
//         }

//     }
//     console.log(symbols)
// }
const spin = () => {
    const symbols = [];
    for (let entries in SYMBOLS_COUNT) {
        for (let i = 0; i < value; i++) {
            symbols.push(key);
        }
    }
    return symbols
}


const reels = [[], [], []];
for (let i = 0; i < COLS; i++) {
    //copy of array symbols 
    //const reelSymbols = [...symbols];
    const reelSymbols = [];
    reelSymbols = reelSymbols.concat(symbols);
    for (let j = 0; j < ROWS; j++) {
        //genrate random index
        const rndomIndex = Math.floor(Math.random * reelSymbols.length);
        //set random index as pointer 
        const selectSymbol = reelsymbols[rndomIndex];
        //add value at index to array
        reels[i].push(selectSymbol);
        //remove value at index from copid array 
        reelSymbols.splice(rndomIndex, 1);
    }
    return reels;
}

const reel = spin()
console.log(reels)
// let balance = deposit()
// const numberOfLines = getNumberOfLines()
// const bet = getBet(balance, numberOfLines)
