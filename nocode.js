document.addEventListener('keydown', function(event) {
    
    if (event.key === 'F12') {
        event.preventDefault();
        alert("Không được đâu bạn ơi !");
    }
    if ((event.ctrlKey && event.key === 's') ||
       (event.ctrlKey && event.shiftKey && event.key === "I") || 
       (event.ctrlKey && event.shiftKey && event.key === "J") ||
       (event.ctrlKey && (event.key === 'u' || event.key === 'U'))) {
        event.preventDefault();
        alert("Không được đâu bạn ơi !");
    }
});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("hông được đâu bạn ơi !");
});

document.addEventListener('keyup', function(event) {
    
    if (event.key === 'F12') {
        event.preventDefault();
        alert("Không được đâu bạn ơi !");
    }
    if ((event.ctrlKey && event.key === 's') ||
       (event.ctrlKey && event.shiftKey && event.key === "I") || 
       (event.ctrlKey && event.shiftKey && event.key === "J") ||
       (event.ctrlKey && (event.key === 'u' || event.key === 'U'))) {
        event.preventDefault();
        alert("Không được đâu bạn ơi !");
    }
});

document.addEventListener('keypress', function(event) {
    
    if (event.key === 'F12') {
        event.preventDefault();
        alert("Không được đâu bạn ơi !");
    }
    if ((event.ctrlKey && event.key === 's') ||
       (event.ctrlKey && event.shiftKey && event.key === "I") || 
       (event.ctrlKey && event.shiftKey && event.key === "J") ||
       (event.ctrlKey && (event.key === 'u' || event.key === 'U'))) {
        event.preventDefault();
        alert("Không được đâu bạn ơi !");
    }
});