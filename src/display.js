export function displayBoard(player) {
  const playerDiv = document.getElementById(`gameboard-${player.name}`);
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("boardContainer");
  const board = player.board;
  for (let key in board.columns) {
    const column = board.columns[key];
    const row = document.createElement("div");
    row.classList.add("boardRow");
    row.id = `row-${key}`;
    boardContainer.append(row);
    for (let fieldKey in column) {
      const field = column[fieldKey];
      const fieldDiv = document.createElement("div");
      fieldDiv.classList.add("field");
      fieldDiv.id = `${key}-${fieldKey}`;
      fieldDiv.setAttribute("ship", field.hasShip);
      fieldDiv.setAttribute("hit", field.isHit);
      fieldDiv.addEventListener("click", (el) => {
        player.receiveAttack(el.currentTarget);
      });
      row.append(fieldDiv);
    }
  }
  playerDiv.innerHTML = "";
  playerDiv.append(boardContainer);
}
