
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('pwd').value;
    const birthday = document.getElementById('birthday').value;
    const age = document.getElementById('age').value;
    const profession = document.querySelector('input[list="browsers"]').value;
    const message = document.querySelector('textarea').value;

  
    if (!fname || !lname || !email || !username || !password || !birthday || !age || !profession || !message) {
        alert("Please fill out all the required fields.");
        return; 
    }

    
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    if (checkboxes.length === 0) {
        alert("Please select at least one situation (harassment or learning).");
        return;
    }

    
    alert("Form submitted successfully!");
    
});


document.querySelector('input[type="reset"]').addEventListener("click", function() {
    alert("Form has been reset.");
});
