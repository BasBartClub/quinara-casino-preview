const Q={get u(){return JSON.parse(localStorage.getItem('q_user')||'null')},
users(){let u=JSON.parse(localStorage.getItem('q_users')||'{}');if(!u['demo@quinara.test']){u['demo@quinara.test']={pw:'Quinara-Demo-2026',naam:'Demo'};localStorage.setItem('q_users',JSON.stringify(u))}return u},
credits(){let c=localStorage.getItem('q_cred');if(c===null){c=1000;localStorage.setItem('q_cred',c)}return +c},
setCredits(v){localStorage.setItem('q_cred',Math.max(0,Math.round(v)));document.querySelectorAll('[data-cred]').forEach(e=>e.textContent=Q.credits())},
login(e,p){const u=Q.users()[e.toLowerCase()];if(u&&u.pw===p){localStorage.setItem('q_user',JSON.stringify({email:e.toLowerCase(),naam:u.naam}));return true}return false},
logout(){localStorage.removeItem('q_user');location.href=Q.root+'index.html'},root:document.documentElement.dataset.root||''};
Q.users();
document.addEventListener('DOMContentLoaded',()=>{const a=document.querySelector('.acts');if(a&&Q.u){a.innerHTML=`<span class="bal">💠 <span data-cred>${Q.credits()}</span> credits</span><a class="btn o" href="${Q.root}account.html">Account</a>`}
document.querySelectorAll('[data-cred]').forEach(e=>e.textContent=Q.credits());
document.querySelectorAll('.fav').forEach(b=>b.onclick=()=>{b.classList.toggle('on');b.textContent=b.classList.contains('on')?'♥':'♡'});
document.querySelectorAll('[data-play]').forEach(b=>b.onclick=e=>{if(!Q.u){e.preventDefault();location.href=Q.root+'inloggen.html?next='+encodeURIComponent(b.getAttribute('href'))}});
document.querySelectorAll('.shelf').forEach(s=>{const r=s.querySelector('.row');if(!r)return;s.querySelectorAll('[data-dir]').forEach(b=>b.onclick=()=>r.scrollBy({left:r.clientWidth*b.dataset.dir*.8}))});
const q=document.querySelector('#zoek');if(q)q.oninput=()=>{const v=q.value.toLowerCase();document.querySelectorAll('.card[data-name]').forEach(c=>c.style.display=c.dataset.name.toLowerCase().includes(v)?'':'none')};
const h=document.querySelector('.hero');if(h){const sl=[...h.querySelectorAll('.slide')],ds=[...h.querySelectorAll('.dot')];let i=0,p=false;const go=n=>{i=(n+sl.length)%sl.length;sl.forEach((s,k)=>s.classList.toggle('on',k==i));ds.forEach((d,k)=>d.classList.toggle('on',k==i))};
ds.forEach((d,k)=>d.onclick=()=>go(k));h.querySelector('.arr.l').onclick=()=>go(i-1);h.querySelector('.arr.r').onclick=()=>go(i+1);const pp=h.querySelector('.pp');pp.onclick=()=>{p=!p;pp.textContent=p?'▶':'❚❚';pp.setAttribute('aria-label',p?'Afspelen':'Pauzeren')};setInterval(()=>{if(!p)go(i+1)},5000)}});
