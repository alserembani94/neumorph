import React from 'react';
import { Helmet } from 'react-helmet';

const HomeScreen = () => {
    const helmetConfig = {
        // Open Graph Configuration
        "og:title": "Web Title",
        "og:url": "http://www.myowndomain.com",
        "og:type": "website", 
        "og:description": "My neumorph playground, to test out my css skills to produce neumorph design systems.", // 200 char only
        "og:image": "http://www.yourimageurl.com",
        "og:audio": "http://www.youraudiourl.com",
        "og:video": "http://www.yourvideourl.com",
        "og:locale": "EN_US",

        // Twitter Card Configuration
        "twitter:title": "Web Title",
        "twitter:url": "http://www.myowndomain.com",
        "twitter:card": "website", 
        "twitter:description": "My neumorph playground, to test out my css skills to produce neumorph design systems.", // 200 char only
        "twitter:image": "http://www.yourimageurl.com",
    };

    const mappedHelmetConfig = [];
    for (const [key, value] of Object.entries(helmetConfig)) {
        mappedHelmetConfig.push(<meta property={key} content={value} />);
    }

    return (
        <React.Fragment>
            <main className="Home-Screen">
                <Helmet>
                    {/* Modifying headers for the HTML for SEO */}
                    <title>{helmetConfig["og:title"]}</title>
                    <meta charSet="utf-8" />
                    <meta name="author" content="Atif Aiman al-Serembani" />
                    <meta name="description" content={helmetConfig["og:description"]} />
                    { mappedHelmetConfig }

                </Helmet>
                <div className="Home-Project">
                    <p className="Home-Title">My Home Playground</p>
                    <p className="Home-Description">by al-Serembani</p>
                </div>
                <div className="Neumorph-Wrapper">
                    <div className="Neumorph-Element Neumorph-Outside">Outside Shadow</div>
                    <div className="Neumorph-Element Neumorph-Inside">Inside Shadow</div>
                    <div className="Neumorph-Element Neumorph-Outside-Hover">Hover</div>
                    <div className="Neumorph-Element Neumorph-Outside-After">Hover Animation</div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default HomeScreen;