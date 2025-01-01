// get refrence form and display
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// handle Form Sumbition
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input vales
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generae The Resume Content Dynamically
    var resumeHtml = "\n<h2><b>Resume </b></h2>\n<h3>Persnol Information </h3>\n<p> Name : ".concat(name, "</p>\n<p> Email : ").concat(email, "</p>\n<p> Phone : ").concat(phone, "</p>\n<h3>Education</h3>\n<p> ").concat(education, "</p>\n<h3>Work Experience</h3>\n<p> ").concat(workExperience, "</p>\n<h3>Skills</h3>\n<p> ").concat(skills, "</p>\n");
    // Display The generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The required Element is missing");
    }
});
