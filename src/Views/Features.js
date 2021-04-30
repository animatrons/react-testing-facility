import React, { useState, Suspense } from 'react';
import { useTabs } from '../Hooks/useTabs';
import { useStore } from 'react-context-hook';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Counting from '../Components/Counting';
import This from '../Components/This';
import Today from '../Components/Today';

function resetTabs(f, v) {
    if (f) {
        setTimeout(() => {
            document.getElementById("tab1").classList.remove('selected-tab');
            document.getElementById("tab2").classList.remove('selected-tab');
            document.getElementById("tab3").classList.remove('selected-tab');
            v.oldId = '000';
            v.newId = '000';
        }, 0);
    }
}

function Features() {
    const [logged, setLogState, deleteLog] = useStore('logged');
    const [firstTime, setFirstTime, deleteFirstTime] = useStore('firstTime');
    const [values, handleTabs] = useTabs({ oldId: '000', newId: '000' });
    const TabSwitch = React.lazy(() => import('../Components/tabSwitch'));
    if (logged) {
        return (
            <div className="content features">
                <div className="nav-tabs" >
                    <span id="tab1" className=''>
                        <Link className="lnk" name="tab1" onClick={handleTabs} to='/features/here'>Today 📆</Link>
                    </span>
                    <span id="tab2" className=''>
                        <Link className="lnk" name="tab2" onClick={handleTabs} to='/features/counting'>Counting</Link>
                    </span>
                    <span id="tab3" className=''>
                        <Link className="lnk" name="tab3" onClick={handleTabs} to='/features/this'>This?</Link>
                    </span>
                </div>
                {setTimeout(() => {
                    document.getElementById(values.newId).classList.add('selected-tab');
                    document.getElementById(values.oldId).classList.remove('selected-tab');
                }, 0)}
                <div className="logged">
                    <h2>Wow! it worked</h2>
                </div>
                <Route path='/features/here'>
                    <Today></Today>
                </Route>
                <Route path='/features/counting'>
                    <Counting />
                </Route>
                <Route path='/features/this'>
                    <This />
                </Route>
                <Suspense fallback={<div> loading... </div>}>
                    <TabSwitch slnk={2}></TabSwitch>
                </Suspense>
                <div id="000"></div>
                <div style={{ visibility: "hidden" }}>
                    {resetTabs(firstTime, values)}
                    {setTimeout(() => setFirstTime(false)
                        , 100)}
                </div>
            </div>
        )
    }
    return (
        <div className="content  features">
            <div className="not-logged">
                💢💢💢😠 Forgot to login again!! 😠💢💢💢
            </div>
            <Suspense fallback={<div> loading... </div>}>
                <TabSwitch slnk={2}></TabSwitch>
            </Suspense>
        </div>
    )
}

export default Features;