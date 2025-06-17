import { map,interval_map } from "./app.js";
import { show_delete_modal } from "./UIManager.js";

export  function  delete_source(target) {
    // nned  to  delete  if  
   
        // retur true;
        const  card_id  =  target.id;
        
            map.delete(card_id);
    
       clearInterval(interval_map.get(card_id));
       interval_map.delete(card_id);

       target.remove();

      
    
    
}