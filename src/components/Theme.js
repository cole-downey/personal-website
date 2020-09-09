import { createMuiTheme } from '@material-ui/core';

export const themeDark = createMuiTheme({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff",
            secondary: "#222222"
        },
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#222222",
        },
    },
    typography: {
        body1: {
            fontWeight: 100,
        },
        h3: {
            fontWeight: 300,
        },
        h6: {
            fontWeight: 400,
        }
    }
});
export const themeLight = createMuiTheme({
    palette: {
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#222222",
            secondary: "#ffffff"
        },
        primary: {
            main: "#222222",
        },
        secondary: {
            main: "#ffffff",
        },
    },
    typography: {
        useNextVariants: true,
        body1: {
            fontWeight: 300,
        },
        h6: {
            fontWeight: 400,
        }
    }
});