import AboutMe from '../containers/about-me';
import Portfolio from '../containers/portfolio';
import Qualifications from '../containers/qualifications';
import Service from '../containers/service-page';
import Landing from '../containers/landing';
import Secret from '../containers/secret';

export const pages = [
    {
        url: '/',
        title: "Home",
        index: 0,
        cont: Landing,
    }, {
        url: '/about',
        title: "About Me",
        index: 1,
        cont: AboutMe,
    }, {
        url: '/portfolio',
        title: "Portfolio",
        index: 2,
        cont: Portfolio,
    }, {
        url: '/qualifications',
        title: "Qualifications",
        index: 3,
        cont: Qualifications,
    }, {
        url: '/service',
        title: "Service",
        index: 4,
        cont: Service,
    }, {
        url: '/secret',
        title: "Secret",
        index: 5,
        cont: Secret,
    },
];