import { useState } from "react"


function Filter(){
   /*to get value of input*/
   const [text,settext] = useState("")

   function gettext(e){
    settext(e.target.value)
   }

    return(
       <div>
          <input type="text" 
          placeholder="Filter for name"
          onChange={gettext}
          />
          <button>FilterN</button>

          <input type="text" 
          placeholder="Filter for rating"
          onChange={gettext}
          />
          <button>FilterR</button>
       </div>
    )
}

export default Filter