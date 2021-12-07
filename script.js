// Modal
// I used class notes for reference on much of my modal     scaffolding and styling
// https://git.generalassemb.ly/SEIR-1115/modals-intro

const openBtn = document.querySelector('#openModal');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');

const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
