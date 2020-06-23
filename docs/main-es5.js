function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./comps/giraf-parent/giraf-parent.component */
    "./src/app/comps/giraf-parent/giraf-parent.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'girafs';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "giraf-parent");
        }
      },
      directives: [_comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_1__["GirafParentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/giraf-parent/giraf-parent.component */
    "./src/app/comps/giraf-parent/giraf-parent.component.ts");
    /* harmony import */


    var _comps_giraf_child_giraf_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/giraf-child/giraf-child.component */
    "./src/app/comps/giraf-child/giraf-child.component.ts");
    /* harmony import */


    var _comps_lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/lebel-span/lebel-span.component */
    "./src/app/comps/lebel-span/lebel-span.component.ts");
    /* harmony import */


    var _comps_detils_detils_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/detils/detils.component */
    "./src/app/comps/detils/detils.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_3__["GirafParentComponent"], _comps_giraf_child_giraf_child_component__WEBPACK_IMPORTED_MODULE_4__["GirafChildComponent"], _comps_lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_5__["LebelSpanComponent"], _comps_detils_detils_component__WEBPACK_IMPORTED_MODULE_6__["DetilsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_3__["GirafParentComponent"], _comps_giraf_child_giraf_child_component__WEBPACK_IMPORTED_MODULE_4__["GirafChildComponent"], _comps_lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_5__["LebelSpanComponent"], _comps_detils_detils_component__WEBPACK_IMPORTED_MODULE_6__["DetilsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_3__["GirafParentComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_giraf_parent_giraf_parent_component__WEBPACK_IMPORTED_MODULE_3__["GirafParentComponent"], _comps_giraf_child_giraf_child_component__WEBPACK_IMPORTED_MODULE_4__["GirafChildComponent"], _comps_lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_5__["LebelSpanComponent"], _comps_detils_detils_component__WEBPACK_IMPORTED_MODULE_6__["DetilsComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/comps/detils/detils.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/comps/detils/detils.component.ts ***!
    \**************************************************/

  /*! exports provided: DetilsComponent */

  /***/
  function srcAppCompsDetilsDetilsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetilsComponent", function () {
      return DetilsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lebel-span/lebel-span.component */
    "./src/app/comps/lebel-span/lebel-span.component.ts");

    function DetilsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "lebel-span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "lebel-span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx_r0.j.isBossy ? " Bossy" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx_r0.j.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.j.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("span", ctx_r0.j.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("span", ctx_r0.j.color);
      }
    }

    var DetilsComponent = /*#__PURE__*/function () {
      function DetilsComponent() {
        _classCallCheck(this, DetilsComponent);
      }

      _createClass(DetilsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetilsComponent;
    }();

    DetilsComponent.ɵfac = function DetilsComponent_Factory(t) {
      return new (t || DetilsComponent)();
    };

    DetilsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetilsComponent,
      selectors: [["app-detils"]],
      inputs: {
        j: "j"
      },
      decls: 2,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], ["lebel", "height ", 3, "span"], ["lebel", "color ", 3, "span"]],
      template: function DetilsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetilsComponent_div_0_Template, 5, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.j);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_2__["LebelSpanComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2RldGlscy9kZXRpbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetilsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detils',
          templateUrl: './detils.component.html',
          styleUrls: ['./detils.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/giraf-child/giraf-child.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/comps/giraf-child/giraf-child.component.ts ***!
    \************************************************************/

  /*! exports provided: GirafChildComponent */

  /***/
  function srcAppCompsGirafChildGirafChildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirafChildComponent", function () {
      return GirafChildComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lebel-span/lebel-span.component */
    "./src/app/comps/lebel-span/lebel-span.component.ts");

    var GirafChildComponent = /*#__PURE__*/function () {
      function GirafChildComponent() {
        _classCallCheck(this, GirafChildComponent);

        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // @Output() rendomColorNote = new EventEmitter<null>()

        this.dbclickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(GirafChildComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//   setTimeout(() => {
          //     this.rendomColorNote.emit()
          //   }, 1000*this.j.id);
        }
      }]);

      return GirafChildComponent;
    }();

    GirafChildComponent.ɵfac = function GirafChildComponent_Factory(t) {
      return new (t || GirafChildComponent)();
    };

    GirafChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GirafChildComponent,
      selectors: [["giraf-child"]],
      inputs: {
        j: "j"
      },
      outputs: {
        clickNote: "clickNote",
        deleteNote: "deleteNote",
        dbclickNote: "dbclickNote"
      },
      decls: 7,
      vars: 6,
      consts: [[3, "click", "dblclick"], ["lebel", "height ", 3, "span"], ["lebel", "color ", 3, "span"], [3, "click"]],
      template: function GirafChildComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GirafChildComponent_Template_div_click_0_listener() {
            return ctx.clickNote.emit();
          })("dblclick", function GirafChildComponent_Template_div_dblclick_0_listener() {
            return ctx.dbclickNote.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "lebel-span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "lebel-span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GirafChildComponent_Template_button_click_5_listener() {
            return ctx.deleteNote.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx.j.isBossy ? " Bossy" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx.j.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.j.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("span", ctx.j.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("span", ctx.j.color);
        }
      },
      directives: [_lebel_span_lebel_span_component__WEBPACK_IMPORTED_MODULE_1__["LebelSpanComponent"]],
      styles: [".j-item[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    padding: 4px;\r\n    margin:auto;\r\n    text-align: center;\r\n    border: 3px solid skyblue;\r\n    background: gold;\r\n    color: red\r\n}\r\n\r\n.j-item.Bossy[_ngcontent-%COMP%]{\r\n    background:greenyellow\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWYtY2hpbGQvZ2lyYWYtY2hpbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2lyYWYtY2hpbGQvZ2lyYWYtY2hpbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qLWl0ZW17XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHNreWJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kOiBnb2xkO1xyXG4gICAgY29sb3I6IHJlZFxyXG59XHJcblxyXG4uai1pdGVtLkJvc3N5e1xyXG4gICAgYmFja2dyb3VuZDpncmVlbnllbGxvd1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GirafChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'giraf-child',
          templateUrl: './giraf-child.component.html',
          styleUrls: ['./giraf-child.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dbclickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/giraf-parent/giraf-parent.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/comps/giraf-parent/giraf-parent.component.ts ***!
    \**************************************************************/

  /*! exports provided: GirafParentComponent, jiraff */

  /***/
  function srcAppCompsGirafParentGirafParentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirafParentComponent", function () {
      return GirafParentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jiraff", function () {
      return jiraff;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function GirafParentComponent_giraf_child_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "giraf-child", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNote", function GirafParentComponent_giraf_child_2_Template_giraf_child_clickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var giraf_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectedg = giraf_r1;
        })("deleteNote", function GirafParentComponent_giraf_child_2_Template_giraf_child_deleteNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var giraf_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deletefn(giraf_r1.id);
        })("dbclickNote", function GirafParentComponent_giraf_child_2_Template_giraf_child_dbclickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var giraf_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.rendColor = giraf_r1.color;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var giraf_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", giraf_r1);
      }
    }

    var GirafParentComponent = /*#__PURE__*/function () {
      function GirafParentComponent() {
        _classCallCheck(this, GirafParentComponent);

        this.jiraffArray = [{
          id: 1,
          name: "avi",
          height: 2.3,
          color: "blue",
          isBossy: false
        }, {
          id: 2,
          name: "verda",
          height: 2.7,
          color: "red",
          isBossy: true
        }, {
          id: 3,
          name: "shuki",
          height: 5.3,
          color: "green",
          isBossy: false
        }, {
          id: 4,
          name: "franko",
          height: 7.5,
          color: "blue",
          isBossy: false
        }, {
          id: 5,
          name: "gil",
          height: 4.8,
          color: "red",
          isBossy: false
        }, {
          id: 6,
          name: "iva",
          height: 1.2,
          color: "green",
          isBossy: true
        }, {
          id: 7,
          name: "yoyo",
          height: 8.3,
          color: "brown",
          isBossy: false
        }, {
          id: 8,
          name: "brak",
          height: 5.6,
          color: "crimson",
          isBossy: false
        }, {
          id: 9,
          name: "fred",
          height: 7.2,
          color: "blue",
          isBossy: false
        }, {
          id: 10,
          name: "nana",
          height: 6.0,
          color: "brown",
          isBossy: true
        }];
      }

      _createClass(GirafParentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deletefn",
        value: function deletefn(gid) {
          for (var i = 0; i < this.jiraffArray.length; i++) {
            if (gid == this.jiraffArray[i].id) {
              this.jiraffArray.splice(i, 1);
              this.selectedg = null;
            }
          }
        }
      }]);

      return GirafParentComponent;
    }();

    GirafParentComponent.ɵfac = function GirafParentComponent_Factory(t) {
      return new (t || GirafParentComponent)();
    };

    GirafParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GirafParentComponent,
      selectors: [["giraf-parent"]],
      decls: 4,
      vars: 4,
      consts: [[1, "d"], [3, "j", "clickNote", "deleteNote", "dbclickNote", 4, "ngFor", "ngForOf"], [3, "j"], [3, "j", "clickNote", "deleteNote", "dbclickNote"]],
      template: function GirafParentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GirafParentComponent_giraf_child_2_Template, 1, 1, "giraf-child", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-detils", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.rendColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", ctx.selectedg);
        }
      },
      styles: [".d[_ngcontent-%COMP%]{\r\n   display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWYtcGFyZW50L2dpcmFmLXBhcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csYUFBYTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dpcmFmLXBhcmVudC9naXJhZi1wYXJlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ke1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GirafParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'giraf-parent',
          templateUrl: './giraf-parent.component.html',
          styleUrls: ['./giraf-parent.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var jiraff = function jiraff() {
      _classCallCheck(this, jiraff);
    };
    /***/

  },

  /***/
  "./src/app/comps/lebel-span/lebel-span.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/comps/lebel-span/lebel-span.component.ts ***!
    \**********************************************************/

  /*! exports provided: LebelSpanComponent */

  /***/
  function srcAppCompsLebelSpanLebelSpanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LebelSpanComponent", function () {
      return LebelSpanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LebelSpanComponent = /*#__PURE__*/function () {
      function LebelSpanComponent() {
        _classCallCheck(this, LebelSpanComponent);

        this.lebel = "";
        this.span = "";
      }

      _createClass(LebelSpanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LebelSpanComponent;
    }();

    LebelSpanComponent.ɵfac = function LebelSpanComponent_Factory(t) {
      return new (t || LebelSpanComponent)();
    };

    LebelSpanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LebelSpanComponent,
      selectors: [["lebel-span"]],
      inputs: {
        lebel: "lebel",
        span: "span"
      },
      decls: 5,
      vars: 2,
      template: function LebelSpanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lebel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.span);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2xlYmVsLXNwYW4vbGViZWwtc3Bhbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LebelSpanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lebel-span',
          templateUrl: './lebel-span.component.html',
          styleUrls: ['./lebel-span.component.css']
        }]
      }], function () {
        return [];
      }, {
        lebel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        span: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\girafs\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map