// TODO: write your code here
const moveForwoard = (player) => {
  debugger
 const wagon = document.querySelector(`#player${player}_race .active`);
  if (wagon.nextElementSibling) {
    wagon.nextElementSibling.classList.add('active');
    wagon.classList.remove('active');
  }else {
    alert(`Player ${player} wins! Play again?`);
    window.location.reload();
  }
};



const moveWagons = (event) => {
  if (event.key === "a") {
    moveForwoard(1);
  } else if (event.key === "p") {
    moveForwoard(2);
  }
};

document.addEventListener('keyup', moveWagons);

