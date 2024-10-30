const container = document.getElementById('draggableContainer');
const titleBar = container.querySelector('.title-bar');

let offsetX = 0, offsetY = 0;
let isDragging = false;

titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        container.style.left = `${e.clientX - offsetX}px`;
        container.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Optional: Close button functionality
function closeWindow() {
    container.style.display = 'none';
}
