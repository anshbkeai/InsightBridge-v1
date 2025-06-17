import { map,interval_map,handleRefresh } from "./app.js";

export  function createinterval(target) { 
    /*
    1. nned  the Elenet  to  chage the  Vlaues   about in    the  here
     2. we will  have  about the  refrech  functon  to  Handle that .
     3.  AutoMatic update the  ui 
     4.  WE  WILL fetch  the refreh intervla  form  the   Card  data  form  teh  map 
     5.  then  we  will  about  add the card_if  and   the  interval  to  the  map 

    */

   const  target_id  = target.id;
   const  card_data  =  map.get(target_id);
   if(!interval_map.has(target_id)){
            const  interval  =  setInterval(() => {
            //console.log(target);
            
                 handleRefresh(target);
        },card_data.refresh_interval*1000);

        interval_map.set(target_id,interval);
    }
    else {
    const oldInterval = interval_map.get(target_id);
    clearInterval(oldInterval); // Clear the old one
    const newInterval = setInterval(() => {
        handleRefresh(target);
    }, card_data.refresh_interval * 1000);
    interval_map.set(target_id, newInterval);
}


}