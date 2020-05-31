import React, {useState} from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


// BOOTSTRAP TYPEAHEAD 
import { Typeahead } from "react-bootstrap-typeahead";


function Search({HandleSearch, filterd, all}){
    const [typeAhead, setTypeAhead] = useState(false);
    const [ clickedName, setClikedName ] = useState("");
    
    const hotels = [];
    for(let i = 0; i< filterd.length; i++){
        hotels.push(filterd[i].name)
    }
    
    // REMOVE TYPEAHED ON CLICK
    function hideType(){
        setTypeAhead(false);
        console.log(typeAhead);
    };

    function showType(){
        setTypeAhead(true);
        console.log(typeAhead);
    };


    return(
        <div id="searchContainer">

            <Typeahead
                id="searchBar"
                placeholder="Search by name..."
                options={hotels}
                maxVisible={2}
                labelKey={hotels.name}
                onChange={(selected) => HandleSearch(selected)}
            />

        </div>
    )
}

export default Search;

/*
        <Form>
            <FormGroup className="searchBar">
            <FormControl className="searchBar__input" onFocus={showType}
                placeholder="Search by name..."
                
                onChange={event => HandleSearch(event)}>
            </FormControl>
            
            </FormGroup>
        </Form>
            {typeAhead && 
                <div className="typeahead">
                    {filterd.length < all.length &&
                        <ul className="typeahead__list">
                
                            {filterd.map((result)=>(
                                <li className="typeahead__list--item" key={result.id}><Link to={"/hotel/" + result.id}>
                                    {result.name}
                                </Link></li>
                            ))} 

                        </ul>
                    }
                </div>
            }

*/