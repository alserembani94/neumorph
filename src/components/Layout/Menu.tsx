import React from 'react';
import {
    useHistory,
} from 'react-router-dom';
import {
    Images,
} from '../../utils/Images';
import {
    useOnClickOutside,
} from '../../hooks';

interface MenuProps {
    visible: boolean;
    closeModal: () => void;
}

const menuNav = [
    {
        path: '/neumorph/',
        label: 'Home',
    },
    {
        path: '/neumorph/about',
        label: 'About',
    },
    {
        path: '/neumorph/design-system',
        label: 'Design System',
    },
    {
        path: '/neumorph/contact-me',
        label: 'Finding Me?',
    },
];

const Menu: React.FC<MenuProps> = ({ visible, closeModal }) => {
    const modalRef = React.useRef(null);
    const history = useHistory();

    useOnClickOutside(modalRef, closeModal);

    const handleNavigation = (route: string) => {
        history.push(route);
        closeModal();
    };

    return (
        <React.Fragment>
            <section className="Menu-Wrapper" data-visible={visible}>
                <div className="Menu-Container" data-visible={visible} ref={modalRef}>
                    <button
                        className="Menu-Logo"
                        onClick={() => handleNavigation('/')}
                    >
                        <img
                            src={Images.logo}
                            alt="Logo-Serembani"
                        />
                    </button>
                    <div className="Menu-Drawer">
                        {/* <button className="Menu-Button">
                            Hello
                        </button> */}
                        {
                            menuNav.map((menuItem, index) => (
                                <button
                                    className="Menu-Button"
                                    onClick={() => handleNavigation(menuItem.path)}
                                >{menuItem.label}</button>
                            ))
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Menu;