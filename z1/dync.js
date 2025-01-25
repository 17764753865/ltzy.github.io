const landscape = window.matchMedia('(orientation: landscape)');
(()=>{history.replaceState(null,null,location.origin+location.pathname);const inline=28.57;
const orient=screen.orientation;const root=document.documentElement;const font=Object.create(null);
root.oncontextmenu=(event)=>{event.preventDefault();event.stopPropagation();return false;};
const init=parseFloat(getComputedStyle(root).getPropertyValue('font-size')) || 15.4;
if(orient.type.startsWith('p') || !landscape.matches){root.classList.add('portrait');}
const angle=()=>{if(screen.orientation.angle==90 || screen.orientation.angle==270){
document.documentElement.classList.remove('portrait');}else{document.documentElement.classList.add('portrait');}};
const desktop=()=>{if(screen.orientation.angle==0 || screen.orientation.angle==180){
document.documentElement.style.fontSize=font.portrait;document.documentElement.classList.add('portrait');
}else{document.documentElement.style.fontSize=font.landscape;document.documentElement.classList.remove('portrait');}};
const min=Boolean((screen.width/init)<inline || (screen.height/init)<inline);
if(orient.type.startsWith('p') && (orient.angle==0 || orient.angle==180)){
screen.orientation.onchange=angle;if(min){font.portrait=(top.innerWidth/inline)+'px';root.style.fontSize=font.portrait;
if(top.innerWidth>screen.width){font.landscape=(top.innerWidth/screen.height*(screen.width/inline))+'px';
screen.orientation.onchange=desktop;}}}else if(orient.type.startsWith('l') && (orient.angle==90 || orient.angle==270)){
screen.orientation.onchange=angle;if(min){if(top.innerWidth>screen.width){font.portrait=(top.innerWidth/inline)+'px';
font.landscape=(top.innerWidth/screen.width*(screen.height/inline))+'px';
root.style.fontSize=font.landscape;screen.orientation.onchange=desktop;}else{font.portrait=(screen.height/inline)+'px';
root.style.fontSize=font.portrait;}}}else{landscape.onchange=()=>{if(landscape.matches){
document.documentElement.classList.remove('portrait');}else{document.documentElement.classList.add('portrait');}};}})();
