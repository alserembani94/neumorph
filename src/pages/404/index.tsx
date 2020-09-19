import React from 'react';
import {
    IoIosFlask,
} from 'react-icons/io';
import { IconContext } from "react-icons";

const NotFound = () => {
    return (
        <React.Fragment>
            <main className="NotFound-Screen">
                <div className="NotFound-Title">
                    <IconContext.Provider value={{ className: 'Icon Icon-Tertiary Icon-NotFound' }}>
                        <IoIosFlask />
                    </IconContext.Provider>
                    <p>You have wondered too far!</p>
                    <IconContext.Provider value={{ className: 'Icon Icon-Tertiary Icon-NotFound' }}>
                        <IoIosFlask />
                    </IconContext.Provider>
                </div>
                <p>How about trying the other page instead?</p>
            </main>
        </React.Fragment>
    );
};

export default NotFound;