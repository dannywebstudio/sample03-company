
const header=document.querySelector('.site-header');
const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>24);
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const btn=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

document.querySelectorAll('[data-count]').forEach(el=>{
 const obs=new IntersectionObserver(es=>es.forEach(e=>{
   if(!e.isIntersecting)return;
   const target=Number(el.dataset.count||0),suffix=el.dataset.suffix||'';
   const t0=performance.now(),dur=1300;
   function tick(t){const p=Math.min(1,(t-t0)/dur);const v=Math.round(target*(1-Math.pow(1-p,3)));el.textContent=v+suffix;if(p<1)requestAnimationFrame(tick)}
   requestAnimationFrame(tick);obs.disconnect();
 }),{threshold:.5});obs.observe(el);
});

document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault();
 const s=form.querySelector('.form-status');
 if(s)s.textContent='포트폴리오 데모입니다. 실제 프로젝트에서는 문의 메일·CRM·Slack/Teams 등과 연동할 수 있습니다.';
}));
