import React from 'react'
import './SidebarOption.css';

// Capital I for Icon means that we're passing in a component as a prop.
function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {/* If there is an Icon passed in as a prop, render it */}
            {Icon && <Icon className="sidebarOption__icon"></Icon>}
            
            {/* If there is an Icon passed in as a prop, we want to have an h4 otherwise render a <p> tag */}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}            
        </div>
    )
}

export default SidebarOption
