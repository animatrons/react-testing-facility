import React from 'react';
import {Link} from 'react-router-dom';

const Tab = (props) => {

    // onClick={props.onClick} style={{ borderRight: '4px solid #282c34'}}

    return (
        <span id = {`tab${props.tabNum}`} className = "tab" style={{width: `calc(100% / ${props.Num})`}}>
            <Link className="lnk" name={`tab${props.tabNum}`} onClick={props.click} to={`/features/${props.linkTo}`} >
                {props.text}
            </Link>
        </span>
    )
}

export default Tab;