// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example usage:
const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
];

console.log(superbowlWin(record)); // Output: "2017"    