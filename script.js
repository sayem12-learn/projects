// functionalities






// heart-icon
let heartCount = 0;
const heartIconslist = document.querySelectorAll('.heart-icon')

for (const heart of heartIconslist) {
    heart.addEventListener('click', function () {
        heartCount++;

        document.getElementById('count-heart-1').innerText = heartCount
    })

}


// call button
const callHistory = [];
let coinCounter = 100;
const CoinCount = document.getElementById('Coin-count');
const callBtns = document.querySelectorAll('.call-btn');
const historySection = document.getElementById('history-section');

for (const btn of callBtns) {
    btn.addEventListener('click', function () {
        const card = btn.parentElement;

        if (coinCounter >= 20) {
            coinCounter -= 20;
            CoinCount.innerText = coinCounter;

            const allH2 = card.querySelectorAll('h2');
            const firstText = allH2[0].innerText;
            const secondText = allH2[1].innerText;

            alert("Calling " + firstText + ' ' + secondText);

            const name = card.querySelector('.name').innerText;
            const number = card.querySelector('.number').innerText;
            const time = new Date().toLocaleTimeString();

            const history = { name, number, time };
            callHistory.push(history);

            historySection.innerHTML = '';

            for (const historyOfCall of callHistory) {
                const div = document.createElement('div');
                div.innerHTML = `
                  <div class="mt-3 p-3 bg-[#fafafa] rounded-xl ">
                      <div class="flex justify-between items-center">
                          <div>
                              <h1 class="font-semibold">${historyOfCall.name}</h1>
                              <p>${historyOfCall.number}</p>
                          </div>
                          <p>${historyOfCall.time}</p>
                      </div>
                  </div>
                `;
                historySection.appendChild(div);
            }
        } else {
            alert("You don’t have enough coins!");
        }
    });
}

 document.getElementById('clear-btn').addEventListener('click', function () {

            callHistory.length = 0;
            historySection.innerHTML = '';



        })






// copy button

let copyCounter = 0;
const pressCopyBtn = document.querySelectorAll('.press-copy-btn')

for (const pressBtn of pressCopyBtn) {
    pressBtn.addEventListener('click', function () {




        const parent = pressBtn.parentElement;
        const findEl = parent.querySelectorAll('h2')

        const takeEl = findEl[1].innerText;

        navigator.clipboard.writeText(takeEl);


        alert('Copied Text' + takeEl)

        copyCounter++;
        document.getElementById('copy-btn').innerText = copyCounter;

    })
}





