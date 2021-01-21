(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/lFo":
/*!****************************************************!*\
  !*** ./src/app/main/tv-canals/tv-canals.module.ts ***!
  \****************************************************/
/*! exports provided: TvCanalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCanalsModule", function() { return TvCanalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tvchannels/tvchannels.component */ "kBOM");
/* harmony import */ var _src_app_main_scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src-app/main/scroll-bar/scroll-bar.module */ "bxOk");





class TvCanalsModule {
}
TvCanalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TvCanalsModule });
TvCanalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TvCanalsModule_Factory(t) { return new (t || TvCanalsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _src_app_main_scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__["ScrollBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TvCanalsModule, { declarations: [_tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_2__["TVChannelsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _src_app_main_scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__["ScrollBarModule"]], exports: [_tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_2__["TVChannelsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvCanalsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_2__["TVChannelsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _src_app_main_scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__["ScrollBarModule"]
                ],
                exports: [
                    _tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_2__["TVChannelsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/superman/WebstormProjects/video-service/src/main.ts */"zUnb");


/***/ }),

/***/ "3nhm":
/*!*************************************!*\
  !*** ./src/app/core/models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}


/***/ }),

/***/ "6QGj":
/*!**********************************************!*\
  !*** ./src/app/main/movies/movies.module.ts ***!
  \**********************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies/movies.component */ "A698");
/* harmony import */ var _scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scroll-bar/scroll-bar.module */ "bxOk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");







class MoviesModule {
}
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesModule_Factory(t) { return new (t || MoviesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__["ScrollBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__["ScrollBarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]], exports: [_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]],
                exports: [
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _scroll_bar_scroll_bar_module__WEBPACK_IMPORTED_MODULE_3__["ScrollBarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "A698":
/*!********************************************************!*\
  !*** ./src/app/main/movies/movies/movies.component.ts ***!
  \********************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src-app/core/services/search.service */ "TZhc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _scroll_bar_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scroll-bar/scroll-bar/scroll-bar.component */ "cE8D");








function MoviesComponent_ng_container_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlRouterLink", "/movie/" + item_r2.id)("stopLink", ctx_r3.isDragging);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.previewPoster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
function MoviesComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_ng_container_7_ng_template_1_Template, 7, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MoviesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r5.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r5.name, " ");
} }
const _c0 = function (a1) { return { "new-items": true, "showed-smoothly": a1 }; };
class MoviesComponent {
    constructor(searchService, route) {
        this.searchService = searchService;
        this.route = route;
        this.customOptions = {
            items: 4,
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            margin: 20,
            navSpeed: 700,
            navText: ['<', '>'],
            nav: false
        };
        this.isDragging = false;
        this.genreItems = [
            {
                id: 1,
                name: 'Комедии',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '😁'
            },
            {
                id: 2,
                name: 'Драмы',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '😭'
            },
            {
                id: 3,
                name: 'Фантастика',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '👽'
            },
            {
                id: 4,
                name: 'Ужасы',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '👻'
            },
            {
                id: 5,
                name: 'Детективы',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '🤔'
            },
            {
                id: 6,
                name: 'Триллеры',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '🤔'
            },
            {
                id: 7,
                name: 'Фэнтази',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '🤔'
            },
            {
                id: 8,
                name: 'Боевики',
                description: 'Some description of some film/movie, some description of some movie, some some some some some some',
                icon: '🤔'
            }
        ];
        this.filteredMovies$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.showedSmoothly = false;
        this.movies = this.route.snapshot.data.moviesData;
        this.filteredMovies$.next(this.movies);
        this.searchService.stringChanged().subscribe(x => {
            this.filterMovies(x);
        });
    }
    filterMovies(str) {
        if (str && str.length >= 1) {
            this.filteredMovies$.next(this.movies.filter(movie => movie.name.toLowerCase().includes(str.toLowerCase())));
        }
        else {
            this.filteredMovies$.next(this.movies);
        }
    }
    ngOnInit() {
        this.filteredMovies$.next(this.route.snapshot.data.moviesData);
    }
    showSmoothly() {
        this.showedSmoothly = true;
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 15, vars: 11, consts: [[1, "movies-container"], [1, "new"], [1, "title"], [1, "text"], [3, "ngClass"], [3, "options", "dragging", "initialized"], [4, "ngFor", "ngForOf"], [1, "genres"], [3, "scrollBarWidth"], [1, "genre-items"], ["class", "genre-item", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "new-item", "slider-item", 3, "owlRouterLink", "stopLink"], [1, "image"], ["alt", "", 1, "preview-poster", 3, "src"], [1, "movie-description"], [1, "short-description", "remove-to-name"], [1, "genre-item"], [1, "genre-icon"], [1, "genre-name"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDD25\u041D\u043E\u0432\u0438\u043D\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "owl-carousel-o", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragging", function MoviesComponent_Template_owl_carousel_o_dragging_6_listener($event) { return ctx.isDragging = $event.dragging; })("initialized", function MoviesComponent_Template_owl_carousel_o_initialized_6_listener() { return ctx.showSmoothly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MoviesComponent_ng_container_7_Template, 2, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0416\u0430\u043D\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-scroll-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MoviesComponent_div_14_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.showedSmoothly));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 1180, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx.filteredMovies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollBarWidth", 1180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genreItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _scroll_bar_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_6__["ScrollBarComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselSlideDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["OwlRouterLinkDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".movies-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 1180px;\n}\n.movies-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n  display: flex;\n  flex-flow: column;\n  height: 482px;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .display-carpet[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1180px;\n  height: 482px;\n  background: black;\n  z-index: 100;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 134px;\n  height: 28px;\n  margin-bottom: 20px;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-family: Rubik, serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28px;\n  color: #333333;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-items[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 434px;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-flow: column;\n  grid-column-gap: 20px;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-items[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .showed-smoothly[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 600ms ease;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-item[_ngcontent-%COMP%] {\n  height: 434px;\n  width: 280px;\n  outline: none;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 1fr/1fr;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .preview-poster[_ngcontent-%COMP%] {\n  grid-column: 1/1;\n  grid-row: 1/1;\n  z-index: 3;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: Rubik, serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  text-align: left;\n  color: #f2f2f2;\n  padding: 16px;\n  box-sizing: border-box;\n  -webkit-backdrop-filter: brightness(0.3);\n          backdrop-filter: brightness(0.3);\n  width: 280px;\n  height: 370px;\n  grid-column: 1/1;\n  grid-row: 1/1;\n  opacity: 0;\n  z-index: 5;\n}\n.movies-container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]   .new-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  width: 1180px;\n  overflow-x: hidden;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 134px;\n  height: 28px;\n  margin-bottom: 20px;\n  font-family: Rubik, monospace;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28px;\n  color: #333333;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre-items[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-flow: column;\n  grid-column-gap: 20px;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre-items[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre-items[_ngcontent-%COMP%]   .genre-item[_ngcontent-%COMP%] {\n  position: relative;\n  height: 208px;\n  width: 280px;\n  border-radius: 6px;\n  box-shadow: inset 0 0 16px 0 rgba(0, 0, 0, 0.15);\n  background: linear-gradient(45deg, #ff0000, #ff9900, #ccff00, #00d0ff, #6e00ff) fixed top center;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre-items[_ngcontent-%COMP%]   .genre-item[_ngcontent-%COMP%]   .genre-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 48px;\n  display: flex;\n  align-items: center;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre-items[_ngcontent-%COMP%]   .genre-item[_ngcontent-%COMP%]   .genre-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  position: absolute;\n  bottom: 24px;\n}\n.movies-container[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre-items[_ngcontent-%COMP%]   .genre-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.preview-poster[_ngcontent-%COMP%] {\n  width: 280px !important;\n  height: 370px;\n  border-radius: 8px;\n}\n.short-description[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  min-width: 280px;\n  min-height: 48px;\n  font-family: Rubik, serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 24px;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vdmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFPQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFKRjtBQUpFO0VBQ0UsYUFBQTtBQU1KO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURKO0FBSUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUtNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBUUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBTUEsc0JBQUE7RUFDQSxxQkFBQTtBQVZOO0FBS007RUFDRSxhQUFBO0FBSFI7QUFVSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQVJOO0FBV0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFUTjtBQVdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBVFI7QUFXUTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFUVjtBQWFRO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFYVjtBQWFVO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFYWjtBQWtCRTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBQWpCSjtBQW1CSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbEJOO0FBcUJJO0VBRUUsd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBbkJOO0FBc0JNO0VBQ0UsYUFBQTtBQXBCUjtBQXVCTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0dBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBckJSO0FBdUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBckJWO0FBd0JRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXRCVjtBQXlCUTtFQUNFLGVBQUE7QUF2QlY7QUE4QkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQTNCRjtBQThCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUE1QkYiLCJmaWxlIjoibW92aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcy1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTE4MHB4O1xuXG4gIC5uZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDQ4MnB4O1xuXG5cbiAgICAuZGlzcGxheS1jYXJwZXR7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTE4MHB4O1xuICAgICAgaGVpZ2h0OiA0ODJweDtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICB3aWR0aDogMTM0cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAubmV3LWl0ZW1zIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBoZWlnaHQ6IDQzNHB4O1xuICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICB9XG5cbiAgICAuc2hvd2VkLXNtb290aGx5e1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNjAwbXMgZWFzZTtcbiAgICB9XG5cbiAgICAubmV3LWl0ZW0ge1xuICAgICAgaGVpZ2h0OiA0MzRweDtcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcblxuICAgICAgICAucHJldmlldy1wb3N0ZXIge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICAgICAgICBncmlkLXJvdzogMSAvIDE7XG4gICAgICAgICAgei1pbmRleDogMztcblxuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJ1YmlrLCBzZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjMpO1xuICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICAgICAgICBncmlkLXJvdzogMSAvIDE7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5nZW5yZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIHdpZHRoOiAxMTgwcHg7XG4gICAgLy9kaXNhYmxlIHNjcm9sbGJhciwgd2l0aG91dCBmdW5jdGlvbmFsaXR5XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIHdpZHRoOiAxMzRweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgIGZvbnQtZmFtaWx5OiBSdWJpaywgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuXG4gICAgLmdlbnJlLWl0ZW1zIHtcbiAgICAgIC8vZGlzYWJsZSBzY3JvbGxiYXIsIHdpdGhvdXQgZnVuY3Rpb25hbGl0eVxuICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcblxuICAgICAgLy9kaXNhYmxlIHNjcm9sbGJhciwgd2l0aG91dCBmdW5jdGlvbmFsaXR5XG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5nZW5yZS1pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwMDAsICNmZjk5MDAsICNjY2ZmMDAsICMwMGQwZmYsICM2ZTAwZmYpIGZpeGVkIHRvcCBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmdlbnJlLWljb24ge1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbnJlLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wcmV2aWV3LXBvc3RlciB7XG4gIHdpZHRoOiAyODBweCAhaW1wb3J0YW50OyAvL3RvIG92ZXJyaWRlIHRoZSBzbGlkZXIgc3R5bGVcbiAgaGVpZ2h0OiAzNzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2hvcnQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuXG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EORs":
/*!**********************************************!*\
  !*** ./src/app/main/header/header.module.ts ***!
  \**********************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "uBuK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _auth_modal_auth_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-modal/auth-modal.module */ "MBr0");
/* harmony import */ var _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/name-first-letter.pipe */ "oV8V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _auth_modal_auth_modal_module__WEBPACK_IMPORTED_MODULE_6__["AuthModalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_7__["NameFirstLetterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _auth_modal_auth_modal_module__WEBPACK_IMPORTED_MODULE_6__["AuthModalModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_7__["NameFirstLetterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_7__["NameFirstLetterPipe"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_7__["NameFirstLetterPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _auth_modal_auth_modal_module__WEBPACK_IMPORTED_MODULE_6__["AuthModalModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "M6iO":
/*!*********************************************!*\
  !*** ./src/app/main/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header/header.component */ "uBuK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer/footer.component */ "gVxZ");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 0, consts: [[1, "main-content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  width: 1180px;\n  margin: 0 auto;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 1180px;\n  height: 786px;\n  margin: 0 auto 60px;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 120px;\n  background: #F2F2F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gIHdpZHRoOiAxMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICB3aWR0aDogMTE4MHB4O1xuICBoZWlnaHQ6IDc4NnB4O1xuICBtYXJnaW46IDAgYXV0byA2MHB4O1xufVxuXG5mb290ZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MBr0":
/*!******************************************************!*\
  !*** ./src/app/main/auth-modal/auth-modal.module.ts ***!
  \******************************************************/
/*! exports provided: AuthModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModalModule", function() { return AuthModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-modal/auth-modal.component */ "vePu");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class AuthModalModule {
}
AuthModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModalModule });
AuthModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModalModule_Factory(t) { return new (t || AuthModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModalModule, { declarations: [_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_2__["AuthModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]], exports: [_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_2__["AuthModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_2__["AuthModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
                ],
                exports: [
                    _auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_2__["AuthModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PUkM":
/*!***********************************************************!*\
  !*** ./src/app/core/providers/movies-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: MoviesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesResolverService", function() { return MoviesResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src-app/core/services/data.service */ "cplz");




class MoviesResolverService {
    constructor(ds) {
        this.ds = ds;
    }
    resolve(route, state) {
        return this.ds.getAllMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(moviesData => moviesData));
    }
}
MoviesResolverService.ɵfac = function MoviesResolverService_Factory(t) { return new (t || MoviesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MoviesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesResolverService, factory: MoviesResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main/main.component */ "M6iO");



// import {GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
class AppComponent {
    constructor() {
        this.title = 'video-service';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TZhc":
/*!*************************************************!*\
  !*** ./src/app/core/services/search.service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SearchService {
    constructor() {
        this.searchString = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    changeString(newString) {
        this.searchString.next(newString);
    }
    stringChanged() {
        return this.searchString.asObservable();
    }
    clean() {
        this.searchString.next('');
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "M6iO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.module */ "EORs");
/* harmony import */ var _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.module */ "6QGj");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.module */ "sqZ9");
/* harmony import */ var _tv_canals_tv_canals_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tv-canals/tv-canals.module */ "/lFo");
/* harmony import */ var _main_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main-content/main-content.component */ "ZPXc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movie_movie_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie/movie.module */ "rzXE");













class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__["MoviesModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _tv_canals_tv_canals_module__WEBPACK_IMPORTED_MODULE_8__["TvCanalsModule"],
            _movie_movie_module__WEBPACK_IMPORTED_MODULE_11__["MovieModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _main_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_9__["MainContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__["MoviesModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
        _tv_canals_tv_canals_module__WEBPACK_IMPORTED_MODULE_8__["TvCanalsModule"],
        _movie_movie_module__WEBPACK_IMPORTED_MODULE_11__["MovieModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]], exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _main_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_9__["MainContentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _movies_movies_module__WEBPACK_IMPORTED_MODULE_5__["MoviesModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                    _tv_canals_tv_canals_module__WEBPACK_IMPORTED_MODULE_8__["TvCanalsModule"],
                    _movie_movie_module__WEBPACK_IMPORTED_MODULE_11__["MovieModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                ],
                exports: [
                    _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.module */ "XpXM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZPXc":
/*!******************************************************************!*\
  !*** ./src/app/main/main/main-content/main-content.component.ts ***!
  \******************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _movies_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movies/movies/movies.component */ "A698");
/* harmony import */ var _tv_canals_tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tv-canals/tvchannels/tvchannels.component */ "kBOM");





class MainContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(); };
MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainContentComponent, selectors: [["app-main-content"]], decls: 5, vars: 0, consts: [["mat-align-tabs", "center", 1, "tabs"], ["label", "\u0424\u0438\u043B\u044C\u043C\u044B"], ["label", "\u0422\u0435\u043B\u0435\u043A\u0430\u043D\u0430\u043B\u044B"]], template: function MainContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tv-channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _movies_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"], _tv_canals_tvchannels_tvchannels_component__WEBPACK_IMPORTED_MODULE_3__["TVChannelsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-content',
                templateUrl: './main-content.component.html',
                styleUrls: ['./main-content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bxOk":
/*!******************************************************!*\
  !*** ./src/app/main/scroll-bar/scroll-bar.module.ts ***!
  \******************************************************/
/*! exports provided: ScrollBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBarModule", function() { return ScrollBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-bar/scroll-bar.component */ "cE8D");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");





class ScrollBarModule {
}
ScrollBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollBarModule });
ScrollBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScrollBarModule_Factory(t) { return new (t || ScrollBarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollBarModule, { declarations: [_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]], exports: [_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollBarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
                ],
                exports: [
                    _scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollBarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cE8D":
/*!********************************************************************!*\
  !*** ./src/app/main/scroll-bar/scroll-bar/scroll-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: ScrollBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBarComponent", function() { return ScrollBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["bar"];
const _c1 = ["horizontal"];
const _c2 = ["vertical"];
function ScrollBarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ScrollBarComponent_div_4_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onHorizontalStart($event); })("mouseover", function ScrollBarComponent_div_4_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.mouseOverToggle(true); })("mouseleave", function ScrollBarComponent_div_4_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.mouseOverToggle(false); })("mouseup", function ScrollBarComponent_div_4_Template_div_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.scrollBarDragged = false; })("mousemove", function ScrollBarComponent_div_4_Template_div_mousemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onHorizontalMove($event, _r3, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.info.horizontalSize, "%")("left", ctx_r1.info.horizontalPosition, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("thumb_active", ctx_r1.horizontalThumbActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showHide", ctx_r1.isScrolled || ctx_r1.mouseOverThumb ? "show" : "hide");
} }
function ScrollBarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ScrollBarComponent_div_5_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onVerticalStart($event); })("mouseover", function ScrollBarComponent_div_5_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.mouseOverToggle(true); })("mouseleave", function ScrollBarComponent_div_5_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.mouseOverToggle(false); })("mouseup", function ScrollBarComponent_div_5_Template_div_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.scrollBarDragged = false; })("mousemove", function ScrollBarComponent_div_5_Template_div_mousemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onVerticalMove($event, _r10, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.info.verticalSize, "%")("top", ctx_r2.info.verticalPosition, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("thumb_active", ctx_r2.verticalThumbActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showHide", ctx_r2.isScrolled || ctx_r2.mouseOverThumb ? "show" : "hide");
} }
const _c3 = ["*"];
//TODO refactor this component
class ScrollBarComponent {
    constructor(cdref) {
        this.cdref = cdref;
        this.axis = 'horizontal';
        this.info = {};
        this.isScrolled = false;
        this.mouseOverThumb = false;
        this.horizontalThumbActive = false;
        this.verticalThumbActive = false;
        this.scrollBarDragged = false;
    }
    ngOnInit() {
    }
    // @ts-ignore
    horizontalScrollInPercents(scrollLeft, scrollWidth, clientWidth) {
        this.info.percentsScroll = scrollLeft / (scrollWidth - clientWidth);
    }
    //vertical
    // @ts-ignore
    verticalScrollInPercents(scrollTop, scrollHeight, clientHeight) {
        this.info.percentsScroll = scrollTop / (scrollHeight - clientHeight);
    }
    mouseOverToggle(isOver) {
        this.mouseOverThumb = isOver;
    }
    // (wheel)="wheeled()" on #bar TODO make thumb visible on wheel
    wheeled() {
    }
    ngAfterViewInit() {
        const { clientWidth, scrollWidth } = this.bar.nativeElement;
        // for vertical
        const { clientHeight, scrollHeight } = this.bar.nativeElement;
        this.info.horizontalSize = Math.ceil(clientWidth / scrollWidth * 100);
        // for vertical
        this.info.verticalSize = Math.ceil(clientHeight / scrollHeight * 100);
        this.cdref.detectChanges();
    }
    horizontalScrolledF() {
        const { scrollLeft, scrollWidth, clientWidth } = this.bar.nativeElement;
        this.info.horizontalScrolled = scrollLeft / (scrollWidth - clientWidth);
        return this.info.horizontalScrolled;
    }
    horizontalSizeF() {
        const { clientWidth, scrollWidth } = this.bar.nativeElement;
        this.info.horizontalSize = Math.ceil(clientWidth / scrollWidth * 100);
        return Math.ceil(clientWidth / scrollWidth * 100);
    }
    // Thumb position from the left in percents
    horizontalPositionF() {
        this.info.horizontalPosition = this.horizontalScrolledF() * (100 - this.horizontalSizeF());
        return this.horizontalScrolledF() * (100 - this.horizontalSizeF());
    }
    // Content overflown, we see thumb
    hasHorizontalBarF() {
        this.info.hasHorizontalBar = this.horizontalSizeF() < 100;
        return this.horizontalSizeF() < 100;
    }
    // tslint:disable-next-line:typedef
    onHorizontalStart(event) {
        this.scrollBarDragged = true;
        event.preventDefault();
        const { target, clientX } = event;
        // @ts-ignore
        const { left, width } = target.getBoundingClientRect();
        this.horizontalThumbDragOffset = (clientX - left) / width;
        this.horizontalThumbActive = true;
    }
    onHorizontalMove({ clientX }, { offsetWidth }, target) {
        if (!this.horizontalThumbActive && !this.scrollBarDragged) {
            return;
        }
        const { nativeElement } = this.bar;
        const { left, width } = nativeElement.getBoundingClientRect();
        const maxScrollLeft = nativeElement.scrollWidth - width;
        const scrolled = (clientX - left - offsetWidth * this.horizontalThumbDragOffset) /
            (width - offsetWidth);
        nativeElement.scrollLeft = maxScrollLeft * scrolled;
    }
    //  vertical part
    verticalScrolledF() {
        const { scrollTop, scrollHeight, clientHeight } = this.bar.nativeElement;
        this.info.verticalScrolled = scrollTop / (scrollHeight - clientHeight);
        return this.info.verticalScrolled;
    }
    verticalSizeF() {
        const { clientHeight, scrollHeight } = this.bar.nativeElement;
        this.info.verticalSize = Math.ceil(clientHeight / scrollHeight * 100);
        return Math.ceil(clientHeight / scrollHeight * 100);
    }
    // Thumb position from the left in percents
    verticalPositionF() {
        this.info.verticalPosition = this.verticalScrolledF() * (100 - this.verticalSizeF());
        return this.verticalScrolledF() * (100 - this.verticalSizeF());
    }
    // Content overflown, we see thumb
    hasVerticalBarF() {
        this.info.hasVerticalBar = this.verticalSizeF() < 100;
        return this.verticalSizeF() < 100;
    }
    setScrollInfo(event) {
        if (this.axis === 'vertical') {
            this.verticalThumbActive = true;
            this.isScrolled = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(300).pipe().subscribe(x => {
                this.isScrolled = false;
                this.verticalThumbActive = false;
            });
            this.verticalScrolledF();
            this.verticalSizeF();
            this.verticalPositionF();
            this.hasVerticalBarF();
            this.verticalScrollInPercents(event.target.scrollLeft, event.target.scrollWidth, event.target.clientWidth);
            this.info.clientY = event.clientY;
            this.info.targetscrollTop = event.target.scrollTop;
        }
        else {
            this.horizontalThumbActive = true;
            this.isScrolled = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(300).pipe().subscribe(x => {
                this.isScrolled = false;
                this.horizontalThumbActive = false;
            });
            this.horizontalScrolledF();
            this.horizontalSizeF();
            this.horizontalPositionF();
            this.hasHorizontalBarF();
            this.horizontalScrollInPercents(event.target.scrollLeft, event.target.scrollWidth, event.target.clientWidth);
            this.info.clientX = event.clientX;
            this.info.targetScrollLeft = event.target.scrollLeft;
        }
    }
    onDragEnd() {
        if (this.axis === 'vertical') {
            this.verticalThumbActive = false;
        }
        else {
            this.horizontalThumbActive = false;
        }
        this.scrollBarDragged = false;
    }
    onVerticalStart(event) {
        this.scrollBarDragged = true;
        event.preventDefault();
        const { target, clientY } = event;
        // @ts-ignore
        const { top, height } = target.getBoundingClientRect();
        this.verticalThumbDragOffset = (clientY - top) / height;
        this.verticalThumbActive = true;
    }
    onVerticalMove({ clientY }, { offsetHeight }, target) {
        if (!this.verticalThumbActive && !this.scrollBarDragged) {
            return;
        }
        const { nativeElement } = this.bar;
        const { top, height } = nativeElement.getBoundingClientRect();
        const maxscrollTop = nativeElement.scrollHeight - height;
        const scrolled = (clientY - top - offsetHeight * this.verticalThumbDragOffset) /
            (height - offsetHeight);
        nativeElement.scrollTop = maxscrollTop * scrolled;
    }
}
ScrollBarComponent.ɵfac = function ScrollBarComponent_Factory(t) { return new (t || ScrollBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ScrollBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollBarComponent, selectors: [["app-scroll-bar"]], viewQuery: function ScrollBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.horizontal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vertical = _t.first);
    } }, hostBindings: function ScrollBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function ScrollBarComponent_mouseup_HostBindingHandler() { return ctx.onDragEnd(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { scrollBarWidth: "scrollBarWidth", scrollBarHeight: "scrollBarHeight", axis: "axis" }, ngContentSelectors: _c3, decls: 6, vars: 6, consts: [[1, "scroll-bar"], [1, "content-inside-scrollbar", 3, "scroll", "mouseup"], ["bar", ""], ["class", "thumb", 3, "thumb_active", "width", "left", "mousedown", "mouseover", "mouseleave", "mouseup", "mousemove", 4, "ngIf"], ["class", "thumb-vertical", 3, "thumb_active", "height", "top", "mousedown", "mouseover", "mouseleave", "mouseup", "mousemove", 4, "ngIf"], [1, "thumb", 3, "mousedown", "mouseover", "mouseleave", "mouseup", "mousemove"], ["horizontal", ""], [1, "thumb-vertical", 3, "mousedown", "mouseover", "mouseleave", "mouseup", "mousemove"], ["vertical", ""]], template: function ScrollBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollBarComponent_Template_div_scroll_1_listener($event) { return ctx.setScrollInfo($event); })("mouseup", function ScrollBarComponent_Template_div_mouseup_1_listener() { return ctx.scrollBarDragged = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScrollBarComponent_div_4_Template, 2, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScrollBarComponent_div_5_Template, 2, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.scrollBarWidth, "px")("height", ctx.scrollBarHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.axis === "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.axis === "vertical");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".scroll-bar[_ngcontent-%COMP%] {\n  position: relative;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  overflow: hidden;\n  display: grid;\n  grid-template: 1fr/1fr;\n  width: -webkit-max-content;\n  width: max-content;\n}\n.scroll-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.content-inside-scrollbar[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  grid-column: 1/1;\n  grid-row: 1/1;\n}\n.content-inside-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.thumb-vertical[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  width: 5px;\n  position: absolute;\n  background: linear-gradient(45deg, rgba(186, 0, 1, 0.6), rgba(138, 129, 0, 0.83));\n  border-radius: 3px;\n  background-clip: content-box;\n  right: 5px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.thumb-vertical[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.bar_horizontal[_ngcontent-%COMP%]   .thumb-vertical[_ngcontent-%COMP%]:hover, .bar_horizontal[_ngcontent-%COMP%]   .thumb-vertical[_ngcontent-%COMP%]:active {\n  width: 2px;\n}\n.thumb[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  height: 5px;\n  position: absolute;\n  background: linear-gradient(to right, rgba(255, 82, 77, 0.59), rgba(152, 131, 255, 0.76));\n  border-radius: 3px;\n  background-clip: content-box;\n  bottom: 5px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.thumb[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.bar_horizontal[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]:hover, .bar_horizontal[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]:active {\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Njcm9sbC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7QUFFSjtBQUVBO0VBQ0UsdUJBQUE7RUFJQSxnQkFBQTtFQUNBLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7RUFLeEIsZ0JBQUE7RUFDQSxhQUFBO0FBSkY7QUFERTtFQUNFLGFBQUE7QUFHSjtBQUlBO0VBQ0Usd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFPQSxpRkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFORjtBQUxFO0VBQ0UsYUFBQTtBQU9KO0FBUUU7RUFFRSxVQUFBO0FBUEo7QUFXQTtFQUNFLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBT0EseUZBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBYkY7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQWVFO0VBRUUsV0FBQTtBQWRKIiwiZmlsZSI6InNjcm9sbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWJhcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vYmFja2dyb3VuZDogcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmNvbnRlbnQtaW5zaWRlLXNjcm9sbGJhcntcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG5cbiAgLy9kaXNhYmxlIHNjcm9sbGJhciwgd2l0aG91dCBmdW5jdGlvbmFsaXR5XG5cbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgZ3JpZC1yb3c6IDEgLyAxO1xufVxuXG4udGh1bWItdmVydGljYWx7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgd2lkdGg6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTg2LCAwLCAxLCAwLjYpLCByZ2JhKDEzOCwgMTI5LCAwLCAwLjgzKSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgfVxuXG4gIC5iYXJfaG9yaXpvbnRhbCAmOmhvdmVyLFxuICAuYmFyX2hvcml6b250YWwgJjphY3RpdmUge1xuICAgIHdpZHRoOiAycHg7XG4gIH1cbn1cblxuLnRodW1iIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCA4MiwgNzcsIDAuNTkpLCByZ2JhKDE1MiwgMTMxLCAyNTUsIDAuNzYpKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICBib3R0b206IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgfVxuXG4gIC5iYXJfaG9yaXpvbnRhbCAmOmhvdmVyLFxuICAuYmFyX2hvcml6b250YWwgJjphY3RpdmUge1xuICAgIGhlaWdodDogMnB4O1xuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showHide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in-out')),
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-bar',
                templateUrl: './scroll-bar.component.html',
                styleUrls: ['./scroll-bar.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showHide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 1,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in-out')),
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { scrollBarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollBarHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], axis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bar']
        }], horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['horizontal']
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['vertical']
        }], onDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup']
        }] }); })();


/***/ }),

/***/ "cplz":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class DataService {
    constructor(http) {
        this.http = http;
    }
    getMovie(id) {
        return this.http.get('assets/test-data/movies-in-detail.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            const movies = data;
            return movies.find(mv => mv.id === id);
        }));
    }
    getAllMovies() {
        return this.http.get('assets/test-data/movies.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    getCommentsFromStorage(movieId) {
        return JSON.parse(localStorage.getItem(`movie-${movieId}-comments`));
    }
    saveComments(movieId, comments) {
        localStorage.setItem(`movie-${movieId}-comments`, JSON.stringify(comments));
    }
    changeUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gVxZ":
/*!********************************************************!*\
  !*** ./src/app/main/footer/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "footer"], [1, "logo"], ["src", "assets/Vector.png"], [1, "contact-info"], ["href", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "426057, \u0420\u043E\u0441\u0441\u0438\u044F, \u0423\u0434\u043C\u0443\u0440\u0442\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430, \u0433. \u0418\u0436\u0435\u0432\u0441\u043A, \u0443\u043B. \u041A\u0430\u0440\u043B\u0430 \u041C\u0430\u0440\u043A\u0441\u0430, 246 (\u0414\u041A \u00AB\u041C\u0435\u0442\u0430\u043B\u043B\u0443\u0440\u0433\u00BB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+7 (3412) 93-88-61, 43-29-29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "htc-cs.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 1180px;\n}\n.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 64px;\n  max-width: 32px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  max-height: 64px;\n  font-family: Rubik, serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #333333;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRU47QUFJQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtBQURKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHdpZHRoOiAxMTgwcHg7XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBpbWd7XG4gICAgICBtYXgtaGVpZ2h0OiA2NHB4O1xuICAgICAgbWF4LXdpZHRoOiAzMnB4O1xuICAgIH1cbiAgfVxuXG59XG5cbi5jb250YWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIG1heC1oZWlnaHQ6IDY0cHg7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMzMzMzMzM7XG5cbiAgcHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kBOM":
/*!*******************************************************************!*\
  !*** ./src/app/main/tv-canals/tvchannels/tvchannels.component.ts ***!
  \*******************************************************************/
/*! exports provided: TVChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TVChannelsComponent", function() { return TVChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scroll_bar_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scroll-bar/scroll-bar/scroll-bar.component */ "cE8D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TVChannelsComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r3.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r3.name, " ");
} }
function TVChannelsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TVChannelsComponent_div_2_div_7_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", channel_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", channel_r1.programs);
} }
class TVChannelsComponent {
    constructor() {
        this.channels = [
            {
                id: 1,
                name: 'Первый канал',
                logo: 'assets/images/channels/1st.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 2,
                name: '2x2',
                logo: 'assets/images/channels/2x2.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 3,
                name: 'РБК',
                logo: 'assets/images/channels/rbk.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 4,
                name: 'AMEDIA PREMIUM',
                logo: 'assets/images/channels/amedia.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 5,
                name: 'Netflix1',
                logo: 'assets/images/channels/netflixlogo.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 6,
                name: 'Netflix2',
                logo: 'assets/images/channels/netflixlogo.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 7,
                name: 'Netflix3',
                logo: 'assets/images/channels/netflixlogo.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 8,
                name: 'Netflix4',
                logo: 'assets/images/channels/netflixlogo.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 9,
                name: 'Netflix5',
                logo: 'assets/images/channels/netflixlogo.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            },
            {
                id: 10,
                name: 'Netflix6',
                logo: 'assets/images/channels/netflixlogo.png',
                programs: [
                    {
                        id: 1,
                        time: '13:00',
                        name: 'SomeProgram1'
                    },
                    {
                        id: 2,
                        time: '14:00',
                        name: 'SomeProgram2'
                    },
                    {
                        id: 3,
                        time: '15:00',
                        name: 'SomeProgram3'
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
}
TVChannelsComponent.ɵfac = function TVChannelsComponent_Factory(t) { return new (t || TVChannelsComponent)(); };
TVChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TVChannelsComponent, selectors: [["app-tv-channels"]], decls: 3, vars: 3, consts: [[1, "tv-channels-container"], [3, "scrollBarHeight", "axis"], ["class", "channel", 4, "ngFor", "ngForOf"], [1, "channel"], [1, "channel-logo"], ["alt", "", 3, "src"], [1, "channel-info"], [1, "channel-name"], [1, "channel-programs"], ["class", "program", 4, "ngFor", "ngForOf"], [1, "program"], [1, "program-time"], [1, "program-name"]], template: function TVChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scroll-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TVChannelsComponent_div_2_Template, 8, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollBarHeight", 700)("axis", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);
    } }, directives: [_scroll_bar_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_1__["ScrollBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".tv-channels-container[_ngcontent-%COMP%] {\n  margin-top: 27px;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n.channel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 1180px;\n  height: 162px;\n  margin: 0 0 16px;\n  box-sizing: border-box;\n  padding: 21px 0 0 0;\n  border-radius: 8px;\n  background-color: #f2f2f2;\n}\n\n.channel[_ngcontent-%COMP%]   .channel-logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1;\n  align-items: center;\n  justify-content: center;\n  width: 114px;\n  height: 114px;\n}\n\n.channel[_ngcontent-%COMP%]   .channel-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 114px;\n  max-height: 114px;\n}\n\n.channel[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n  width: 280px;\n  height: 24px;\n  font-family: Rubik;\n  font-size: 20px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n\n.channel[_ngcontent-%COMP%]   .channel-info[_ngcontent-%COMP%] {\n  flex: 2 1;\n}\n\n.program[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.program[_ngcontent-%COMP%]:first-of-type {\n  color: #e5261e;\n}\n\n.program[_ngcontent-%COMP%]   .program-time[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 19px;\n  margin-right: 16px;\n  font-family: Rubik, serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n}\n\n.program[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%] {\n  width: 694px;\n  height: 19px;\n  font-family: Rubik, serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R2Y2hhbm5lbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUU7RUFFRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUROOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRRTtFQUNFLFNBQUE7QUFOSjs7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBVUU7RUFDRSxjQUFBO0FBUko7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVZKIiwiZmlsZSI6InR2Y2hhbm5lbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHYtY2hhbm5lbHMtY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbi5jaGFubmVse1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHdpZHRoOiAxMTgwcHg7XG4gIGhlaWdodDogMTYycHg7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIxcHggMCAwIDA7XG4gIC8vcGFkZGluZzogMjFweCAyNHB4IDE5cHggMTQzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcblxuICAuY2hhbm5lbC1sb2dve1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgaGVpZ2h0OiAxMTRweDtcblxuICAgIGltZ3tcbiAgICAgIG1heC13aWR0aDogMTE0cHg7XG4gICAgICBtYXgtaGVpZ2h0OiAxMTRweDtcbiAgICB9XG5cbiAgfVxuXG4gIC5jaGFubmVsLW5hbWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIC8vbWFyZ2luOiAwIDQ3NnB4IDNweCAxNDNweDtcbiAgICBmb250LWZhbWlseTogUnViaWs7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG5cbiAgLmNoYW5uZWwtaW5mb3tcbiAgICBmbGV4OiAyIDE7XG4gIH1cblxufVxuXG4ucHJvZ3JhbXtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBjb2xvcjogI2U1MjYxZTtcbiAgfVxuXG4gIC5wcm9ncmFtLXRpbWV7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5wcm9ncmFtLW5hbWV7XG4gICAgd2lkdGg6IDY5NHB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TVChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tv-channels',
                templateUrl: './tvchannels.component.html',
                styleUrls: ['./tvchannels.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oV8V":
/*!******************************************************!*\
  !*** ./src/app/core/pipes/name-first-letter.pipe.ts ***!
  \******************************************************/
/*! exports provided: NameFirstLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFirstLetterPipe", function() { return NameFirstLetterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NameFirstLetterPipe {
    transform(value, withDot = true) {
        if (withDot && value) {
            return value.charAt(0) + (withDot ? '.' : '');
        }
        else {
            return '';
        }
    }
}
NameFirstLetterPipe.ɵfac = function NameFirstLetterPipe_Factory(t) { return new (t || NameFirstLetterPipe)(); };
NameFirstLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nameFirstLetter", type: NameFirstLetterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameFirstLetterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'nameFirstLetter'
            }]
    }], null, null); })();


/***/ }),

/***/ "rzXE":
/*!********************************************!*\
  !*** ./src/app/main/movie/movie.module.ts ***!
  \********************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie/movie.component */ "utdD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: '',
        component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]
    }
];
class MovieModule {
}
MovieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MovieModule });
MovieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MovieModule_Factory(t) { return new (t || MovieModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieModule, { declarations: [_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sqZ9":
/*!**********************************************!*\
  !*** ./src/app/main/footer/footer.module.ts ***!
  \**********************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "gVxZ");




class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uBuK":
/*!********************************************************!*\
  !*** ./src/app/main/header/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_modal_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth-modal/auth-modal/auth-modal.component */ "vePu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pipes/name-first-letter.pipe */ "oV8V");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/auth-service */ "yWTt");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/data.service */ "cplz");
/* harmony import */ var _src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src-app/core/services/search.service */ "TZhc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u043E\u0439\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function HeaderComponent_ng_template_14_Template_input_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.saveName(); })("focusout", function HeaderComponent_ng_template_14_Template_input_focusout_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.saveName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.singOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0412\u044B\u0439\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.changingUserName)("formControl", ctx_r2.changingUserNameControl);
} }
class HeaderComponent {
    constructor(dialog, authService, dataService, nFirstLetterPipe, searchService, router) {
        this.dialog = dialog;
        this.authService = authService;
        this.dataService = dataService;
        this.nFirstLetterPipe = nFirstLetterPipe;
        this.searchService = searchService;
        this.router = router;
        this.userAuthenticated = false;
        this.changingUserName = false;
        this.changingUserNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', readOnly: true });
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.subs$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.authService.loggedIn.subscribe(x => {
            this.userAuthenticated = x;
            if (x) {
                this.user = this.authService.currentUserValue;
                const username = `${this.user.firstName} ${nFirstLetterPipe.transform(this.user.lastName)}`;
                this.changingUserNameControl.setValue(username, { emitEvent: false });
            }
        });
    }
    ngOnInit() {
        this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.subs$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(x => {
            this.searchService.changeString(x);
            if (this.router.url !== '/home') {
                this.router.navigate(['home']);
            }
        });
    }
    openAuth() {
        this.dialog.open(_auth_modal_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_1__["AuthModalComponent"], {
            width: '304px',
            height: '394px',
            backdropClass: 'auth-background'
        });
    }
    search() {
        this.searchService.changeString(this.searchControl.value);
    }
    changeName() {
        this.changingUserName = true;
        this.changingUserNameControl.patchValue(this.user.username);
    }
    singOut() {
        this.authService.logout();
    }
    saveName() {
        this.user.username = this.changingUserNameControl.value;
        const [firstName, lastName] = this.user.username.split(' ', 2);
        this.user.firstName = firstName;
        this.user.lastName = lastName;
        this.dataService.changeUser(this.user);
        this.changingUserNameControl.patchValue(`${firstName} ${this.nFirstLetterPipe.transform(lastName)}`);
        this.changingUserName = false;
    }
    ngOnDestroy() {
        this.searchService.clean();
        this.subs$.next();
        this.subs$.complete();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["NameFirstLetterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["NameFirstLetterPipe"]])], decls: 16, vars: 3, consts: [[1, "header"], [1, "logo"], ["routerLink", "home", 1, "logo-image"], [1, "circle"], [1, "triangle"], ["routerLink", "home", 1, "logo-text"], [1, "search"], [1, "search-form-field"], ["id", "search", "name", "search", "matInput", "", "type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A...", 3, "formControl"], [3, "click"], [1, "profile"], ["mat-button", "", 3, "click", 4, "ngIf", "ngIfElse"], ["authenticated", ""], ["mat-button", "", 3, "click"], [1, "user-name", 3, "click"], ["type", "text", "matInput", "", 3, "readonly", "formControl", "keydown.enter", "focusout"], [1, "sign-out", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0412\u0438\u0434\u0435\u043Ec\u0435\u0440\u0432\u0438\u0441 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_label_click_10_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041D\u0430\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_ng_template_14_Template, 4, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: [".sign-out[_ngcontent-%COMP%] {\n  font-family: Rubik;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: red;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  width: 114px;\n  height: 19px;\n  font-family: Rubik, serif;\n  font-size: 16px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n\n.user-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 2;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n}\n\n.logo[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 1fr/1fr;\n}\n\n.logo[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  grid-column: 1/1;\n  grid-row: 1/1;\n  width: 36px;\n  height: 36px;\n  shape-outside: circle();\n  -webkit-clip-path: circle();\n          clip-path: circle();\n  background: red;\n  z-index: 3;\n}\n\n.logo[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  z-index: 4;\n  transform: rotate(88deg);\n  position: relative;\n  background: white;\n  left: 7px;\n  grid-column: 1/1;\n  grid-row: 1/1;\n  width: 36px;\n  height: 36px;\n  shape-outside: polygon(50% 0%, 0% 100%, 100% 100%);\n  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n}\n\n.logo[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: flex;\n  align-items: center;\n  color: black;\n  font-weight: bold;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 402px;\n  min-height: 25px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.search-form-field[_ngcontent-%COMP%] {\n  width: 320px;\n  margin-right: 32px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: red;\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: red;\n  color: white;\n}\n\n.profile[_ngcontent-%COMP%]   button.sign-out[_ngcontent-%COMP%] {\n  font-family: Rubik, serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  background: transparent;\n  color: red;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FBSEo7O0FBT0U7RUFDRSxhQUFBO0FBTEo7O0FBU0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTkY7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLW91dCB7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4udXNlci1uYW1lIHtcbiAgd2lkdGg6IDExNHB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG5cbiAgaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWdyb3c6IDI7XG59XG5cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5sb2dvLWltYWdlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcbiAgfVxuXG4gIC5jaXJjbGUge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICBncmlkLXJvdzogMSAvIDE7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKCk7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cblxuICAudHJpYW5nbGUge1xuICAgIHotaW5kZXg6IDQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoODhkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBsZWZ0OiA3cHg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xuICAgIGdyaWQtcm93OiAxIC8gMTtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgc2hhcGUtb3V0c2lkZTogcG9seWdvbig1MCUgMCUsIDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMCUgMTAwJSwgMTAwJSAxMDAlKTtcbiAgfVxuXG5cbiAgLmxvZ28taW1hZ2UsIC5sb2dvLXRleHR7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4ubG9nby10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDQwMnB4O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VhcmNoLWZvcm0tZmllbGQge1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGJ1dHRvbi5zaWduLW91dCB7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrLCBzZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                providers: [_core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["NameFirstLetterPipe"]]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }, { type: _core_pipes_name_first_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["NameFirstLetterPipe"] }, { type: _src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ }),

/***/ "utdD":
/*!*****************************************************!*\
  !*** ./src/app/main/movie/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/data.service */ "cplz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src-app/core/services/auth-service */ "yWTt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function MovieComponent_div_32_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieComponent_div_32_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeComment(comment_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieComponent_div_32_div_6_Template, 1, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r1.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r1.commentText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser && comment_r1.userId === ctx_r0.currentUser.id);
} }
class MovieComponent {
    constructor(dataService, route, authService) {
        this.dataService = dataService;
        this.route = route;
        this.authService = authService;
        this.commentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
            if (!this.currentUser) {
                this.commentControl.disable();
            }
            else {
                this.commentControl.enable();
            }
        });
    }
    ngOnInit() {
        this.movie = this.route.snapshot.data.movieData;
        let comments = this.dataService.getCommentsFromStorage(this.movie.id);
        if (!comments) {
            this.dataService.saveComments(this.movie.id, this.movie.comments);
        }
        else {
            this.movie.comments = comments;
        }
    }
    saveComment() {
        const id = Math.max(...this.movie.comments.map(cm => cm.id)) + 1;
        const comment = {
            id: id,
            userId: this.currentUser.id,
            username: this.currentUser.username,
            commentText: this.commentControl.value
        };
        this.movie.comments.unshift(comment);
        this.dataService.saveComments(this.movie.id, this.movie.comments);
        this.commentControl.patchValue('');
    }
    removeComment(commentId) {
        this.movie.comments = this.movie.comments.filter(x => x.id !== commentId);
        this.dataService.saveComments(this.movie.id, this.movie.comments);
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 33, vars: 8, consts: [[1, "movie-container"], [1, "movie"], ["routerLink", "/home", 1, "back-button"], [1, "movie-poster"], ["alt", "", 3, "src"], [1, "movie-info"], [1, "name"], [1, "info-title"], [1, "info-content"], [1, "country"], [1, "genre"], [1, "description"], [1, "comments"], [1, "comments-title"], [1, "comment-input"], [1, "input"], ["name", "", "id", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439...", 3, "formControl"], ["mat-button", "", 1, "publish-button", 3, "disabled", "click"], ["class", "comment-block", 4, "ngFor", "ngForOf"], [1, "comment-block"], [1, "comment"], [1, "comment-username"], [1, "comment-text"], ["class", "remove-comment-button", 3, "click", 4, "ngIf"], [1, "remove-comment-button", 3, "click"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0442\u0440\u0430\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0416\u0430\u043D\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieComponent_Template_button_click_30_listener() { return ctx.saveComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MovieComponent_div_32_Template, 7, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.movie.moviePosterUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.commentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie.comments);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@charset \"UTF-8\";\n.movie-container[_ngcontent-%COMP%] {\n  margin-top: 52px;\n}\n.movie[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n  height: 370px;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.movie-poster[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 370px;\n  margin: 0 120px 0 97px;\n}\n.movie-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 370px;\n}\n.movie-info[_ngcontent-%COMP%] {\n  height: 370px;\n}\n.movie-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .movie-info[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%], .movie-info[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%] {\n  width: 584px;\n  height: 24px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: baseline;\n  margin-bottom: 16px;\n}\n.movie-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%], .movie-info[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%], .movie-info[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  font-family: Rubik, serif;\n  font-size: 20px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n.movie-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.info-title[_ngcontent-%COMP%] {\n  width: 80px;\n  margin-right: 24px;\n}\n.description[_ngcontent-%COMP%] {\n  margin-top: 23px;\n}\n.comments[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.comments[_ngcontent-%COMP%]   .comments-title[_ngcontent-%COMP%] {\n  width: 137px;\n  height: 24px;\n  font-family: Rubik, serif;\n  font-size: 20px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #333333;\n  margin-bottom: 24px;\n}\n.comments[_ngcontent-%COMP%]   .comment-block[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-flow: row nowrap;\n  margin-left: 15px;\n}\n.comments[_ngcontent-%COMP%]   .comment-block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 780px;\n  padding: 16px;\n  border-radius: 8px;\n  background-color: #f2f2f2;\n  margin-right: 15px;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.comments[_ngcontent-%COMP%]   .comment-block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-username[_ngcontent-%COMP%] {\n  height: 19px;\n  margin-bottom: 8px;\n}\n.comments[_ngcontent-%COMP%]   .comment-block[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\n  min-height: 19px;\n}\n.comments[_ngcontent-%COMP%]   .comment-block[_ngcontent-%COMP%]   .remove-comment-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.comments[_ngcontent-%COMP%]   .comment-block[_ngcontent-%COMP%]   .remove-comment-button[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\u274C\";\n  font-size: 15px;\n  color: #fff;\n  line-height: 15px;\n  text-align: center;\n}\n.comments[_ngcontent-%COMP%]   .comment-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  margin-left: 190px;\n}\n.comments[_ngcontent-%COMP%]   .comment-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 780px;\n  height: 110px;\n  margin: 0 16px 0 0;\n  border-radius: 8px;\n  background: rgba(229, 38, 30, 0.15);\n}\n.comments[_ngcontent-%COMP%]   .comment-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin: 16px;\n  width: 748px;\n  height: 78px;\n  background: transparent;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n  font-family: Rubik;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n.comments[_ngcontent-%COMP%]   .comment-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #e5261e;\n}\n.comments[_ngcontent-%COMP%]   .comment-input[_ngcontent-%COMP%]   .publish-button[_ngcontent-%COMP%] {\n  width: 174px;\n  height: 38px;\n  color: white;\n  background: red;\n}\n.back-button[_ngcontent-%COMP%] {\n  color: red;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.5) scaleY(1.8);\n  cursor: w-resize;\n  outline: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vdmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGdCQUFBO0FBRUY7QUFHQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQURKO0FBS0E7RUFDRSxhQUFBO0FBRkY7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSE47QUFRSTtFQUNFLGdCQUFBO0FBTk47QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVJGO0FBV0E7RUFDRSxnQkFBQTtBQVJGO0FBYUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQVZGO0FBWUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWEo7QUFhSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFYTjtBQWFNO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBWlI7QUFlTTtFQUNFLGdCQUFBO0FBYlI7QUFpQkk7RUFDRSxrQkFBQTtBQWZOO0FBaUJNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWZSO0FBb0JFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFsQko7QUFvQkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQWxCTjtBQW9CTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBSUEsZ0JBQUE7RUFFQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXJCUjtBQXVCUTtFQUNFLGNBQUE7QUFyQlY7QUEwQkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBeEJOO0FBNkJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBMUJGIiwiZmlsZSI6Im1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUycHg7XG59XG5cbi8vbW92aWUgcGFydFxuXG4ubW92aWUge1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAvL21hcmdpbjogMzBweCA1MHB4IDYwcHggMjBweDtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbn1cblxuLm1vdmllLXBvc3RlciB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgbWFyZ2luOiAwIDEyMHB4IDAgOTdweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICB9XG59XG5cbi5tb3ZpZS1pbmZvIHtcbiAgaGVpZ2h0OiAzNzBweDtcblxuICAubmFtZSwgLmNvdW50cnksIC5nZW5yZSB7XG4gICAgd2lkdGg6IDU4NHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuXG4gICAgLmluZm8tY29udGVudCB7XG4gICAgICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICB9XG5cbiAgLm5hbWUge1xuICAgIC5pbmZvLWNvbnRlbnQge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cbn1cblxuLmluZm8tdGl0bGUge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuXG4vL2NvbW1lbnRzIHBhcnRcblxuLmNvbW1lbnRzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuXG4gIC5jb21tZW50cy10aXRsZSB7XG4gICAgd2lkdGg6IDEzN3B4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LWZhbWlseTogUnViaWssIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuY29tbWVudC1ibG9jayB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgIC5jb21tZW50IHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogNzgwcHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG5cbiAgICAgIC5jb21tZW50LXVzZXJuYW1lIHtcblxuICAgICAgICBoZWlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgLmNvbW1lbnQtdGV4dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE5cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlbW92ZS1jb21tZW50LWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgY29udGVudDogXCJcXDI3NGNcIjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29tbWVudC1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xuXG4gICAgLmlucHV0IHtcbiAgICAgIHdpZHRoOiA3ODBweDtcbiAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICBtYXJnaW46IDAgMTZweCAwIDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCNlNTI2MWUsIDAuMTUpO1xuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgd2lkdGg6IDc0OHB4O1xuICAgICAgICBoZWlnaHQ6IDc4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcblxuICAgICAgICBmb250LWZhbWlseTogUnViaWs7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAjZTUyNjFlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnB1Ymxpc2gtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxNzRweDtcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG4gIH1cbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHNjYWxlWSgxLjgpO1xuICBjdXJzb3I6IHctcmVzaXplO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie',
                templateUrl: './movie.component.html',
                styleUrls: ['./movie.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main/main-content/main-content.component */ "ZPXc");
/* harmony import */ var _core_providers_movie_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/providers/movie-resolver.service */ "x/u7");
/* harmony import */ var _src_app_core_providers_movies_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src-app/core/providers/movies-resolver.service */ "PUkM");







// import { }
const routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: _main_main_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_2__["MainContentComponent"],
        resolve: {
            moviesData: _src_app_core_providers_movies_resolver_service__WEBPACK_IMPORTED_MODULE_4__["MoviesResolverService"]
        }
    },
    {
        path: 'movie/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./main/movie/movie.module */ "rzXE")).then(m => m.MovieModule),
        // loadChildren: () => import('./main/movie/movie.module').then(m => m.MovieModule),
        resolve: {
            movieData: _core_providers_movie_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MovieResolverService"]
        }
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vePu":
/*!********************************************************************!*\
  !*** ./src/app/main/auth-modal/auth-modal/auth-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: AuthModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModalComponent", function() { return AuthModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/user */ "3nhm");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth-service */ "yWTt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












class AuthModalComponent {
    constructor(dialogRef, authService, data) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.data = data;
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
    }
    signIn() {
        const [fName, lName] = this.userName.value.split(' ', 2);
        const user = new _core_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]({
            id: 1,
            username: this.userName.value,
            password: this.password.value,
            firstName: fName,
            lastName: lName
        });
        this.authService.login(user);
        this.dialogRef.close();
    }
}
AuthModalComponent.ɵfac = function AuthModalComponent_Factory(t) { return new (t || AuthModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AuthModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthModalComponent, selectors: [["app-auth-modal"]], decls: 13, vars: 2, consts: [[1, "auth-dialog"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "auth-inputs"], ["matInput", "", "placeholder", "\u041B\u043E\u0433\u0438\u043D", 3, "formControl"], ["type", "password", "matInput", "", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", 3, "formControl"], [1, "login-button"], ["mat-button", "", 3, "click"]], template: function AuthModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthModalComponent_Template_button_click_11_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0412\u043E\u0439\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.password);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".login-button[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.auth-dialog[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\n.auth-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: red;\n  color: white;\n}\n\n.auth-dialog[_ngcontent-%COMP%]   .auth-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2F1dGgtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0FBQUoiLCJmaWxlIjoiYXV0aC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1idXR0b257XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5hdXRoLWRpYWxvZ3tcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYXV0aC1pbnB1dHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-modal',
                templateUrl: './auth-modal.component.html',
                styleUrls: ['./auth-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "x/u7":
/*!**********************************************************!*\
  !*** ./src/app/core/providers/movie-resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: MovieResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieResolverService", function() { return MovieResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "cplz");




class MovieResolverService {
    constructor(ds) {
        this.ds = ds;
    }
    resolve(route, state) {
        return this.ds.getMovie(parseInt(route.params.id, 10)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(movieData => movieData));
    }
}
MovieResolverService.ɵfac = function MovieResolverService_Factory(t) { return new (t || MovieResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MovieResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieResolverService, factory: MovieResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "yWTt":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth-service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AuthService {
    constructor() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        const currentUser = localStorage.getItem('currentUser');
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](currentUser ? JSON.parse(currentUser) : null);
        this.currentUser = this.currentUserSubject.asObservable();
        this.loggedIn.next(!!(this.currentUserSubject.value));
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.loggedIn.next(true);
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.loggedIn.next(false);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map