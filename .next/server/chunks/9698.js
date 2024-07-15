"use strict";
exports.id = 9698;
exports.ids = [9698];
exports.modules = {

/***/ 7683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-html-link-for-pages */ 


function MainNavbar({ lightMode , mainBg , subBg , noStatic , curve  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    function handleScroll() {
        const bodyScroll = window.scrollY;
        const navbar = document.querySelector(".navbar");
        if (bodyScroll > 300) navbar.classList.add("nav-scroll");
        else navbar.classList.remove("nav-scroll");
    }
    function handleDropdownMouseMove(event) {
        event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
    }
    function handleDropdownMouseLeave(event) {
        event.currentTarget.querySelector(".dropdown-menu").classList.remove("show");
    }
    function handleDropdownSideMouseMove(event) {
        event.currentTarget.querySelector(".dropdown-side").classList.add("show");
    }
    function handleDropdownSideMouseLeave(event) {
        event.currentTarget.querySelector(".dropdown-side").classList.remove("show");
    }
    function toggleNavbar() {
        document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
    }
    // function toggleSearch() {
    //   let form = document.querySelector(".navbar .search-form");
    //   let closeBtn = document.querySelector(".search-form .close-search");
    //   form.classList.toggle("open");
    //   if (form.classList.contains('open')) closeBtn.style.display = 'block';
    //   else closeBtn.style.display = 'none';
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${noStatic ? "" : "static"} ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "logo icon-img-100",
                    href: "/",
                    children: lightMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/dark/assets/imgs/logo-light.jpg",
                        alt: "logo"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/dark/assets/imgs/logo-dark.png",
                        alt: "logo"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    onClick: toggleNavbar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "collapse navbar-collapse justify-content-center",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "navbar-nav",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "nav-item dropdown",
                                onMouseMove: handleDropdownMouseMove,
                                onMouseLeave: handleDropdownMouseLeave,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        href: "/",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rolling-text",
                                            children: "Prestation et Integration"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "dropdown-menu mega-menu",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "container",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "clumn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "sub-title ls1",
                                                                        children: "Nos prestation"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "links",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/home-corporate",
                                                                            children: "Site Web "
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/home-creative-agency",
                                                                            children: "SAAS "
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/home-digital-agency",
                                                                            children: "Logiciels"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/home-freelancer",
                                                                            children: "Application Mobile"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "clumn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "sub-title ls1",
                                                                        children: "Int\xe9grations "
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "links",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/light/home-main",
                                                                            children: "E-commerce"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/light/home-corporate",
                                                                            children: "IA / Machine Learning"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/light/home-onepage",
                                                                            children: "Blockchain"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "clumn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "sub-title ls1",
                                                                        children: "Compl\xe9mentaires "
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "links",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/showcase-parallax-slider",
                                                                            children: "UX / IX Design"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/showcase-frame-slider",
                                                                            children: "R\xe9f\xe9rencement"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/showcase-circle-slider",
                                                                            children: "Cybers\xe9curit\xe9"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "dropdown-item",
                                                                            href: "/dark/showcase-carousel",
                                                                            children: "Maintenance"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "nav-item dropdown",
                                onMouseMove: handleDropdownMouseMove,
                                onMouseLeave: handleDropdownMouseLeave,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        href: "#",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rolling-text",
                                            children: "P&G"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "dropdown-item",
                                                href: `/${lightMode ? "light" : "dark"}/page-about`,
                                                children: "\xc0 propos de nous"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "dropdown-item",
                                                href: `/${lightMode ? "light" : "dark"}/page-services`,
                                                children: "R\xe9alisation"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "dropdown-item",
                                                href: `/${lightMode ? "light" : "dark"}/page-team`,
                                                children: "Blog"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "dropdown-item",
                                                href: `/${lightMode ? "light" : "dark"}/home-architecture`,
                                                children: "Partenariats"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "nav-item dropdown",
                                onMouseMove: handleDropdownMouseMove,
                                onMouseLeave: handleDropdownMouseLeave,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        href: "#",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rolling-text",
                                            children: "Domaines d’expertise"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "dropdown-item",
                                                    href: `/${lightMode ? "light" : "dark"}/portfolio-metro`,
                                                    children: "Site Web"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "dropdown-item",
                                                    href: `/${lightMode ? "light" : "dark"}/portfolio-modern`,
                                                    children: "R\xe9f\xe9rencemen"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "dropdown-item",
                                                    href: `/${lightMode ? "light" : "dark"}/project-details1`,
                                                    children: "Application"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "dropdown-item",
                                                    href: `/${lightMode ? "light" : "dark"}/project-details2`,
                                                    children: "Automatisation"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "nav-link",
                                    href: `/${lightMode ? "light" : "dark"}/page-contact`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "rolling-text",
                                        children: "Contact"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "butn butn-md butn-bord radius-30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text",
                        children: "CTA"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNavbar);


/***/ }),

/***/ 7283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_correctStylesheetsOrder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8104);
/* harmony import */ var _components_Common_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6054);
/* harmony import */ var _components_Common_ProgressScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4555);


//= Packages

//= Scripts

//= Components


const DefaultLayout = ({ children , lightMode  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_correctStylesheetsOrder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
            lightMode
        });
    }, [
        lightMode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_Cursor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_ProgressScroll__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultLayout);


/***/ })

};
;