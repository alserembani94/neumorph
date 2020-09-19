import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

// Importing all main layout components
import {
    Header,
} from '../components';

// Importing all main pages
import Home from '../pages/Home';
import NotFound from '../pages/404';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "*",
        exact: false,
        main: () => <NotFound />
    },
];

const Layout: React.FC = () => {
    return (
        <React.Fragment>
            <div className="Layout-Wrapper">
                <Header />
                <section className="Layout-Body">
                    <Switch>
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))
                        }
                        {/* <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route> */}
                    </Switch>
                </section>
            </div>
        </React.Fragment>
    );
};

export default Layout;