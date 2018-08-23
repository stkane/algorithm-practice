class Queens {
    constructor(position) {
      if(position === undefined) {
        this.white = [0, 3],
        this.black = [7, 3]
      } else {
        this.white = position.white,
        this.black = position.black
      }
      //validations
      this.samePosValidate();
    }
}

Queens.prototype.toString = function() {
  var board = ['_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _',
    '_ _ _ _ _ _ _ _\n'];
   var newRowArr = board[0].split(' ');
   var newRowArrBlack = board[0].split(' ');
   newRowArr[this.white[1]] = 'W';
   newRowArrBlack[this.black[1]] = 'B';
   board[this.white[0]] = newRowArr.join(' ');
   board[this.black[0]] = newRowArrBlack.join(' ');

  return board.join('\n');
}

Queens.prototype.canAttack = function() {
  if(this.white[0] === this.black[0]) {
    return true;
  } else if (this.white[1] === this.black[1]) {
    return true;
  } else if (this.diagonalCheck()) {
    return true;
  } else {
    return false;
  }
}

Queens.prototype.diagonalCheck = function() {
  var xAxis = Math.abs(this.white[0] - this.black[0]);
  var yAxis = Math.abs(this.white[1] - this.black[1]);
  if(xAxis === yAxis) {
    return true;
  }
}

Queens.prototype.samePosValidate = function() {
  if(this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
    throw new Error("Queens cannot share the same space")
  }
}

module.exports = Queens;
