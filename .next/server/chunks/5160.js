"use strict";
exports.id = 5160;
exports.ids = [5160];
exports.modules = {

/***/ 6660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function StatementSplitter({ statement  }) {
    let parts = statement.split("<BR>");
    return parts.map((part, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            style: {
                display: "block"
            },
            children: [
                part,
                i !== parts.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}) : null
            ]
        }, i));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatementSplitter);


/***/ }),

/***/ 3285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_Clients)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Common/Split.jsx
var Split = __webpack_require__(2637);
;// CONCATENATED MODULE: ./src/data/InnerPages/About/clients.json
const clients_namespaceObject = JSON.parse('["/assets/imgs/brands/01.png","/assets/imgs/brands/02.png","/assets/imgs/brands/03.png","/assets/imgs/brands/04.png","/assets/imgs/brands/05.png","/assets/imgs/brands/03.png"]');
// EXTERNAL MODULE: ./src/data/app-data.json
var app_data = __webpack_require__(7513);
;// CONCATENATED MODULE: ./src/components/InnerPages/About/Clients.jsx


//= Components

//= Data


function Clients({ lightMode  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "clients section-padding pb-100 position-re",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center mb-80",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6 text-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Nos partenaires."
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-11",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row md-marg",
                            children: clients_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-4 col-6 brand box-bg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "item mb-30 wow fadeIn",
                                        "data-wow-delay": ".6s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: `/${lightMode ? "light" : "dark"}${item}`,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Split/* default */.Z, {
                                                tag: "a",
                                                href: app_data/* author_link */.a,
                                                className: "link",
                                                children: "www.pledgeandgrow.com"
                                            })
                                        ]
                                    })
                                }, Math.floor(Math.random() * 10000)))
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-pattern patrn1 bg-img opacity-5",
                "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/patterns/pattern.svg`
            })
        ]
    });
}
/* harmony default export */ const About_Clients = (Clients);


/***/ }),

/***/ 1953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Intro() {
    function openAccordion(event) {
        document.querySelectorAll(".accordion-info").forEach((element)=>{
            element.classList.remove("active");
            element.style.maxHeight = 0;
            element.parentElement.classList.remove("active");
        });
        event.currentTarget.parentElement.classList.add("active");
        event.currentTarget.nextElementSibling.style.maxHeight = "300px";
        event.currentTarget.nextElementSibling.classList.add("active");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "intro-corp section-padding pt-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row justify-content-around",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5 valign md-mb50",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "imgs mb-80",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "img1 wow fadeInUp",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/dark/assets/imgs/about/sq1.jpg",
                                        alt: "",
                                        className: "radius-10"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "img2 wow fadeInLeft",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/dark/assets/imgs/about/sq2.jpg",
                                        alt: "",
                                        className: "radius-10"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "d-slideup wow",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "Watch the creative"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "process behind our"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "digital marketing."
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "accordion bord mt-40",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item mb-15 wow fadeInUp",
                                            "data-wow-delay": ".1s",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "S\xe9curit\xe9 et Fiabilit\xe9"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Nous utilisons des technologies de pointe et des infrastructures s\xe9curis\xe9es pour prot\xe9ger vos donn\xe9es sensibles et garantir la fiabilit\xe9 de vos syst\xe8mes informatiques. Vous pouvez compter sur nous pour une s\xe9curit\xe9 maximale et une protection contre les cybermenaces."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item mb-15 wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "Int\xe9gration et Compatibilit\xe9"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Notre expertise en int\xe9gration de syst\xe8mes complexes assure une parfaite compatibilit\xe9 entre vos diff\xe9rents outils et plateformes. Nous veillons \xe0 ce que toutes vos solutions fonctionnent ensemble de mani\xe8re harmonieuse, optimisant ainsi votre efficacit\xe9 op\xe9rationnelle."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item wow fadeInUp",
                                            "data-wow-delay": ".5s",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "Agilit\xe9 et Rapidit\xe9"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Gr\xe2ce \xe0 notre approche de d\xe9veloppement agile, nous livrons rapidement des solutions de haute qualit\xe9 et nous adaptons facilement \xe0 vos besoins changeants. Notre r\xe9activit\xe9 vous offre un avantage concurrentiel en vous permettant de rester \xe0 jour avec les \xe9volutions du march\xe9."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);


/***/ }),

/***/ 8858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8366);


//= Scripts

function Story() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "pg-about section-padding sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-img radius-10 md-mb50",
                            "data-background": "/dark/assets/imgs/about/sq1.jpg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-img radius-10",
                            "data-background": "/dark/assets/imgs/about/sq2.jpg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sec-head mt-80",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "sub-title",
                                children: "A PROPOS DE NOUS"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "cont mt-80",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Nous sommes une \xe9quipe d'entrepreneurs passionn\xe9s issus de diff\xe9rents parcours, unis par un objectif commun : d\xe9mocratiser l'informatique \xe0 l'\xe9chelle nationale. Depuis plus de deux ans, nous nous consacrons \xe0 l'innovation en interne tout en accompagnant nos clients avec d\xe9vouement et expertise. Ensemble, nous repoussons les limites de la technologie pour cr\xe9er un avenir o\xf9 l'informatique est accessible \xe0 tous. "
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Story);


/***/ })

};
;