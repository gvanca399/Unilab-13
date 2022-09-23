const burgerMenu = document.querySelector('.burger')
const listMenu = document.querySelector('.header-nav-ul')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')
const modalWrapper = document.querySelector('.modal-wrapper')

listMenu.addEventListener('click', function(event){
    ulList.classList.toggle('header-nav-ul-active')
    burger.classList.toggle('active')   
    console.log(event)
})
burgerMenu.addEventListener('click', function(e){
    listMenu.classList.toggle('header-nav-ul-active')
    burgerMenu.classList.toggle('active')
})

openModal.addEventListener('click', () => {
    modalWrapper.classList.add('show')
}) 

closeModal.addEventListener('click', () =>{
    modalWrapper.classList.remove('show')
})

window.addEventListener("click", function(e) {
    if (e.target.classList.contains("show")) {
    modalWrapper.classList.remove("show");
}
})
