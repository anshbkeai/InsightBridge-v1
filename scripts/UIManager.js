import { fetchapidata } from "./FetchApi.js"
import { map } from "./app.js";
import { delete_source } from "./Delete_Source.js";
export  async  function create_card(card_object,card_id) {

    console.log(card_object);
    
   try { 
        const  data  = await fetchapidata(card_object);
        if(data == null) return null; // this is  the  Good Apporach about the maodular  part to desig about  the  system
        // like not  to  save about the map  in  the card  details  id one  return then  
        console.log(`data  from  the   Api is  as  folow  ${data}`);
        const  card_data  =  {...card_object,...data};
        console.log(card_data);
        
        console.log(typeof(data.last_sync));
        map.set(card_id,card_data);
        
        //  then  you  will  be  able  to  acces teh   object  here then  you  shuld  push  that  
        //  means  about  Creaate the  card Object  and then  y
        
        const  element  =  `            <div class = "flex gap-2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Source :  ${data.source}</h5>
                <button id = "refreshbtn" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Refresh Now
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"/></svg>
            </button>
                </div>
            
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Type: ${data.type}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Last Sync: ${data.last_sync}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: ${data.status}</p>

            <button id = "viewbtn" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Details
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>

             <button  class=" deletebtn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>

           
        
        `;

          //  see  if  we  add  the   it  here  tehn  WE  NENED  ABOUT  THE   seprate  logic   to  decoupple  them

        // mEASN  about  that  we need to  capotur about  the   parnet  and  replace  teh   child os  that  is  the  case  that we  are  handling  

       
        return element;
    }
    catch(err) {

    }
}
function renderField( value) {
  if (value === undefined || value === null || value === "") return "No Data From EndPoint";
  return value;
}
export function display_modal(card_id) {
    const card_data = map.get(card_id);
    const modal_id = `modal-${card_id}`;

    const element = `
    <div id="${modal_id}" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Details Follows</h3>
            <button class = "closebtn" type="button">
             <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
            </button>
          </div>

          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4 text-gray-700 dark:text-gray-300">
            <p><strong>Source:</strong> ${renderField(card_data.source)}</p>
            <p><strong>Type:</strong> ${(renderField(card_data.type))}</p>
            <p><strong>Status:</strong> ${renderField(card_data.status)}</p>
            <p><strong>Failures:</strong> ${renderField(card_data.failures)}</p>
            <p><strong>Last Sync:</strong> ${new Date(card_data.last_sync).toLocaleString()}</p>
            <div><strong>Logs:</strong>
              <ul class="list-disc pl-5">
                ${Array.isArray(card_data.logs) &&  card_data.logs.length > 0 ? card_data.logs.map(log => `<li>${log}</li>`).join('') : "No Logs "}
              </ul>
            </div>
             
               <div class="col-span-2">
            <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source URL</label>
            <input type="url" name="url" id="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value= ${renderField(card_data.url)} required>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="refresh" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Refresh Time (sec)</label>
            <input type="number" name="refresh" id="refresh" min = "10" max = "30000"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value= ${renderField(card_data.refresh_interval)} required >
          </div>
            </div>


            
            
         

        </div>
        <button id = "applybtn" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply Changes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
      </div>
    </div>`;

    // Append modal to the body
    document.body.insertAdjacentHTML("beforeend", element);

    // Add close behavior to all close buttons inside the modal
    const modal = document.getElementById(modal_id);
    modal.querySelectorAll(".closebtn").forEach(btn => {
        btn.addEventListener("click", () => {
            modal.remove();
        });
    });
   
}

//  refresh  interval Updatng  factor dena  hoda  adn  upddate them  then we  should  hande about  the   stuff .  modal  changs  .  edit  button  then  you can   also  have  to  chnage  the   url , refreeh  interval  
//  Main  ui  that is  good  .  flex -  gap  proived  that  will  be  goood  for 
//   us  

export async function show_delete_modal(target) {
  const  element   = `
    <div id="popup-modal" tabindex="-1" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="isdelete text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="notdelete py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
    </div>
</div>
  `;
   document.body.insertAdjacentHTML("beforeend", element);
   const modal  =  document.getElementById("popup-modal");

   modal.querySelector(".isdelete").addEventListener("click" , () => {
      modal.remove();
      delete_source(target);
   });

    modal.querySelector(".notdelete").addEventListener("click" , () => {
      modal.remove();
      
   })




}

export function showToast(message, type) {
  const toast = document.createElement("div");

  // Tailwind base styles
 toast.className = `
     fixed top-4 right-4 z-50 space-y-2 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm
    dark:text-gray-400 dark:bg-gray-800
    type-${type}
    animate-slideIn
  `;

  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
