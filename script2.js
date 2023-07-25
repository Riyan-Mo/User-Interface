const [btn] = document.getElementsByClassName("hamburger-menu");

btn.addEventListener("click", ()=>createOverlay())

function createOverlay(){
  const overlay = document.createElement('div');
  overlay.className = "overlay";
  overlay.appendChild(createSideBar());
  overlay.appendChild(blackDiv());
  document.body.appendChild(overlay);
}

function createSideBar(){
  const sideBar = document.createElement('div');
  sideBar.className = "sideBar";
  exampleElements(sideBar)
  return sideBar
}

function exampleElements(parent){
  for(let i = 0; i<8; i++){
    const para = document.createElement("p");
    para.textContent = `Item ${i}`;
    parent.appendChild(para);
  }
}

function blackDiv(){
  const div = document.createElement('div');
  div.addEventListener('click', ()=>{
    const [overlay] = document.getElementsByClassName("overlay");
    document.body.removeChild(overlay);
  })
  return div;
}