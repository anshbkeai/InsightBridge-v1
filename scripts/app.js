// this is  the   Main  
import { create_card,display_modal,show_delete_modal,showToast } from "./UIManager.js";
import { createinterval } from "./intervalHandler.js";
import { delete_source } from "./Delete_Source.js";

const  addbtn  =  document.getElementById("addbtn");
const  closebtn =  document.getElementById("deletebtn");
const  refreshbtn =  document.getElementById("refreshbtn");
const card_div =  document.querySelector(".cards");

export  let  map  = new  Map(); // this  is  for the   card  iBJECT
export  let interval_map  =  new Map();

addbtn.addEventListener('click' , (e) => {
    console.log(e.target);
    console.log(e);
    
    document.getElementById("crud-modal").classList.remove("hidden");
    document.querySelector(".background-modal").style.display = "block"; 
    
});
 document.querySelector(".closebtn").addEventListener('click', (e) => {
    const  parentElement_id  = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(parentElement_id.id);
    
    document.getElementById(parentElement_id.id).classList.add("hidden");
            document.querySelector(".background-modal").style.display = "none"; 
    }); 
    


const streamForm = document.querySelector('form');
streamForm.addEventListener('submit', handleStreamFormSubmit);

async function handleStreamFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    
    const  form  =  event.target;

    const  url  =  form.url.value;
    const  source =  form.source.value;
    const refresh_interval  =  parseInt(form.refresh.value);

    const  card_object =  {
         url :url ,
        source : source,
        refresh_interval : refresh_interval

    }

    console.log(card_object);
    const  card_id  =  crypto.randomUUID();
    if(!map.has(card_id)){
        const  card_div_ele  =  await create_new_card(card_object,card_id);
        if(!(card_div_ele === null)) {
            card_div.append(card_div_ele);
        }

        
    }
    else {
       // the tostat  showiing  some problme 
       showToast("Something Went Wrong","error");
    }
    
    // create  a  new  Object  out  of  this adn   retuen  
    
}

async  function  create_new_card(card_object,card_id) {
    const card_element =  await create_card(card_object,card_id);
        if(!(card_element===null)) {
            // <div id =  ${card_id} class=">
            const  div =  document.createElement('div');
            div.id  =  card_id;
            div.className = "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";
            div.innerHTML+= card_element;  
            // herre  add  the  interval  to the   app  
            createinterval(div);
            return  div;
        }
        return  null;
}
document.body.addEventListener('click' , (e) => {
   if(e.target &&  e.target.id ==='viewbtn') {
        display_modal(e.target.parentElement.id);
   }
    
   if(e.target && e.target.id  === 'refreshbtn') {
    console.log(e.target);
    handleRefresh(e.target.parentElement.parentElement);   // Probelm Encounter about that if that  is async  then  we can  creeate about  then 
   }

   if(e.target && e.target.id  === 'applybtn') {
   //  const modal = e.target.closest(".relative.bg-white.rounded-lg");

    // see  after  understaninf  about tyhis  i  get to know  that Modal is  getting about  adn   taking all  of the  space in  abnout  the bODY 
    //SO  it  about  to  to  get  exrtract form  the   body  is setlf
    
    // you  nned  to  update the  map  simnple  

    
    const modal =  e.target.parentElement.parentElement.id.slice(6);
    const  data  =  e.target.parentElement.querySelectorAll(".col-span-2");
    console.log(data);
    
   const  urlInput  = data[0].childNodes[3].value;
    const  refreshInput = data[1].childNodes[3].value;

    
    console.log(`URL : ${urlInput}  \n Refersh : ${refreshInput}`);
    
   console.log(modal);
   
   let  modal_data  =  map.get(modal);
   
   modal_data.url =  urlInput;
   modal_data.refresh_interval  =  parseInt(refreshInput);
   map.set(modal,modal_data);
   console.log(modal_data);
   console.log(map);
    handleRefresh(document
        .getElementById(modal)
    );
    // easiy to know about  that traverse the  map  and get about  the  id relater to  the  url  //

    // then  we  can  also  hvae  abou  the  map  in of  the  url  ,  id  l,  re
    // we hvae the  taget  adn we  nned to  fetch  the   value  and   update about  the  modal
   }

   if(e.target &&  e.target.classList.contains('deletebtn')) {
        show_delete_modal(e.target.parentElement);    
    
   }
});

export async function handleRefresh(e) {
    const existingelement  =  e;
    /*
        1.  Create  a  new Card Model about  of  this /  update  model
        2.  to  replace that  child  
        3.  fetch  nahi  same  data  persist . 
    */
   if(existingelement) {
        const  card_object = map.get(existingelement.id);
        const new_card  = await create_new_card({
              url :card_object.url ,
        source : card_object.source,
        refresh_interval : card_object.refresh_interval
        },existingelement.id);

        console.log(new_card);
        
        /// we do not using this about that the  existing one  get about to  update and about  the  simple way tinterval_map.set(existingelement.id,  card_object.refresh_interval);
        card_div.replaceChild(new_card,existingelement);
        
   }


  
}


document.getElementById("refreshallbtn").addEventListener('click' , () => {
   
        for(const [key, value] of map){
            //console.log(`KEY ${key} : Value : ${value}`);
            
          //  console.log(document.getElementById(key));
            
            handleRefresh(document.getElementById(key));
    }
});


// SIMPLE  WEE NEDD TO  WROEA ABOUT THE LOGIC OF THE DELER BUTTON so  the  main 
/*
1. Define similarity that I am thinking for the delete button should be like
2. Somewhat of like whenever, the client clicks on the delete button, then it should be given an option to whomever it can select the object to be deleted so if he click on that object, and that object would get deleted
 
3. boolean  .  click  .  card-div ,  boolen true   simple  gey  the   object  and  delete it 




/*
things that  are nned to  be  inmporvemnet  .
1. Split the code into different modules, which help us you to understand about like you have a delete source code
2, Missing of the feature of handling the URL like if URL gives me 404 error then we should not do for the bowling. We should notify the user that is a URL not working at any instance of this happen.
3. The NAV by the side bar that we have here is taking all of the screen so we need to also divide it for the mobile app so you should learn about how to make a website for mobile app also but this is a good practice for

*/