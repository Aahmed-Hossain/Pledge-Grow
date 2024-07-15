"use strict";
exports.id = 8870;
exports.ids = [8870];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loadBackgroudImages)
/* harmony export */ });
function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            let image = element.dataset.background;
            element.style.backgroundImage = `url('${image}')`;
        });
    }
}


/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function About({ lightMode  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "about-intro section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mb-80",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sec-lg-head md-mb30",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "dot-titl-non mb-15 wow fadeIn fz-18",
                                        children: "NOS AVANTAGES"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "d-rotate wow",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rotate-text",
                                            children: "Une \xe9quipe d’experts d\xe9di\xe9s aux technologies num\xe9riques."
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-2 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "d-slideup wow",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "Pledge & Grow est une agence de digitalisation de projet informatique bas\xe9e \xe0 Paris."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "Nous offrons la possibilit\xe9 d’int\xe9grer des innovantes telles que l'IA dans vos application web ou mobile, tout en offrant un accompagnement personnalis\xe9."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "Rejoignez-nous pour transformer votre entreprise et r\xe9ussir dans le monde num\xe9rique."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "vew-all mt-50 ml-30 wow fadeIn",
                                        "data-wow-delay": ".8s",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/dark/blog-classic",
                                            children: [
                                                "Consultez toutes nos actualit\xe9s",
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
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 rest",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "imgs md-mb50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "o-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "imago wow",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: `/${lightMode ? "light" : "dark"}/assets/imgs/about/01.jpg`,
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "o-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "imago wow",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: `/${lightMode ? "light" : "dark"}/assets/imgs/about/1.jpg`,
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 valign rest",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "cont",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "d-rotate wow",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rotate-text",
                                            children: "Lib\xe9rez votre potentiel."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "feat mt-80",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item-flex d-flex align-items-center mb-30 wow fadeInUp",
                                                "data-wow-delay": ".4s",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon-img-50",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont ml-30 mt-10 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Entrepeneur, Start-up et PME"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item-flex d-flex align-items-center wow fadeInUp",
                                                "data-wow-delay": ".8s",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon-img-50",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/serv-icons/2.png`,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont ml-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Solutions Personnalis\xe9es"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item-flex d-flex align-items-center wow fadeInUp mt-20",
                                                "data-wow-delay": ".8s",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon-img-50",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont ml-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "\xc9conomie de co\xfbts et de temps"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item-flex d-flex align-items-center wow fadeInUp mt-20",
                                                "data-wow-delay": ".8s",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon-img-50",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/serv-icons/1.png`,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont ml-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "D\xe9lais Courts "
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
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 689:
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
// import React from 'react';
// import Link from 'next/link';
// //= Data
// import data from '@/data/HomeMain/blog.json';
// function Blog() {
//   return (
//     <section className="blog-list-half crev section-padding">
//       <div className="container">
//         <div className="sec-lg-head mb-80">
//           <div className="row">
//             <div className="col-lg-6">
//               <h6 className="dot-titl-non mb-15 wow fadeIn">Our Blog</h6>
//               <h2 className="d-rotate wow">
//                 <span className="rotate-text">Latest News.</span>
//               </h2>
//             </div>
//             <div className="col-lg-6 d-flex align-items-center">
//               <div className="full-width d-flex justify-content-end justify-end">
//                 <div className="vew-all">
//                   <Link href="/dark/blog-list">View All Our News
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
//         <div className="row wow fadeIn" data-wow-delay=".4s">
//           {
//             data.map(item => (
//               <div className="col-lg-6" key={item.id}>
//                 <div className="item md-mb80">
//                   <div className="row rest">
//                     <div className="col-md-6">
//                       <div className="img">
//                         <img src={item.image} alt="" />
//                       </div>
//                     </div>
//                     <div className="col-md-6 valign">
//                       <div className="cont">
//                         <span className="date fz-12 ls1 text-u opacity-7 mb-15">{item.date}</span>
//                         <h5>
//                           <Link href="/dark/blog-details">{item.title}</Link>
//                         </h5>
//                         <div className="tags colorbg mt-15">
//                           {
//                             item.tags.map((tag, i) => (
//                               <Link href="/dark/blog-half-img" className="me-1" key={i}>{tag}</Link>
//                             ))
//                           }
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Blog



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

/***/ 9186:
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
// import React, { useState, useEffect } from 'react';
// //= Modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// //= Data
// import data from '@/data/HomeMain/clients.json';
// const swiperOptions = {
//   slidesPerView: 5,
//   loop: true,
//   spaceBetween: 40,
//   breakpoints: {
//     0: {
//       slidesPerView: 2,
//     },
//     640: {
//       slidesPerView: 3,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 5,
//     },
//   }
// }
// function Clients({ lightMode }) {
//   const [loadSwiper, setLoadSwiper] = useState(false);
//   useEffect(() => {
//     setLoadSwiper(true);
//   }, []);
//   return (
//     <div className="clients-carso2">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-11">
//             <div className="swiper5">
//               {
//                 loadSwiper &&
//                 <Swiper {...swiperOptions} id="content-carousel-container-unq-clients" className="swiper-container">
//                   {
//                     data.map((item, index) => (
//                       <SwiperSlide key={index}>
//                         <div className="item">
//                           <div className="img icon-img-100">
//                             <a href="#0">
//                               <img src={`/${lightMode ? 'light' : 'dark'}/${item}`} alt="" />
//                             </a>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     ))
//                   }
//                 </Swiper>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Clients;


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
                            className: "text-center mb-80"
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
                                            className: "img icon-img-200",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    filter: `grayscale(${lightMode ? "0" : "0"})`
                                                },
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

/***/ 8280:
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
/* harmony import */ var _modal_BannerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6808);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_BannerModal__WEBPACK_IMPORTED_MODULE_3__]);
_modal_BannerModal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//= Components
// import ModalVideo from '@/components/Common/ModalVideo';
//= Scripts
// import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode  }) {
    // const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = ()=>{
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
    };
    // useEffect(() => {
    //   loadBackgroudImages();
    // }, []);
    // function openVideo(event) {
    //   event.preventDefault();
    //   setIsVideoOpen(true);
    // }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "crev-header",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mt-80",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-9",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "caption",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        children: [
                                            "Vous \xeates ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "stroke",
                                                children: "entrepreneur "
                                            }),
                                            " ?"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row mt-30",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-lg-5 offset-lg-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontWeight: 600,
                                                        fontSize: "1rem"
                                                    },
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Pledge & Grow : Experts en digitalisation de projets informatiques."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "crv-butn-vid mt-30",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "vid",
                                                        onClick: openModal,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text",
                                                                children: "Besoin d'aide?"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#5ee51e"
                                                                },
                                                                className: "icon main-colorbg4",
                                                                children: " →"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_BannerModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    closeModal: closeModal
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md-hide",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/dark/page-about",
                                    className: "hover-this",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "circle-button in-bord hover-anim",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rotate-circle fz-30 text-u",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: "textcircle",
                                                    viewBox: "0 0 500 500",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                id: "textcircle",
                                                                d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                                                xlinkHref: "#textcircle",
                                                                textLength: "900",
                                                                children: "Explore More - Explore More -"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "arrow",
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
                className: "main-img",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/dark/assets/imgs/background/14.jpg",
                    alt: ""
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Marq() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "marquee",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid rest",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "main-marq",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "slide-har st1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "box non-strok",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Site Web"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "fz-50 ml-50 stroke icon",
                                                    children: "*"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "R\xe9f\xe9rencement (SEO)"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "fz-50 ml-50 stroke icon",
                                                    children: "*"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Application"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "fz-50 ml-50 stroke icon",
                                                    children: "*"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Automatisation"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "fz-50 ml-50 stroke icon",
                                                    children: "*"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marq);


/***/ }),

/***/ 4556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HomeMain_Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/HomeMain/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"image":"assets/imgs/serv-icons/0.png","type":"Product Design","title":"Digital Product Design","text":"Creating a higher spacing and how people move through a unique."},{"id":2,"image":"assets/imgs/serv-icons/1.png","type":"Customs Services","title":"Branding & Design","text":"Creating a higher spacing and how people move through a unique."},{"id":3,"image":"assets/imgs/serv-icons/2.png","type":"Product Development","title":"Web Development","text":"Creating a higher spacing and how people move through a unique."}]');
;// CONCATENATED MODULE: ./src/components/HomeMain/Services.jsx



//= Data

function Services({ lightMode  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "serv-box section-padding pb-0",
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
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "position-re",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                            className: "dot-titl-non mb-15 wow fadeIn",
                                            children: "Featured Services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "d-rotate wow",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "rotate-text",
                                                children: "Our Services"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text wow fadeIn",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia."
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "serv-item lg-pad md-mb50 radius-5 wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "icon-img-50 mb-40",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `/${lightMode ? "light" : "dark"}/${item.image}`,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "mb-10 opacity-7",
                                        children: item.type
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mb-15",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "fz-14",
                                        children: item.text
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "crv-more",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/dark/page-services",
                                            className: "mt-30 ls1 fz-12 text-u",
                                            children: [
                                                "Read More",
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
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
                                            ]
                                        })
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
}
/* harmony default export */ const HomeMain_Services = (Services);


/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_DigitalAgency_testimonials_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7770);
// import React, { useState, useEffect } from 'react';
// //= Modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
// //= Componets
// import Numbers from './Numbers';
// const swiperOptions = {
//   modules: [Navigation, Pagination],
//   slidesPerView: 1,
//   loop: true,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.testim-controls .swiper-button-next',
//     prevEl: '.testim-controls .swiper-button-prev'
//   }
// }
// function Testimonials({ lightMode }) {
//   const [loadSwiper, setLoadSwiper] = useState(false);
//   useEffect(() => {
//     setLoadSwiper(true);
//   }, []);
//   return (
//     <section className={`testim-crv2 section-padding sub-bg ${lightMode ? 'light' : ''}`}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="sec-lg-head mb-80">
//               <div className="position-re text-center">
//                 <h6 className="dot-titl-non mb-15 wow fadeIn">Testimonials</h6>
//                 <h2 className="d-rotate wow">
//                   <span className="rotate-text">What People Says?</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5 position-re wow fadeInUp" data-wow-delay=".4s">
//             <div className="bord-qoute d-flex align-items-center justify-content-center">
//               <div className="qoute-icon main-bg">
//                 <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/quote.png`} alt="" />
//               </div>
//             </div>
//             <div className="img-qoute">
//               <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/about/sq1.jpg`} alt="" />
//             </div>
//           </div>
//           <div className="col-lg-7 wow fadeInUp" data-wow-delay=".4s">
//             <div className="testim-swiper">
//               {
//                 loadSwiper &&
//                 <Swiper {...swiperOptions} id="content-carousel-container-unq-testim" className="swiper-container">
//                   <SwiperSlide>
//                     <div className="item">
//                       <div className="cont mb-40">
//                         <div className="rate-stars mb-20 fz-16">
//                           <span className="rate main-color4">
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                           </span>
//                         </div>
//                         <h5 className="fw-400">I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.</h5>
//                       </div>
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="img circle-60">
//                             <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/testim/1.jpg`} alt="" className="circle-img" />
//                           </div>
//                         </div>
//                         <div className="ml-30">
//                           <div className="info">
//                             <h6 className="fz-16">Leonard Heiser</h6>
//                             <span className="opacity-7 sub-title">Ceo</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div className="item">
//                       <div className="cont mb-40">
//                         <div className="rate-stars mb-20 fz-16">
//                           <span className="rate main-color4">
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                           </span>
//                         </div>
//                         <h5 className="fw-400">I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.</h5>
//                       </div>
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="img circle-60">
//                             <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/testim/2.jpg`} alt="" className="circle-img" />
//                           </div>
//                         </div>
//                         <div className="ml-30">
//                           <div className="info">
//                             <h6 className="fz-16">Leonard Heiser</h6>
//                             <span className="opacity-7 sub-title">Ceo</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 </Swiper>
//               }
//             </div>
//             <div className="d-flex">
//               <div className="swiper-controls testim-controls arrow-out d-flex ml-auto">
//                 <div className="swiper-button-prev">
//                   <span className="left">
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
//                         fill="currentColor"></path>
//                     </svg>
//                   </span>
//                 </div>
//                 <div className="swiper-button-next ml-50">
//                   <span className="right">
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
//                         fill="currentColor"></path>
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Numbers />
//       </div>
//     </section>
//   )
// }
// export default Testimonials;


//= Data

function Testimonials({ mainColor  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "testim-vrt sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "cont",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Continuez \xe0 avancer. Nous vous soutenons."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text mt-10 pb-30 bord-thin-bottom",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Les choses tournent mal, posez des questions. Nous avons compris. Nous avons donc des gens."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "stauts d-flex mt-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item d-flex align-items-center mt-30",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "mr-5",
                                                        children: "20+"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Clients"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item d-flex align-items-center ml-30 mr-30 mt-30",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "mr-5",
                                                        children: "29+"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "fz-14",
                                                        children: [
                                                            "Projets",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            " accomplis"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item d-flex align-items-center ml-auto mt-30",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "mr-5",
                                                        children: "8+"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Membres"
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
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "main-marqv",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "slide-vertical st1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "box",
                                            children: _data_DigitalAgency_testimonials_json__WEBPACK_IMPORTED_MODULE_2__.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item radius-30 mt-30",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cont mb-40",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "rate-stars mb-30 fz-12",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: `rate ${mainColor ? "main-color" : "main-color2"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "fw-400",
                                                                    children: item.content
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "img circle-80",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: `/dark/${item.image}`,
                                                                            alt: "",
                                                                            className: "circle-img"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "ml-30",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "info",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                children: item.author
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: `${mainColor ? "main-color" : "main-color2"} sub-title`,
                                                                                children: item.position
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, item.id))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "box",
                                            children: _data_DigitalAgency_testimonials_json__WEBPACK_IMPORTED_MODULE_2__.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item radius-30 mt-30",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cont mb-40",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "rate-stars mb-30 fz-12",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "rate ${mainColor ? 'main-color' : 'main-color2'}",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "fw-400",
                                                                    children: item.content
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "img circle-80",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: `/dark/${item.image}`,
                                                                            alt: "",
                                                                            className: "circle-img"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "ml-30",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "info",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                children: item.author
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "${mainColor ? 'main-color' : 'main-color2'} sub-title",
                                                                                children: item.position
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, item.id))
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);


/***/ }),

/***/ 6808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// /* eslint-disable react/prop-types */
// import { Box, TextField } from "@mui/material";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// const BannerModal = ({ closeModal }) => {
//   const [activeContainer, setActiveContainer] = useState(1);
//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();
//   const handleNext = () => {
//     // Check for validation errors before proceeding
//     if (!errors.name && !errors.email && !errors.address && !errors.phone && !errors.quantity && !errors.city) {
//       setActiveContainer(activeContainer + 1);
//     }
//   };
//   const onSubmit = (data) => {
//     console.log(data);
//     closeModal();
//   };
//   return (
//     <div className="modal_container">
//       <div
//         style={{ border: "5px", borderBlockColor: "red" }}
//         className="modal_content"
//       >
//         <p style={{ color: "gray", border: "5px", borderBlockColor: "red" }}>
//           {activeContainer === 1 && <div>Step 1 of 3 </div>}
//           {activeContainer === 2 && <div>Step 2 of 3 </div>}
//           {activeContainer === 3 && <div>Step 3 of 3 </div>}
//         </p>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {activeContainer === 1 && (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 marginTop: "13px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("name", { required: "Type is required" })}
//                   id="outlined-name-input"
//                   label="Name"
//                   type="text"
//                   error={!!errors.name} // Set error prop for visual feedback
//                   helperText={errors.name?.message} // Display error message
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Name is required</span>
//                 )}
//               </Box>
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("email", { required: "Type is required" })}
//                   id="outlined-name-input"
//                   label="Email"
//                   type="email"
//                   error={!!errors.email} // Set error prop for visual feedback
//                   helperText={errors.email?.message} // Display error message
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Email is required</span>
//                 )}
//               </Box>
//             </div>
//           )}
//           {activeContainer === 2 && (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 marginTop: "13px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("address", { required: "Type is required" })}
//                   id="outlined-address-input"
//                   label="Address"
//                   type="text"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Address is required</span>
//                 )}
//               </Box>
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("phone", { required: "Type is required" })}
//                   id="outlined-name-input"
//                   label="Phone"
//                   type="number"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Phone Number is required</span>
//                 )}
//               </Box>
//             </div>
//           )}
//           {activeContainer === 3 && (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 marginTop: "13px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("quantity", { required: "Type is required" })}
//                   id="outlined-quantity-input"
//                   label="Quantity"
//                   type="text"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Quantity is required</span>
//                 )}
//               </Box>
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("city", { required: "Type is required" })}
//                   id="outlined-city-input"
//                   label="City"
//                   type="text"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>City Number is required</span>
//                 )}
//               </Box>
//             </div>
//           )}
//         </form>
//         {/* close next button */}
//         <div className="btn_close_next">
//           {activeContainer === 1 && (
//             <button
//               type="button"
//               style={{ color: "red" }}
//               className="btn"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//           )}
//           {activeContainer !== 1 && (
//             <button
//               style={{ color: "blue" }}
//               onClick={() => setActiveContainer(activeContainer - 1)}
//               className="btn"
//             >
//               Back
//             </button>
//           )}
//           {activeContainer !== 3 && (
//             <button
//               style={{ color: "green" }}
//               onClick={()=>handleNext()}
//               // onClick={() => setActiveContainer(activeContainer + 1)}
//               className="btn"
//             >
//               Next
//             </button>
//           )}
//           {activeContainer === 3 && (
//             <button
//             onClick={handleSubmit(onSubmit)}
//               style={{ color: "yellowgreen" }}
//               className="btn"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BannerModal;
/* eslint-disable react/prop-types */ 



const BannerModal = ({ closeModal  })=>{
    const [activeContainer, setActiveContainer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { register , handleSubmit , trigger , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const onSubmit = (data)=>{
        console.log(data);
        closeModal();
    };
    const handleNext = async ()=>{
        const result = await trigger([
            "name",
            "email",
            "address",
            "phone",
            "quantity",
            "city"
        ].filter((field, index)=>index < activeContainer * 2));
        if (result) {
            setActiveContainer(activeContainer + 1);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal_container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                border: "5px",
                borderBlockColor: "red"
            },
            className: "modal_content",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        color: "gray",
                        border: "5px",
                        borderBlockColor: "red"
                    },
                    children: [
                        activeContainer === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Step 1 of 3 "
                        }),
                        activeContainer === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Step 2 of 3 "
                        }),
                        activeContainer === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Step 3 of 3 "
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        activeContainer === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "20px",
                                marginTop: "13px",
                                marginBottom: "40px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            size: "small",
                                            sx: {
                                                width: "100%",
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black",
                                                    "&.Mui-focused": {
                                                        color: "black"
                                                    }
                                                }
                                            },
                                            ...register("name", {
                                                required: "Name is required"
                                            }),
                                            id: "outlined-name-input",
                                            label: "Name",
                                            type: "text"
                                        }),
                                        errors.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "red"
                                            },
                                            children: errors.name.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            size: "small",
                                            sx: {
                                                width: "100%",
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black",
                                                    "&.Mui-focused": {
                                                        color: "black"
                                                    }
                                                }
                                            },
                                            ...register("email", {
                                                required: "Email is required"
                                            }),
                                            id: "outlined-email-input",
                                            label: "Email",
                                            type: "email"
                                        }),
                                        errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "red"
                                            },
                                            children: errors.email.message
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeContainer === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "8px",
                                marginTop: "13px",
                                marginBottom: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            size: "small",
                                            sx: {
                                                width: "100%",
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black",
                                                    "&.Mui-focused": {
                                                        color: "black"
                                                    }
                                                }
                                            },
                                            ...register("address", {
                                                required: "Address is required"
                                            }),
                                            id: "outlined-address-input",
                                            label: "Address",
                                            type: "text"
                                        }),
                                        errors.address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "red"
                                            },
                                            children: errors.address.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            size: "small",
                                            sx: {
                                                width: "100%",
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black",
                                                    "&.Mui-focused": {
                                                        color: "black"
                                                    }
                                                }
                                            },
                                            ...register("phone", {
                                                required: "Phone Number is required"
                                            }),
                                            id: "outlined-phone-input",
                                            label: "Phone",
                                            type: "number"
                                        }),
                                        errors.phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "red"
                                            },
                                            children: errors.phone.message
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeContainer === 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "8px",
                                marginTop: "13px",
                                marginBottom: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            size: "small",
                                            sx: {
                                                width: "100%",
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black",
                                                    "&.Mui-focused": {
                                                        color: "black"
                                                    }
                                                }
                                            },
                                            ...register("quantity", {
                                                required: "Quantity is required"
                                            }),
                                            id: "outlined-quantity-input",
                                            label: "Quantity",
                                            type: "text"
                                        }),
                                        errors.quantity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "red"
                                            },
                                            children: errors.quantity.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            size: "small",
                                            sx: {
                                                width: "100%",
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black",
                                                    "&.Mui-focused": {
                                                        color: "black"
                                                    }
                                                }
                                            },
                                            ...register("city", {
                                                required: "City is required"
                                            }),
                                            id: "outlined-city-input",
                                            label: "City",
                                            type: "text"
                                        }),
                                        errors.city && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "red"
                                            },
                                            children: errors.city.message
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "btn_close_next",
                    children: [
                        activeContainer === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            style: {
                                color: "gray",
                                marginRight: "10px"
                            },
                            className: "btn_modal",
                            onClick: closeModal,
                            children: "Cancel"
                        }),
                        activeContainer !== 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setActiveContainer(activeContainer - 1),
                            style: {
                                marginRight: "10px"
                            },
                            className: "btn_modal",
                            children: "Back"
                        }),
                        activeContainer !== 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleNext,
                            className: "btn_modal",
                            children: "Next"
                        }),
                        activeContainer === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleSubmit(onSubmit),
                            className: "btn_modal",
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4887:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Free advertising for your online business.","image":"/dark/assets/imgs/sass-img/blog/1.jpg","date":"August 6, 2022","tags":["Marketing","Design"]},{"id":2,"title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/sass-img/blog/2.jpg","date":"August 6, 2022","tags":["Marketing","Design"]}]');

/***/ }),

/***/ 4185:
/***/ ((module) => {

module.exports = JSON.parse('["assets/imgs/brands/Beauty 2.png","assets/imgs/brands/Car Share.png","assets/imgs/brands/Clean a sofa.png","assets/imgs/brands/Connect&Drive.png","assets/imgs/brands/ERB - BTP.png","assets/imgs/brands/Qube Masters.png","assets/imgs/brands/SPG.png","assets/imgs/brands/Vocal Results.png"]');

/***/ })

};
;