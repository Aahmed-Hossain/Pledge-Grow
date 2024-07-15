"use strict";
exports.id = 1572;
exports.ids = [1572];
exports.modules = {

/***/ 3821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LinesTwo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "lines two-out"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinesTwo);


/***/ }),

/***/ 8664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _data_DigitalAgency_approach_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
swiper_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//= Modules

//= Data

const swiperOptions = {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
};
function Approach() {
    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoadSwiper(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "approach-carso section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-6 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "dot-titl-non mb-15",
                                    children: "Approach"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Our Approach."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper4",
                    children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        ...swiperOptions,
                        id: "content-carousel-container-unq-approch",
                        className: "swiper-container d-flex justify-content-center",
                        children: _data_DigitalAgency_approach_json__WEBPACK_IMPORTED_MODULE_4__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "fz-60 stroke num-font mt-30",
                                            children: item.number
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "fz-14 mt-30",
                                            children: item.text
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/dark/page-about",
                                            className: "mt-15",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                                        fill: "currentColor"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Approach);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_ModalVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6036);
/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8366);


//= Components

//= Scripts

function Block({ lightMode  }) {
    const [isVideoOpen, setIsVideoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    }, []);
    function openVideo(event) {
        event.preventDefault();
        setIsVideoOpen(true);
    }
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "block-img sub-bg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container section-padding position-re",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "half-img-left bg-img md-hide",
                        "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/sass-img/a1.svg`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-around",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "cont",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "vid-circle main-bg mb-40",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://youtu.be/AzwC6umvd1s",
                                            className: "vid",
                                            onClick: openVideo,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "default",
                                                    width: "13",
                                                    height: "20",
                                                    viewBox: "0 0 13 20",
                                                    fill: "currentColor",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M0 20L13 10L0 0V20Z"
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "We grow brands through bold & strategic creative"
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
                                                                children: "Website & Mobile App Design"
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
                                                            children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item mb-15 active wow fadeInUp",
                                                "data-wow-delay": ".3s",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "title",
                                                        onClick: openAccordion,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "fz-18",
                                                                children: "Motion Graphics & Animation"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "ico"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "accordion-info active",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "fz-14",
                                                            children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
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
                                                                children: "User Experience"
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
                                                            children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shap1 opacity-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `/${lightMode ? "light" : "dark"}/assets/imgs/sass-img/shap1.png`,
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shap2 opacity-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `/${lightMode ? "light" : "dark"}/assets/imgs/sass-img/shap2.png`,
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_ModalVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                videoId: "AzwC6umvd1s",
                channel: "youtube",
                isOpen: isVideoOpen,
                onClose: ()=>setIsVideoOpen(false),
                autoplay: true
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);


/***/ }),

/***/ 211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_DigitalAgency_blog_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4887);



//= Data

function Blog() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog-list-half section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "dot-titl-non mb-15",
                                        children: "Our Blog"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Latest News."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6 d-flex align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "full-width d-flex justify-content-end justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "vew-all",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/dark/blog-list",
                                            children: [
                                                "View All Our News",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 18 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: _data_DigitalAgency_blog_json__WEBPACK_IMPORTED_MODULE_3__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item md-mb50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-6 col-md-5 img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-6 col-md-7 sub-bg cont valign",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "full-width",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "date fz-12 ls1 text-u opacity-7 mb-15",
                                                        children: item.date
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/dark/blog-details",
                                                            children: item.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "tags mt-15",
                                                        children: item.tags.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/dark/blog-list",
                                                                className: "me-1",
                                                                children: tag
                                                            }, tag))
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }, item.id))
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);


/***/ }),

/***/ 7119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_DigitalAgency_clients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//= Modules

//= Data

const swiperOptions = {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 40,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 5
        }
    }
};
function Clients({ lightMode  }) {
    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoadSwiper(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "clients-carso section-padding pt-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center mb-80",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                className: "fz-14 fw-400",
                                children: [
                                    "More than ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "fw-600",
                                        children: "200+ companies"
                                    }),
                                    " trusted us worldwide"
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "content-carousel-container-unq-clients",
                        className: "swiper-container",
                        "data-swiper": "container",
                        children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            ...swiperOptions,
                            className: "swiper-container",
                            id: "content-carousel-container-unq-clients",
                            children: _data_DigitalAgency_clients_json__WEBPACK_IMPORTED_MODULE_3__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "img icon-img-100",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `${lightMode ? "/light" : "/dark"}/${item}`,
                                                alt: ""
                                            })
                                        })
                                    })
                                }, item))
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8366);
// import React, { useEffect } from 'react';
// import Link from 'next/link';
// //= Scripts
// import loadBackgroudImages from '@/common/loadBackgroudImages';
// function Header({ lightMode }) {
//   useEffect(() => {
//     loadBackgroudImages();
//   }, []);
//   return (
//     <header className="header-digital full-height valign bord-thin-bottom">
//       <div className="container ontop">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="caption">
//               <h1>Better design for your digital products.</h1>
//               <div className="text mt-30">
//                 <p>We are a creative studio specializing in UI/UX design, <br /> development and strategy.</p>
//               </div>
//               <Link href="/dark/page-services" className="butn butn-md butn-bg main-colorbg2 text-dark radius-30 mt-30">
//                 <span>Explore More</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="half-img-right bg-img ontop md-hide" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/header1.png`}></div>
//       <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
//     </header>
//   )
// }
// export default Header;


//= Scripts

function Header({ lightMode  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "header-creative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container ontop",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-center full-height",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-3 d-flex align-items-end",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "img md-hide",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img-assets1 parallax",
                                        "data-speed": "-0.01",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/dark/assets/imgs/svg-assets/claw.svg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/dark/assets/imgs/header/c1.jpg",
                                        alt: "",
                                        "data-speed": "0.01",
                                        className: "parallax"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "caption text-center full-width md-mb50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-30",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            className: "svg-animation star",
                                            width: "100",
                                            height: "100",
                                            viewBox: "0 0 100 100",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            preserveAspectRatio: "none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    y1: "50",
                                                    x2: "100",
                                                    y2: "50",
                                                    vectorEffect: "non-scaling-stroke",
                                                    stroke: "currentColor",
                                                    style: {
                                                        "--index": 1,
                                                        "--transform": "30deg"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    y1: "50",
                                                    x2: "100",
                                                    y2: "50",
                                                    vectorEffect: "non-scaling-stroke",
                                                    stroke: "currentColor",
                                                    style: {
                                                        "--index": 2,
                                                        "--transform": "60deg"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    y1: "50",
                                                    x2: "100",
                                                    y2: "50",
                                                    vectorEffect: "non-scaling-stroke",
                                                    stroke: "currentColor",
                                                    style: {
                                                        "--index": 3,
                                                        "--transform": "90deg"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    y1: "50",
                                                    x2: "100",
                                                    y2: "50",
                                                    vectorEffect: "non-scaling-stroke",
                                                    stroke: "currentColor",
                                                    style: {
                                                        "--index": 4,
                                                        "--transform": "120deg"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    y1: "50",
                                                    x2: "100",
                                                    y2: "50",
                                                    vectorEffect: "non-scaling-stroke",
                                                    stroke: "currentColor",
                                                    style: {
                                                        "--index": 5,
                                                        "--transform": "150deg"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    y1: "50",
                                                    x2: "100",
                                                    y2: "50",
                                                    vectorEffect: "non-scaling-stroke",
                                                    stroke: "currentColor",
                                                    style: {
                                                        "--index": 6,
                                                        "--transform": "180deg"
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "fw-300 mb-15",
                                        children: "Pledge and Grow"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "fw-600 d-rotate wow",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "rotate-text",
                                                children: "D\xe9veloppement de"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "rotate-text",
                                                children: "Logiciels Personnalis\xe9s"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "img parallax",
                                    "data-speed": "0.01",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/dark/assets/imgs/header/c2.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-30 md-hide",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center hover-this",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "circle-button hover-anim",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rotate-circle fz-30 text-u",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        className: "textcircle",
                                                        viewBox: "0 0 500 500",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    id: "textcircle1",
                                                                    d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                                                    xlinkHref: "#textcircle1",
                                                                    textLength: "900",
                                                                    children: "Pledge - And - Grow -"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "in-circle text-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        children: [
                                                            "A ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "fw-300 fz-30",
                                                                children: "+"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-pattern bg-img",
                "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/patterns/graph.png`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _data_DigitalAgency_portfolio_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//= Modules


//= Data

const swiperOptions = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
        swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
        swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
    ],
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 40,
    speed: 1000,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1024: {
            slidesPerView: 3
        }
    },
    pagination: {
        el: ".work-carsouel .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".work-carsouel .swiper-button-next",
        prevEl: ".work-carsouel .swiper-button-prev"
    }
};
function Portfolio() {
    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoadSwiper(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "work-carsouel section-padding position-re o-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "dot-titl-non mb-15",
                                        children: "Portfolio"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Recent Projects."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6 d-flex align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "full-width",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-end justify-end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "swiper-controls arrow-out d-flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-button-prev",
                                                    tabIndex: "0",
                                                    role: "button",
                                                    "aria-label": "Previous slide",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "left",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-button-next ml-50",
                                                    tabIndex: "0",
                                                    role: "button",
                                                    "aria-label": "Next slide",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "right",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid rest",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "work-crus work-crus3 out",
                            children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                id: "content-carousel-container-unq-w",
                                className: "swiper-container",
                                ...swiperOptions,
                                children: _data_DigitalAgency_portfolio_json__WEBPACK_IMPORTED_MODULE_5__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `/dark/${item.image}`,
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cont",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mb-5",
                                                                children: item.type
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "fz-18",
                                                                children: item.title
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/dark/project-details2",
                                                        className: "plink"
                                                    })
                                                ]
                                            })
                                        })
                                    }, item.id))
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Price() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "price-hr",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container section-padding pt-20 bord-thin-bottom",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "cont full-width md-mb50",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "sub-title mb-15",
                                        children: "Over 150.000+ Clients"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        children: [
                                            "Affordable pricing.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " Easy scaling."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text mt-30 pt-30 bord-thin-top",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Things go wrong have questions. We’ve understand. So we have people"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "rest list-arrow mt-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "100%",
                                                            height: "100%",
                                                            viewBox: "0 0 9 8",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "inline fz-18",
                                                        children: "Amazing communication."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "mt-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "100%",
                                                            height: "100%",
                                                            viewBox: "0 0 9 8",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "inline fz-18",
                                                        children: "Best trendinf designing experience."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "mt-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "100%",
                                                            height: "100%",
                                                            viewBox: "0 0 9 8",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "inline fz-18",
                                                        children: "Email & Live chat."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "full-width",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item sub-bg radius-10 d-flex mb-30",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "type",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "fw-600",
                                                    children: "Advanced"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "fz-14",
                                                    children: "14 days free"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cont ml-30",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dot-list rest",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-10",
                                                        children: "Guarenteed quality control"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-10",
                                                        children: "Top quality service"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Best experts at your lease"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mount ml-auto text-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fz-20",
                                                            children: "$"
                                                        }),
                                                        " 19"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/dark/page-contact",
                                                        className: "butn butn-md butn-bord radius-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fz-13",
                                                            children: "Sign Up"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item main-colorbg2 radius-10 text-dark d-flex",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "type",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "fw-600",
                                                    children: "Enterprise"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "fz-14",
                                                    children: "7 days free"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cont ml-30",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dot-list rest",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-10",
                                                        children: "Guarenteed quality control"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-10",
                                                        children: "Top quality service"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Best experts at your lease"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mount ml-auto text-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fz-20",
                                                            children: "$"
                                                        }),
                                                        " 49"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/dark/page-contact",
                                                        className: "butn butn-md butn-bord text-dark radius-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fz-13",
                                                            children: "Sign Up"
                                                        })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);


/***/ }),

/***/ 8966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DigitalAgency_Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Common/StatementSplitter.jsx
var StatementSplitter = __webpack_require__(6660);
;// CONCATENATED MODULE: ./src/data/DigitalAgency/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/imgs/serv-icons/0.png","title":"Analyse des Besoins et Planification","text":"Nous commençons chaque projet par une analyse approfondie de vos besoins spécifiques. Cette étape de planification nous permet de concevoir des solutions logicielles parfaitement alignées avec vos objectifs stratégiques et opérationnels."},{"id":2,"image":"/assets/imgs/serv-icons/1.png","title":"Conception et Développement","text":"Notre équipe de développeurs crée des logiciels personnalisés en utilisant les technologies les plus récentes. Nous nous assurons que chaque solution est robuste, sécurisée et évolutive pour répondre aux exigences changeantes de votre entreprise."},{"id":3,"image":"/assets/imgs/serv-icons/2.png","title":"Tests et Assurance Qualité","text":"Nous effectuons des tests rigoureux pour garantir que votre logiciel fonctionne parfaitement avant son déploiement. Notre processus d\'assurance qualité inclut des tests fonctionnels, des tests de performance et des tests de sécurité pour assurer une expérience utilisateur sans faille."},{"id":4,"image":"/assets/imgs/serv-icons/0.png","title":"Sécurité et Conformité ","text":"La sécurité est une priorité dans toutes nos solutions SaaS. Nous implémentons des mesures de sécurité robustes pour protéger vos données et garantir la conformité avec les réglementations telles que le RGPD. Nos services incluent la surveillance en temps réel et la gestion des incidents de sécurité."},{"id":5,"image":"/assets/imgs/serv-icons/0.png","title":"Intégration et Déploiement","text":"Nous intégrons le logiciel avec vos systèmes existants et gérons le déploiement pour assurer une transition fluide. Nos experts veillent à ce que le logiciel soit bien configuré et opérationnel, minimisant ainsi les interruptions de service."}]');
;// CONCATENATED MODULE: ./src/components/DigitalAgency/Services.jsx
// import React from 'react';
// import Link from 'next/link';
// //= Components
// import StatementSplitter from '../Common/StatementSplitter';
// //= Data
// import data from '@/data/DigitalAgency/services.json';
// function Services({ lightMode }) {
//   return (
//     <section className="services section-padding">
//       <div className="container">
//         <div className="sec-lg-head mb-80">
//           <div className="row">
//             <div className="col-lg-6">
//               <h6 className="dot-titl-non mb-15">Features</h6>
//               <h3 className="d-slideup wow">
//                 <span className="sideup-text">
//                   <span className="up-text">We help you to go online &</span>
//                 </span>
//                 <span className="sideup-text">
//                   <span className="up-text">increase your conversion rate.</span>
//                 </span>
//               </h3>
//             </div>
//             <div className="col-lg-6 d-flex align-items-center">
//               <div className="full-width d-flex justify-content-end justify-end">
//                 <div className="vew-all">
//                   <Link href="/dark/page-services">View All Services
//                     <span>
//                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
//                           fill="currentColor"></path>
//                       </svg>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {
//             data.map((item, index) => (
//               <div className="col-lg-4" key={item.id}>
//                 <div className={`item-bord2 radius-10 wow fadeIn ${index !== data.length - 1 ? 'md-mb50' : ''}`} data-wow-delay=".5s">
//                   <div className="icon-img-60 mb-40">
//                     <img src={`${lightMode ? '/light/' : '/dark/'}${item.image}`} alt="" />
//                   </div>
//                   <h6 className="mb-30"><StatementSplitter statement={item.title} /></h6>
//                   <ul className="check-list rest opacity-8">
//                     {
//                       item.features.map((feature, idx) => (
//                         <li className="mb-10" key={idx}>
//                           <span className="fz-12 mr-5"><i className="fas fa-check"></i></span> {feature}
//                         </li>
//                       ))
//                     }
//                   </ul>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Services;



//= Components

//= Data

function Services({ lightMode  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "serv-box section-padding",
        "data-scroll-index": "1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "position-re",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "fz-50",
                                        children: "Logiciel Caract\xe9ristiques"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-5 d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "full-width d-flex justify-content-end justify-end",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "vew-all",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/dark/page-services",
                                            children: [
                                                "View All Services",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 18 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center"
                    },
                    className: "row",
                    children: services_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    height: "21.5rem"
                                },
                                className: `serv-item d-flex ${index !== services_namespaceObject.length - 1 ? "mb-30" : ""} radius-10`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `/${lightMode ? "light" : "dark"}/${item.image}`,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "ml-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "mb-15",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(StatementSplitter/* default */.Z, {
                                                    statement: item.title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: item.text
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
}
/* harmony default export */ const DigitalAgency_Services = (Services);


/***/ }),

/***/ 4887:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Free advertising for your online business.","image":"/dark/assets/imgs/sass-img/blog/1.jpg","date":"August 6, 2022","tags":["Marketing","Design"]},{"id":2,"title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/sass-img/blog/2.jpg","date":"August 6, 2022","tags":["Marketing","Design"]}]');

/***/ }),

/***/ 4185:
/***/ ((module) => {

module.exports = JSON.parse('["assets/imgs/brands/Beauty 2.png","assets/imgs/brands/Car Share.png","assets/imgs/brands/Clean a sofa.png","assets/imgs/brands/Connect&Drive.png","assets/imgs/brands/ERB - BTP.png","assets/imgs/brands/Qube Masters.png","assets/imgs/brands/SPG.png","assets/imgs/brands/Vocal Results.png"]');

/***/ }),

/***/ 1966:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"assets/imgs/sass-img/work/1.jpg","type":"Branding","title":"Artboard Studio"},{"id":2,"image":"assets/imgs/sass-img/work/2.jpg","type":"Branding","title":"Artboard Studio"},{"id":3,"image":"assets/imgs/sass-img/work/3.jpg","type":"Branding","title":"Artboard Studio"},{"id":4,"image":"assets/imgs/sass-img/work/4.jpg","type":"Branding","title":"Artboard Studio"},{"id":5,"image":"assets/imgs/sass-img/work/5.jpg","type":"Branding","title":"Artboard Studio"}]');

/***/ })

};
;