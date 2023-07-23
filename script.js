const [oneBtn, twoBtn] = document.getElementsByClassName("dropDownBtn"); 
const [oneItem, twoItem] = document.getElementsByClassName("dropDownItems");

function dropDown(parentElement, childElement){
  parentElement.addEventListener("click", ()=>{
    childElement.style.opacity === "1"?childElement.style.opacity=0:childElement.style.opacity=1;
  })
}

dropDown(oneBtn, oneItem);

dropDown(twoBtn, twoItem);
