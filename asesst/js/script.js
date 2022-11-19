field.onclick = function(event) {
    let field = document.getElementById("field");
    let filecord = this.getBoundingClientRect()
    let top = event.clientY - filecord.top - field.clientTop - ball.clientHeight / 2;
    let left = event.clientX - filecord.left - field.clientLeft - ball.clientWidth / 2;
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (left + ball.clientWidth > field.clientWidth) {
        left = field.clientWidth - ball.clientWidth;
    }
    if (top + ball.clientHeight > field.clientHeight) {
        top = field.clientHeight - ball.clientHeight;
    }
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';
}
