export function displayGame(game) {
  displayBoard(game.playerOne, game, game.attacked === game.playerOne);
  displayBoard(game.playerTwo, game, game.attacked === game.playerTwo);
}

export function updateGame() {}

export function displayBoard(player, game, active) {
  const gameDiv = document.getElementById("game-container");
  const playerDiv = document.createElement(`div`);
  playerDiv.classList.add("gameboard", player.name);
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container", `${player.name}`);
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
      if (active) {
        fieldDiv.addEventListener("click", (el) => {
          game.attack(el.currentTarget);
        });
      }
      row.append(fieldDiv);
    }
    playerDiv.append(row);
  }
  const exists = document.querySelector(`.${player.name}`);
  if (exists) {
    exists.replaceWith(playerDiv);
  } else {
    gameDiv.append(playerDiv);
  }
}
