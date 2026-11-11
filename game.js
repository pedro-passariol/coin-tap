'use strict';
(() => {
  const coin = document.getElementById('coin');
  const status = document.getElementById('status');
  const restart = document.getElementById('restart');
  const positions = [[50, 50], [20, 25], [75, 70], [25, 75], [80, 25]];
  let score = 0;

  function render() {
    const won = score === positions.length;
    status.textContent = won ? 'You win! 5 / 5 coins collected.' : `Coins: ${score} / 5`;
    coin.disabled = won;
    const [x, y] = positions[Math.min(score, positions.length - 1)];
    coin.style.left = `${x}%`;
    coin.style.top = `${y}%`;
  }

  coin.addEventListener('click', () => {
    if (score < positions.length) score += 1;
    render();
  });
  restart.addEventListener('click', () => {
    score = 0;
    render();
    coin.focus();
  });
  render();
})();
