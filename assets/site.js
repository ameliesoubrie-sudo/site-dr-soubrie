(function(){
var d=document.getElementById('drawer'),b=document.getElementById('menu-btn');
if(b)b.addEventListener('click',function(){var o=d.hidden;d.hidden=!o;b.setAttribute('aria-expanded',String(o))});
document.addEventListener('click',function(e){var c=e.target.closest('[data-filter]');if(!c)return;var f=c.dataset.filter;
document.querySelectorAll('[data-filter]').forEach(function(x){var on=x===c;x.classList.toggle('on',on);x.setAttribute('aria-pressed',String(on))});
document.querySelectorAll('.qcards-all [data-theme]').forEach(function(k){k.hidden=!(f==='Tous'||k.dataset.theme===f)})});
})();