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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"navbar navbar-dark bg-primary flex-md-row flex-column\">\n  <a class=\"navbar-brand text-monospace\" style=\"font-size: 1.5rem;\">\n    HeroMock\n  </a>\n  <ul class=\"navbar-nav ml-md-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://github.com/HeroMock/Reed-Mock-Server\" target=\"_blank\" rel=\"noopener\"\n        aria-label=\"GitHub\">\n        <svg style=\"width: 1.5rem; height: 1.5rem;\" xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\"\n          viewBox=\"0 0 512 499.36\" role=\"img\" focusable=\"false\">\n          <title>GitHub</title>\n          <path fill=\"currentColor\" fill-rule=\"evenodd\"\n            d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\">\n          </path>\n        </svg>\n      </a>\n    </li>\n  </ul>\n</header>\n\n<div class=\"container-fluid p-5\">\n  <div class=\"d-flex align-items-center\">\n    <span>Mock server is running at: <a target=\"_blank\" [href]=\"mockServerUrl\">{{ mockServerUrl }}</a></span>\n    <button class=\"ml-auto mb-3 btn btn-light\" title=\"Show config\" (click)=\"fullConfigModal.open()\">\n      <i class=\"fa fa-cog\"></i>\n    </button>\n  </div>\n  <div class=\"shadow p-3 mb-5 bg-white rounded position-relative\">\n    <div class=\"d-flex align-items-center mb-2\">\n      <label class=\"endpoints-label\">APIs</label>\n      <button class=\"btn btn-light ml-auto\" [disabled]=\"!isEnabled('serveApi')\"\n        (click)=\"openEndpointEditor(endpointEditModal, 'api')\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n    <api-endpoint *ngFor=\"let endpoint of apiEndpoints; let i = index\" type=\"api\" [index]=\"i\" [hasDetail]=\"true\" [endpoint]=\"endpoint\"\n      (onDataChange)=\"loadFullConfig()\">\n    </api-endpoint>\n  </div>\n\n  <div class=\"shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"d-flex align-items-center mb-2\">\n      <label class=\"endpoints-label\">Websockets</label>\n      <button class=\"btn btn-light ml-auto\" [disabled]=\"!isEnabled('serveWebsocket')\"\n        (click)=\"openEndpointEditor(endpointEditModal, 'ws')\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n    <api-endpoint *ngFor=\"let endpoint of wsEndpoints; let i = index\" type=\"ws\" [index]=\"i\" [hasDetail]=\"true\" [tagFields]=\"['type', 'interval']\"\n      [endpoint]=\"endpoint\" (onDataChange)=\"loadFullConfig()\">\n    </api-endpoint>\n  </div>\n\n  <div class=\"shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"d-flex align-items-center mb-2\">\n      <label class=\"endpoints-label\">Static</label>\n      <button class=\"btn btn-light ml-auto\" [disabled]=\"!isEnabled('serveStatic')\"\n        (click)=\"openEndpointEditor(endpointEditModal, 'static')\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n    <api-endpoint *ngFor=\"let endpoint of staticEndpoints; let i = index\" type=\"static\" [index]=\"i\" [tagFields]=\"['dirPath']\" [endpoint]=\"endpoint\"\n      (onDataChange)=\"loadFullConfig()\">\n    </api-endpoint>\n  </div>\n\n  <div class=\"shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"d-flex align-items-center mb-2\">\n      <label class=\"endpoints-label\">Proxy</label>\n      <button class=\"btn btn-light ml-auto\" [disabled]=\"!isEnabled('serveProxy')\"\n        (click)=\"openEndpointEditor(endpointEditModal, 'proxy')\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n    <api-endpoint *ngFor=\"let endpoint of proxyEndpoints; let i = index\" type=\"proxy\" [index]=\"i\" [tagFields]=\"['target']\" [endpoint]=\"endpoint\"\n      (onDataChange)=\"loadFullConfig()\">\n    </api-endpoint>\n  </div>\n\n  <config-edit-modal #fullConfigModal=\"configEditModal\" [data]=\"mockConfig\" title=\"Config\" configName=\"mock-server.json\"\n    (onSubmit)=\"submitFullConfig($event)\"></config-edit-modal>\n\n  <config-edit-modal #endpointEditModal=\"configEditModal\" [data]=\"endpointDefault[editingEndpointType]\" title=\"Config\"\n    configName=\"Endpoint Config\" [extraData]=\"templateDefault\" [extraTemplate]=\"extraEditTemplate\"\n    (onSubmit)=\"submitEndpoint($event)\"></config-edit-modal>\n\n  <ng-template #extraEditTemplate let-data=\"data\" let-onChange=\"onChange\">\n    <div class=\"form-group\" *ngIf=\"editingEndpointType === 'api' || editingEndpointType === 'ws'\">\n      <label>Template</label>\n      <textarea class=\"form-control\" rows=\"10\" [ngModel]=\"data\" (ngModelChange)=\"onChange($event)\"></textarea>\n    </div>\n  </ng-template>\n</div>\n<footer></footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/api-endpoint-item/api-endpoint-item.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/api-endpoint-item/api-endpoint-item.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsApiEndpointItemApiEndpointItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mb-3\" *ngIf=\"item\">\n    <label>{{ item.name }}</label>\n    <ng-container *ngFor=\"let api of item.apiList\">\n        <div class=\"shadow-sm mb-2\">\n            <div class=\"card-body\">\n                <div class=\"d-flex align-items-baseline\">\n                    <span *ngIf=\"api.method\" class=\"mr-3\" [ngClass]=\"tagClassMap[api.method]\" tagText>{{ api.method }}</span>\n                    <span style=\"font-size: 1.25em;\">{{ api.url }}</span>\n                    <span *ngIf=\"api.description\" class=\"ml-3 font-weight-light\">{{ api.description }}</span>\n                    <button class=\"ml-auto btn btn-sm\"\n                        [class.btn-outline-primary]=\"api.triable\" [disabled]=\"!api.triable\"\n                        (click)=\"tryApi(api)\">\n                        Try it out\n                    </button>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/api-endpoint/api-endpoint.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/api-endpoint/api-endpoint.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsApiEndpointApiEndpointComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mb-3\">\n    <div class=\"card-header d-flex align-items-center\" [class.ep-header-collapsable]=\"hasDetail\" (click)=\"expand()\">\n        <h5>{{ endpoint.endpoint || '/' }}</h5>\n        <ng-container *ngFor=\"let tag of tagTexts\">\n            <span *ngIf=\"tag\" class=\"ml-3 border-info text-info\" [tagText]=\"tag\"></span>\n        </ng-container>\n        <button class=\"btn btn-light ml-auto\" (click)=\"openEditor(editModal, $event);\">\n            <i class=\"fa fa-edit\"></i>\n        </button>\n        <button class=\"btn btn-light text-danger\" (click)=\"openDeleteConfirm(confirmModal, $event);\">\n            <i class=\"fa fa-trash-alt\"></i>\n        </button>\n        <i *ngIf=\"hasDetail\" class=\"ml-3 fa fa-chevron-down\"></i>\n    </div>\n    <div [ngbCollapse]=\"!isExpand\">\n        <div class=\"d-flex justify-content-center align-items-center\" style=\"min-height: 100px;\">\n            <loading *ngIf=\"isLoading\"></loading>\n            <div *ngIf=\"!isLoading\" class=\"card-body\">\n                <ng-container *ngFor=\"let item of endpointItems\">\n                    <ng-container *ngTemplateOutlet=\"endpointItem; context: { $implicit: item }\"></ng-container>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n\n<config-edit-modal #editModal=\"configEditModal\" [data]=\"endpoint\" [title]=\"type.toUpperCase() + ' ' + endpoint.endpoint\"\n    [loading]=\"loading\" [extraData]=\"fileData\" [extraTemplate]=\"extraEditTemplate\" (onSubmit)=\"submit($event)\">\n</config-edit-modal>\n\n<confirm-modal #confirmModal=\"confirmModal\" title=\"Delete Endpoint\"\n    [message]=\"'Are you sure to delete endponit ' + endpoint.endpoint\" (onConfirm)=\"deleteEndpoint()\">\n</confirm-modal>\n\n<ng-template #extraEditTemplate let-data=\"data\" let-onChange=\"onChange\">\n    <div *ngIf=\"type === 'api' || type === 'ws'\" class=\"form-group\">\n        <label>Template</label>\n        <textarea class=\"form-control\" rows=\"10\" [ngModel]=\"data\" (ngModelChange)=\"onChange($event)\"></textarea>\n    </div>\n</ng-template>\n<ng-template #endpointItem let-item>\n    <api-endpoint-item ngSwichCase=\"api\" [item]=\"item\"></api-endpoint-item>\n</ng-template>\n\n<ng-template #deleteModal>\n\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/config-edit-modal/config-edit-modal.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config-edit-modal/config-edit-modal.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConfigEditModalConfigEditModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{ title }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close(modal)\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div *ngIf=\"loading\" class=\"d-flex position-absolute h-100 w-100\" style=\"z-index: 1000;\">\n            <loading class=\"m-auto\"></loading>\n        </div>\n        <div class=\"form-group\" *ngIf=\"showConfigEditor\">\n            <label>{{ configName }}</label>\n            <json-editor [styleClass]=\"{ 'editor-lg': !extraTemplate }\" [options]=\"editorOptions\" [data]=\"data\" [editing]=\"editing\" (onChange)=\"onEditorChange($event)\"\n                (onError)=\"onEditorError($event)\">\n            </json-editor>\n        </div>\n\n        <ng-container *ngIf=\"extraTemplate\">\n            <ng-container *ngTemplateOutlet=\"extraTemplate; context: { data: extraData, onChange: onExtraChange }\"></ng-container>\n        </ng-container>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!canSubmit\" (click)=\"submit(modal)\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark lmn-ml-3\" (click)=\"close(modal)\">Close</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConfirmConfirmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close('cancel')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>{{ message }}</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('confirm')\">Confirm</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('cancel')\">Cancel</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEndpointEditModalEndpointEditModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{ title }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n                <label>Endpoint</label>\n                <input class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input class=\"form-control\" />\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!canSubmit\" (click)=\"submit()\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark lmn-ml-3\" (click)=\"modal.dismiss()\">Close</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center\">\n    <div class=\"spinner-grow text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag/tag.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag/tag.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTagTagComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "{{ tagText }}\n<ng-content></ng-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(service) {
        _classCallCheck(this, AppComponent);

        this.service = service;
        this.title = 'reed-mock-admin';
        this.endpointDefault = {
          api: {
            endpoint: '/api',
            options: {}
          },
          ws: {
            endpoint: '/ws',
            type: 'timer | fileWatcher',
            interval: '500 (Only applicable when type is timer)',
            options: {}
          },
          "static": {
            endpoint: '/',
            indexPages: ['index.html', 'index.htm'],
            dirPath: './static'
          },
          proxy: {
            endpoint: '/proxy',
            target: 'http://hostname',
            options: {}
          }
        };
        this.templateDefault = "{\n  \"hello\": \"world\"\n}";
        this.editingEndpointType = '';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFullConfig();
        }
      }, {
        key: "loadFullConfig",
        value: function loadFullConfig() {
          var _this = this;

          this.service.getFullConfig().subscribe(function (res) {
            _this.mockConfig = res;
          });
        }
      }, {
        key: "isEnabled",
        value: function isEnabled(name) {
          return this.mockConfig && this.mockConfig[name].enabled;
        }
      }, {
        key: "openEndpointEditor",
        value: function openEndpointEditor(modal, type) {
          this.editingEndpointType = type;
          setTimeout(function () {
            return modal.open();
          });
        }
      }, {
        key: "submitFullConfig",
        value: function submitFullConfig(event) {
          var _this2 = this;

          var data = event.data,
              close = event.close;
          this.service.updateFullConfig(data.config).subscribe(function (res) {
            console.log('success');
            close();

            _this2.loadFullConfig();
          });
          console.log(data);
        }
      }, {
        key: "submitEndpoint",
        value: function submitEndpoint(event) {
          var _this3 = this;

          var data = event.data,
              close = event.close;
          this.service.addEndpoint(this.editingEndpointType, data.config, data.extra).subscribe(function (res) {
            console.log('success');
            close();

            _this3.loadFullConfig();
          });
        }
      }, {
        key: "mockServerUrl",
        get: function get() {
          return this.service.mockServerUrl;
        }
      }, {
        key: "apiEndpoints",
        get: function get() {
          return this.mockConfig && this.mockConfig.serveApi.endpoints || [];
        }
      }, {
        key: "wsEndpoints",
        get: function get() {
          return this.mockConfig && this.mockConfig.serveWebsocket.endpoints || [];
        }
      }, {
        key: "proxyEndpoints",
        get: function get() {
          return this.mockConfig && this.mockConfig.serveProxy.endpoints || [];
        }
      }, {
        key: "staticEndpoints",
        get: function get() {
          return this.mockConfig && this.mockConfig.serveStatic.endpoints || [];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_api_endpoint_api_endpoint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/api-endpoint/api-endpoint.component */
    "./src/app/components/api-endpoint/api-endpoint.component.ts");
    /* harmony import */


    var _components_api_endpoint_item_api_endpoint_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/api-endpoint-item/api-endpoint-item.component */
    "./src/app/components/api-endpoint-item/api-endpoint-item.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/loading/loading.component */
    "./src/app/components/loading/loading.component.ts");
    /* harmony import */


    var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/tag/tag.component */
    "./src/app/components/tag/tag.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_config_edit_modal_config_edit_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/config-edit-modal/config-edit-modal.component */
    "./src/app/components/config-edit-modal/config-edit-modal.component.ts");
    /* harmony import */


    var _components_json_editor_json_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/json-editor/json-editor.component */
    "./src/app/components/json-editor/json-editor.component.ts");
    /* harmony import */


    var _components_endpoint_edit_modal_endpoint_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/endpoint-edit-modal/endpoint-edit-modal.component */
    "./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/confirm/confirm.component */
    "./src/app/components/confirm/confirm.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_api_endpoint_api_endpoint_component__WEBPACK_IMPORTED_MODULE_6__["ApiEndpointComponent"], _components_api_endpoint_item_api_endpoint_item_component__WEBPACK_IMPORTED_MODULE_7__["ApiEndpointItemComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"], _components_config_edit_modal_config_edit_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfigEditModalComponent"], _components_json_editor_json_editor_component__WEBPACK_IMPORTED_MODULE_13__["JsonEditorComponent"], _components_endpoint_edit_modal_endpoint_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["EndpointEditModalComponent"], _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var typeKeyMap = {
      api: 'serveApi',
      ws: 'serveWebsocket',
      "static": 'serveStatic',
      proxy: 'serveProxy'
    };

    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
      }

      _createClass(AppService, [{
        key: "getFullConfig",
        value: function getFullConfig() {
          var _this4 = this;

          return this.http.get('/api/config').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this4.fullConfig = res;
            return res;
          }));
        }
      }, {
        key: "updateFullConfig",
        value: function updateFullConfig(config) {
          return this.http.put('/api/config', config);
        }
      }, {
        key: "getEndpoint",
        value: function getEndpoint(type, id) {
          var _this5 = this;

          return this.http.get('/api/endpoint', {
            params: {
              type: typeKeyMap[type],
              id: id
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (!res) {
              return null;
            }

            var keys = _this5.getApiKeys(res.fileData);

            res.items = keys.map(function (key) {
              var apiList = [];

              if (type === 'api') {
                apiList.push({
                  method: 'GET',
                  url: "".concat(res.endpoint, "/").concat(key),
                  description: "Get ".concat(key, "."),
                  triable: true
                });
                apiList.push({
                  method: 'GET',
                  url: "".concat(res.endpoint, "/").concat(key, "/:id"),
                  description: "Get ".concat(key, " by id."),
                  triable: true
                });
                apiList.push({
                  method: 'POST',
                  url: "".concat(res.endpoint, "/").concat(key),
                  description: "Create ".concat(key, ".")
                });
                apiList.push({
                  method: 'PUT',
                  url: "".concat(res.endpoint, "/").concat(key, "/:id"),
                  description: "Update ".concat(key, " by id.")
                });
                apiList.push({
                  method: 'DELETE',
                  url: "".concat(res.endpoint, "/").concat(key, "/:id"),
                  description: "Delete ".concat(key, " by id.")
                });
                apiList.push({
                  method: 'PATCH',
                  url: "".concat(res.endpoint, "/").concat(key, "/:id"),
                  description: "Patch update ".concat(key, " by id.")
                });
              }

              if (type === 'ws') {
                apiList.push({
                  url: "".concat(res.endpoint, "/").concat(key),
                  description: "Websocket endpoint ".concat(key, ".")
                });
              }

              return {
                name: key,
                apiList: apiList
              };
            });
            return res || {};
          }));
        }
      }, {
        key: "addEndpoint",
        value: function addEndpoint(type, endpoint) {
          var fileData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          return this.http.post("/api/endpoint?type=".concat(typeKeyMap[type]), {
            mockConfig: endpoint,
            fileData: fileData
          });
        }
      }, {
        key: "updateEndpoint",
        value: function updateEndpoint(type, id, endpoint) {
          var fileData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          return this.http.put("/api/endpoint?type=".concat(typeKeyMap[type], "&id=").concat(id), {
            mockConfig: endpoint,
            fileData: fileData
          });
        }
      }, {
        key: "deleteEndpoint",
        value: function deleteEndpoint(type, id) {
          return this.http["delete"]('/api/endpoint', {
            params: {
              type: typeKeyMap[type],
              id: id
            }
          });
        }
      }, {
        key: "getApiKeys",
        value: function getApiKeys() {
          var dataStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (!dataStr) {
            return [];
          }

          var result = [];

          try {
            var jsonStr = dataStr.replace(/{{ *[#\/]repeat[ \w]*}}/g, '').replace(/{{[^{}]+}}/g, '0');
            var dataObj = JSON.parse(jsonStr);
            result = Object.keys(dataObj);
          } catch (e) {
            console.error('failed to parse fileData to json', e);
          }

          return result;
        }
      }, {
        key: "mockServerUrl",
        get: function get() {
          return this.fullConfig && "".concat(location.protocol, "//").concat(location.hostname, ":").concat(this.fullConfig.port);
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/components/api-endpoint-item/api-endpoint-item.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/api-endpoint-item/api-endpoint-item.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsApiEndpointItemApiEndpointItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcGktZW5kcG9pbnQtaXRlbS9jOlxcVXNlcnNcXDE5OTN3XFxzb3VyY2VcXHJlcG9zXFxSZWVkLU1vY2stU2VydmVyXFx1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXBpLWVuZHBvaW50LWl0ZW1cXGFwaS1lbmRwb2ludC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwaS1lbmRwb2ludC1pdGVtL2FwaS1lbmRwb2ludC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcGktZW5kcG9pbnQtaXRlbS9hcGktZW5kcG9pbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuY2FyZC1oZWFkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/api-endpoint-item/api-endpoint-item.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/api-endpoint-item/api-endpoint-item.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ApiEndpointItemComponent */

  /***/
  function srcAppComponentsApiEndpointItemApiEndpointItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiEndpointItemComponent", function () {
      return ApiEndpointItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var ApiEndpointItemComponent = /*#__PURE__*/function () {
      function ApiEndpointItemComponent(service) {
        _classCallCheck(this, ApiEndpointItemComponent);

        this.service = service;
        this.tagClassMap = {
          GET: 'border-primary text-primary',
          POST: 'border-success text-success',
          PUT: 'border-warning text-warning',
          DELETE: 'border-danger text-danger',
          PATCH: 'border-info text-info'
        };
        this.isExpand = false;
      }

      _createClass(ApiEndpointItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tryApi",
        value: function tryApi(api) {
          window.open("".concat(this.service.mockServerUrl).concat(api.url).replace(':id', '0'), '_blank');
        }
      }]);

      return ApiEndpointItemComponent;
    }();

    ApiEndpointItemComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointItemComponent.prototype, "item", void 0);
    ApiEndpointItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'api-endpoint-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./api-endpoint-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/api-endpoint-item/api-endpoint-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./api-endpoint-item.component.scss */
      "./src/app/components/api-endpoint-item/api-endpoint-item.component.scss"))["default"]]
    })], ApiEndpointItemComponent);
    /***/
  },

  /***/
  "./src/app/components/api-endpoint/api-endpoint.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/api-endpoint/api-endpoint.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsApiEndpointApiEndpointComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ep-header-collapsable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcGktZW5kcG9pbnQvYzpcXFVzZXJzXFwxOTkzd1xcc291cmNlXFxyZXBvc1xcUmVlZC1Nb2NrLVNlcnZlclxcdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFwaS1lbmRwb2ludFxcYXBpLWVuZHBvaW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwaS1lbmRwb2ludC9hcGktZW5kcG9pbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwaS1lbmRwb2ludC9hcGktZW5kcG9pbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXAtaGVhZGVyLWNvbGxhcHNhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5lcC1oZWFkZXItY29sbGFwc2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/api-endpoint/api-endpoint.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/api-endpoint/api-endpoint.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ApiEndpointComponent */

  /***/
  function srcAppComponentsApiEndpointApiEndpointComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiEndpointComponent", function () {
      return ApiEndpointComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var ApiEndpointComponent = /*#__PURE__*/function () {
      function ApiEndpointComponent(service) {
        _classCallCheck(this, ApiEndpointComponent);

        this.service = service;
        this.hasDetail = false;
        this.type = 'api';
        this.index = 0;
        this.tagFields = [];
        this.onDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isExpand = false;
        this.isLoading = false;
        this.fileData = '';
      }

      _createClass(ApiEndpointComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "expand",
        value: function expand() {
          if (!this.hasDetail) {
            return;
          }

          this.isExpand = !this.isExpand;

          if (this.isExpand) {
            this.getDetail();
          }
        }
      }, {
        key: "openEditor",
        value: function openEditor(modal, event) {
          event.stopPropagation();
          this.getDetail();
          setTimeout(function () {
            return modal.open();
          });
        }
      }, {
        key: "getDetail",
        value: function getDetail() {
          var _this6 = this;

          if (!this.hasDetail) {
            return;
          }

          this.isLoading = true;
          this.service.getEndpoint(this.type, String(this.index)).subscribe(function (res) {
            _this6.endpointDetail = res;
            _this6.fileData = res.fileData;
            _this6.isLoading = false;
          });
        }
      }, {
        key: "submit",
        value: function submit(event) {
          var _this7 = this;

          var data = event.data,
              close = event.close;
          this.service.updateEndpoint(this.type, String(this.index), data.config, data.extra).subscribe(function (res) {
            console.log('success');
            close();

            _this7.getDetail();

            _this7.onDataChange.emit();
          });
        }
      }, {
        key: "openDeleteConfirm",
        value: function openDeleteConfirm(modal, event) {
          event.stopPropagation();
          modal.open();
        }
      }, {
        key: "deleteEndpoint",
        value: function deleteEndpoint() {
          var _this8 = this;

          this.service.deleteEndpoint(this.type, String(this.index)).subscribe(function (res) {
            console.log('deleted');

            _this8.onDataChange.emit();
          });
        }
      }, {
        key: "endpointItems",
        get: function get() {
          return this.endpointDetail && this.endpointDetail.items || [];
        }
      }, {
        key: "tagTexts",
        get: function get() {
          var _this9 = this;

          return this.tagFields.map(function (name) {
            if (!_this9.endpoint[name]) {
              return null;
            }

            return "".concat(name, ": ").concat(_this9.endpoint[name]);
          });
        }
      }]);

      return ApiEndpointComponent;
    }();

    ApiEndpointComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointComponent.prototype, "endpoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointComponent.prototype, "endpointDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointComponent.prototype, "hasDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApiEndpointComponent.prototype, "tagFields", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ApiEndpointComponent.prototype, "onDataChange", void 0);
    ApiEndpointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'api-endpoint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./api-endpoint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/api-endpoint/api-endpoint.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./api-endpoint.component.scss */
      "./src/app/components/api-endpoint/api-endpoint.component.scss"))["default"]]
    })], ApiEndpointComponent);
    /***/
  },

  /***/
  "./src/app/components/config-edit-modal/config-edit-modal.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/config-edit-modal/config-edit-modal.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConfigEditModalConfigEditModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-body {\n  max-height: 60vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maWctZWRpdC1tb2RhbC9jOlxcVXNlcnNcXDE5OTN3XFxzb3VyY2VcXHJlcG9zXFxSZWVkLU1vY2stU2VydmVyXFx1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29uZmlnLWVkaXQtbW9kYWxcXGNvbmZpZy1lZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpZy1lZGl0LW1vZGFsL2NvbmZpZy1lZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpZy1lZGl0LW1vZGFsL2NvbmZpZy1lZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59IiwiLm1vZGFsLWJvZHkge1xuICBtYXgtaGVpZ2h0OiA2MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/config-edit-modal/config-edit-modal.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/config-edit-modal/config-edit-modal.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfigEditModalComponent */

  /***/
  function srcAppComponentsConfigEditModalConfigEditModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigEditModalComponent", function () {
      return ConfigEditModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _json_editor_json_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../json-editor/json-editor.component */
    "./src/app/components/json-editor/json-editor.component.ts");

    var ConfigEditModalComponent = /*#__PURE__*/function () {
      function ConfigEditModalComponent(modalSvc) {
        var _this10 = this;

        _classCallCheck(this, ConfigEditModalComponent);

        this.modalSvc = modalSvc;
        this.title = 'Edit';
        this.configName = 'Config';
        this.type = 'json';
        this.loading = false;
        this.showConfigEditor = true;
        this.editing = true;
        this.hasError = false;
        this.editorText = '';
        this.extraDataChanged = false;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onExtraChange = function (event) {
          _this10.extraData = event;
          _this10.extraDataChanged = true;
        };
      }

      _createClass(ConfigEditModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetStates();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.data) {
            this.editorText = this.dataStr;
          }
        }
      }, {
        key: "open",
        value: function open() {
          this.modalSvc.open(this.content, {
            centered: true,
            size: 'xl'
          });
        }
      }, {
        key: "submit",
        value: function submit(modal) {
          this.onSubmit.emit({
            data: {
              config: JSON.parse(this.editorText),
              extra: this.extraData
            },
            close: function close() {
              return modal.close();
            }
          });
        }
      }, {
        key: "close",
        value: function close(modal) {
          this.resetStates();
          modal.dismiss();
        }
      }, {
        key: "resetStates",
        value: function resetStates() {
          this.editing = true;
          this.hasError = false;
          this.editorText = this.dataStr;
          this.extraDataChanged = false;
        }
      }, {
        key: "onEditorChange",
        value: function onEditorChange(event) {
          this.editorText = event;
        }
      }, {
        key: "onEditorError",
        value: function onEditorError(event) {
          this.hasError = event && event.length > 0;
        }
      }, {
        key: "canSubmit",
        get: function get() {
          return this.changed && !this.hasError && !this.loading;
        }
      }, {
        key: "dataStr",
        get: function get() {
          return typeof this.data === 'string' ? this.data : JSON.stringify(this.data, null, 2);
        }
      }, {
        key: "changed",
        get: function get() {
          return this.editorText !== this.dataStr || this.extraDataChanged;
        }
      }]);

      return ConfigEditModalComponent;
    }();

    ConfigEditModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "configName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "extraTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "showConfigEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": true
    })], ConfigEditModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_json_editor_json_editor_component__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"], {
      "static": false
    })], ConfigEditModalComponent.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfigEditModalComponent.prototype, "extraData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConfigEditModalComponent.prototype, "onSubmit", void 0);
    ConfigEditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'config-edit-modal',
      exportAs: 'configEditModal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-edit-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/config-edit-modal/config-edit-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-edit-modal.component.scss */
      "./src/app/components/config-edit-modal/config-edit-modal.component.scss"))["default"]]
    })], ConfigEditModalComponent);
    /***/
  },

  /***/
  "./src/app/components/confirm/confirm.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/confirm/confirm.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConfirmConfirmComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/confirm/confirm.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/confirm/confirm.component.ts ***!
    \*********************************************************/

  /*! exports provided: ConfirmComponent */

  /***/
  function srcAppComponentsConfirmConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
      return ConfirmComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ConfirmComponent = /*#__PURE__*/function () {
      function ConfirmComponent(modal) {
        _classCallCheck(this, ConfirmComponent);

        this.modal = modal;
        this.title = 'Confirm';
        this.message = 'Are you sure?';
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ConfirmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          var _this11 = this;

          this.modal.open(this.content, {
            centered: true
          }).result.then(function (result) {
            if (result === 'confirm') {
              _this11.onConfirm.emit();
            } else {
              _this11.onCancel.emit();
            }
          });
        }
      }]);

      return ConfirmComponent;
    }();

    ConfirmComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConfirmComponent.prototype, "onConfirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConfirmComponent.prototype, "onCancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": true
    })], ConfirmComponent.prototype, "content", void 0);
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'confirm-modal',
      exportAs: 'confirmModal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm.component.scss */
      "./src/app/components/confirm/confirm.component.scss"))["default"]]
    })], ConfirmComponent);
    /***/
  },

  /***/
  "./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEndpointEditModalEndpointEditModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5kcG9pbnQtZWRpdC1tb2RhbC9lbmRwb2ludC1lZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EndpointEditModalComponent */

  /***/
  function srcAppComponentsEndpointEditModalEndpointEditModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EndpointEditModalComponent", function () {
      return EndpointEditModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EndpointEditModalComponent = /*#__PURE__*/function () {
      function EndpointEditModalComponent() {
        _classCallCheck(this, EndpointEditModalComponent);
      }

      _createClass(EndpointEditModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EndpointEditModalComponent;
    }();

    EndpointEditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-endpoint-edit-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./endpoint-edit-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./endpoint-edit-modal.component.scss */
      "./src/app/components/endpoint-edit-modal/endpoint-edit-modal.component.scss"))["default"]]
    })], EndpointEditModalComponent);
    /***/
  },

  /***/
  "./src/app/components/json-editor/json-editor.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/json-editor/json-editor.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsJsonEditorJsonEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .ace-jsoneditor {\n  min-height: 150px;\n}\n\n.editor-lg ::ng-deep .ace-jsoneditor {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qc29uLWVkaXRvci9jOlxcVXNlcnNcXDE5OTN3XFxzb3VyY2VcXHJlcG9zXFxSZWVkLU1vY2stU2VydmVyXFx1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcanNvbi1lZGl0b3JcXGpzb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5hY2UtanNvbmVkaXRvciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmVkaXRvci1sZyA6Om5nLWRlZXAgLmFjZS1qc29uZWRpdG9yIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59IiwiOmhvc3QgOjpuZy1kZWVwIC5hY2UtanNvbmVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uZWRpdG9yLWxnIDo6bmctZGVlcCAuYWNlLWpzb25lZGl0b3Ige1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/json-editor/json-editor.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/json-editor/json-editor.component.ts ***!
    \*****************************************************************/

  /*! exports provided: JsonEditorComponent */

  /***/
  function srcAppComponentsJsonEditorJsonEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonEditorComponent", function () {
      return JsonEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jsoneditor */
    "./node_modules/jsoneditor/index.js");
    /* harmony import */


    var jsoneditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_2__);

    var JsonEditorComponent = /*#__PURE__*/function () {
      function JsonEditorComponent() {
        _classCallCheck(this, JsonEditorComponent);

        this.options = {};
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._data = {};
        this._mode = 'preview';
      }

      _createClass(JsonEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.options = {
            mode: this.mode,
            mainMenuBar: false,
            onValidationError: function onValidationError(err) {
              _this12.onError.emit(err);
            },
            onChangeText: function onChangeText(evt) {
              _this12.onChange.emit(evt);
            }
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.editor = new jsoneditor__WEBPACK_IMPORTED_MODULE_2__(this.editorRef.nativeElement, this.options);
          this.setData(this.data);
          this.setMode(this.mode);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.editor.destroy();
          this.editor = null;
        }
      }, {
        key: "setData",
        value: function setData(data) {
          if (!this.editor) {
            return;
          }

          if (typeof data === 'string') {
            this.editor.setText(data);
          } else {
            this.editor.set(data || {});
          }
        }
      }, {
        key: "setMode",
        value: function setMode(mode) {
          if (!this.editor) {
            return;
          }

          this.editor.setMode(mode);
        }
      }, {
        key: "getJson",
        value: function getJson() {
          return this.editor.get();
        }
      }, {
        key: "getText",
        value: function getText() {
          return this.editor.getText();
        }
      }, {
        key: "data",
        set: function set(data) {
          this._data = data;
          this.setData(data);
        },
        get: function get() {
          return this._data;
        }
      }, {
        key: "editing",
        set: function set(editing) {
          if (editing) {
            this._mode = 'code';
          } else {
            this._mode = 'preview';
          }

          this.setMode(this._mode);
        },
        get: function get() {
          return this.mode === 'code';
        }
      }, {
        key: "mode",
        get: function get() {
          return this._mode;
        }
      }]);

      return JsonEditorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JsonEditorComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JsonEditorComponent.prototype, "data", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JsonEditorComponent.prototype, "editing", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JsonEditorComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], JsonEditorComponent.prototype, "onError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], JsonEditorComponent.prototype, "onChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor', {
      "static": true
    })], JsonEditorComponent.prototype, "editorRef", void 0);
    JsonEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'json-editor',
      exportAs: 'jsonEditor',
      template: "<div [ngClass]=\"styleClass\" #editor></div>",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./json-editor.component.scss */
      "./src/app/components/json-editor/json-editor.component.scss"))["default"]]
    })], JsonEditorComponent);
    /***/
  },

  /***/
  "./src/app/components/loading/loading.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/loading/loading.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppComponentsLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html"))["default"]
    })], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/components/tag/tag.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/tag/tag.component.ts ***!
    \*************************************************/

  /*! exports provided: TagComponent */

  /***/
  function srcAppComponentsTagTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return TagComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TagComponent = function TagComponent() {
      _classCallCheck(this, TagComponent);

      this.basicCls = true;
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.border'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.px-2'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.rounded-pill')], TagComponent.prototype, "basicCls", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TagComponent.prototype, "tagText", void 0);
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[tagText]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tag.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag/tag.component.html"))["default"]
    })], TagComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! c:\Users\1993w\source\repos\Reed-Mock-Server\ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map