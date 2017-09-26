class TicTacToe {
    constructor() {
      this.currentPlayerSymbol = 'x';
      this.field = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this.winner = null;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.field[rowIndex][columnIndex]) {
        this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
        (this.currentPlayerSymbol === 'x') ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';
      }
    }

  isFinished() {
    let isWin = ((this.field[0][0] === this.field[0][1]) && (this.field[0][1] === this.field[0][2]) && this.field[0][2] !== null) ||
      ((this.field[1][0] === this.field[1][1]) && (this.field[1][1] === this.field[1][2]) && this.field[1][2] !== null) ||
      ((this.field[2][0] === this.field[2][1]) && (this.field[2][1] === this.field[2][2]) && this.field[2][2] !== null) ||
      ((this.field[0][0] === this.field[1][0]) && (this.field[1][0] === this.field[2][0]) && this.field[2][0] !== null) ||
      ((this.field[0][1] === this.field[1][1]) && (this.field[1][1] === this.field[2][1]) && this.field[2][1] !== null) ||
      ((this.field[0][2] === this.field[1][2]) && (this.field[1][2] === this.field[2][2]) && this.field[2][2] !== null) ||
      ((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2]) && this.field[2][2] !== null) ||
      ((this.field[0][2] === this.field[1][1]) && (this.field[1][1] === this.field[2][0]) && this.field[2][0] !== null);
    if (isWin) {
      this.winner = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
    }
    return isWin || this.noMoreTurns();
  }

    getWinner() {
      if (this.isFinished()) {
        return this.winner;
      }
      return this.winner;
    }

    noMoreTurns() {
      for (let element of this.field) {
        if (element.includes(null)) return false;
      }
      return true;
    }

    isDraw() {
      return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
