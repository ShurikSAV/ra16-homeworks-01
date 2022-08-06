import React from 'react';
import './toolbar.css'

function Toolbar({filters, selected, onSelectFilter}) { 
  return(
    <div>
        {filters.map(
            (item, i) => (
                <button 
                    key={i} 
                    className={selected === item ? "filterItemActiv": "filterItem"}
                    onClick={ () => onSelectFilter(item)}>
                    {item}
                </button>)
            )}
    </div>
    );
  }

export default Toolbar;


/*
 filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected="All"
                onSelectFilter={(filter) => {console.log(filter);}}
*/