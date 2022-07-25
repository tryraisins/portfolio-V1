var $ltMAx$vanillatilt = require("vanilla-tilt");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $88e8697860ffcc78$export$2e2bcd8739ae039(targetElements, defaultProps) {
    if (!targetElements.length) return;
    ScrollReveal({
        reset: false
    });
    targetElements.forEach(({ element: element , animation: animation  })=>{
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}



function $2db37e1ab4ed57e8$export$2e2bcd8739ae039() {
    const elements = document.querySelectorAll(".js-tilt");
    (0, ($parcel$interopDefault($ltMAx$vanillatilt))).init(elements);
}


const $322c2e2d14ea4796$export$9c21a3269931e1e6 = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true
};
const $322c2e2d14ea4796$export$adcf75ad64a03007 = [
    {
        element: ".section-title",
        animation: {
            delay: 300,
            distance: "0px",
            origin: "bottom"
        }
    },
    {
        element: ".hero-title",
        animation: {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".hero-cta",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".about-wrapper__image",
        animation: {
            delay: 600,
            origin: "bottom"
        }
    },
    {
        element: ".about-wrapper__info",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__text",
        animation: {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__image",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "right" : "bottom"
        }
    },
    {
        element: ".contact-wrapper",
        animation: {
            delay: 800,
            origin: "bottom"
        }
    }, 
];


(0, $88e8697860ffcc78$export$2e2bcd8739ae039)((0, $322c2e2d14ea4796$export$adcf75ad64a03007), (0, $322c2e2d14ea4796$export$9c21a3269931e1e6));
(0, $2db37e1ab4ed57e8$export$2e2bcd8739ae039)();


//# sourceMappingURL=index.js.map
