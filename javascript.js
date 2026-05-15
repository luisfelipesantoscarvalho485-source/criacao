// MENU MOBILE

const menu = document.querySelector('.menu');

const mobileMenu = document.querySelector('.mobile-menu');

menu.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');

});

// FECHAR MENU AO CLICAR

const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.classList.remove('active');

    });

});


// ===========================
// WHATSAPP
// ===========================

const numero = '5521998711724';

const mensagemZap = 'Olá! Gostaria de mais informações 😊';

const linkZap = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemZap)}`;

const whatsappBtns = document.querySelectorAll('.dark');

const whatsappFloat = document.querySelector('.whatsapp-float');

whatsappBtns.forEach(btn => {

    btn.href = linkZap;

});

whatsappFloat.href = linkZap;


// ===========================
// AGENDAMENTO
// ===========================

const agendarBtn = document.querySelector('.gold');

agendarBtn.addEventListener('click', (e) => {

    e.preventDefault();

    const data = prompt('Digite a data do agendamento:\nEx: 20/05/2026');

    if(!data) return;

    const hora = prompt('Digite o horário:\nHorário  Apenas Das 8:00 ás 18:00hrs');

    if(!hora) return;

    const mensagem =
`Olá! Gostaria de agendar um horário 😊

📅 Data: ${data}
⏰ Horário: ${hora}`;

    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

});


// ===========================
// ANIMAÇÃO HEADER
// ===========================

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if(window.scrollY > 50){

        header.style.background = 'rgba(0,0,0,0.85)';

    }else{

        header.style.background = 'rgba(0,0,0,0.5)';

    }

});