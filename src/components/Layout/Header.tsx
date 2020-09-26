import React from 'react';
import {
    IoIosMenu,
} from 'react-icons/io';
import { IconContext } from "react-icons";
import Menu from './Menu';

const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

    // const handleMenuVisibility = () => {
    //     setToggleMenu(prevState => { return !prevState });
    // };

    const handleOpenMenu = () => setToggleMenu(() => true);
    const handleCloseMenu = () => setToggleMenu(() => false);

    return (
        <React.Fragment>
            <header>
                <button className="Header-MenuButton" onClick={toggleMenu ? handleCloseMenu : handleOpenMenu}>
                    <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Menu' }}>
                        <IoIosMenu />
                    </IconContext.Provider>
                </button>
            </header>
            <Menu
                visible={toggleMenu}
                closeModal={handleCloseMenu}
            />
        </React.Fragment>
    );
};

export default Header;