/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/flex-layout/core'), require('@angular/flex-layout/extended'), require('@angular/flex-layout/flex'), require('@angular/flex-layout/grid')) :
	typeof define === 'function' && define.amd ? define('@angular/flex-layout', ['exports', '@angular/core', '@angular/common', '@angular/flex-layout/core', '@angular/flex-layout/extended', '@angular/flex-layout/flex', '@angular/flex-layout/grid'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.flexLayout = {}),global.ng.core,global.ng.common,global.ng.flexLayout.core,global.ng.flexLayout.extended,global.ng.flexLayout.flex,global.ng.flexLayout.grid));
}(this, (function (exports,core,common,core$1,extended,flex,grid) { 'use strict';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * @fileoverview added by tsickle
 * Generated from: version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 * @type {?}
 */
var VERSION = new core.Version('12.0.0-beta.34');

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (common.isPlatformServer(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     */
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    FlexLayoutModule.withConfig = /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    function (configOptions, 
    // tslint:disable-next-line:max-line-length
    breakpoints) {
        if (breakpoints === void 0) { breakpoints = []; }
        return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ?
                [
                    { provide: core$1.LAYOUT_CONFIG, useValue: __assign(__assign({}, core$1.DEFAULT_CONFIG), configOptions) },
                    { provide: core$1.BREAKPOINT, useValue: breakpoints, multi: true },
                    { provide: core$1.SERVER_TOKEN, useValue: true },
                ] : [
                { provide: core$1.LAYOUT_CONFIG, useValue: __assign(__assign({}, core$1.DEFAULT_CONFIG), configOptions) },
                { provide: core$1.BREAKPOINT, useValue: breakpoints, multi: true },
            ]
        };
    };
    FlexLayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [flex.FlexModule, extended.ExtendedModule, grid.GridModule],
                    exports: [flex.FlexModule, extended.ExtendedModule, grid.GridModule]
                },] }
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: core.Inject, args: [core$1.SERVER_TOKEN,] }] },
        { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };
    return FlexLayoutModule;
}());

exports.??MatchMedia = core$1.??MatchMedia;
exports.??MockMatchMedia = core$1.??MockMatchMedia;
exports.??MockMatchMediaProvider = core$1.??MockMatchMediaProvider;
exports.CoreModule = core$1.CoreModule;
exports.removeStyles = core$1.removeStyles;
exports.BROWSER_PROVIDER = core$1.BROWSER_PROVIDER;
exports.CLASS_NAME = core$1.CLASS_NAME;
exports.MediaChange = core$1.MediaChange;
exports.StylesheetMap = core$1.StylesheetMap;
exports.DEFAULT_CONFIG = core$1.DEFAULT_CONFIG;
exports.LAYOUT_CONFIG = core$1.LAYOUT_CONFIG;
exports.SERVER_TOKEN = core$1.SERVER_TOKEN;
exports.BREAKPOINT = core$1.BREAKPOINT;
exports.mergeAlias = core$1.mergeAlias;
exports.BaseDirective2 = core$1.BaseDirective2;
exports.DEFAULT_BREAKPOINTS = core$1.DEFAULT_BREAKPOINTS;
exports.ScreenTypes = core$1.ScreenTypes;
exports.ORIENTATION_BREAKPOINTS = core$1.ORIENTATION_BREAKPOINTS;
exports.BreakPointRegistry = core$1.BreakPointRegistry;
exports.BREAKPOINTS = core$1.BREAKPOINTS;
exports.MediaObserver = core$1.MediaObserver;
exports.MediaTrigger = core$1.MediaTrigger;
exports.sortDescendingPriority = core$1.sortDescendingPriority;
exports.sortAscendingPriority = core$1.sortAscendingPriority;
exports.coerceArray = core$1.coerceArray;
exports.StyleUtils = core$1.StyleUtils;
exports.StyleBuilder = core$1.StyleBuilder;
exports.validateBasis = core$1.validateBasis;
exports.MediaMarshaller = core$1.MediaMarshaller;
exports.BREAKPOINT_PRINT = core$1.BREAKPOINT_PRINT;
exports.PrintHook = core$1.PrintHook;
exports.ExtendedModule = extended.ExtendedModule;
exports.ClassDirective = extended.ClassDirective;
exports.DefaultClassDirective = extended.DefaultClassDirective;
exports.ImgSrcStyleBuilder = extended.ImgSrcStyleBuilder;
exports.ImgSrcDirective = extended.ImgSrcDirective;
exports.DefaultImgSrcDirective = extended.DefaultImgSrcDirective;
exports.ShowHideStyleBuilder = extended.ShowHideStyleBuilder;
exports.ShowHideDirective = extended.ShowHideDirective;
exports.DefaultShowHideDirective = extended.DefaultShowHideDirective;
exports.StyleDirective = extended.StyleDirective;
exports.DefaultStyleDirective = extended.DefaultStyleDirective;
exports.FlexModule = flex.FlexModule;
exports.FlexStyleBuilder = flex.FlexStyleBuilder;
exports.FlexDirective = flex.FlexDirective;
exports.DefaultFlexDirective = flex.DefaultFlexDirective;
exports.FlexAlignStyleBuilder = flex.FlexAlignStyleBuilder;
exports.FlexAlignDirective = flex.FlexAlignDirective;
exports.DefaultFlexAlignDirective = flex.DefaultFlexAlignDirective;
exports.FlexFillStyleBuilder = flex.FlexFillStyleBuilder;
exports.FlexFillDirective = flex.FlexFillDirective;
exports.FlexOffsetStyleBuilder = flex.FlexOffsetStyleBuilder;
exports.FlexOffsetDirective = flex.FlexOffsetDirective;
exports.DefaultFlexOffsetDirective = flex.DefaultFlexOffsetDirective;
exports.FlexOrderStyleBuilder = flex.FlexOrderStyleBuilder;
exports.FlexOrderDirective = flex.FlexOrderDirective;
exports.DefaultFlexOrderDirective = flex.DefaultFlexOrderDirective;
exports.LayoutStyleBuilder = flex.LayoutStyleBuilder;
exports.LayoutDirective = flex.LayoutDirective;
exports.DefaultLayoutDirective = flex.DefaultLayoutDirective;
exports.LayoutAlignStyleBuilder = flex.LayoutAlignStyleBuilder;
exports.LayoutAlignDirective = flex.LayoutAlignDirective;
exports.DefaultLayoutAlignDirective = flex.DefaultLayoutAlignDirective;
exports.LayoutGapStyleBuilder = flex.LayoutGapStyleBuilder;
exports.LayoutGapDirective = flex.LayoutGapDirective;
exports.DefaultLayoutGapDirective = flex.DefaultLayoutGapDirective;
exports.??grid_privatef = grid.??grid_privatef;
exports.??grid_privatee = grid.??grid_privatee;
exports.??grid_privated = grid.??grid_privated;
exports.??grid_privatei = grid.??grid_privatei;
exports.??grid_privateh = grid.??grid_privateh;
exports.??grid_privateg = grid.??grid_privateg;
exports.??grid_privatel = grid.??grid_privatel;
exports.??grid_privatek = grid.??grid_privatek;
exports.??grid_privatej = grid.??grid_privatej;
exports.??grid_privateo = grid.??grid_privateo;
exports.??grid_privaten = grid.??grid_privaten;
exports.??grid_privatem = grid.??grid_privatem;
exports.??grid_privater = grid.??grid_privater;
exports.??grid_privateq = grid.??grid_privateq;
exports.??grid_privatep = grid.??grid_privatep;
exports.??grid_privateu = grid.??grid_privateu;
exports.??grid_privatet = grid.??grid_privatet;
exports.??grid_privates = grid.??grid_privates;
exports.??grid_privatex = grid.??grid_privatex;
exports.??grid_privatew = grid.??grid_privatew;
exports.??grid_privatev = grid.??grid_privatev;
exports.??grid_privateba = grid.??grid_privateba;
exports.??grid_privatez = grid.??grid_privatez;
exports.??grid_privatey = grid.??grid_privatey;
exports.??grid_privatec = grid.??grid_privatec;
exports.??grid_privateb = grid.??grid_privateb;
exports.??grid_privatea = grid.??grid_privatea;
exports.??grid_privatebd = grid.??grid_privatebd;
exports.??grid_privatebc = grid.??grid_privatebc;
exports.??grid_privatebb = grid.??grid_privatebb;
exports.??grid_privatebg = grid.??grid_privatebg;
exports.??grid_privatebf = grid.??grid_privatebf;
exports.??grid_privatebe = grid.??grid_privatebe;
exports.GridModule = grid.GridModule;
exports.VERSION = VERSION;
exports.FlexLayoutModule = FlexLayoutModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flex-layout.umd.js.map
