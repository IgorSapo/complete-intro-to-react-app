webpackHotUpdate(0,{

/***/ "./js/Details.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(\"./node_modules/prop-types/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(\"./js/actionCreators.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__(\"./js/Header.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Spinner__ = __webpack_require__(\"./js/Spinner.jsx\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\nvar Details = function (_React$Component) {\n  _inherits(Details, _React$Component);\n\n  function Details() {\n    _classCallCheck(this, Details);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  Details.prototype.componentDidMount = function componentDidMount() {\n    if (!this.props.rating) {\n      this.props.getAPIData();\n    }\n  };\n\n  Details.prototype.render = function render() {\n    var _props = this.props,\n        title = _props.title,\n        description = _props.description,\n        year = _props.year,\n        poster = _props.poster,\n        trailer = _props.trailer;\n\n    var rating = void 0;\n    if (this.props.rating) {\n      rating = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h3',\n        null,\n        this.props.rating\n      );\n    } else {\n      rating = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Spinner__[\"a\" /* default */], null);\n    }\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'details' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__[\"a\" /* default */], null),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'section',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'h1',\n          null,\n          title\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'h2',\n          null,\n          year\n        ),\n        rating,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {\n          alt: 'Poster for ' + title,\n          src: '/public/img/posters/' + poster\n        }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'p',\n          null,\n          description\n        )\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        { className: '' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', {\n          src: 'https://www.youtube-nocookie.com/embed/' + trailer + '?rel=0&amp;controls=1&amp;showinfo=0',\n          frameBorder: '0',\n          allowFullScreen: '0',\n          title: 'Trailer for ' + title\n        })\n      )\n    );\n  };\n\n  return Details;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nDetails.propTypes = {\n  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  year: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  poster: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  trailer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  rating: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n  getAPIData: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var apiData = state.apiData[ownProps.imdbID] ? state.apiData[ownProps.imdbID] : {};\n  return {\n    rating: apiData.rating\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    getAPIData: function getAPIData() {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators__[\"b\" /* getAPIDetails */])(ownProps.imdbID));\n    }\n  };\n};\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(Details);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Details, 'Details', 'C:/Users/111/Desktop/complete-intro-to-react/js/Details.jsx');\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/111/Desktop/complete-intro-to-react/js/Details.jsx');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/111/Desktop/complete-intro-to-react/js/Details.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/111/Desktop/complete-intro-to-react/js/Details.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9EZXRhaWxzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0RldGFpbHMuanN4Pzk4NDQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRBUElEZXRhaWxzIH0gZnJvbSAnLi9hY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbnZhciBEZXRhaWxzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERldGFpbHMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERldGFpbHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldGFpbHMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBEZXRhaWxzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5yYXRpbmcpIHtcbiAgICAgIHRoaXMucHJvcHMuZ2V0QVBJRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICBEZXRhaWxzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3Byb3BzLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF9wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgeWVhciA9IF9wcm9wcy55ZWFyLFxuICAgICAgICBwb3N0ZXIgPSBfcHJvcHMucG9zdGVyLFxuICAgICAgICB0cmFpbGVyID0gX3Byb3BzLnRyYWlsZXI7XG5cbiAgICB2YXIgcmF0aW5nID0gdm9pZCAwO1xuICAgIGlmICh0aGlzLnByb3BzLnJhdGluZykge1xuICAgICAgcmF0aW5nID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2gzJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5wcm9wcy5yYXRpbmdcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhdGluZyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZGV0YWlscycgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDEnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDInLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgeWVhclxuICAgICAgICApLFxuICAgICAgICByYXRpbmcsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICBhbHQ6ICdQb3N0ZXIgZm9yICcgKyB0aXRsZSxcbiAgICAgICAgICBzcmM6ICcvcHVibGljL2ltZy9wb3N0ZXJzLycgKyBwb3N0ZXJcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3AnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJycgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLycgKyB0cmFpbGVyICsgJz9yZWw9MCZhbXA7Y29udHJvbHM9MSZhbXA7c2hvd2luZm89MCcsXG4gICAgICAgICAgZnJhbWVCb3JkZXI6ICcwJyxcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW46ICcwJyxcbiAgICAgICAgICB0aXRsZTogJ1RyYWlsZXIgZm9yICcgKyB0aXRsZVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIERldGFpbHM7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRldGFpbHMucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBvc3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0cmFpbGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBnZXRBUElEYXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICB2YXIgYXBpRGF0YSA9IHN0YXRlLmFwaURhdGFbb3duUHJvcHMuaW1kYklEXSA/IHN0YXRlLmFwaURhdGFbb3duUHJvcHMuaW1kYklEXSA6IHt9O1xuICByZXR1cm4ge1xuICAgIHJhdGluZzogYXBpRGF0YS5yYXRpbmdcbiAgfTtcbn07XG5cbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0QVBJRGF0YTogZnVuY3Rpb24gZ2V0QVBJRGF0YSgpIHtcbiAgICAgIGRpc3BhdGNoKGdldEFQSURldGFpbHMob3duUHJvcHMuaW1kYklEKSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIF9kZWZhdWx0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGV0YWlscyk7XG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoRGV0YWlscywgJ0RldGFpbHMnLCAnQzovVXNlcnMvMTExL0Rlc2t0b3AvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnLCAnQzovVXNlcnMvMTExL0Rlc2t0b3AvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnLCAnQzovVXNlcnMvMTExL0Rlc2t0b3AvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnQzovVXNlcnMvMTExL0Rlc2t0b3AvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3gnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvRGV0YWlscy5qc3hcbi8vIG1vZHVsZSBpZCA9IC4vanMvRGV0YWlscy5qc3hcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})