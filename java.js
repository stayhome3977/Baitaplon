document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Bạn đang truy cập vào ${button.innerText}`);
        window.open(button.href, '_blank');
    });
});