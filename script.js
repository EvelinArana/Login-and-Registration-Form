const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLinks = document.querySelectorAll('.login-link');
const forgotLink = document.querySelector('.forgot-link');
const changeLink = document.querySelector('.change-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');      
}

loginLinks.forEach(link => {
    link.onclick = () => {
        wrapper.classList.remove('active'); 
        wrapper.classList.remove('forgot');
        wrapper.classList.remove('change');
    }
});

forgotLink.onclick = () => {
    wrapper.classList.add('forgot');     
}

changeLink.onclick = () => {
    wrapper.classList.add('change');
}
