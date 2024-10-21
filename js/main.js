const header = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    if(window.scrollY >= 150){
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})

const hardSkillsBtn = document.getElementById('hardskill-button');
const softSkillsBtn = document.getElementById('softskill-button');
const hardSkillsSlider = document.getElementById('hardskills');
const softSkillsSlider = document.getElementById('softskills');

hardSkillsBtn.addEventListener('click', function() {
  hardSkillsSlider.style.display = 'flex';
  softSkillsSlider.style.display = 'none';
});

softSkillsBtn.addEventListener('click', function() {
  softSkillsSlider.style.display = 'flex';
  hardSkillsSlider.style.display = 'none';
});