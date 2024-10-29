document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

    document.getElementById('showTimeBtn').addEventListener('click', function() {
    document.getElementById('currentDateTime').innerHTML = new Date().toLocaleString();
});

    function changeBackgroundColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

    const navMenu = document.getElementById('navMenu');
    const menuItems = navMenu.querySelectorAll('.nav-item');

    navMenu.addEventListener('keydown', function(event) {
    const focusedElement = document.activeElement;
    const currentIndex = Array.from(menuItems).indexOf(focusedElement);

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
{
    let nextIndex = (currentIndex + 1) % menuItems.length;
    menuItems[nextIndex].focus();
}
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
{
    let prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    menuItems[prevIndex].focus();
}
});

document.getElementById('greetUserBtn').addEventListener('click', function() {
    const name = document.getElementById('userName').value;
    document.getElementById('greeting').textContent = 'Hello, ' + name + '!';
});