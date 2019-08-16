let Light = {
    FontSize: "16px",
    PrimaryBanner: {
        background: "#2B0CF6",
        colour: "white"
    },
    Highlight: {
        background: "#0CE5F6",
        colour: "white"
    },
    Body: {
        background: "white",
        colour: "black"
    },
    Button: {
        background: "#0B90D4",
        colour: "black"
    },
    Border: "#0B26D4"
};

let Black = {
    FontSize: "16px",
    PrimaryBanner: {
        background: "black",
        colour: "white"
    },
    Highlight: {
        background: "black",
        colour: "white"
    },
    Body: {
        background: "white",
        colour: "black"
    },
    Button: {
        background: "white",
        colour: "black"
    },
    Border: "#0B26D4"
}

let StyleString = (scheme)=>{
    return `
    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-colour: ${scheme.Border};
        font-size: ${scheme.FontSize};
    }
    .PrimaryBanner { 
        background: ${scheme.PrimaryBanner.background};
        color: ${scheme.PrimaryBanner.colour};
        }
    .Highlight { 
        background: ${scheme.Highlight.background};
        color: ${scheme.Highlight.colour};
        }
     
    .Body { 
        background: ${scheme.Body.background};
        color: ${scheme.Body.colour};
        }
    button: {
        background: "#0B90D4",
        colour: "black"
    }       
        `
}

export {Light, Black, StyleString}