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
let coinCounter = 100;
const CoinCount = document.getElementById('Coin-count')
const callBtns = document.querySelectorAll('.call-btn');

for (const btn of callBtns) {
    btn.addEventListener('click', function () {

        if (coinCounter >= 20) {
            coinCounter -= 20;

            CoinCount.innerText = coinCounter;

            const card = btn.parentElement;
            const allH2 = card.querySelectorAll('h2');

            const firstText = allH2[0].innerText;
            const secondText = allH2[1].innerText;

            alert("Calling" + ' ' + firstText + ' ' + secondText);
        }
        else {
            alert("You don’t have enough coins!");
        }

    });
}
// copy button

let copyCounter = 0;
const pressCopyBtn = document.querySelectorAll('.press-copy-btn')

for (const pressBtn of pressCopyBtn) {
    pressBtn.addEventListener('click', function () {


        

        const parent = pressBtn.parentElement;
        const findEl = parent.querySelectorAll('h2')

        const takeEl = findEl[1].innerText;

         navigator.clipboard.writeText(takeEl);


        alert('Copied Text'+takeEl)

         copyCounter++;
        document.getElementById('copy-btn').innerText = copyCounter;

    })
}
