const landscape = window.matchMedia('(orientation: landscape)');
(()=>{history.replaceState(null,null,location.origin+location.pathname);
const orient=screen.orientation;const root=document.documentElement;
const font=Object.create(null);const inline=28.57;
const init=parseFloat(getComputedStyle(root).getPropertyValue('font-size')) || 15.4;
const desktop=()=>{if(screen.orientation.angle==0 || screen.orientation.angle==180){
document.documentElement.style.fontSize=font.portrait;}else{
document.documentElement.style.fontSize=font.landscape;}};
if((screen.width/init)<inline || (screen.height/init)<inline){
if(orient.type.startsWith('p') && (orient.angle==0 || orient.angle==180)){
font.portrait=(top.innerWidth/inline)+'px';root.style.fontSize=font.portrait;
if(top.innerWidth>screen.width){
font.landscape=(top.innerWidth/screen.height*(screen.width/inline))+'px';
orient.onchange=desktop;}}
if(orient.type.startsWith('l') && (orient.angle==90 || orient.angle==270)){
if(top.innerWidth>screen.width){font.portrait=(top.innerWidth/inline)+'px';
font.landscape=(top.innerWidth/screen.width*(screen.height/inline))+'px';
root.style.fontSize=font.landscape;orient.onchange=desktop;
}else{font.portrait=(screen.height/inline)+'px';
root.style.fontSize=font.portrait;}}}})();
