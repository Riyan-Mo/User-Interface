const [prevBtn, nextBtn] = document.getElementsByClassName("imgControl");
const imageNames = ["guest2", "guest3", "header", "OIP"];
const imgElement = document.getElementById("imgDiv");
let index = 0;

prevBtn.addEventListener("click", ()=>setImage(-1));

nextBtn.addEventListener("click", ()=>setImage(+1));

window.onload=()=>{
  imgElement.src = `/images/${imageNames[0]}.jpeg`
  setInterval(()=>setImage(1), 5000);
}

function setImage(number){
  if( (number>=0 && index<(imageNames.length-1)) || ( number<=0 && index>0 ) ){
    index += number;
  }
  else{
    index=0;
  }
  imgElement.src = `/images/${imageNames[index]}.jpeg`
}

const navigationBar = (()=>{
  const navigationDiv = document.getElementById("navigationDiv");
  for(let i = 0; i<imageNames.length; i++){
    const dot = document.createElement('button')
    dot.type = "button";
    dot.textContent = i;
    dot.className = "navigationDots";
    dot.addEventListener("click", ()=> {imgElement.src=`/images/${imageNames[i]}.jpeg`});
    navigationDiv.appendChild(dot);
  }
})()
