const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.getElementById('leadForm');
const note=document.getElementById('formNote');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent('Novo projeto de importação — FITCONNECT');
  const body=encodeURIComponent(
`Nome: ${data.get('name')}
Telefone: ${data.get('phone')}
E-mail: ${data.get('email')}
Negócio: ${data.get('business')}
Projeto: ${data.get('message')||'Não informado'}`
  );
  window.location.href=`mailto:hello@fitconnect.com?subject=${subject}&body=${body}`;
  note.textContent='Abrindo seu e-mail para enviar a solicitação…';
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});
