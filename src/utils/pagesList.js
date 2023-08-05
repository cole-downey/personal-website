import AboutMe from '../containers/about-me';
import Portfolio from '../containers/portfolio';
import Qualifications from '../containers/qualifications';
import Service from '../containers/service-page';
import Landing from '../containers/landing';
import Secret from '../containers/secret';
import Spaceboarder from '../containers/portfolio/spaceboarder';

// negative index will hide page from header
export const pages = [
    {
        url: '/',
        title: "Portfolio",
        index: 0,
        cont: Portfolio,
    },
    {
        url: '/about-me',
        title: "About Me",
        index: 1,
        cont: AboutMe,
    },
    {
        url: '/qualifications',
        title: "Qualifications",
        index: 2,
        cont: Qualifications,
    },
    {
        url: '/home',
        title: "Home",
        index: -1,
        cont: Landing,
    },
    {
        url: '/service',
        title: "Service",
        index: -1,
        cont: Service,
    },
    {
        url: '/secret',
        title: "Secret",
        index: -1,
        cont: Secret,
    },
    {
        url: '/portfolio/spaceboarder',
        title: 'Spaceboarder',
        index: -1,
        cont: Spaceboarder,
    }
];