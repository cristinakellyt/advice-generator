import './sass/main.scss';

const diceEl = document.getElementById('dice');
diceEl.addEventListener('click', fetchData);

async function fetchData() {
  try {
    const responseData = await axios.get('https://api.adviceslip.com/advice');

    const adviceId = document.getElementById('advice-number');
    const adviceTextEl = document.getElementById('advice-text');
    adviceId.textContent = responseData.data.slip.id;
    adviceTextEl.textContent = responseData.data.slip.advice;
    console.log(responseData);
  } catch (error) {
    alert(error.message);
  }
}

diceEl.dispatchEvent(new MouseEvent('click'));
