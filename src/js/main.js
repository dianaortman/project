var openModalButtons = document.querySelectorAll('.open-modal');
var modal = document.querySelector('.modal');
var closeModalButtons = document.querySelectorAll('.close-modal');
var clicks = 0;

function clearCounter() {
    clicks = 0;
    localStorage.setItem("counter", clicks);
    document.querySelector('#counter').innerHTML = clicks;
}

function onClick() {
    clicks = parseInt(localStorage.getItem("counter"));
    clicks += 1;
    localStorage.setItem("counter", clicks);
    document.querySelector('#counter').innerHTML = clicks;
    document.querySelector('#resetButton').innerHTML = '';  
    if (clicks >= 5) {
        document.querySelector('#resetButton').innerHTML = '<button class="clearCounter" onclick="clearCounter()">Reset counter</button>';  	
    }
};

function openModal() {
    document.querySelector('.modal').classList.add('visible');
    onClick();
}

function closeModal() {
    document.querySelector('.modal').classList.remove('visible');
}

openModalButtons.forEach(openBtn => {
    openBtn.addEventListener('click', openModal)
});

closeModalButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModal)
});
