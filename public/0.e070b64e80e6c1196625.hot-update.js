webpackHotUpdate(0,{

/***/ "./js/Landing.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(\"./node_modules/prop-types/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(\"./js/actionCreators.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar Landing = function (_React$Component) {\n  _inherits(Landing, _React$Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n    _this.goToSearch = _this.goToSearch.bind(_this);\n    return _this;\n  }\n\n  Landing.prototype.goToSearch = function goToSearch(e) {\n    e.preventDefault();\n    if (e.target.name === 'browseAll') {\n      this.props.handleSearch(e);\n    }\n    this.props.history.push('/search');\n  };\n\n  Landing.prototype.render = function render() {\n    var _props = this.props,\n        searchTerm = _props.searchTerm,\n        handleSearch = _props.handleSearch;\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'landing' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h2',\n        null,\n        'Video'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'form',\n        { onSubmit: this.goToSearch },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {\n          type: 'text',\n          placeholder: 'Search',\n          value: searchTerm,\n          onChange: handleSearch\n        })\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'button',\n        { name: 'browseAll', onClick: this.goToSearch, value: '' },\n        'or browse all'\n      )\n    );\n  };\n\n  return Landing;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nLanding.propTypes = {\n  searchTerm: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  handleSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,\n  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({\n    push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired\n  })\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    searchTerm: state.searchTerm\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleSearch: function handleSearch(e) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actionCreators__[\"a\" /* setSearchTerm */])(e.target.value));\n    }\n  };\n};\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__[\"d\" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(Landing));\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Landing, 'Landing', 'C:/Users/111/Desktop/complete-intro-to-react/js/Landing.jsx');\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/111/Desktop/complete-intro-to-react/js/Landing.jsx');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/111/Desktop/complete-intro-to-react/js/Landing.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/111/Desktop/complete-intro-to-react/js/Landing.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9MYW5kaW5nLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0xhbmRpbmcuanN4PzIxNjQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IC8qIExpbmssICovd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldFNlYXJjaFRlcm0gfSBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcblxudmFyIExhbmRpbmcgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGFuZGluZywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGFuZGluZyhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYW5kaW5nKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZ29Ub1NlYXJjaCA9IF90aGlzLmdvVG9TZWFyY2guYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTGFuZGluZy5wcm90b3R5cGUuZ29Ub1NlYXJjaCA9IGZ1bmN0aW9uIGdvVG9TZWFyY2goZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gJ2Jyb3dzZUFsbCcpIHtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlU2VhcmNoKGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpO1xuICB9O1xuXG4gIExhbmRpbmcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgc2VhcmNoVGVybSA9IF9wcm9wcy5zZWFyY2hUZXJtLFxuICAgICAgICBoYW5kbGVTZWFyY2ggPSBfcHJvcHMuaGFuZGxlU2VhcmNoO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbGFuZGluZycgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoMicsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdWaWRlbydcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZm9ybScsXG4gICAgICAgIHsgb25TdWJtaXQ6IHRoaXMuZ29Ub1NlYXJjaCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgIHZhbHVlOiBzZWFyY2hUZXJtLFxuICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVTZWFyY2hcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyBuYW1lOiAnYnJvd3NlQWxsJywgb25DbGljazogdGhpcy5nb1RvU2VhcmNoLCB2YWx1ZTogJycgfSxcbiAgICAgICAgJ29yIGJyb3dzZSBhbGwnXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTGFuZGluZztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuTGFuZGluZy5wcm9wVHlwZXMgPSB7XG4gIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoaXN0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHB1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSlcbn07XG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hUZXJtOiBzdGF0ZS5zZWFyY2hUZXJtXG4gIH07XG59O1xuXG52YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgaGFuZGxlU2VhcmNoOiBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xuICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTGFuZGluZykpO1xuXG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDtcbjtcblxudmFyIF90ZW1wID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKExhbmRpbmcsICdMYW5kaW5nJywgJ0M6L1VzZXJzLzExMS9EZXNrdG9wL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0xhbmRpbmcuanN4Jyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJywgJ0M6L1VzZXJzLzExMS9EZXNrdG9wL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0xhbmRpbmcuanN4Jyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgJ0M6L1VzZXJzLzExMS9EZXNrdG9wL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0xhbmRpbmcuanN4Jyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoX2RlZmF1bHQsICdkZWZhdWx0JywgJ0M6L1VzZXJzLzExMS9EZXNrdG9wL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0xhbmRpbmcuanN4Jyk7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0xhbmRpbmcuanN4XG4vLyBtb2R1bGUgaWQgPSAuL2pzL0xhbmRpbmcuanN4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})