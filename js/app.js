let board = [];
let index = 2;
window.onload = createBoard();

function createBoard() {
    for (let i = 0; i < 20; i++) {
        board[i] = [];
        for (let j = 0; j < 50; j++) {
            board[i][j] = ".";
        }
    }
    displayBoard();
}

function changeValue() {
    if (index % 2 === 0) {
        let xCoordinate = +prompt("X: ");
        let yCoordinate = +prompt("Y: ");
        if (board[xCoordinate][yCoordinate] === "x" ||
            board[xCoordinate][yCoordinate] === "o") {
            alert('Xin nhập lại giá trị');
        } else {
            board[xCoordinate][yCoordinate] = "x";
            checkXWinner(xCoordinate, yCoordinate);
            index++;
        }
    } else {
        let xCoordinate = +prompt("X: ");
        let yCoordinate = +prompt("Y: ");
        if (board[xCoordinate][yCoordinate] === "x" ||
            board[xCoordinate][yCoordinate] === "o") {
            alert('Xin nhập lại giá trị');
        } else {
            board[xCoordinate][yCoordinate] = "o";
            checkOWinner(xCoordinate, yCoordinate);
            index++;
        }
    }
    displayBoard();
}

function displayBoard() {
    let data = "";
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 50; j++) {
            data += board[i][j] + "  ";
        }
        data += "<br>"
    }
    document.getElementById('playBoard').innerHTML = data;
}

function checkXWinner(x, y) {
    if (board[x + 1][y] === "x") {
        if (board[x + 2][y] === "x") {
            if (board[x + 3][y] === "x") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    } else if (board[x - 1][y] === "x") {
        if (board[x - 2][y] === "x") {
            if (board[x - 3][y] === "x") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    } else if (board[x][y + 1] === "x") {
        if (board[x][y + 2] === "x") {
            if (board[x][y + 3] === "x") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    } else if (board[x][y - 1] === "x") {
        if (board[x][y - 2] === "x") {
            if (board[x][y - 3] === "x") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    }
}

function checkOWinner(x, y) {
    if (board[x + 1][y] === "o") {
        if (board[x + 2][y] === "o") {
            if (board[x + 3][y] === "o") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    } else if (board[x - 1][y] === "o") {
        if (board[x - 2][y] === "o") {
            if (board[x - 3][y] === "o") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    } else if (board[x][y + 1] === "o") {
        if (board[x][y + 2] === "o") {
            if (board[x][y + 3] === "o") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    } else if (board[x][y - 1] === "o") {
        if (board[x][y - 2] === "o") {
            if (board[x][y - 3] === "o") {
                document.getElementById('status').innerHTML = "Xin chúc mừng, X đã thắng!"
            }
        }
    }
}
