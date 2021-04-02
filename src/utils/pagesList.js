import AboutMe from '../containers/about-me';
import Portfolio from '../containers/portfolio';
import Qualifications from '../containers/qualifications';
import Service from '../containers/service-page';
import Landing from '../containers/landing';
import Secret from '../containers/secret';

// negative index will hide page from header
export const pages = [
    {
        url: '/',
        title: "Home",
        index: 0,
        cont: Landing,
    }, {
        url: '/qualifications',
        title: "Qualifications",
        index: 1,
        cont: Qualifications,
    }, {
        url: '/portfolio',
        title: "Portfolio",
        index: 2,
        cont: Portfolio,
    }, {
        url: '/about',
        title: "About Me",
        index: 3,
        cont: AboutMe,
    }, {
        url: '/service',
        title: "Service",
        index: -1,
        cont: Service,
    }, {
        url: '/secret',
        title: "Secret",
        index: -1,
        cont: Secret,
    },
];