(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  letter-spacing: .3rem;\n  text-transform: uppercase;\n  text-align: center;\n  cursor: pointer;\n}\n\na[ng-reflect-router-link] {\n  color: black;\n  font-weight: bold;\n  text-decoration: none;\n}\n\na[ng-reflect-router-link]:hover {\n  text-decoration:underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbbmctcmVmbGVjdC1yb3V0ZXItbGlua10ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmFbbmctcmVmbGVjdC1yb3V0ZXItbGlua106aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <a [routerLink]=\"['/']\">\n    <h1 class=\"header-title\">\n      Welcome to {{ title }}\n    </h1>\n  </a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'News-Client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _services_get_news_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/get-news.service */ "./src/app/services/get-news.service.ts");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "./src/app/components/news-list/news-list.component.ts");
/* harmony import */ var _directives_fresh_news_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/fresh-news.directive */ "./src/app/directives/fresh-news.directive.ts");
/* harmony import */ var _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/news-item/news-item.component */ "./src/app/components/news-item/news-item.component.ts");
/* harmony import */ var _components_display_news_display_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/display-news/display-news.component */ "./src/app/components/display-news/display-news.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_read_news_read_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/read-news/read-news.component */ "./src/app/components/read-news/read-news.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_news_label_news_label_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/news-label/news-label.component */ "./src/app/components/news-label/news-label.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _resolvers_news_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/news-resolver */ "./src/app/resolvers/news-resolver.ts");



















var appRoutes = [
    {
        path: 'news',
        component: _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_7__["NewsListComponent"],
        resolve: { allNews: _resolvers_news_resolver__WEBPACK_IMPORTED_MODULE_17__["NewsResolver"] }
    },
    { path: 'post/:id', component: _components_read_news_read_news_component__WEBPACK_IMPORTED_MODULE_12__["ReadNewsComponent"], data: { breadcrumbs: 'Current news' } },
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: '**', component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundPageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_7__["NewsListComponent"],
                _directives_fresh_news_directive__WEBPACK_IMPORTED_MODULE_8__["FreshNewsDirective"],
                _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_9__["NewsItemComponent"],
                _components_display_news_display_news_component__WEBPACK_IMPORTED_MODULE_10__["DisplayNewsComponent"],
                _components_read_news_read_news_component__WEBPACK_IMPORTED_MODULE_12__["ReadNewsComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundPageComponent"],
                _components_news_label_news_label_component__WEBPACK_IMPORTED_MODULE_14__["NewsLabelComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                _resolvers_news_resolver__WEBPACK_IMPORTED_MODULE_17__["NewsResolver"],
                _services_get_news_service__WEBPACK_IMPORTED_MODULE_6__["GetNewsService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/display-news/display-news.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/display-news/display-news.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1uZXdzL2Rpc3BsYXktbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/display-news/display-news.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-news/display-news.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  display-news works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/display-news/display-news.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/display-news/display-news.component.ts ***!
  \*******************************************************************/
/*! exports provided: DisplayNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayNewsComponent", function() { return DisplayNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayNewsComponent = /** @class */ (function () {
    function DisplayNewsComponent() {
    }
    DisplayNewsComponent.prototype.ngOnInit = function () {
    };
    DisplayNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-news',
            template: __webpack_require__(/*! ./display-news.component.html */ "./src/app/components/display-news/display-news.component.html"),
            styles: [__webpack_require__(/*! ./display-news.component.css */ "./src/app/components/display-news/display-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayNewsComponent);
    return DisplayNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/news-item/news-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/news-item/news-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-header{\n  margin-top: 5px;\n  font-size:  1.2rem;\n  font-weight: bold;\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  letter-spacing: .05rem;\n}\n.news-time{\n  text-align: right;\n  font-family: monospace;\n  font-size: 1rem;\n}\n.old-news {\n  background: #333;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyREFBMkQ7RUFDM0Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1pdGVtL25ld3MtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtaGVhZGVye1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogIDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLjA1cmVtO1xufVxuLm5ld3MtdGltZXtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm9sZC1uZXdzIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/news-item/news-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/news-item/news-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"news-header\">{{header}}</p>\n<p class=\"news-time\">{{publishedAt | date:'medium'}}</p>\n\n"

/***/ }),

/***/ "./src/app/components/news-item/news-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/news-item/news-item.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsItemComponent = /** @class */ (function () {
    function NewsItemComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsItemComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsItemComponent.prototype, "publishedAt", void 0);
    NewsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-item',
            template: __webpack_require__(/*! ./news-item.component.html */ "./src/app/components/news-item/news-item.component.html"),
            styles: [__webpack_require__(/*! ./news-item.component.css */ "./src/app/components/news-item/news-item.component.css")]
        })
    ], NewsItemComponent);
    return NewsItemComponent;
}());



/***/ }),

/***/ "./src/app/components/news-label/news-label.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/news-label/news-label.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-label{\n  display: inline-block;\n  font-weight: bold;\n  padding: 3px 5px;\n  border: 1px solid #333;\n  border-radius: 10px 5px;\n  margin: 3px;\n}\n\n.content {\n  font-weight: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWxhYmVsL25ld3MtbGFiZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWxhYmVsL25ld3MtbGFiZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWxhYmVse1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDVweDtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/news-label/news-label.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/news-label/news-label.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-label\" *ngIf=\"content\">\n  <div *ngIf=\"isLink===true; else textTemplate\">\n    <a [href]=\"content\" target=\"_blank\">{{label}}</a>\n  </div>\n</div>\n\n<ng-template #textTemplate>\n  <span *ngIf=\"content\">{{label}}:&nbsp;</span><span class=\"content\">{{content}}</span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/news-label/news-label.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/news-label/news-label.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsLabelComponent", function() { return NewsLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsLabelComponent = /** @class */ (function () {
    function NewsLabelComponent() {
        this.isLink = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsLabelComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsLabelComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NewsLabelComponent.prototype, "isLink", void 0);
    NewsLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-label',
            template: __webpack_require__(/*! ./news-label.component.html */ "./src/app/components/news-label/news-label.component.html"),
            styles: [__webpack_require__(/*! ./news-label.component.css */ "./src/app/components/news-label/news-label.component.css")]
        })
    ], NewsLabelComponent);
    return NewsLabelComponent;
}());



/***/ }),

/***/ "./src/app/components/news-list/news-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-list {\n  list-style: none;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.news-list li {\n  box-sizing:content-box;\n  padding: 10px;\n  background: #eee;\n  border: #333;\n  border-left: 3px transparent solid;\n  margin: 5px;\n}\n\n.news-list li:hover {\n  position: relative;\n  left: 0px;\n  top: 0px;\n  border-left: 3px goldenrod solid;\n  background: white;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, .3);\n  cursor: pointer;\n}\n\n.search-panel {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.2rem;\n  align-items: center;\n  justify-content: center;\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin-bottom: 0.5em;\n}\n\n.search-panel input {\n  margin-left: 5px;\n  font-size: 1.2rem;\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.api-reminder {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMkRBQTJEO0VBQzNELG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5ld3MtbGlzdCBsaSB7XG4gIGJveC1zaXppbmc6Y29udGVudC1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlcjogIzMzMztcbiAgYm9yZGVyLWxlZnQ6IDNweCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5uZXdzLWxpc3QgbGk6aG92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggZ29sZGVucm9kIHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uc2VhcmNoLXBhbmVsIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4uYXBpLXJlbWluZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/news-list/news-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-panel\">\n  <label for=\"seachField\">Search:</label>\n  <input id=\"seachField\" placeholder=\"type something here\" [formControl]=\"searchControl\">\n</div>\n<ul class=\"news-list\">\n  <li *ngFor=\"let item of news | filter : searchValue; let id=index;\"\n    appFreshNews\n    [publishedAt]=\"item.publishedAt\"\n    [routerLink]=\"['/post', item.title]\">\n    <app-news-item [header]=\"item.title\" [publishedAt]=\"item.publishedAt\"></app-news-item>\n  </li>\n</ul>\n<footer class=\"api-reminder\">\n  <a href=\"https://newsapi.org\">https://newsapi.org</a>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/news-list/news-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/get-news.service */ "./src/app/services/get-news.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_throttleTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/throttleTime */ "./node_modules/rxjs-compat/_esm5/add/operator/throttleTime.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(getNewsService, route) {
        this.getNewsService = getNewsService;
        this.route = route;
        this.searchValue = '';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formCtrlSub = this.searchControl.valueChanges
            .debounceTime(1000)
            .subscribe(function (newValue) { return _this.searchValue = newValue; });
        this.news = this.route.snapshot.data.allNews.articles;
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.formCtrlSub.unsubscribe();
    };
    NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/components/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.css */ "./src/app/components/news-list/news-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_get_news_service__WEBPACK_IMPORTED_MODULE_2__["GetNewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/components/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/components/not-found-page/not-found-page.component.css")]
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/components/read-news/read-news.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/read-news/read-news.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title, .info {\n  text-align: center;\n}\n\n.image {\n  flex: 1;\n}\n\n.content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n}\n\n.content-text {\n  flex: 1;\n  min-width: 200px;\n  padding: 5px;\n  margin: 0px;\n}\n\nimg {\n  height: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWFkLW5ld3MvcmVhZC1uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWFkLW5ld3MvcmVhZC1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUsIC5pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Uge1xuICBmbGV4OiAxO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudC10ZXh0IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/read-news/read-news.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/read-news/read-news.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentNews$\">\n  <h2 class=\"title\">{{currentNews$.title}}</h2>\n  <div class=\"info\">\n    <app-news-label label=\"Agency\" [content]=\"currentNews$.source.name\"></app-news-label>\n    <app-news-label label=\"Author\" [content]=\"currentNews$.author\"></app-news-label>\n    <app-news-label label=\"Published at\" [content]=\"currentNews$.publishedAt | date:'medium'\"></app-news-label>\n    <app-news-label label=\"Source\" [content]=\"currentNews$.url\" [isLink]=\"true\"></app-news-label>\n    <p>{{currentNews$.description}}</p>\n  </div>\n  <hr/>\n  <div class=\"content\">\n    <img *ngIf=\"currentNews$.urlToImage !== null\" [src]=\"currentNews$.urlToImage\" [alt]=\"currentNews$.title\">\n    <p *ngIf=\"currentNews$.content\" class=\"content-text\">{{currentNews$.content}}</p>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/components/read-news/read-news.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/read-news/read-news.component.ts ***!
  \*************************************************************/
/*! exports provided: ReadNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadNewsComponent", function() { return ReadNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_get_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/get-news.service */ "./src/app/services/get-news.service.ts");




var ReadNewsComponent = /** @class */ (function () {
    function ReadNewsComponent(getNewsService, route, router) {
        this.getNewsService = getNewsService;
        this.route = route;
        this.router = router;
    }
    ReadNewsComponent.prototype.ngOnInit = function () {
        this.currentNews$ = this.getNewsService.getNewsById(this.route.snapshot.params['id']);
    };
    ReadNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-read-news',
            template: __webpack_require__(/*! ./read-news.component.html */ "./src/app/components/read-news/read-news.component.html"),
            styles: [__webpack_require__(/*! ./read-news.component.css */ "./src/app/components/read-news/read-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_get_news_service__WEBPACK_IMPORTED_MODULE_3__["GetNewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReadNewsComponent);
    return ReadNewsComponent;
}());



/***/ }),

/***/ "./src/app/directives/fresh-news.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/fresh-news.directive.ts ***!
  \****************************************************/
/*! exports provided: FreshNewsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshNewsDirective", function() { return FreshNewsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreshNewsDirective = /** @class */ (function () {
    function FreshNewsDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
    }
    FreshNewsDirective.prototype.ngOnChanges = function () {
        var now = new Date();
        var creationDate = new Date(this.publishedAt);
        var hourDifference = Math.round((now.getTime() - creationDate.getTime()) / (1 * 3600 * 1000));
        var color = "hsla(" + hourDifference * 12 + ", 100%, 50%, 0.3)";
        if (color) {
            this.renderer.setStyle(this.element.nativeElement, 'background', "" + color);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FreshNewsDirective.prototype, "publishedAt", void 0);
    FreshNewsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appFreshNews]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FreshNewsDirective);
    return FreshNewsDirective;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.content && item.content.toLowerCase().includes(searchText)) {
                console.log(item.content);
            }
            return item.title.toLowerCase().includes(searchText)
                || (item.content && item.content.toLowerCase().includes(searchText));
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/resolvers/news-resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/news-resolver.ts ***!
  \********************************************/
/*! exports provided: NewsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsResolver", function() { return NewsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/get-news.service */ "./src/app/services/get-news.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");






var NewsResolver = /** @class */ (function () {
    function NewsResolver(getNewsService) {
        this.getNewsService = getNewsService;
    }
    NewsResolver.prototype.resolve = function (route) {
        return this.getNewsService.getTopNews().catch(function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of('data not available at this time');
        });
    };
    NewsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_get_news_service__WEBPACK_IMPORTED_MODULE_2__["GetNewsService"]])
    ], NewsResolver);
    return NewsResolver;
}());



/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = '66b8cc914e9e45539b937e6934653281';
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/get-news.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-news.service.ts ***!
  \**********************************************/
/*! exports provided: GetNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsService", function() { return GetNewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GetNewsService = /** @class */ (function () {
    function GetNewsService(http, router) {
        this.http = http;
        this.router = router;
    }
    GetNewsService.prototype.getTopNews = function () {
        var _this = this;
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { _this.news = response.articles; }));
    };
    GetNewsService.prototype.getNewsById = function (id) {
        if (this.news)
            return this.news.find(function (item) { return item.title === id; });
        else {
            this.router.navigate(['/']);
        }
    };
    GetNewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GetNewsService);
    return GetNewsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniil\Desktop\Task\NewsClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map