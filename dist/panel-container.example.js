/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dev4u_react_components_1 = __webpack_require__(2);
	var StyleProvider1 = (function () {
	    function StyleProvider1() {
	    }
	    // IStyleProvider Members
	    StyleProvider1.prototype.getGridStyle = function () {
	        return null;
	    };
	    return StyleProvider1;
	}());
	dev4u_react_components_1.StyleProvider.Instance = new StyleProvider1();


/***/ },
/* 2 */
/***/ function(module, exports) {

	!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){e(1),t.exports=e(5)},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},o=e(2),i=e(3),a=e(4),l=function(t){function n(n){t.call(this,n)}return r(n,t),n.prototype.componentDidMount=function(){var t=this;this.props.dataSource.onDataBound=function(){return t.forceUpdate()}},n.prototype.getColumnDirection=function(t){var n=null!=this.props.dataSource.view.sortedBy?this.props.dataSource.view.sortedBy.filter(function(n){return n.propertyName==t.propertyName}):null;return null!=n&&1==n.length&&n[0].propertyName==t.propertyName?n[0].direction:null},n.prototype.handleSortClick=function(t){var n=this.props.dataSource.view.sortedBy,e=null!=n&&1==n.length&&n[0].propertyName==t.propertyName&&n[0].direction==i.SortDirection.Ascending?i.SortDirection.Descending:i.SortDirection.Ascending;this.props.dataSource.sort({direction:e,propertyName:t.propertyName}),this.props.dataSource.dataBind()},Object.defineProperty(n.prototype,"style",{get:function(){return this._style=this._style||a.StyleProvider.Instance.getGridStyle()},enumerable:!0,configurable:!0}),n}(o.Component);n.GridBase=l;var s=function(t){function n(){t.apply(this,arguments)}return r(n,t),n.prototype.renderHeaderCell=function(t,n){var e=this,r=this.getColumnDirection(t),i=this.style.headerRow.cell.classBySorting[r];return o.createElement("th",{key:"grid-header-cell-"+n},t.title,o.createElement("a",{className:i,onClick:function(){return e.handleSortClick(t)}}))},n.prototype.renderRow=function(t,n){var e=this;return o.createElement("tr",{key:"grid-row-"+n},this.props.columns.map(function(n,r){return e.renderRowCell(t,n,r)}))},n.prototype.renderRowCell=function(t,n,e){return o.createElement("td",{key:"grid-cell-"+e},t[n.propertyName])},n.prototype.render=function(){var t=this;return o.createElement("table",{cellspacing:"0",className:this.style["class"],width:"100%"},o.createElement("tbody",null,o.createElement("tr",null,this.props.columns.map(function(n,e){return t.renderHeaderCell(n,e)})),this.props.dataSource.view.data.map(function(n,e){return t.renderRow(n,e)})))},n}(l);n.Grid=s},function(t,n){t.exports=React},function(t,n){"use strict";!function(t){t[t.Ascending=1]="Ascending",t[t.Descending=2]="Descending"}(n.SortDirection||(n.SortDirection={}));var e=n.SortDirection,r=function(){function t(t){this._data=t,this._view=null}return t.prototype.getComparer=function(t){for(var n=null,r=0;r<t.length;r++){var o=function(t,n){return function(r,o){var i=r[n],a=o[n];return i>a?t==e.Ascending?1:-1:i<a?t==e.Ascending?-1:1:0}}(t[r].direction,t[r].propertyName);n=null!=n?function(t){return function(n,e){return t(n,e)}}(n):o}return n},t.prototype.dataBind=function(){this._view=this._view||{},this._view.data=this._data,null!=this._sort&&(this._sort(this._view),this._sort=null),null!=this._onDataBound&&this._onDataBound(this._view)},t.prototype.sort=function(){for(var t=this,n=[],e=0;e<arguments.length;e++)n[e-0]=arguments[e];this._sort=function(e){e.sortedBy=n,e.data=e.data.sort(t.getComparer(n))}},Object.defineProperty(t.prototype,"view",{get:function(){return this._view},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onDataBound",{set:function(t){this._onDataBound=t},enumerable:!0,configurable:!0}),t}();n.ClientDataSource=r},function(t,n){"use strict";var e=function(){function t(){}return t.prototype.getGridStyle=function(){return{"class":null,headerRow:{"class":null,cell:{"class":null,classBySorting:function(t){return null}}},row:{"class":null,cell:{"class":null}}}},t.Instance=new t,t}();n.StyleProvider=e},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},o=e(2),i=e(6);!function(t){t[t.DynamicAndStatic=1]="DynamicAndStatic",t[t.StaticAndDynamic=2]="StaticAndDynamic"}(n.PanelContainerMode||(n.PanelContainerMode={}));var a=n.PanelContainerMode;!function(t){t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"}(n.PanelContainerOrientation||(n.PanelContainerOrientation={}));var l=n.PanelContainerOrientation,s=function(t){function n(n){t.call(this,n),this.handleDynamicPanelClosed=this.handleDynamicPanelClosed.bind(this),this.handleStaticPanelClosed=this.handleStaticPanelClosed.bind(this),this.handlePanelClosing=this.handlePanelClosing.bind(this),this.state={dynamicPanels:n.dynamicPanels||[],staticPanels:this.getStaticPanels()}}return r(n,t),n.prototype.getStaticPanels=function(){return this.props.children?o.Children.map(this.props.children,function(t){return t}).map(function(t){return t.props}):[]},n.prototype.handleDynamicPanelClosed=function(t){var n=this.state.dynamicPanels.indexOf(t);this.state.dynamicPanels.splice(n,1),this.forceUpdate()},n.prototype.handlePanelClosing=function(t){return!this.props.onPanelClosing||this.props.onPanelClosing(t)},n.prototype.handleStaticPanelClosed=function(t){var n=this.state.staticPanels.indexOf(t);this.state.staticPanels.splice(n,1),this.forceUpdate()},n.prototype.renderDynamicPanel=function(t,n,e){var r=n.columnCount||t.defaultColumnCount;return o.createElement(i.Panel,{columnCount:r,key:"dynamic_panel_"+e,title:n.title,onClosed:this.handleDynamicPanelClosed,onClosing:this.handlePanelClosing})},n.prototype.renderDynamicPanels=function(t){var n=this;return this.state.dynamicPanels.map(function(e,r){return n.renderDynamicPanel(t,e,r)})},n.prototype.renderStaticPanel=function(t,n,e){return o.cloneElement(n,{columnCount:n.columnCount||t.defaultColumnCount,key:"static_panel_"+e,onClosed:this.handleStaticPanelClosed,onClosing:this.handlePanelClosing})},n.prototype.renderStaticPanels=function(t){var n=this,e=o.Children.map(this.props.children,function(e,r){return n.state.staticPanels.indexOf(e.props)!==-1?n.renderStaticPanel(t,e,r):null});return null!=e?e.filter(function(t){return null!=t}):null},n.prototype.render=function(){var t=this.props.mode||a.DynamicAndStatic,n=this.props.orientation||l.Horizontal,e=n==l.Horizontal?"row":"panel-group",r={defaultColumnCount:n==l.Horizontal?Math.floor(12/this.state.dynamicPanels.concat(this.state.staticPanels).length):null,orientation:n};return o.createElement("div",{className:e},t==a.StaticAndDynamic?this.renderStaticPanels(r):null,this.renderDynamicPanels(r),t==a.DynamicAndStatic?this.renderStaticPanels(r):null)},n}(o.Component);n.PanelContainer=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},o=e(2),i=function(t){function n(n){t.call(this),this.handleClose=this.handleClose.bind(this)}return r(n,t),n.prototype.handleClose=function(){var t=!0;this.props.onClosing&&(t=this.props.onClosing(this)),t&&this.props.onClosed&&this.props.onClosed(this)},n.prototype.renderBody=function(){return this.props.children},n.prototype.render=function(){var t=this,n=this.props.columnCount?function(n){return o.createElement("div",{className:"col-md-"+t.props.columnCount},n)}:function(t){return t};return n(o.createElement("div",{className:"panel panel-default"},o.createElement("div",{className:"panel-heading"},this.props.title,o.createElement("button",{className:"close",onClick:this.handleClose,type:"button"},o.createElement("span",null,"×"))),o.createElement("div",{className:"panel-body"},this.renderBody())))},n}(o.Component);n.Panel=i}]);

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(4);
	var ReactDom = __webpack_require__(5);
	var dev4u_react_components_1 = __webpack_require__(2);
	var dynamicPanels = [{ title: 'dynamicPanel0' }, { title: 'dynamicPanel1' }];
	ReactDom.render(React.createElement(dev4u_react_components_1.PanelContainer, {dynamicPanels: dynamicPanels}, 
	    React.createElement(dev4u_react_components_1.Panel, {title: "staticPanel0"}), 
	    React.createElement(dev4u_react_components_1.Panel, {title: "staticPanel1"})), document.getElementById('panelContainer'));


/***/ }
/******/ ]);