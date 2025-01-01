// get refrence form and display
const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

// handle Form Sumbition
form.addEventListener('submit', (event : Event)=>{
event.preventDefault(); // prevent page reload

// collect input vales
const name = (document .getElementById('name')as HTMLInputElement).value
const email = (document .getElementById('email')as HTMLInputElement).value
const phone = (document .getElementById('phone')as HTMLInputElement).value
const education = (document .getElementById('education')as HTMLInputElement).value
const workExperience = (document .getElementById('experience')as HTMLInputElement).value
const skills = (document .getElementById('skills')as HTMLInputElement).value

// Generae The Resume Content Dynamically

const resumeHtml = `
<h2><b>Resume </b></h2>
<h3>Persnol Information </h3>
<p> Name : ${name}</p>
<p> Email : ${email}</p>
<p> Phone : ${phone}</p>
<h3>Education</h3>
<p> ${education}</p>
<h3>Work Experience</h3>
<p> ${workExperience}</p>
<h3>Skills</h3>
<p> ${skills}</p>
`
// Display The generated Resume
if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHtml
}
else {
    console.error("The required Element is missing")
}
})
