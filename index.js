class TicTacToe {
	constructor() {
		this.cells = document.querySelectorAll(".cell");
		this.currentPlayer = "X";
		this.gameOver = false;
		this.winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
	];
this.cells.forEach(cell => {
		cell.addEventListener("click", () => this.handleClick(cell));
	});
}
handleClick(cell) {
	if (this.gameOver || cell.dataset.cell !== "") return;
	cell.dataset.cell = this.currentPlayer;
	cell.innerHTML = this.currentPlayer;

	if (this.checkForWin()) {
      $("body").addClass("first");
      alert(`${this.currentPlayer} wins!`)
      setTimeout(function() {
      $("body").removeClass("first");
      location.reload(); 
      }, 200)
		this.gameOver = true;
		return;
	}

	if (this.checkForDraw()) {
		alert("It's a draw!");
    $("body").addClass("third");
      setTimeout(function() {
      $("body").removeClass("third");
      location.reload(); 
      }, 200)
		this.gameOver = true;
		return;
	}
	this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
}
	checkForWin() {
		return this.winningCombos.some(combo => {
			return combo.every(cellIndex => {
				return this.cells[cellIndex].dataset.cell === this.currentPlayer;
			});
		});
	}
	checkForDraw() {
		return [...this.cells].every(cell => cell.dataset.cell !== "");
	}
}
new TicTacToe();