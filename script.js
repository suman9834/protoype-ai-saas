const navs=document.querySelectorAll('.nav');const pages=document.querySelectorAll('.page');const title=document.getElementById('pageTitle');
const titles={dashboard:'Dashboard',calculator:'Carbon Calculator',reports:'ESG Reports',insights:'AI Insights'};
function showPage(id){pages.forEach(p=>p.classList.toggle('active-page',p.id===id));navs.forEach(n=>n.classList.toggle('active',n.dataset.page===id));title.textContent=titles[id]||'Dashboard';window.scrollTo({top:0,behavior:'smooth'})}
navs.forEach(n=>n.addEventListener('click',()=>showPage(n.dataset.page)));
function calculate(){
 const electricity=+document.getElementById('electricity').value||0;
 const diesel=+document.getElementById('diesel').value||0;
 const petrol=+document.getElementById('petrol').value||0;
 const travel=+document.getElementById('travel').value||0;
 // Illustrative prototype factors only:
 const a=electricity*0.00070,b=diesel*0.00268,c=petrol*0.00231,d=travel*0.00017;
 const total=a+b+c+d;
 document.getElementById('calcResult').textContent=total.toFixed(2);
 document.getElementById('e1').textContent=a.toFixed(2);
 document.getElementById('e2').textContent=b.toFixed(2);
 document.getElementById('e3').textContent=c.toFixed(2);
 document.getElementById('e4').textContent=d.toFixed(2);
}
