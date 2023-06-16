
let screen=document.getElementById('input');
let screenValue="";
Numberbuttons=document.querySelectorAll('.btn');
for(item of Numberbuttons){
      item.addEventListener('click', (e)=>{
      buttonText=e.target.innerText;
      console.log('Button text is ',buttonText);

      if(buttonText=="AC")
      {
        screenValue="";
        screen.value=screenValue;
      }
      else if(buttonText=='=')
      {
        screen.value=eval(screenValue);
      }
      else if(buttonText=="Sin")
      {
          
           screen.value=Math.sin(screenValue*(360/3.14));
      }
      else if(buttonText=="Cos")
      {
        screen.value=Math.cos(screenValue*(360/3.14));
      }
      else if(buttonText=="Tan")
      {
        screen.value=Math.tan(screenValue*(360/3.14));
      }
      else if(buttonText=="²√")
      {
        screen.value=Math.sqrt(screenValue);
      }
       else
       {
         screenValue+=buttonText;
         screen.value=screenValue;
       }
    })
}