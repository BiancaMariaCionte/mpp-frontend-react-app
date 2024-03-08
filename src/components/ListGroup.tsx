import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

// {items: [] , heading: string}
interface Props{
    items: string[];
    heading: string;
    // (item: string) => void <-the selected item
    onSelectItem: (item: string) => void;
}

function ListGroup({items,heading,onSelectItem}: Props ) {


    // -1 <- no item is selected 
    // 0 <- the first item is selected

    //Hook function 
    // we tell React that this component will have data that will change over time
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // variable(selectedIndex)
    // updater function <- we can update the selectedIndex

    

    return ( // '(' <- prettier spread sthe jsx code into mulitple lines

        <Fragment>
            <h1>{heading}</h1>
             {items.length == 0 && <p>No item found</p>}
            <ul className='list-group'>
                {items.map((item,index)=> (
                <li
                 className={selectedIndex == index ? 'list-group-item active': 'list-group-item'}
                 key={item}
                 onClick={() =>{
                    setSelectedIndex(index);
                    onSelectItem(item);
                } }
            
                 >
                    {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;

// a Component cannot return more than 1 element
// shortCut: in order to wrap a piece of code in some <>:
// -select the code -> view -> command pallete -> wrap with abbreviation -> then specify the type of element that we want to use

//shortCut: ctrl d <- for modifying multiple words that are the same

// Arrays have the method map for converting each item into an item of a differnt type
// {} <- for dynamic data
// let <- for defining variables
// inside a JSX expression we can only have HTML elements or React components,
// However, with braces we can use dynamic things inside the JSX