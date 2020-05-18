import React from "react";
import FormControl from "react-bootstrap/FormControl";

// FORM CONTROLL
// CHNAGE INPUT TO BOOTSTRAP ELM

function Search({HandleSearch, filterd, all}){
    
    return(
        <>
             <FormControl
                placeholder="Search by name..."
                onChange={event => HandleSearch(event)}>

            </FormControl>
            <div id="typeahead">
                {filterd.length === all.lenght && null}
                {filterd.length < all.length &&
                    <ul>
                
                        {filterd.map((result)=>(
                            <li key={result.id}><a href="www.google.com">{result.name}</a></li>
                        ))} 
                    
                    </ul>
                }
            </div>
        </>
    )
}

export default Search;