webpackHotUpdate(0,{

/***/ "./js/Search.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export Unwrapped */\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(\"./node_modules/prop-types/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ShowCard__ = __webpack_require__(\"./js/ShowCard.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__(\"./js/Header.jsx\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\nvar Search = function Search(_ref) {\n  var shows = _ref.shows,\n      searchTerm = _ref.searchTerm;\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    'div',\n    { className: 'search' },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__[\"a\" /* default */], { showSearch: true }),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      null,\n      shows.filter(function (show) {\n        return (show.title + ' ' + show.description).toLowerCase().includes(searchTerm.toLowerCase());\n      }).map(function (show) {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ShowCard__[\"a\" /* default */], _extends({ key: show.imdbID }, show));\n      })\n    )\n  );\n};\n\nSearch.propTypes = {\n  shows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object).isRequired,\n  searchTerm: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    searchTerm: state.searchTerm\n  };\n};\n\nvar Unwrapped = Search;\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"b\" /* connect */])(mapStateToProps)(Search);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Search, 'Search', 'C:/Users/111/Desktop/complete-intro-to-react/js/Search.jsx');\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/111/Desktop/complete-intro-to-react/js/Search.jsx');\n\n  __REACT_HOT_LOADER__.register(Unwrapped, 'Unwrapped', 'C:/Users/111/Desktop/complete-intro-to-react/js/Search.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/111/Desktop/complete-intro-to-react/js/Search.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9TZWFyY2guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvU2VhcmNoLmpzeD9hOTlkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTaG93Q2FyZCBmcm9tICcuL1Nob3dDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG52YXIgU2VhcmNoID0gZnVuY3Rpb24gU2VhcmNoKF9yZWYpIHtcbiAgdmFyIHNob3dzID0gX3JlZi5zaG93cyxcbiAgICAgIHNlYXJjaFRlcm0gPSBfcmVmLnNlYXJjaFRlcm07XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAnc2VhcmNoJyB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7IHNob3dTZWFyY2g6IHRydWUgfSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIHNob3dzLmZpbHRlcihmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICByZXR1cm4gKHNob3cudGl0bGUgKyAnICcgKyBzaG93LmRlc2NyaXB0aW9uKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hvd0NhcmQsIF9leHRlbmRzKHsga2V5OiBzaG93LmltZGJJRCB9LCBzaG93KSk7XG4gICAgICB9KVxuICAgIClcbiAgKTtcbn07XG5cblNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIHNob3dzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICBzZWFyY2hUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hUZXJtOiBzdGF0ZS5zZWFyY2hUZXJtXG4gIH07XG59O1xuXG5leHBvcnQgdmFyIFVud3JhcHBlZCA9IFNlYXJjaDtcblxudmFyIF9kZWZhdWx0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoU2VhcmNoLCAnU2VhcmNoJywgJ0M6L1VzZXJzLzExMS9EZXNrdG9wL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL1NlYXJjaC5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnLCAnQzovVXNlcnMvMTExL0Rlc2t0b3AvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvU2VhcmNoLmpzeCcpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKFVud3JhcHBlZCwgJ1Vud3JhcHBlZCcsICdDOi9Vc2Vycy8xMTEvRGVza3RvcC9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9TZWFyY2guanN4Jyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoX2RlZmF1bHQsICdkZWZhdWx0JywgJ0M6L1VzZXJzLzExMS9EZXNrdG9wL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL1NlYXJjaC5qc3gnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvU2VhcmNoLmpzeFxuLy8gbW9kdWxlIGlkID0gLi9qcy9TZWFyY2guanN4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})