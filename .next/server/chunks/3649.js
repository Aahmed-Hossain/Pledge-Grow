"use strict";
exports.id = 3649;
exports.ids = [3649];
exports.modules = {

/***/ 9022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Common/StatementSplitter.jsx
var StatementSplitter = __webpack_require__(6660);
;// CONCATENATED MODULE: ./src/data/InnerPages/About/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"image":"assets/imgs/serv-icons/0.png","title":"Transparence & Excellence","text":"Nous avons choisi les meilleurs pour vous délivrer un travail de qualité, en vous guidant et en vous assurant un suivi transparent."},{"id":2,"image":"assets/imgs/serv-icons/1.png","title":"Diversité & Inclusivité","text":"Nous accueillons toutes les personnes, tant que vous êtes capable de garder vos opinions politiques ou personnelles en dehors du cadre professionnel."},{"id":3,"image":"assets/imgs/serv-icons/2.png","title":"Loyauté & Exclusivité","text":"Nous ne travaillons pas avec deux entreprises concurrentes simultanément. Nos partenariats sont exclusifs par secteur d\'activité pour assurer un écosystème solide."}]');
;// CONCATENATED MODULE: ./src/components/InnerPages/About/Services.jsx


//= Components

//= Data

function Services({ lightMode  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "serv-box section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "position-re",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "fz-60 fw-700",
                                        children: "Nos valeurs"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 d-flex align-items-center"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    height: "28rem"
                                },
                                className: "serv-item md-mb50 radius-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "icon-img-60 mb-40",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `/${lightMode ? "light" : "dark"}/${item.image}`,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "mb-30 pb-30 bord-thin-bottom",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(StatementSplitter/* default */.Z, {
                                            statement: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: item.text
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
}
/* harmony default export */ const About_Services = (Services);


/***/ }),

/***/ 6294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Header({ data , subBg  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `page-header section-padding pb-0 ${subBg ? "sub-bg" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mt-80",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "caption",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "sub-title",
                                        children: data.subTitle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "fz-55",
                                        children: data.title
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text mt-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Notre \xe9quipe, issue des meilleures \xe9coles d’ing\xe9nieurs, fusionne ses comp\xe9tences vari\xe9es en informatique et divers autres secteurs pour fa\xe7onner des solutions sur mesure, r\xe9pondant avec pr\xe9cision \xe0 vos d\xe9fis et aspirations."
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main-marq xlrg section-padding pb-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "slide-har st1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box",
                            children: new Array(5).fill().map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: data.text
                                    })
                                }, i))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box",
                            children: new Array(5).fill().map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: data.text
                                    })
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;