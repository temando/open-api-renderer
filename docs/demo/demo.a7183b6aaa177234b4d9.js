webpackJsonp([1],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Indicator = __webpack_require__(108);

var _arrow = __webpack_require__(747);

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Indicator = (0, _Indicator.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Indicator, _PureComponent);

  function Indicator() {
    (0, _classCallCheck3.default)(this, Indicator);
    return (0, _possibleConstructorReturn3.default)(this, (Indicator.__proto__ || Object.getPrototypeOf(Indicator)).apply(this, arguments));
  }

  (0, _createClass3.default)(Indicator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          className = _props.className,
          classes = _props.classes;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.indicator, className, classes[direction]) },
        _react2.default.createElement('img', { src: _arrow2.default, alt: '', title: 'arrow' })
      );
    }
  }]);
  return Indicator;
}(_react.PureComponent)) || _class;

exports.default = Indicator;


Indicator.propTypes = {
  direction: _propTypes2.default.string,
  classes: _propTypes2.default.object,
  className: _propTypes2.default.string
};

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var shades = _ref.shades;
  return {
    indicator: {
      display: 'inline',
      verticalAlign: 'middle',
      width: '15px',
      height: '15px',

      '& img': {
        width: '15px',
        marginLeft: '1em'
      },

      '&$up img': { transform: 'rotate(180deg)' },
      '&$right img': { transform: 'rotate(-90deg)' }
    },

    up: {},
    right: {}
  };
});

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__(60);

var _extends3 = _interopRequireDefault(_extends2);

var _theme = __webpack_require__(12);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lineHeight = '40px';
var cellPadding = '10px';

var nameAndInfo = {
  verticalAlign: 'middle',
  paddingRight: '' + cellPadding
};

var enumAndDefault = {
  display: 'inline-block',
  padding: '0 5px',
  margin: '2px 3px',
  border: '1px solid grey'
};

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var borders = _ref.borders,
      backgrounds = _ref.backgrounds,
      text = _ref.text;
  return {
    'name': (0, _extends3.default)({}, nameAndInfo, {
      width: '1%',
      whiteSpace: 'nowrap',
      position: 'relative',

      '&::before': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        borderTop: '1px solid ' + borders.default,
        width: '20px'
      },

      '& span': {
        display: 'inline-block',
        paddingRight: '' + cellPadding,
        lineHeight: lineHeight,
        verticalAlign: 'middle',

        '&:first-child::before': {
          content: '""',
          display: 'inline-block',
          width: '' + cellPadding,
          height: '8px',
          verticalAlign: 'middle',
          borderLeft: '1px solid ' + borders.default
        }
      }
    }),

    'info': (0, _extends3.default)({}, nameAndInfo, {
      width: '75%',
      paddingTop: '5px'
    }),

    'additionalInfo': {
      fontSize: '0.9em',
      color: '' + (0, _color2.default)(text.default).lighten(0.5),
      padding: '5px 0',

      '& a': {
        cursor: 'pointer'
      }
    },

    'constraints': {
      marginLeft: '5px',
      fontSize: '.9rem',
      '& > span > span': {
        padding: '2px',
        backgroundColor: '' + (0, _color2.default)(borders.default).lighten(0.1),
        marginLeft: '5px'
      }
    },

    'property': {
      '&:first-child': {
        '& $name::after': {
          content: '""',
          borderLeft: '1px solid ' + borders.default,
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '51%'
        }
      },
      '&:last-child, &$last': {
        '& $name::after': {
          content: '""',
          borderLeft: '1px solid ' + borders.default,
          position: 'absolute',
          top: '0',
          left: '0',
          height: '50%'
        }
      },
      '&:only-of-type': {
        '& $name::after': {
          border: 'none'
        }
      },
      '&:first-child$last': {
        '& $name::after': {
          border: 'none'
        }
      },
      '& + &': {
        '& $info': {
          borderTop: '1px solid ' + borders.default
        },
        '& $name::after': {
          content: '""',
          borderLeft: '1px solid ' + borders.default,
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '100%'
        }
      }
    },

    'required': {
      marginLeft: '10px',
      color: 'red'
    },

    'isClickable': {
      cursor: 'pointer',
      fontWeight: 600
    },

    'last': {},

    'enum': (0, _extends3.default)({}, enumAndDefault),
    'default': (0, _extends3.default)({}, enumAndDefault),
    'indicator': {},
    'format': {},
    'subType': {}
  };
});

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = undefined;
exports.createSheet = createSheet;

var _reactJss = __webpack_require__(714);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = exports.theme = function () {
  var backgrounds = {
    default: (0, _color2.default)('#fff'),
    nav: (0, _color2.default)('#fff'),
    header: (0, _color2.default)('#fff'),
    schema: (0, _color2.default)('#F0F0F0')
  };

  var text = {
    default: (0, _color2.default)('#4c555a'),
    link: (0, _color2.default)('#69e'),
    get: (0, _color2.default)('#17c680'),
    post: (0, _color2.default)('#2a9bdd'),
    put: (0, _color2.default)('#c428d6'),
    delete: (0, _color2.default)('#dd133f')
  };

  var shades = {
    default: (0, _color2.default)(backgrounds.default).darken(0.2)
  };

  var borders = {
    default: shades.default
  };

  return { backgrounds: backgrounds, text: text, shades: shades, borders: borders };
}();

/**
 * FIXME: This only exists because react-jss doesnt do themes yet
 * as a central place to refactor
 */
function createSheet(styles) {
  var sheet = _reactJss.jss.createStyleSheet(styles(theme));

  var decorator = function decorator() {
    return (0, _reactJss2.default)(sheet).apply(undefined, arguments);
  };

  Object.assign(decorator, sheet);

  return decorator;
}

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BodySchema = __webpack_require__(165);

var _BodySchema2 = _interopRequireDefault(_BodySchema);

var _BodySchemaSwitcher = __webpack_require__(291);

var _BodySchemaSwitcher2 = _interopRequireDefault(_BodySchemaSwitcher);

var _Example = __webpack_require__(297);

var _Example2 = _interopRequireDefault(_Example);

var _BodyContent = __webpack_require__(289);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodyContent = (0, _BodyContent.styles)(_class = function (_Component) {
  (0, _inherits3.default)(BodyContent, _Component);

  function BodyContent(props) {
    (0, _classCallCheck3.default)(this, BodyContent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BodyContent.__proto__ || Object.getPrototypeOf(BodyContent)).call(this, props));

    _this.setBodySchemaIndex = _this.setBodySchemaIndex.bind(_this);

    _this.state = {
      tab: 'schema',
      index: 0
    };
    return _this;
  }

  (0, _createClass3.default)(BodyContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          examples = _props.examples,
          classes = _props.classes;
      var _state = this.state,
          tab = _state.tab,
          index = _state.index;


      return _react2.default.createElement(
        'div',
        { className: classes.bodyContent },
        schema && examples && this.renderTabs(schema, examples),
        tab === 'schema' && this.renderSchema(schema, index),
        tab === 'example' && this.renderExamples(examples)
      );
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs(includeSchema, includeExample) {
      var currentTab = this.state.tab;
      var classes = this.props.classes;


      return _react2.default.createElement(
        'div',
        { className: classes.tabs },
        includeSchema && this.renderSchemaTab(currentTab),
        includeExample && this.renderExamplesTab(currentTab)
      );
    }
  }, {
    key: 'renderSchemaTab',
    value: function renderSchemaTab(currentTab) {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        {
          role: 'button',
          onClick: function onClick() {
            return _this2.setState({ tab: 'schema' });
          },
          className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.active, currentTab === 'schema'))
        },
        'Schema'
      );
    }
  }, {
    key: 'renderExamplesTab',
    value: function renderExamplesTab(currentTab) {
      var _this3 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        {
          role: 'button',
          onClick: function onClick() {
            return _this3.setState({ tab: 'example' });
          },
          className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.active, currentTab === 'example'))
        },
        'Example'
      );
    }
  }, {
    key: 'renderSchema',
    value: function renderSchema(schema, index) {
      var _props2 = this.props,
          examples = _props2.examples,
          initialSchemaTreeDepth = _props2.initialSchemaTreeDepth;

      var hasTabs = schema !== undefined && examples !== undefined;

      if (!schema) {
        return null;
      }

      // Peek at first item of `schema` to see if it's an array of possible
      // schemas (eg. oneOf).
      if (Array.isArray(schema[0])) {
        return _react2.default.createElement(
          'div',
          { className: 'body-content-switcher' },
          _react2.default.createElement(_BodySchemaSwitcher2.default, { options: schema, onChange: this.setBodySchemaIndex }),
          _react2.default.createElement(_BodySchema2.default, { properties: schema[index], styleVariation: 'odd', hasTabs: hasTabs, depthToExpand: initialSchemaTreeDepth })
        );
      }

      return _react2.default.createElement(_BodySchema2.default, { properties: schema, styleVariation: 'odd', hasTabs: hasTabs, depthToExpand: initialSchemaTreeDepth });
    }
  }, {
    key: 'renderExamples',
    value: function renderExamples(examples) {
      return _react2.default.createElement(_Example2.default, { examples: examples });
    }
  }, {
    key: 'setBodySchemaIndex',
    value: function setBodySchemaIndex(bodySchemaIndex) {
      var index = this.state.index;


      if (bodySchemaIndex !== index) {
        this.setState({ index: bodySchemaIndex });
      }
    }
  }]);
  return BodyContent;
}(_react.Component)) || _class;

exports.default = BodyContent;


BodyContent.propTypes = {
  schema: _propTypes2.default.array,
  examples: _propTypes2.default.array,
  classes: _propTypes2.default.object,
  initialSchemaTreeDepth: _propTypes2.default.number
};

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(61);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(60);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Property = __webpack_require__(312);

var _Property2 = _interopRequireDefault(_Property);

var _BodySchema = __webpack_require__(290);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodySchema = (0, _BodySchema.styles)(_class = function (_Component) {
  (0, _inherits3.default)(BodySchema, _Component);

  function BodySchema(props) {
    (0, _classCallCheck3.default)(this, BodySchema);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BodySchema.__proto__ || Object.getPrototypeOf(BodySchema)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    var expandedProps = [];
    var _this$props = _this.props,
        properties = _this$props.properties,
        depthToExpand = _this$props.depthToExpand;


    if (depthToExpand > 0) {
      expandedProps = properties.map(function (property) {
        return property.name;
      });
    }

    _this.state = {
      expandedProps: expandedProps
    };
    return _this;
  }

  (0, _createClass3.default)(BodySchema, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          properties = _props.properties,
          styleVariation = _props.styleVariation,
          classes = _props.classes,
          hasTabs = _props.hasTabs,
          depthToExpand = _props.depthToExpand;


      if (!properties) {
        return null;
      }

      var expandedProps = this.state.expandedProps;


      return _react2.default.createElement(
        'table',
        { className: (0, _classnames2.default)(classes.bodySchema, classes[styleVariation], (0, _defineProperty3.default)({}, classes.hasTabs, hasTabs)) },
        _react2.default.createElement(
          'tbody',
          null,
          properties.map(function (property, i) {
            var isLast = properties.length === i + 1;

            if (property.properties === undefined) {
              return _this2.renderPropertyRow(property, isLast);
            }

            var isPropertyArray = property.type.includes('array');
            var isPropertyObject = property.type.includes('object');

            if (isPropertyArray || isPropertyObject) {
              if (expandedProps.includes(property.name)) {
                return [_this2.renderPropertyRow(property, isLast, true, true), _this2.renderSubsetProperties(property, isPropertyArray, depthToExpand - 1)];
              }

              return _this2.renderPropertyRow(property, isLast, false, true);
            }
          })
        )
      );
    }
  }, {
    key: 'renderPropertyRow',
    value: function renderPropertyRow(property, isLast) {
      var isOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var hasSubset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return _react2.default.createElement(_Property2.default, {
        key: property.name,
        name: property.name,
        type: property.type,
        subtype: property.subtype,
        description: property.description,
        enumValues: property.enum,
        defaultValue: property.defaultValue,
        constraints: property.constraints,
        onClick: hasSubset ? this.onClick : undefined,
        isRequired: property.required,
        isOpen: isOpen,
        isLast: isLast
      });
    }
  }, {
    key: 'renderSubsetProperties',
    value: function renderSubsetProperties(property) {
      var isArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var depthToExpand = arguments[2];
      var _props2 = this.props,
          styleVariation = _props2.styleVariation,
          classes = _props2.classes;

      var nextStyleVariation = styleVariation === 'even' ? 'odd' : 'even';

      return _react2.default.createElement(
        'tr',
        { className: classes.subset },
        _react2.default.createElement(
          'td',
          { colSpan: '100' },
          isArray && _react2.default.createElement(
            'div',
            { className: classes.array },
            'Array ['
          ),
          _react2.default.createElement(BodySchema, (0, _extends3.default)({}, this.props, {
            key: property.name + '-properties',
            properties: property.properties,
            styleVariation: nextStyleVariation,
            depthToExpand: depthToExpand
          })),
          isArray && _react2.default.createElement(
            'div',
            { className: classes.array },
            ']'
          )
        )
      );
    }

    /**
     * Responsible for updating the state of all properties that
     * have been expanded by the user.
     *
     * @param {string} propertyName
     */

  }, {
    key: 'onClick',
    value: function onClick(propertyName) {
      var expandedProps = this.state.expandedProps;


      if (expandedProps.includes(propertyName)) {
        var newExpanded = expandedProps.filter(function (prop) {
          return prop !== propertyName;
        });
        this.setState({ expandedProps: newExpanded });
      } else {
        this.setState({ expandedProps: [].concat((0, _toConsumableArray3.default)(expandedProps), [propertyName]) });
      }
    }
  }]);
  return BodySchema;
}(_react.Component)) || _class;

exports.default = BodySchema;


BodySchema.propTypes = {
  properties: _propTypes2.default.array,
  styleVariation: _propTypes2.default.oneOf(['odd', 'even']),
  classes: _propTypes2.default.object,
  hasTabs: _propTypes2.default.bool,
  depthToExpand: _propTypes2.default.number
};

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _NavigationMethod = __webpack_require__(306);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMethod = (0, _NavigationMethod.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(NavigationMethod, _PureComponent);

  function NavigationMethod() {
    (0, _classCallCheck3.default)(this, NavigationMethod);
    return (0, _possibleConstructorReturn3.default)(this, (NavigationMethod.__proto__ || Object.getPrototypeOf(NavigationMethod)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavigationMethod, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          method = _props.method,
          isActive = _props.isActive,
          isOpen = _props.isOpen,
          classes = _props.classes;


      return _react2.default.createElement(
        'a',
        {
          className: (0, _classnames2.default)(classes.navigationMethod, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.active, isActive), (0, _defineProperty3.default)(_classNames, classes.open, isOpen), (0, _defineProperty3.default)(_classNames, classes.closed, !isOpen), _classNames)),
          href: '#' + method.link
        },
        _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)(classes.type, '' + method.type) },
          method.type.toUpperCase()
        ),
        _react2.default.createElement(
          'span',
          { className: classes.title },
          method.title
        )
      );
    }
  }]);
  return NavigationMethod;
}(_react.PureComponent)) || _class;

exports.default = NavigationMethod;


NavigationMethod.propTypes = {
  method: _propTypes2.default.object,
  isActive: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Overlay = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = (0, _Overlay.styles)(_class = function (_React$PureComponent) {
  (0, _inherits3.default)(Overlay, _React$PureComponent);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes;


      return _react2.default.createElement(
        'div',
        { className: classes.overlay },
        children
      );
    }
  }]);
  return Overlay;
}(_react2.default.PureComponent)) || _class;

exports.default = Overlay;


Overlay.propTypes = {
  children: _propTypes2.default.node,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var backgrounds = _ref.backgrounds;
  return {
    'overlay': {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '' + backgrounds.default,

      padding: '15% 0 0',
      textAlign: 'center',
      textShadow: '1px 2px 2px rgba(#000, 0.5)',

      '& h3': {
        fontStyle: 'italic',
        fontWeight: '300'
      },

      '& img': {
        width: '250px',
        height: '250px',
        opacity: '.4'
      }
    }
  };
});

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (theme) {
  return {
    base: {
      backgroundColor: '' + theme.backgrounds.default,
      color: '' + theme.text.default,
      height: '100%'
    },

    '@global': {
      'html, body > div': {
        height: '100%'
      },

      'body': {
        height: '100%',
        margin: '0',
        padding: '0',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",helvetica,sans-serif;',
        lineHeight: '1.4',
        fontSize: '1em'
      },

      'ul, ol': {
        margin: '.5rem 0',
        padding: '0',

        '& li': {
          marginLeft: '1.5rem'
        }
      },

      'h3, h4, h5, h6': {
        margin: '0',
        fontWeight: '400'
      },

      'a': {
        color: '' + theme.text.link,
        textDecoration: 'none',

        '&:hover': {
          transition: 'color .25s',
          color: '' + (0, _color2.default)(theme.text.link).lighten(0.1),
          textDecoration: 'underline'
        }
      }
    }
  };
});

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = undefined;

var _cloneDeep = __webpack_require__(575);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Unsafe JSON clone */
// export const clone = (obj) => JSON.parse(JSON.stringify(obj))
var clone = exports.clone = _cloneDeep2.default;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(246);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Demo = __webpack_require__(322);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = document.body.appendChild(document.createElement('div'));

_reactDom2.default.render(_react2.default.createElement(_Demo.Demo, null), dom);

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var text = _ref.text,
      backgrounds = _ref.backgrounds;
  return {
    'bodyContent': {
      display: 'table',
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box'
    },

    'tabs': {
      '& > div': {
        display: 'inline-block',
        padding: '10px 20px',
        cursor: 'pointer',

        '&:not($active)': {
          color: '' + (0, _color2.default)(text.default).lighten(0.5)
        }
      }
    },

    'active': {
      backgroundColor: '' + backgrounds.schema,
      borderRadius: '10px 10px 0 0'
    }
  };
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _theme = __webpack_require__(12);

var _Property = __webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var _subset;

  var backgrounds = _ref.backgrounds,
      borders = _ref.borders;
  return {
    'bodySchema': {
      width: '100%',
      borderSpacing: '0',
      padding: '10px 50px 10px 20px',
      boxSizing: 'border-box',
      borderRadius: '10px',
      fontSize: '14.5px'
    },

    'even': {
      backgroundColor: '' + backgrounds.default
    },
    'odd': {
      backgroundColor: '' + backgrounds.schema
    },

    'subset': (_subset = {}, (0, _defineProperty3.default)(_subset, '& + .' + _Property.styles.classes.property + ':not(.' + _Property.styles.classes.last + ')', (0, _defineProperty3.default)({}, '& .' + _Property.styles.classes.name + '::after', {
      content: '""',
      borderLeft: '1px solid ' + borders.default,
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '100%'
    })), (0, _defineProperty3.default)(_subset, '& > td', {
      borderLeft: '1px solid ' + borders.default
    }), (0, _defineProperty3.default)(_subset, '.' + _Property.styles.classes.last + ' + & > td', {
      borderLeft: 'none'
    }), _subset),

    'array': {
      fontFamily: 'monospace',
      padding: '5px 10px'
    },
    'hasTabs': {
      borderTopLeftRadius: 0
    }
  };
});

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BodySchemaSwitcher = __webpack_require__(292);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodySchemaSwitcher = (0, _BodySchemaSwitcher.styles)(_class = function (_Component) {
  (0, _inherits3.default)(BodySchemaSwitcher, _Component);

  function BodySchemaSwitcher(props) {
    (0, _classCallCheck3.default)(this, BodySchemaSwitcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BodySchemaSwitcher.__proto__ || Object.getPrototypeOf(BodySchemaSwitcher)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(BodySchemaSwitcher, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          classes = _props.classes;


      return _react2.default.createElement(
        'form',
        { className: classes.schemaSwitcher },
        _react2.default.createElement(
          'label',
          null,
          'This schema can be fulfilled by multiple options: '
        ),
        _react2.default.createElement(
          'select',
          { className: classes.select, onChange: this.handleChange },
          options.map(function (option, i) {
            return _react2.default.createElement(
              'option',
              { key: i, value: i },
              'Option ' + (i + 1)
            );
          })
        )
      );
    }
  }]);
  return BodySchemaSwitcher;
}(_react.Component)) || _class;

exports.default = BodySchemaSwitcher;


BodySchemaSwitcher.propTypes = {
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var text = _ref.text;
  return {
    'schemaSwitcher': {
      marginBottom: '10px'
    },

    'select': {
      background: 'transparent',
      color: '' + text.default,
      border: '1px solid ' + text.default,
      borderRadius: '5px',
      marginLeft: '15px',
      fontSize: 'medium'
    }
  };
});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContentContainer = __webpack_require__(294);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentContainer = (0, _ContentContainer.styles)(_class = function (_Component) {
  (0, _inherits3.default)(ContentContainer, _Component);

  function ContentContainer() {
    (0, _classCallCheck3.default)(this, ContentContainer);
    return (0, _possibleConstructorReturn3.default)(this, (ContentContainer.__proto__ || Object.getPrototypeOf(ContentContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentContainer, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        'div',
        { className: classes.contentContainer },
        this.props.children
      );
    }
  }]);
  return ContentContainer;
}(_react.Component)) || _class;

exports.default = ContentContainer;


ContentContainer.propTypes = {
  children: _propTypes2.default.any,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function () {
  return {
    'contentContainer': {
      padding: '20px 0',

      '& h2': {
        paddingLeft: '2rem'
      }
    }
  };
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CopyButton = function (_Component) {
  (0, _inherits3.default)(CopyButton, _Component);

  function CopyButton(props) {
    (0, _classCallCheck3.default)(this, CopyButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CopyButton.__proto__ || Object.getPrototypeOf(CopyButton)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onMouseOver = _this.onMouseOver.bind(_this);

    _this.state = {
      tooltip: _this.props.tooltip
    };
    return _this;
  }

  (0, _createClass3.default)(CopyButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        {
          title: this.state.tooltip,
          onClick: this.onClick,
          onMouseOver: this.onMouseOver
        },
        'Copy'
      );
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.setState({ tooltip: 'Copied' });

      this.props.onCopyClick(e);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(e) {
      this.setState({ tooltip: this.props.tooltip });
    }
  }]);
  return CopyButton;
}(_react.Component);

exports.default = CopyButton;


CopyButton.propTypes = {
  onCopyClick: _propTypes2.default.func,
  tooltip: _propTypes2.default.string
};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

var _theme = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var text = _ref.text;
  return {
    'description': {
      '&:not($inline)': {
        color: '' + (0, _color2.default)(text.default).lighten(0.3),
        fontSize: '0.9em'
      },

      '&$inline': {
        '&, & p': {
          display: 'inline'
        }
      },
      '& p': {
        margin: '.5rem 0'
      }
    },
    'inline': {}
  };
});

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJsonView = __webpack_require__(708);

var _reactJsonView2 = _interopRequireDefault(_reactJsonView);

var _copyToClipboard = __webpack_require__(355);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _CopyButton = __webpack_require__(295);

var _CopyButton2 = _interopRequireDefault(_CopyButton);

var _Example = __webpack_require__(298);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = (0, _Example.styles)(_class = function (_Component) {
  (0, _inherits3.default)(Example, _Component);

  function Example(props) {
    (0, _classCallCheck3.default)(this, Example);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.onCopyClick = _this.onCopyClick.bind(_this);

    _this.state = {
      hovered: false,
      collapseAll: false
    };
    return _this;
  }

  (0, _createClass3.default)(Example, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          examples = _props.examples,
          classes = _props.classes;

      var example = void 0;

      // TODO: Handle multiple examples
      if (examples && examples.length) {
        example = examples[0];
      }

      var isJson = typeof example !== 'string';

      if (!example) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: classes.example,
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({ hovered: true });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({ hovered: false });
          }
        },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.buttons, (0, _defineProperty3.default)({}, classes.hovered, this.state.hovered)) },
          _react2.default.createElement(_CopyButton2.default, { onCopyClick: this.onCopyClick, tooltip: 'Copy to Clipboard' }),
          !isJson && _react2.default.createElement(
            'span',
            { onClick: function onClick() {
                return _this2.setState({ collapseAll: false });
              } },
            'Expand All'
          ),
          !isJson && _react2.default.createElement(
            'span',
            { onClick: function onClick() {
                return _this2.setState({ collapseAll: true });
              } },
            'Collapse All'
          )
        ),
        isJson ? _react2.default.createElement(_reactJsonView2.default, {
          src: example,
          theme: 'chalk',
          displayDataTypes: false,
          displayObjectSize: false,
          collapsed: this.state.collapseAll,
          enableClipboard: false
        }) : example
      );
    }
  }, {
    key: 'onCopyClick',
    value: function onCopyClick() {
      (0, _copyToClipboard2.default)(JSON.stringify(this.props.examples[0], null, 2));
    }
  }]);
  return Example;
}(_react.Component)) || _class;

exports.default = Example;


Example.propTypes = {
  examples: _propTypes2.default.array,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function () {
  return {

    'example': {
      backgroundColor: 'rgb(17, 17, 17)',
      color: 'white',
      padding: '10px'
    },

    'buttons': {
      opacity: '0.5',
      position: 'relative',
      textAlign: 'right',
      paddingRight: '10px',
      marginBottom: '10px',

      '& > span': {
        color: 'white',
        padding: '2px 10px',
        cursor: 'pointer'
      }
    },

    hovered: {
      '&$buttons': {
        transition: 'all .2s',
        opacity: '1'
      }
    }
  };
});

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExternalLink = function (_PureComponent) {
  (0, _inherits3.default)(ExternalLink, _PureComponent);

  function ExternalLink() {
    (0, _classCallCheck3.default)(this, ExternalLink);
    return (0, _possibleConstructorReturn3.default)(this, (ExternalLink.__proto__ || Object.getPrototypeOf(ExternalLink)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExternalLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { rel: 'noopener noreferrer', target: '_blank', href: this.props.href },
        this.props.children
      );
    }
  }]);
  return ExternalLink;
}(_react.PureComponent);

exports.default = ExternalLink;


ExternalLink.propTypes = {
  href: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.string.isRequired
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _ExternalLink = __webpack_require__(299);

var _ExternalLink2 = _interopRequireDefault(_ExternalLink);

var _Header = __webpack_require__(301);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (0, _Header.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          version = _props.version,
          description = _props.description,
          info = _props.info,
          definitionUrl = _props.definitionUrl,
          classes = _props.classes;


      return _react2.default.createElement(
        'header',
        { id: 'header', className: classes.header },
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'dl',
          { className: classes.inlinePairs },
          _react2.default.createElement(
            'dt',
            null,
            'Version'
          ),
          _react2.default.createElement(
            'dd',
            null,
            version
          ),
          info && info.contact && this.renderContact(info.contact),
          info && info.license && this.renderLicense(info.license)
        ),
        description && _react2.default.createElement(_Description2.default, { description: description }),
        _react2.default.createElement(
          'nav',
          null,
          definitionUrl && _react2.default.createElement(
            _ExternalLink2.default,
            { href: definitionUrl },
            'Download OpenAPI definition'
          ),
          info && info.termsOfService && _react2.default.createElement(
            _ExternalLink2.default,
            { href: info.termsOfService },
            'Terms of Service'
          )
        )
      );
    }

    /**
     * The contact object has no required fields, so the logic is a bit meh as
     * they are several permutations to consider.
     *
     * @param {Object} contact
     */

  }, {
    key: 'renderContact',
    value: function renderContact(contact) {
      var elements = [_react2.default.createElement(
        'dt',
        { key: 'contact' },
        'Contact'
      )];

      if (contact.name && contact.url) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: contact.url },
            contact.name
          ),
          contact.email && '(' + contact.email + ')'
        ));
      } else if (contact.name) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          contact.name
        ));
      } else if (contact.url) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: contact.url },
            contact.url
          ),
          contact.email && '(' + contact.email + ')'
        ));
      } else if (contact.email) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: 'mailto:' + contact.email },
            contact.email
          )
        ));
      }

      return elements;
    }
  }, {
    key: 'renderLicense',
    value: function renderLicense(license) {
      return [_react2.default.createElement(
        'dt',
        { key: 'license' },
        'License'
      ), _react2.default.createElement(
        'dd',
        { key: 'license-value' },
        license.url && _react2.default.createElement(
          _ExternalLink2.default,
          { href: license.url },
          license.name
        ),
        !license.url && license.name
      )];
    }
  }]);
  return Header;
}(_react.PureComponent)) || _class;

exports.default = Header;


Header.propTypes = {
  title: _propTypes2.default.string.isRequired,
  version: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string,
  info: _propTypes2.default.shape({
    contact: _propTypes2.default.object,
    license: _propTypes2.default.object,
    termsOfService: _propTypes2.default.string
  }),
  definitionUrl: _propTypes2.default.string,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var borders = _ref.borders;
  return {
    'header': {
      padding: '0 20px',

      '& h1': {
        marginBottom: '.5rem'
      },

      '& nav a': {
        display: 'inline-block',
        marginRight: '.5rem'
      }
    },

    'inlinePairs': {
      display: 'inline-flex',
      margin: '1em 0',
      padding: '0',
      borderBottom: '1px solid ' + borders.default,

      '& dt, & dd': {
        margin: '0',
        padding: '.5rem',
        borderTop: '1px solid ' + borders.default
      },

      '& dt': {
        paddingRight: '1.5rem',
        fontWeight: 600
      }
    }
  };
});

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactScrollableAnchor = __webpack_require__(160);

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

var _BodyContent = __webpack_require__(164);

var _BodyContent2 = _interopRequireDefault(_BodyContent);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _Parameters = __webpack_require__(311);

var _Parameters2 = _interopRequireDefault(_Parameters);

var _Response = __webpack_require__(314);

var _Response2 = _interopRequireDefault(_Response);

var _Method = __webpack_require__(303);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = (0, _Method.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Method, _PureComponent);

  function Method() {
    (0, _classCallCheck3.default)(this, Method);
    return (0, _possibleConstructorReturn3.default)(this, (Method.__proto__ || Object.getPrototypeOf(Method)).apply(this, arguments));
  }

  (0, _createClass3.default)(Method, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          method = _props.method,
          classes = _props.classes,
          initialSchemaTreeDepth = _props.initialSchemaTreeDepth;
      var title = method.title,
          type = method.type,
          description = method.description,
          parameters = method.parameters,
          request = method.request,
          responses = method.responses;


      return _react2.default.createElement(
        _reactScrollableAnchor2.default,
        { id: method.link },
        _react2.default.createElement(
          'div',
          { className: classes.method },
          _react2.default.createElement(
            'h3',
            null,
            title,
            _react2.default.createElement(
              'span',
              { className: (0, _classnames2.default)(classes.type, '' + method.type) },
              type
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            description && _react2.default.createElement(_Description2.default, { description: description }),
            parameters && _react2.default.createElement(_Parameters2.default, { parameters: parameters, initialSchemaTreeDepth: initialSchemaTreeDepth }),
            request && this.renderRequest(request, initialSchemaTreeDepth),
            responses && this.renderResponses(responses, initialSchemaTreeDepth)
          )
        )
      );
    }
  }, {
    key: 'renderRequest',
    value: function renderRequest(request, initialSchemaTreeDepth) {
      var schema = request.schema,
          examples = request.examples;


      if (!schema) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'method-request' },
        _react2.default.createElement(
          'h4',
          null,
          'Request Body'
        ),
        _react2.default.createElement(_BodyContent2.default, { schema: schema, examples: examples, initialSchemaTreeDepth: initialSchemaTreeDepth })
      );
    }
  }, {
    key: 'renderResponses',
    value: function renderResponses(responses, initialSchemaTreeDepth) {
      return _react2.default.createElement(
        'div',
        { className: 'method-responses' },
        _react2.default.createElement(
          'h4',
          null,
          'Responses'
        ),
        responses.map(function (r) {
          return _react2.default.createElement(_Response2.default, { key: r.code, response: r, initialSchemaTreeDepth: initialSchemaTreeDepth });
        })
      );
    }
  }]);
  return Method;
}(_react.PureComponent)) || _class;

exports.default = Method;


Method.propTypes = {
  method: _propTypes2.default.shape({
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    link: _propTypes2.default.string,
    description: _propTypes2.default.string,
    parameters: _propTypes2.default.object,
    request: _propTypes2.default.object,
    responses: _propTypes2.default.array
  }),
  classes: _propTypes2.default.object,
  initialSchemaTreeDepth: _propTypes2.default.number
};

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var borders = _ref.borders,
      text = _ref.text;
  return {
    method: {
      borderBottom: '1px solid ' + borders.default,
      margin: '0 1rem 2rem 0',
      padding: '1rem 2rem',

      '& > h3': {
        marginBottom: '15px',
        '& > span': {
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          marginLeft: '10px',

          '&.get': {
            color: '' + text.get
          },
          '&.post': {
            color: '' + text.post
          },
          '&.put': {
            color: '' + text.put
          },
          '&.delete': {
            color: '' + text.delete
          }
        }
      },

      '& h4': {
        fontSize: 'smaller',
        textTransform: 'uppercase',
        color: '' + (0, _color2.default)(text.default).lighten(0.5),
        borderBottom: '1px solid ' + borders.default,
        marginTop: '20px'
      }
    }
  };
});

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(61);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(579);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _NavigationTag = __webpack_require__(307);

var _NavigationTag2 = _interopRequireDefault(_NavigationTag);

var _NavigationMethod = __webpack_require__(166);

var _NavigationMethod2 = _interopRequireDefault(_NavigationMethod);

var _Navigation = __webpack_require__(305);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = (0, _Navigation.styles)(_class = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      expandedTags: []
    };
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isHashDiff = this.props.hash !== nextProps.hash;
      var isTagsDiff = !(0, _isEqual2.default)(nextState.expandedTags, this.state.expandedTags);

      return isHashDiff || isTagsDiff;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          navigation = _props.navigation,
          hash = _props.hash,
          classes = _props.classes;
      var expandedTags = this.state.expandedTags;


      return _react2.default.createElement(
        'nav',
        { className: classes.navigation },
        navigation && navigation.map(function (tag) {
          // Handle a navigation that doesn't require tags.
          if (!tag.methods) {
            var isActive = '#' + tag.link === location.hash;
            return _react2.default.createElement(_NavigationMethod2.default, { key: tag.link, method: tag, isActive: isActive, isOpen: true });
          }

          // Otherwise the navigation is grouped by tag.
          return _react2.default.createElement(_NavigationTag2.default, {
            key: tag.title,
            title: tag.title,
            description: tag.description,
            methods: tag.methods,
            shouldBeExpanded: expandedTags.includes(tag.title),
            onClick: _this2.onClick,
            hash: hash
          });
        })
      );
    }

    /**
     * Responsible for updating the state of the navigation with all
     * expanded tags.
     *
     * @param {string} tagTitle
     */

  }, {
    key: 'onClick',
    value: function onClick(tagTitle) {
      var expandedTags = this.state.expandedTags;


      if (expandedTags.includes(tagTitle)) {
        var newExpanded = expandedTags.filter(function (prop) {
          return prop !== tagTitle;
        });
        this.setState({ expandedTags: newExpanded });
      } else {
        this.setState({ expandedTags: [].concat((0, _toConsumableArray3.default)(expandedTags), [tagTitle]) });
      }
    }
  }]);
  return Navigation;
}(_react.Component)) || _class;

exports.default = Navigation;


Navigation.propTypes = {
  navigation: _propTypes2.default.array,
  hash: _propTypes2.default.string,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _theme = __webpack_require__(12);

var _Indicator = __webpack_require__(108);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var _navigation;

  var backgrounds = _ref.backgrounds,
      borders = _ref.borders,
      text = _ref.text;
  return {
    navigation: (_navigation = {
      width: '20%',
      height: '100%',
      verticalAlign: 'top',
      backgroundColor: '' + backgrounds.nav,
      position: 'fixed',
      boxSizing: 'border-box',
      overflowY: 'auto'

    }, (0, _defineProperty3.default)(_navigation, '& ' + _Indicator.styles.classes.indicator, {
      float: 'right',
      display: 'block',
      marginTop: '5px'
    }), (0, _defineProperty3.default)(_navigation, '& > div + div', {
      borderTop: '1px solid ' + borders.default
    }), (0, _defineProperty3.default)(_navigation, '& a', {
      color: '' + text.default,
      padding: '.7rem 1rem',
      '&:hover': {
        color: '' + (0, _color2.default)(text.default).lighten(0.1),
        transition: 'all .2s'
      }
    }), _navigation)
  };
});

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var backgrounds = _ref.backgrounds,
      text = _ref.text;
  return {
    'navigationMethod': {
      display: 'flex',
      padding: '.7rem 1.5rem',
      fontSize: 'smaller'
    },
    'active': {
      backgroundColor: '' + backgrounds.schema
    },
    'open': {
      display: 'flex'
    },
    'closed': {
      display: 'none'
    },
    'type': {
      width: '55px',
      '&.get': {
        color: '' + text.get
      },
      '&.post': {
        color: '' + text.post
      },
      '&.put': {
        color: '' + text.put
      },
      '&.delete': {
        color: '' + text.delete
      }
    },
    'title': {
      width: 'calc(100% - 55px)'
    }
  };
});

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _Indicator = __webpack_require__(107);

var _Indicator2 = _interopRequireDefault(_Indicator);

var _NavigationMethod = __webpack_require__(166);

var _NavigationMethod2 = _interopRequireDefault(_NavigationMethod);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _NavigationTag = __webpack_require__(308);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationTag = (0, _NavigationTag.styles)(_class = function (_Component) {
  (0, _inherits3.default)(NavigationTag, _Component);

  function NavigationTag(props) {
    (0, _classCallCheck3.default)(this, NavigationTag);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavigationTag.__proto__ || Object.getPrototypeOf(NavigationTag)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavigationTag, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isHashDiff = this.props.hash !== nextProps.hash;
      var isExpandedStatusDiff = this.props.shouldBeExpanded !== nextProps.shouldBeExpanded;

      return isHashDiff || isExpandedStatusDiff;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          title = _props.title,
          methods = _props.methods,
          hash = _props.hash,
          onClick = _props.onClick;


      if (!methods) {
        return null;
      }

      var method = methods.find(function (method) {
        return '#' + method.link === hash;
      });

      if (method) {
        onClick(title);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.onClick(this.props.title);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          description = _props2.description,
          shouldBeExpanded = _props2.shouldBeExpanded,
          methods = _props2.methods,
          hash = _props2.hash,
          classes = _props2.classes;

      // If tag has any method that matches hash, then it is considered active

      var isActiveTag = false;
      if (methods) {
        isActiveTag = methods.some(function (method) {
          return '#' + method.link === hash;
        });
      }

      var isExpanded = false;
      if (shouldBeExpanded || isActiveTag) {
        isExpanded = true;
      }

      var indicatorDirection = void 0;
      if (isExpanded) {
        indicatorDirection = 'bottom';
      } else {
        indicatorDirection = 'right';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          {
            className: classes.navigationTag,
            href: '#' + title,
            onClick: this.handleClick
          },
          _react2.default.createElement(
            'span',
            null,
            title
          ),
          _react2.default.createElement(_Indicator2.default, { direction: indicatorDirection }),
          description && _react2.default.createElement(_Description2.default, { description: description })
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.navigationTagMethods, (0, _defineProperty3.default)({}, classes.expanded, isExpanded)) },
          methods && methods.map(function (method) {
            var isActive = '#' + method.link === hash;

            return _react2.default.createElement(_NavigationMethod2.default, { key: method.link, method: method, isActive: isActive, isOpen: isExpanded });
          })
        )
      );
    }
  }]);
  return NavigationTag;
}(_react.Component)) || _class;

exports.default = NavigationTag;


NavigationTag.propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string,
  methods: _propTypes2.default.array,
  shouldBeExpanded: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  hash: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function () {
  return {
    'navigationTagMethods': {
      '&$expanded': {
        marginBottom: '.5rem'
      }
    },

    'navigationTag': {
      display: 'block',
      padding: '1rem 1rem .5rem',

      '&:hover': {
        textDecoration: 'none',

        '& span': { textDecoration: 'underline' }
      }
    },

    'expanded': {}
  };
});

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(300);

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = __webpack_require__(304);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ContentContainer = __webpack_require__(293);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _SecurityContainer = __webpack_require__(316);

var _SecurityContainer2 = _interopRequireDefault(_SecurityContainer);

var _ServiceContainer = __webpack_require__(318);

var _ServiceContainer2 = _interopRequireDefault(_ServiceContainer);

var _Page = __webpack_require__(310);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = (0, _Page.styles)(_class = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          definition = _props.definition,
          hash = _props.hash,
          definitionUrl = _props.definitionUrl,
          initialSchemaTreeDepth = _props.initialSchemaTreeDepth,
          classes = _props.classes;


      if (!definition) {
        return null;
      }

      var navigation = definition.navigation,
          services = definition.services,
          security = definition.security;


      return _react2.default.createElement(
        'div',
        { className: 'page' },
        _react2.default.createElement(_Navigation2.default, { navigation: navigation, hash: hash }),
        _react2.default.createElement(
          'div',
          { className: classes.main },
          _react2.default.createElement(_Header2.default, {
            title: definition.title,
            description: definition.description,
            version: definition.version,
            info: definition.info,
            definitionUrl: definitionUrl
          }),
          security && this.renderSecurity(security),
          _react2.default.createElement(
            _ContentContainer2.default,
            null,
            services && services.map(function (service) {
              return _react2.default.createElement(_ServiceContainer2.default, { key: service.title, service: service, initialSchemaTreeDepth: initialSchemaTreeDepth });
            })
          )
        )
      );
    }
  }, {
    key: 'renderSecurity',
    value: function renderSecurity(security) {
      return _react2.default.createElement(
        _ContentContainer2.default,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Authentication'
        ),
        Object.keys(security).map(function (id) {
          return _react2.default.createElement(_SecurityContainer2.default, { key: id, id: id, security: security[id] });
        })
      );
    }
  }]);
  return Page;
}(_react.Component)) || _class;

exports.default = Page;


Page.propTypes = {
  definition: _propTypes2.default.shape({
    navigation: _propTypes2.default.arrayOf(_propTypes2.default.object),
    services: _propTypes2.default.arrayOf(_propTypes2.default.object),
    security: _propTypes2.default.object
  }),
  hash: _propTypes2.default.string.isRequired,
  initialSchemaTreeDepth: _propTypes2.default.number,
  definitionUrl: _propTypes2.default.string,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var borders = _ref.borders;
  return {
    'page': {
      width: '100%',
      height: '100%'
    },
    'main': {
      marginLeft: '20%',
      width: '80%',
      boxSizing: 'border-box',
      border: '1px solid ' + borders.default
    }
  };
});

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BodySchema = __webpack_require__(165);

var _BodySchema2 = _interopRequireDefault(_BodySchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parameters = function (_PureComponent) {
  (0, _inherits3.default)(Parameters, _PureComponent);

  function Parameters() {
    (0, _classCallCheck3.default)(this, Parameters);
    return (0, _possibleConstructorReturn3.default)(this, (Parameters.__proto__ || Object.getPrototypeOf(Parameters)).apply(this, arguments));
  }

  (0, _createClass3.default)(Parameters, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          parameters = _props.parameters,
          initialSchemaTreeDepth = _props.initialSchemaTreeDepth;


      if (!parameters) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        Object.keys(parameters).map(function (key) {
          var value = parameters[key];
          return _react2.default.createElement(
            'div',
            { key: key },
            _react2.default.createElement(
              'h4',
              null,
              key,
              ' Parameters'
            ),
            _react2.default.createElement(_BodySchema2.default, { properties: value, depthToExpand: initialSchemaTreeDepth })
          );
        })
      );
    }
  }]);
  return Parameters;
}(_react.PureComponent);

exports.default = Parameters;


Parameters.propTypes = {
  parameters: _propTypes2.default.object,
  initialSchemaTreeDepth: _propTypes2.default.number
};

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _Indicator = __webpack_require__(107);

var _Indicator2 = _interopRequireDefault(_Indicator);

var _PropertyConstraints = __webpack_require__(313);

var _PropertyConstraints2 = _interopRequireDefault(_PropertyConstraints);

var _Property = __webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Property = (0, _Property.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Property, _PureComponent);

  function Property(props) {
    (0, _classCallCheck3.default)(this, Property);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Property.__proto__ || Object.getPrototypeOf(Property)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.displayAllEnums = _this.displayAllEnums.bind(_this);

    _this.state = {
      enumValues: props.enumValues ? props.enumValues : null
    };
    return _this;
  }

  (0, _createClass3.default)(Property, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var enumValues = this.state.enumValues;
      if (enumValues && enumValues.length > 20) {
        var updatedValues = enumValues.slice();
        updatedValues.length = 20;
        this.setState({ enumValues: updatedValues });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.onClick) {
        this.props.onClick(this.props.name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          title = _props.title,
          description = _props.description,
          constraints = _props.constraints,
          isRequired = _props.isRequired,
          defaultValue = _props.defaultValue,
          onClick = _props.onClick,
          isOpen = _props.isOpen,
          isLast = _props.isLast,
          classes = _props.classes;
      var _props2 = this.props,
          name = _props2.name,
          enumValues = _props2.enumValues;

      // If enumValues only has one single value, append the single value to name, and not display enum values

      if (enumValues && enumValues.length === 1) {
        name = name + ' = "' + enumValues[0] + '"';
        enumValues = [];
      }

      var isClickable = onClick !== undefined;

      var subtype = void 0;
      if (type.includes('array')) {
        subtype = this.props.subtype;
      }

      var indicatorDirection = void 0;
      if (isOpen) {
        indicatorDirection = 'up';
      } else {
        indicatorDirection = 'down';
      }

      return _react2.default.createElement(
        'tr',
        {
          className: (0, _classnames2.default)(classes.property, (0, _defineProperty3.default)({}, classes.last, isLast)),
          onClick: this.handleClick
        },
        _react2.default.createElement(
          'td',
          { className: (0, _classnames2.default)(classes.name, (0, _defineProperty3.default)({}, classes.isClickable, isClickable)) },
          _react2.default.createElement(
            'span',
            null,
            name
          ),
          isClickable && _react2.default.createElement(_Indicator2.default, { className: classes.indicator, direction: indicatorDirection })
        ),
        _react2.default.createElement(
          'td',
          { className: classes.info },
          title && _react2.default.createElement(
            'span',
            { className: classes.title },
            title
          ),
          _react2.default.createElement(
            'span',
            { className: classes.type },
            !subtype ? type.join(', ') : _react2.default.createElement(
              'span',
              { className: classes.subType },
              subtype,
              '[]'
            ),
            !subtype && constraints && constraints.format && _react2.default.createElement(
              'span',
              { className: classes.format },
              '<',
              constraints.format,
              '>'
            )
          ),
          _react2.default.createElement(_PropertyConstraints2.default, { constraints: constraints, type: type, isRequired: isRequired }),
          (enumValues && enumValues.length || defaultValue || description) && _react2.default.createElement(
            'div',
            { className: classes.additionalInfo },
            enumValues && this.renderEnumValues(enumValues),
            defaultValue !== undefined && this.renderDefaultValue(defaultValue),
            description && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Description2.default, { isInline: true, description: description })
            )
          )
        )
      );
    }

    /**
     * Render enum values
     *
     * @param {Array} values
     */

  }, {
    key: 'renderEnumValues',
    value: function renderEnumValues(values) {
      var classes = this.props.classes;

      var valuesToDisplay = this.state.enumValues;
      var isEnumReduced = false;
      if (values.length !== valuesToDisplay.length) {
        isEnumReduced = true;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Valid values:'
        ),
        valuesToDisplay.map(function (value) {
          return _react2.default.createElement(
            'span',
            { key: value, className: classes.enum },
            value
          );
        }),
        isEnumReduced && _react2.default.createElement(
          'a',
          { onClick: this.displayAllEnums },
          '...'
        )
      );
    }
  }, {
    key: 'displayAllEnums',
    value: function displayAllEnums() {
      this.setState({ enumValues: this.props.enumValues });
    }
  }, {
    key: 'renderDefaultValue',
    value: function renderDefaultValue(value) {
      var displayValue = void 0;

      if (typeof value === 'number' || typeof value === 'string') {
        displayValue = value;
      } else if (typeof value === 'boolean') {
        displayValue = value.toString();
      } else if (Array.isArray(value)) {
        displayValue = '[' + value.join(', ') + ']';
      }

      return _react2.default.createElement(
        'div',
        { className: 'default' },
        'Default: ',
        _react2.default.createElement(
          'span',
          null,
          displayValue
        )
      );
    }
  }]);
  return Property;
}(_react.PureComponent)) || _class;

exports.default = Property;


Property.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  subtype: _propTypes2.default.string,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  constraints: _propTypes2.default.shape({
    format: _propTypes2.default.string,
    exclusiveMinimum: _propTypes2.default.number,
    exclusiveMaximum: _propTypes2.default.number,
    maximum: _propTypes2.default.number,
    maxItems: _propTypes2.default.number,
    maxLength: _propTypes2.default.number,
    maxProperties: _propTypes2.default.number,
    minimum: _propTypes2.default.number,
    minItems: _propTypes2.default.number,
    minLength: _propTypes2.default.number,
    minProperties: _propTypes2.default.number,
    multipleOf: _propTypes2.default.number,
    pattern: _propTypes2.default.string,
    uniqueItems: _propTypes2.default.bool
  }),
  enumValues: _propTypes2.default.array,
  defaultValue: _propTypes2.default.any,
  isRequired: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  isLast: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Property = __webpack_require__(109);

var _array = __webpack_require__(327);

var _numeric = __webpack_require__(329);

var _object = __webpack_require__(330);

var _string = __webpack_require__(331);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertyConstraints = (0, _Property.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(PropertyConstraints, _PureComponent);

  function PropertyConstraints() {
    (0, _classCallCheck3.default)(this, PropertyConstraints);
    return (0, _possibleConstructorReturn3.default)(this, (PropertyConstraints.__proto__ || Object.getPrototypeOf(PropertyConstraints)).apply(this, arguments));
  }

  (0, _createClass3.default)(PropertyConstraints, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          isRequired = _props.isRequired,
          constraints = _props.constraints,
          classes = _props.classes;


      return _react2.default.createElement(
        'span',
        { className: classes.constraints },
        isRequired && _react2.default.createElement(
          'span',
          { className: classes.required },
          'required'
        ),
        constraints && ['number', 'integer'].some(function (t) {
          return type.includes(t);
        }) && this.renderConstraints(constraints, 'numeric'),
        constraints && type.includes('string') && this.renderConstraints(constraints, 'string'),
        constraints && type.includes('array') && this.renderConstraints(constraints, 'array'),
        constraints && type.includes('object') && this.renderConstraints(constraints, 'object')
      );
    }

    /**
     * Renders validation hints for the given constraints and type.
     *
     * @param {object} constraints
     * @param {string} type
     */

  }, {
    key: 'renderConstraints',
    value: function renderConstraints(constraints, type) {
      var validations = [];

      var classes = this.props.classes;


      switch (type) {
        case 'numeric':
          validations = (0, _numeric.getConstraintHints)(constraints);
          break;
        case 'object':
          validations = (0, _object.getConstraintHints)(constraints);
          break;
        case 'array':
          validations = (0, _array.getConstraintHints)(constraints);
          break;
        case 'string':
        default:
          validations = (0, _string.getConstraintHints)(constraints);
      }

      if (!validations.length) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        null,
        validations.map(function (constraint) {
          return _react2.default.createElement(
            'span',
            { key: constraint, className: classes[type + '_constraint'] },
            constraint
          );
        })
      );
    }
  }]);
  return PropertyConstraints;
}(_react.PureComponent)) || _class;

exports.default = PropertyConstraints;


PropertyConstraints.propTypes = {
  type: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  isRequired: _propTypes2.default.bool,
  classes: _propTypes2.default.object,
  constraints: _propTypes2.default.shape({
    format: _propTypes2.default.string,
    exclusiveMinimum: _propTypes2.default.number,
    exclusiveMaximum: _propTypes2.default.number,
    maximum: _propTypes2.default.number,
    maxItems: _propTypes2.default.number,
    maxLength: _propTypes2.default.number,
    maxProperties: _propTypes2.default.number,
    minimum: _propTypes2.default.number,
    minItems: _propTypes2.default.number,
    minLength: _propTypes2.default.number,
    minProperties: _propTypes2.default.number,
    multipleOf: _propTypes2.default.number,
    pattern: _propTypes2.default.string,
    uniqueItems: _propTypes2.default.bool
  })
};

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BodyContent = __webpack_require__(164);

var _BodyContent2 = _interopRequireDefault(_BodyContent);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _Indicator = __webpack_require__(107);

var _Indicator2 = _interopRequireDefault(_Indicator);

var _Response = __webpack_require__(315);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Response = (0, _Response.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Response, _PureComponent);

  function Response(props) {
    (0, _classCallCheck3.default)(this, Response);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Response, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          response = _props.response,
          classes = _props.classes,
          initialSchemaTreeDepth = _props.initialSchemaTreeDepth;
      var code = response.code,
          description = response.description,
          schema = response.schema,
          examples = response.examples;
      var isOpen = this.state.isOpen;


      var indicatorDirection = void 0;
      if (isOpen) {
        indicatorDirection = 'up';
      } else {
        indicatorDirection = 'down';
      }

      var successCode = this.isSuccessCode(code);
      var hasDetails = schema || examples;

      return _react2.default.createElement(
        'div',
        { className: classes.response },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.info, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.success, successCode), (0, _defineProperty3.default)(_classNames, classes.error, !successCode), (0, _defineProperty3.default)(_classNames, classes.isClickable, hasDetails), _classNames)), onClick: hasDetails ? this.onClick : undefined },
          _react2.default.createElement(
            'span',
            { className: classes.code },
            code
          ),
          description && _react2.default.createElement(_Description2.default, { isInline: true, description: description }),
          hasDetails && _react2.default.createElement(_Indicator2.default, { direction: indicatorDirection })
        ),
        hasDetails && isOpen && _react2.default.createElement(_BodyContent2.default, { schema: schema, examples: examples, initialSchemaTreeDepth: initialSchemaTreeDepth })
      );
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.state.isOpen) {
        this.setState({ isOpen: false });
      } else {
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'isSuccessCode',
    value: function isSuccessCode(code) {
      return parseInt(code, 10) >= 100 && parseInt(code, 10) <= 399;
    }
  }]);
  return Response;
}(_react.PureComponent)) || _class;

exports.default = Response;


Response.propTypes = {
  response: _propTypes2.default.shape({
    code: _propTypes2.default.string,
    description: _propTypes2.default.string,
    schema: _propTypes2.default.array,
    examples: _propTypes2.default.array
  }),
  classes: _propTypes2.default.object,
  initialSchemaTreeDepth: _propTypes2.default.number
};

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _theme = __webpack_require__(12);

var _Indicator = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var shades = _ref.shades;
  return {
    'response': {
      marginBottom: '5px',
      bodyContent: {
        margin: '10px 0 20px 20px'
      }
    },
    'info': (0, _defineProperty3.default)({
      padding: '10px',
      fontSize: '0.9rem'

    }, '& ' + _Indicator.styles.classes.indicator, {
      marginRight: '10px'
    }),
    'isClickable': {
      cursor: 'pointer'
    },
    'code': {
      paddingRight: '20px'
    },
    'success': {
      '& $code': {
        color: 'rgb(76, 204, 79)'
      }
    },
    'error': {
      '& $code': {
        color: 'rgb(235, 15, 40)'
      }
    }
  };
});

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _SecurityContainer = __webpack_require__(317);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecurityContainer = (0, _SecurityContainer.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(SecurityContainer, _PureComponent);

  function SecurityContainer() {
    (0, _classCallCheck3.default)(this, SecurityContainer);
    return (0, _possibleConstructorReturn3.default)(this, (SecurityContainer.__proto__ || Object.getPrototypeOf(SecurityContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(SecurityContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          security = _props.security,
          classes = _props.classes;
      var name = security.name,
          type = security.type,
          description = security.description;

      var isSimple = ['apiKey', 'http'].includes(security.type);

      return _react2.default.createElement(
        'section',
        { className: classes.securityContainer, id: id },
        _react2.default.createElement(
          'h3',
          null,
          name,
          ' ',
          _react2.default.createElement(
            'code',
            { className: classes.scheme },
            'type=',
            type
          )
        ),
        description && _react2.default.createElement(_Description2.default, { description: description }),
        isSimple && this.renderSimple(security),
        security.type === 'oauth2' && this.renderOAuth2(security),
        security.type === 'openIdConnect' && this.renderOpenIdConnect(security)
      );
    }
  }, {
    key: 'renderSimple',
    value: function renderSimple(security) {
      var example = security.example,
          bearerFormat = security.bearerFormat;

      var usage = void 0;

      if (security.in === 'query') {
        usage = _react2.default.createElement(
          'p',
          null,
          'To use this authentication scheme, add ',
          _react2.default.createElement(
            'code',
            null,
            example
          ),
          ' to request URLs.'
        );
      } else {
        usage = _react2.default.createElement(
          'p',
          null,
          'To use this authentication scheme, pass ',
          _react2.default.createElement(
            'code',
            null,
            example
          ),
          bearerFormat ? ', formatted as ' + bearerFormat : '',
          ' as a request header.'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        usage
      );
    }
  }, {
    key: 'renderOAuth2',
    value: function renderOAuth2(security) {
      var _this2 = this;

      var classes = this.props.classes;
      var flows = security.flows;


      return _react2.default.createElement(
        'div',
        null,
        Object.keys(flows).map(function (flowKey) {
          var flow = flows[flowKey];

          return _react2.default.createElement(
            'div',
            { className: classes.flowType, key: flowKey },
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'code',
                null,
                flowKey
              ),
              ' flow'
            ),
            _react2.default.createElement(
              'dl',
              { className: classes.inlinePairs },
              flow.authorizationUrl && [_react2.default.createElement(
                'dt',
                { key: 'auth' },
                'Authorization URL'
              ), _react2.default.createElement(
                'dd',
                { key: 'auth-value' },
                flow.authorizationUrl
              )],
              flow.tokenUrl && [_react2.default.createElement(
                'dt',
                { key: 'token' },
                'Token URL'
              ), _react2.default.createElement(
                'dd',
                { key: 'token-value' },
                flow.tokenUrl
              )],
              flow.refreshUrl && [_react2.default.createElement(
                'dt',
                { key: 'refresh' },
                'Refresh URL'
              ), _react2.default.createElement(
                'dd',
                { key: 'refresh-value' },
                flow.refreshUrl
              )]
            ),
            _react2.default.createElement(
              'div',
              { className: classes.scopes },
              _react2.default.createElement(
                'h5',
                null,
                'Available scopes'
              ),
              _this2.renderScopes(flow.scopes)
            )
          );
        })
      );
    }
  }, {
    key: 'renderScopes',
    value: function renderScopes(scopes) {
      return _react2.default.createElement(
        'ul',
        null,
        Object.keys(scopes).map(function (scope) {
          return _react2.default.createElement(
            'li',
            { key: scope },
            _react2.default.createElement(
              'span',
              null,
              scope
            ),
            ' ',
            scopes[scope]
          );
        })
      );
    }
  }, {
    key: 'renderOpenIdConnect',
    value: function renderOpenIdConnect(security) {
      var classes = this.props.classes;
      var openIdConnectUrl = security.openIdConnectUrl;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'dl',
          { className: classes.inlinePairs },
          _react2.default.createElement(
            'dt',
            null,
            'OpenID Connect URL'
          ),
          _react2.default.createElement(
            'dd',
            null,
            openIdConnectUrl
          )
        )
      );
    }
  }]);
  return SecurityContainer;
}(_react.PureComponent)) || _class;

exports.default = SecurityContainer;


SecurityContainer.propTypes = {
  id: _propTypes2.default.string,
  security: _propTypes2.default.object,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var backgrounds = _ref.backgrounds,
      borders = _ref.borders;
  return {
    'securityContainer': {
      padding: '1rem 2rem',
      borderBottom: '1px solid ' + borders.default

    },
    'scheme': {
      display: 'inline-block',
      padding: '.4rem',
      marginLeft: '.5rem',
      backgroundColor: '' + backgrounds.nav
    },

    'flowType': {
      padding: '1rem 0',

      '& + &': {
        borderTop: '1px dotted ' + borders.default
      }
    },

    inlinePairs: {},
    scopes: {
      '& > li > span': {
        fontWeight: 600
      }
    }
  };
});

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Method = __webpack_require__(302);

var _Method2 = _interopRequireDefault(_Method);

var _ServiceContainer = __webpack_require__(319);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceContainer = (0, _ServiceContainer.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(ServiceContainer, _PureComponent);

  function ServiceContainer() {
    (0, _classCallCheck3.default)(this, ServiceContainer);
    return (0, _possibleConstructorReturn3.default)(this, (ServiceContainer.__proto__ || Object.getPrototypeOf(ServiceContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ServiceContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          service = _props.service,
          classes = _props.classes,
          initialSchemaTreeDepth = _props.initialSchemaTreeDepth;
      var title = service.title,
          methods = service.methods;


      return _react2.default.createElement(
        'div',
        { className: classes.serviceContainer, id: title },
        _react2.default.createElement(
          'h2',
          null,
          title
        ),
        methods.map(function (method) {
          return _react2.default.createElement(_Method2.default, { key: method.link, method: method, initialSchemaTreeDepth: initialSchemaTreeDepth });
        })
      );
    }
  }]);
  return ServiceContainer;
}(_react.PureComponent)) || _class;

exports.default = ServiceContainer;


ServiceContainer.propTypes = {
  service: _propTypes2.default.object,
  classes: _propTypes2.default.object,
  initialSchemaTreeDepth: _propTypes2.default.number
};

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _theme = __webpack_require__(12);

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var shades = _ref.shades;
  return {
    serviceContainer: {}
  };
});

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray2 = __webpack_require__(348);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(82);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(80);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactScrollableAnchor = __webpack_require__(160);

var _reactDocumentTitle = __webpack_require__(644);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(309);

var _Page2 = _interopRequireDefault(_Page);

var _Overlay = __webpack_require__(167);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _definitions = __webpack_require__(324);

var _lincolnLogoWhite = __webpack_require__(746);

var _lincolnLogoWhite2 = _interopRequireDefault(_lincolnLogoWhite);

var _Base = __webpack_require__(169);

var _history = __webpack_require__(425);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactScrollableAnchor.configureAnchors)({ offset: 10, scrollDuration: 200, keepLastAnchorHash: true });

var Base = (0, _Base.styles)(_class = function (_React$PureComponent) {
  (0, _inherits3.default)(Base, _React$PureComponent);

  function Base() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Base);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Base.__proto__ || Object.getPrototypeOf(Base)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      parserType: 'open-api-v3',
      definition: null,
      parsedDefinition: null,
      loading: false,
      error: null,
      useStateHash: false,
      history: null
    }, _this.updateDefinition = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(props) {
        var parserType, definitionUrl, navSort, validate, definition, parsedDefinition;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parserType = _this.state.parserType;
                definitionUrl = props.definitionUrl, navSort = props.navSort, validate = props.validate;
                definition = props.definition;

                if (!(definitionUrl && !definition)) {
                  _context.next = 11;
                  break;
                }

                if (definitionUrl) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return');

              case 6:
                if (!(definitionUrl === _this.state.definitionUrl)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return');

              case 8:
                _context.next = 10;
                return _this.fetchDefinition({ definitionUrl: definitionUrl, parserType: parserType, validate: validate });

              case 10:
                definition = _context.sent;

              case 11:
                if (definition) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return');

              case 13:

                _this.setState({ loading: true, error: null });

                _context.prev = 14;
                _context.next = 17;
                return (0, _definitions.parseDefinition)({ definition: definition, parserType: parserType, navSort: navSort });

              case 17:
                parsedDefinition = _context.sent;


                _this.setState({
                  loading: false,
                  definition: definition,
                  parsedDefinition: parsedDefinition,
                  parserType: parserType
                });
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context['catch'](14);
                return _context.abrupt('return', _this.setState({ loading: false, error: _context.t0 }));

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[14, 21]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.fetchDefinition = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref4) {
        var definitionUrl = _ref4.definitionUrl,
            validate = _ref4.validate,
            _ref4$parserType = _ref4.parserType,
            parserType = _ref4$parserType === undefined ? _this.state.parserType : _ref4$parserType;

        var _ref5, _ref6, definition;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ loading: true, error: null });

                _context2.next = 3;
                return Promise.all([(0, _definitions.getDefinition)(definitionUrl), validate && (0, _definitions.validateDefinition)(parserType)]);

              case 3:
                _ref5 = _context2.sent;
                _ref6 = (0, _slicedToArray3.default)(_ref5, 1);
                definition = _ref6[0];
                return _context2.abrupt('return', definition);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Base, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var _props = this.props,
          listenToHash = _props.listenToHash,
          inputHistory = _props.history;


      if (listenToHash) {
        this.history = inputHistory || (0, _history.createBrowserHistory)();

        this.stopListeningToHistory = this.history.listen(function (location) {
          var hash = location.hash;


          if (_this3.state.useStateHash && _this3.state.hash === hash || _this3.props.hash === hash) {
            return;
          }

          _this3.setState({ useStateHash: true, hash: hash });
        });
      }

      this.updateDefinition(this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      var isNewDefinition = props.definition && props.definition !== this.props.definition;
      var isNewUrl = props.definitionUrl && props.definitionUrl !== this.props.definitionUrl;

      if (isNewDefinition || isNewUrl) {
        this.updateDefinition(props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.stopListeningToHistory) {
        this.stopListeningToHistory();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          propsHash = _props2.hash,
          classes = _props2.classes,
          initialSchemaTreeDepth = _props2.initialSchemaTreeDepth;
      var _state = this.state,
          definition = _state.parsedDefinition,
          stateHash = _state.hash,
          loading = _state.loading,
          error = _state.error,
          useStateHash = _state.useStateHash;
      var definitionUrl = this.props.definitionUrl;


      var hash = useStateHash ? stateHash : propsHash;
      var element = void 0;

      if (loading) {
        element = _react2.default.createElement(Loading, { definitionUrl: definitionUrl });
      } else if (error) {
        element = _react2.default.createElement(Failure, { error: error });
      } else {
        element = _react2.default.createElement(Definition, { hash: hash, definition: definition, definitionUrl: definitionUrl, initialSchemaTreeDepth: initialSchemaTreeDepth });
      }

      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: definition ? definition.title : 'Lincoln Renderer' },
        _react2.default.createElement(
          'div',
          { className: classes.base },
          element
        )
      );
    }
  }]);
  return Base;
}(_react2.default.PureComponent)) || _class;

exports.default = Base;


Base.contextTypes = {
  router: _propTypes2.default.object
};

Base.propTypes = {
  classes: _propTypes2.default.object,
  hash: _propTypes2.default.string.isRequired,
  definitionUrl: _propTypes2.default.string,
  definition: _propTypes2.default.string,
  navSort: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  validate: _propTypes2.default.bool,
  history: _propTypes2.default.object, // eslint-disable-line
  listenToHash: _propTypes2.default.bool, // eslint-disable-line
  initialSchemaTreeDepth: _propTypes2.default.number
};

Base.defaultProps = {
  hash: '',
  navSort: false,
  validate: false,
  listenToHash: true,
  initialSchemaTreeDepth: 0
};

var Definition = function Definition(_ref7) {
  var definition = _ref7.definition,
      definitionUrl = _ref7.definitionUrl,
      hash = _ref7.hash,
      initialSchemaTreeDepth = _ref7.initialSchemaTreeDepth;
  return !definition ? _react2.default.createElement(
    _Overlay2.default,
    null,
    _react2.default.createElement('img', { src: _lincolnLogoWhite2.default, alt: '' }),
    _react2.default.createElement(
      'h3',
      null,
      'Render your Open API definition by adding the CORS-enabled URL above.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'You can also set this with the ',
      _react2.default.createElement(
        'code',
        null,
        '?url'
      ),
      ' query parameter.'
    )
  ) : _react2.default.createElement(_Page2.default, { definition: definition, hash: hash, definitionUrl: definitionUrl, initialSchemaTreeDepth: initialSchemaTreeDepth });
};

Definition.propTypes = {
  definition: _propTypes2.default.object,
  definitionUrl: _propTypes2.default.string,
  hash: _propTypes2.default.string,
  initialSchemaTreeDepth: _propTypes2.default.number
};

var Failure = function Failure(_ref8) {
  var error = _ref8.error;

  console.error('[Definition Error]');
  console.error(error);

  return _react2.default.createElement(
    _Overlay2.default,
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Failed to load definition.'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      error.message
    )
  );
};

Failure.propTypes = {
  error: _propTypes2.default.object
};

var Loading = function Loading(_ref9) {
  var definitionUrl = _ref9.definitionUrl;
  return _react2.default.createElement(
    _Overlay2.default,
    null,
    _react2.default.createElement(
      'em',
      null,
      'Loading ',
      _react2.default.createElement(
        'b',
        null,
        definitionUrl
      ),
      '...'
    )
  );
};

Loading.propTypes = {
  definitionUrl: _propTypes2.default.string
};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Base = __webpack_require__(320);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lincoln = function (_React$PureComponent) {
  (0, _inherits3.default)(Lincoln, _React$PureComponent);

  function Lincoln() {
    (0, _classCallCheck3.default)(this, Lincoln);
    return (0, _possibleConstructorReturn3.default)(this, (Lincoln.__proto__ || Object.getPrototypeOf(Lincoln)).apply(this, arguments));
  }

  (0, _createClass3.default)(Lincoln, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Base2.default, this.props);
    }
  }]);
  return Lincoln;
}(_react2.default.PureComponent);

exports.default = Lincoln;

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Demo = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _qs = __webpack_require__(638);

var _jss = __webpack_require__(52);

var _jss2 = _interopRequireDefault(_jss);

var _jssPresetDefault = __webpack_require__(200);

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactScrollableAnchor = __webpack_require__(160);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _Lincoln = __webpack_require__(321);

var _Lincoln2 = _interopRequireDefault(_Lincoln);

var _Demo = __webpack_require__(323);

var _Overlay = __webpack_require__(167);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jss2.default.setup((0, _jssPresetDefault2.default)());
(0, _reactScrollableAnchor.configureAnchors)({ offset: -52, scrollDuration: 200, keepLastAnchorHash: true });

var definitionUrl = (0, _qs.parse)(window.location.search.split('?')[1]).url;
var hash = window.location.hash;

var Demo = exports.Demo = (0, _Demo.styles)(_class = function (_React$PureComponent) {
  (0, _inherits3.default)(Demo, _React$PureComponent);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      definitionUrl: definitionUrl,
      showDialog: false,
      definition: '',
      useDefinition: false
    }, _this.useUrlInput = function () {
      return _this.setState({ definitionUrl: _this.urlInput.value });
    }, _this.setUrlInput = function (input) {
      _this.urlInput = input;
    }, _this.updateDefinition = function (event) {
      return _this.setState({ useDefinition: false, definition: event.target.value });
    }, _this.toggleDialog = function () {
      return _this.setState({ showDialog: !_this.state.showDialog });
    }, _this.renderInputDefinition = function () {
      _this.setState({ useDefinition: true, definitionUrl: '', showDialog: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Demo, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          definitionUrl = _state.definitionUrl,
          showDialog = _state.showDialog,
          definition = _state.definition,
          useDefinition = _state.useDefinition;

      var initialSchemaTreeDepth = 1;

      return _react2.default.createElement(
        'div',
        { className: classes.demo },
        showDialog && _react2.default.createElement(
          'div',
          { className: classes.dialog },
          _react2.default.createElement(
            _Overlay2.default,
            null,
            _react2.default.createElement('textarea', {
              value: definition,
              onChange: this.updateDefinition,
              placeholder: 'Definition body (YAML or JSON)...'
            }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                {
                  className: classes.button,
                  onClick: this.renderInputDefinition
                },
                'RENDER'
              ),
              _react2.default.createElement(
                'button',
                {
                  className: (0, _classnames2.default)(classes.button, classes.closeButton),
                  onClick: this.toggleDialog
                },
                'CLOSE'
              )
            )
          )
        ),
        _react2.default.createElement(
          'header',
          { className: classes.header },
          _react2.default.createElement(
            'h1',
            null,
            'Lincoln'
          ),
          _react2.default.createElement(
            'small',
            null,
            'An Open API v3 renderer.'
          ),
          _react2.default.createElement(
            'form',
            { className: classes.form, style: { opacity: showDialog ? '0' : '1' } },
            _react2.default.createElement(
              'label',
              { htmlFor: 'url' },
              'Definition URL'
            ),
            _react2.default.createElement('input', {
              name: 'url',
              type: 'url',
              defaultValue: this.state.definitionUrl,
              ref: this.setUrlInput
            }),
            _react2.default.createElement(
              'button',
              {
                className: classes.button,
                onClick: this.useUrlInput
              },
              'RENDER'
            )
          ),
          _react2.default.createElement(
            'button',
            {
              className: (0, _classnames2.default)(classes.button, classes.inputButton),
              onClick: this.toggleDialog
            },
            'TEXT INPUT'
          )
        ),
        useDefinition ? _react2.default.createElement(_Lincoln2.default, { definition: definition, hash: hash, initialSchemaTreeDepth: initialSchemaTreeDepth, wew: 'lad' }) : _react2.default.createElement(_Lincoln2.default, { definitionUrl: definitionUrl, hash: hash, initialSchemaTreeDepth: initialSchemaTreeDepth, lad: 'wew' })
      );
    }
  }]);
  return Demo;
}(_react2.default.PureComponent)) || _class;

Demo.propTypes = {
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _color = __webpack_require__(33);

var _color2 = _interopRequireDefault(_color);

var _theme = __webpack_require__(12);

var _Base = __webpack_require__(169);

var _Overlay = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerHeight = '50px';
var headerBackground = '#234f69';
var headerColor = '' + (0, _color2.default)(headerBackground).lighten(0.75);
var headerBorder = '' + (0, _color2.default)(headerColor).darken(0.2);
var headerTitleColor = (0, _color2.default)('#FFF');

var styles = exports.styles = (0, _theme.createSheet)(function (_ref) {
  var _dialog;

  var shades = _ref.shades;
  return {
    demo: (0, _defineProperty3.default)({}, '& .' + _Base.styles.classes.base, {
      marginTop: '' + headerHeight
    }),

    form: {
      transition: 'all 0.5s',
      opacity: 1
    },

    dialog: (_dialog = {}, (0, _defineProperty3.default)(_dialog, '& .' + _Overlay.styles.classes.overlay, {
      zIndex: '2',
      transition: 'background 0.5s',
      background: headerBackground,
      paddingTop: '70px'
    }), (0, _defineProperty3.default)(_dialog, '& textarea', {
      padding: '2em 2em',
      fontFamily: 'monospace',
      border: '0',
      borderBottom: '1px solid rgba(0,0,0,0.25)',
      width: '50%',
      background: 'rgba(0,0,0, 0.15)',
      boxShadow: '0 4px 22px rgba(0,0,0,0.09)',
      height: '50%',
      color: '#ccc',
      resize: 'none'
    }), (0, _defineProperty3.default)(_dialog, '& button', {
      marginTop: '1em',
      padding: '0.8em 1.4em 0.7em',
      fontSize: '96%',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      marginRight: '1em'
    }), _dialog),

    button: {
      background: 'none',
      border: '2px solid ' + headerBorder,
      borderRadius: '3px',
      fontSize: 'smaller',
      padding: '.25rem .5rem',
      color: '' + headerColor,
      cursor: 'pointer',

      '&:hover': {
        transition: 'all .2s',
        color: '#FFF',
        borderColor: '#FFF'
      }
    },

    closeButton: {
      color: '#b63b3b',
      borderColor: '#b63b3b'
    },

    inputButton: {
      marginLeft: '1em'
    },

    header: {
      position: 'fixed',
      width: '100%',
      top: '0',
      left: '0',
      display: 'flex',
      height: '' + headerHeight,
      alignItems: 'baseline',
      background: '' + headerBackground,
      zIndex: '999',
      color: '' + headerTitleColor,

      padding: '.4rem 1rem',

      borderBottom: '1px solid #222',
      boxShadow: '0 1px 20px rgba(0,0,0,0.35)',

      '&, & *': {
        boxSizing: 'border-box'
      },

      '& h1': {
        margin: '0 .5rem 0 0',
        fontSize: '1.5rem',
        textTransform: 'lowercase',
        fontVariant: 'small-caps',
        fontWeight: '100'
      },

      '& small': {
        color: '' + headerColor,
        fontStyle: 'italic'
      },

      '& form': {
        flex: '1',
        marginLeft: '6.7rem',
        textAlign: 'right'
      },

      '& small, & label': {
        fontSize: 'smaller'
      },

      '& input': {
        display: 'inline-block',
        width: '50%',
        padding: '0.5em',
        fontSize: '.9rem',
        border: '0',
        borderBottom: '1px solid ' + headerBorder,
        outline: '0',
        margin: '0 .5rem',
        color: '' + headerColor,
        background: 'none',

        '&:focus, &:hover': {
          transition: 'all .2s',
          color: '#FFF',
          borderBottomColor: '#FFF'
        }
      }
    }
  };
});

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDefinition = exports.getDefinition = undefined;

var _regenerator = __webpack_require__(82);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(80);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getDefinition = exports.getDefinition = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(url) {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (url) {
              _context.next = 2;
              break;
            }

            throw new Error('Missing url');

          case 2:
            _context.next = 4;
            return (0, _isomorphicFetch2.default)(url);

          case 4:
            result = _context.sent;

            if (result.ok) {
              _context.next = 7;
              break;
            }

            throw new Error(result.statusText);

          case 7:
            return _context.abrupt('return', result.text());

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDefinition(_x) {
    return _ref.apply(this, arguments);
  };
}();

var parseDefinition = exports.parseDefinition = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
    var definition = _ref3.definition,
        parserType = _ref3.parserType,
        navSort = _ref3.navSort;
    var parser, sortFunc, parsedDefinition;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (typeof definition === 'string') {
              definition = _jsYaml2.default.safeLoad(definition);
            }

            parser = (0, _parserFactory.getParserFunction)(parserType);
            sortFunc = (0, _sorting.getSortingFunction)(navSort);
            _context2.next = 5;
            return parser(definition, sortFunc);

          case 5:
            parsedDefinition = _context2.sent;
            return _context2.abrupt('return', parsedDefinition);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function parseDefinition(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validateDefinition = validateDefinition;

var _isomorphicFetch = __webpack_require__(194);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _jsYaml = __webpack_require__(195);

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _parserFactory = __webpack_require__(338);

var _sorting = __webpack_require__(325);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateDefinition(definition, parserType) {
  var validator = (0, _parserFactory.getValidatorFunction)(parserType);

  return validator(definition);
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortByAlphabet = sortByAlphabet;
exports.sortByHttpMethod = sortByHttpMethod;
exports.sortByUIMethod = sortByUIMethod;
exports.getSortingFunction = getSortingFunction;
var methodWeights = {
  GET: 1,
  POST: 2,
  PUT: 3,
  DELETE: 4,
  HEAD: 5,
  OPTIONS: 6,
  TRACE: 7,
  CONNECT: 8

  /**
   * Sort function
   *
   * @param {String} str1
   * @param {String} str2
   * @return {number}
   */
};function sortByAlphabet(str1, str2) {
  if (str1 < str2) {
    return -1;
  } else if (str1 > str2) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Sort function
 *
 * @param {String} type1
 * @param {String} type2
 * @return {number}
 */
function sortByHttpMethod(type1, type2) {
  var normalisedType1 = type1.toUpperCase();
  var normalisedType2 = type2.toUpperCase();

  return methodWeights[normalisedType1] - methodWeights[normalisedType2];
}

/**
 * Sort function
 *
 * @param {type, title} method1
 * @param {type, title} method2
 * @return {number}
 */
function sortByUIMethod(method1, method2) {
  // Sort by method type first
  if (method1.type !== method2.type) {
    return sortByHttpMethod(method1.type, method2.type);
  }

  // Then by method title
  return sortByAlphabet(method1.title, method2.title);
}

/**
 * Returns the appropriate sorting function to be used when
 * constructing the navigation.
 *
 * @param {string} navSort `alpha` or `false`.
 */
function getSortingFunction(navSort) {
  switch (navSort) {
    case 'alpha':
      return sortByUIMethod;

    case false:
    default:
      return false;
  }
}

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(81);

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = __webpack_require__(61);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.resolveAllOf = resolveAllOf;

var _clone = __webpack_require__(170);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolve node with allOf
 *
 * @param {Object} node
 *
 * @return {Object}
 */
function resolveAllOfItem(node) {
  var output = (0, _clone.clone)(node);

  var _loop = function _loop(i, nodeAllOfLength) {
    var item = node.allOf[i];

    Object.keys(item).forEach(function (key) {
      if (!output.hasOwnProperty(key)) {
        output[key] = item[key];
      } else if (key === 'properties') {
        output.properties = Object.assign(output.properties, item[key]);
      } else if (key === 'required') {
        output.required = output.required.concat(item[key]);
      }
    });
  };

  for (var i = 0, nodeAllOfLength = node.allOf.length; i < nodeAllOfLength; i++) {
    _loop(i, nodeAllOfLength);
  }

  // Filter out duplicates.
  if (output.required) {
    output.required = Array.from(new Set([].concat((0, _toConsumableArray3.default)(output.required))));
  }

  delete output.allOf;
  return output;
}

/**
 * Internal method to resolve allOf for schema object
 *
 * @param {Object} obj
 */
function resolveAllOfRecursive(obj) {
  Object.keys(obj).forEach(function (key) {
    var item = obj[key];

    if ((typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object') {
      resolveAllOfRecursive(item);
    }

    if (item.allOf && Array.isArray(item.allOf)) {
      obj[key] = resolveAllOfItem(item);
    }
  });
}

/**
 * Resolve allOf for schema object
 *
 * @param {Object} obj
 *
 * @return {Object} definitions object that has allOf resolved
 */
function resolveAllOf(obj) {
  resolveAllOfRecursive(obj);

  return obj;
}

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for an array,
 * `maxItems`, `minItems` and `uniqueItems`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var maxItems = constraints.maxItems,
      minItems = constraints.minItems,
      uniqueItems = constraints.uniqueItems;

  var validations = [];

  if (uniqueItems) {
    validations.push('unique items');
  }

  if (maxItems !== undefined && minItems !== undefined) {
    // Be succint if the minItems is the same maxItems
    // ie. value can only be of `x` length.
    if (maxItems === minItems) {
      validations.push(minItems + ' items');
    } else {
      validations.push(minItems + '-' + maxItems + ' items');
    }
  } else if (minItems !== undefined) {
    validations.push('at least ' + minItems + ' items');
  } else if (maxItems !== undefined) {
    validations.push('at most ' + maxItems + ' items');
  }

  return validations;
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasConstraints = hasConstraints;
exports.getConstraints = getConstraints;
// https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.md#schema-object
var VALIDATION_KEYWORDS = exports.VALIDATION_KEYWORDS = ['format', 'exclusiveMaximum', 'exclusiveMinimum', 'maximum', 'maxItems', 'maxLength', 'maxProperties', 'minimum', 'minItems', 'minLength', 'minProperties', 'multipleOf', 'pattern', 'uniqueItems'];

/**
 * Determines if the given property contains any validation keywords
 *
 * @param {Object} property
 * @return {Boolean}
 */
function hasConstraints(property) {
  return Object.keys(property).some(function (key) {
    return VALIDATION_KEYWORDS.includes(key);
  });
}

/**
 * Given a property, extract all the constraints from it and return a new
 * object with those constraints.
 *
 * @param {Object} property
 * @return {Object}
 */
function getConstraints(property) {
  return Object.keys(property).reduce(function (constraints, key) {
    if (VALIDATION_KEYWORDS.includes(key)) {
      constraints[key] = property[key];
    }

    return constraints;
  }, {});
}

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for numeric
 * types, `exclusiveMinimum`, `exclusiveMaximum`, `maximum`, `minimum` and
 * `multipleOf`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var exclusiveMinimum = constraints.exclusiveMinimum,
      exclusiveMaximum = constraints.exclusiveMaximum,
      maximum = constraints.maximum,
      minimum = constraints.minimum,
      multipleOf = constraints.multipleOf;

  var validations = [];

  if (multipleOf) {
    validations.push("multiple of " + multipleOf);
  }

  // We're following JSON-Schema Draft 6, which states that exclusive* are
  // integers, not boolean values. Also using `undefined` to prevent edge
  // cases where the value is 0 or 1.
  if (maximum !== undefined && minimum !== undefined) {
    validations.push(minimum + "\u2026" + maximum);
  } else if (exclusiveMaximum !== undefined && exclusiveMinimum !== undefined) {
    validations.push(exclusiveMinimum + "\u2026" + exclusiveMaximum);
  } else if (minimum !== undefined) {
    validations.push("\u2265 " + minimum);
  } else if (maximum !== undefined) {
    validations.push("\u2264 " + maximum);
  } else if (exclusiveMinimum !== undefined) {
    validations.push("> " + exclusiveMinimum);
  } else if (exclusiveMaximum !== undefined) {
    validations.push("< " + exclusiveMaximum);
  }

  return validations;
}

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for an object,
 * `maxProperties`, `minProperties`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var minProperties = constraints.minProperties,
      maxProperties = constraints.maxProperties;

  var validations = [];

  if (maxProperties !== undefined && minProperties !== undefined) {
    // Be succint if the minProperties is the same maxProperties
    // ie. value can only be of `x` length.
    if (maxProperties === minProperties) {
      validations.push(minProperties + " properties");
    } else {
      validations.push(minProperties + "-" + maxProperties + " properties");
    }
  } else if (minProperties !== undefined) {
    validations.push("at least " + minProperties + " properties");
  } else if (maxProperties !== undefined) {
    validations.push("at most " + maxProperties + " properties");
  }

  return validations;
}

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for a string,
 * `pattern`, `minLength`, `maxLength`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var pattern = constraints.pattern,
      minLength = constraints.minLength,
      maxLength = constraints.maxLength;

  var validations = [];

  if (pattern) {
    validations.push("/" + pattern + "/");
  }

  if (maxLength !== undefined && minLength !== undefined) {
    // Be succinct if the minLength is the same maxLength
    // ie. value can only be of `x` length.
    if (maxLength === minLength) {
      validations.push(minLength + " chars");
    } else {
      validations.push(minLength + "-" + maxLength + " chars");
    }
  } else if (minLength !== undefined) {
    validations.push("at least " + minLength + " chars");
  } else if (maxLength !== undefined) {
    validations.push("at most " + maxLength + " chars");
  }

  return validations;
}

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(60);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(61);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(81);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.resolveOneOf = resolveOneOf;

var _clone = __webpack_require__(170);

var _get = __webpack_require__(576);

var _get2 = _interopRequireDefault(_get);

var _update = __webpack_require__(583);

var _update2 = _interopRequireDefault(_update);

var _toPath = __webpack_require__(582);

var _toPath2 = _interopRequireDefault(_toPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively determine if the given object has any `oneOf` properties.
 * Returns an array with the paths to those properties (eg. `properties.oneOf`).
 * If no `oneOf` keys were found, an empty array is returned.
 *
 * @param {object} obj
 * @return {string[]}
 */
function getOneOfPaths(obj) {
  var paths = [];
  var walk = function walk(obj) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    Object.keys(obj).forEach(function (key) {
      // Handle if `oneOf` is found at the first level.
      var currentPath = path === '' ? key : path + '.' + key;

      if (key === 'oneOf') {
        paths.push(currentPath);
      } else if ((0, _typeof3.default)(obj[key]) === 'object' || Array.isArray(obj[key])) {
        walk(obj[key], currentPath);
      }
    });
  };

  walk(obj);

  return paths;
}

/**
 * Returns all of the possible states of `obj` when the permutations
 * specified in `paths` are applied.
 *
 * @param {string[]} paths
 * @param {object} obj
 * @return {object[]}
 */
function getStates(paths, obj) {
  var states = [].concat((0, _toConsumableArray3.default)(getStateAt(paths[0], obj)));

  for (var i = 1, pathsLength = paths.length; i < pathsLength; i++) {
    var state = states.shift();

    while (state) {
      var _states;

      var newStates = getStateAt(paths[i], state);

      // if there are no new states, put this one back and stop
      if (!newStates.length) {
        states.unshift(state);
        break;
      }

      states = (_states = states).concat.apply(_states, (0, _toConsumableArray3.default)(newStates));
      state = states.shift();
    }
  }

  return states;
}

/**
 * Given a path and an object, return all the new states that exist
 * by merging the options found at `obj.path` into the given object.
 * Returns an array of possible objects
 *
 * @param {string} path
 * @param {object} obj
 * @return {object[]}
 */
function getStateAt(path, obj) {
  var states = (0, _get2.default)(obj, path);

  // Couldn't retrieve the states at this path, bail.
  if (states === undefined) {
    return [];
  }

  var parentPath = getParentPath(path);
  return states.map(function (state) {
    // No path, so add state to object directly
    if (parentPath === '') {
      return merge(obj, state);
    }

    // Replace the path with the state
    (0, _update2.default)(obj, parentPath, function (value) {
      return merge(value, state);
    });

    return (0, _clone.clone)(obj);
  });
}

/**
 * Given a path, drop the last segment and return the shortened
 * path, which will be the parent of the given path.
 *
 * @param {string} path
 * @return {string}
 */
function getParentPath(path) {
  var rootPath = (0, _toPath2.default)(path);
  rootPath.pop();

  return rootPath.join('.');
}

/**
 * Take a object and merge the state to it, returning the resulting object.
 * Will remove the `oneOf` key from the given `obj`.
 *
 * @param {object} obj
 * @param {object} state
 * @return {object}
 */
function merge(obj, state) {
  delete obj.oneOf;

  return (0, _extends3.default)({}, obj, state);
}

/**
 * Resolves all `oneOf` definitions present in the given object.
 * If none exist, the object is returned untouched. Otherwise
 * an object with a `oneOf` property whose value is an array of
 * states is returned
 *
 * @param {object} obj
 * @return {object}
 */
function resolveOneOf(obj) {
  var paths = getOneOfPaths(obj);
  if (paths.length === 0) {
    return obj;
  }

  var states = getStates(paths, obj);

  return {
    oneOf: states
  };
}

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUIReadySchema;

var _allOfResolver = __webpack_require__(326);

var _oneOfResolver = __webpack_require__(332);

var _constraintsParser = __webpack_require__(328);

var literalTypes = ['string', 'integer', 'number', 'boolean'];

/**
 * Construct UI ready property object from given inputs.
 *
 * @param {String} nodeName
 * @param {Object} propertyNode
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getPropertyNode(nodeName, propertyNode) {
  var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var nodeType = propertyNode.type || 'string';

  if (!Array.isArray(nodeType)) {
    nodeType = [nodeType];
  }

  var outputNode = {
    name: nodeName,
    type: nodeType,
    required: required
  };

  if (propertyNode.title) {
    outputNode.title = propertyNode.title;
  }

  if (propertyNode.description) {
    outputNode.description = propertyNode.description;
  }

  if (propertyNode.default) {
    outputNode.defaultValue = propertyNode.default;
  }

  if ((0, _constraintsParser.hasConstraints)(propertyNode)) {
    outputNode.constraints = (0, _constraintsParser.getConstraints)(propertyNode);
  }

  // Are all the possible types for this property literals?
  // TODO: Currently do not handle multiple types that are not all literals
  if (nodeType.every(function (type) {
    return literalTypes.includes(type);
  })) {
    if (propertyNode.enum) {
      outputNode.enum = propertyNode.enum;
    }

    return outputNode;
    // Otherwise, let's see if there's an object in there..
  } else if (nodeType.length === 1 && nodeType.includes('object')) {
    var propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required);

    if (propertiesNode !== undefined && propertiesNode.length > 0) {
      outputNode.properties = propertiesNode;
    }

    return outputNode;
    // Is there an array?
  } else if (nodeType.length === 1 && nodeType.includes('array')) {
    if (propertyNode.items) {
      var arrayItemType = propertyNode.items.type;

      if (arrayItemType === 'object') {
        var _propertiesNode = getPropertiesNode(propertyNode.items.properties, propertyNode.items.required);

        if (_propertiesNode !== undefined && _propertiesNode.length > 0) {
          outputNode.properties = _propertiesNode;
        }
      } else {
        outputNode.subtype = arrayItemType;
      }
    }

    return outputNode;
  }

  return null;
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} propertiesNode
 * @param {Array} requiredProperties
 *
 * @return {Object}
 */
function getPropertiesNode(propertiesNode) {
  var requiredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!propertiesNode) {
    return [];
  }

  return Object.keys(propertiesNode).map(function (key) {
    return getPropertyNode(key, propertiesNode[key], requiredProperties.includes(key));
  }).filter(Boolean);
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 *
 * @return {Object}
 */
function getUIReadySchema(jsonSchema) {
  var resolved = (0, _allOfResolver.resolveAllOf)(jsonSchema);
  resolved = (0, _oneOfResolver.resolveOneOf)(resolved);

  if (Array.isArray(resolved.oneOf)) {
    return resolved.oneOf.map(function (state) {
      if (state.type === 'array') {
        return [getPropertyNode('', state)];
      } else {
        return getPropertiesNode(state.properties, state.required);
      }
    });
  }

  if (resolved.type === 'array') {
    return [getPropertyNode('', resolved)];
  } else {
    return getPropertiesNode(resolved.properties, resolved.required);
  }
}

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavigationMethod = getNavigationMethod;
exports.getServicesMethod = getServicesMethod;
/**
 * Return the permalink for the given `path` and `methodType`. Note this is
 * not the link to the actual path, but it's a unique identifier to help
 * with deeplinking from UI applications.
 *
 * @todo Look at supporting `operationId` which does this purpose.
 * @param {string} path
 * @param {string} methodType
 */
function getPermalink(path, methodType) {
  return path + "/" + methodType;
}

/**
 * Given the `path`, `method` and optionally the `tag`, construct
 * an object that represents the navigation method.
 *
 * @param {string} path
 * @param {object} method
 * @param {object} tag
 * @return {object}
 */
function getNavigationMethod(path, method, tag) {
  return {
    type: method.type,
    title: method.summary,
    link: getPermalink(path, method.type)
  };
}

/**
 * Construct the object used to render the method in the body of the renderer.
 * This should represent all the information to create a request and receive
 * a response for the given `method`.
 *
 * @param {string} path
 * @param {object} method
 * @param {object} request
 * @param {object} params
 * @param {object} responses
 */
function getServicesMethod(_ref) {
  var path = _ref.path,
      method = _ref.method,
      request = _ref.request,
      params = _ref.params,
      responses = _ref.responses;

  var servicesMethod = {
    type: method.type,
    title: method.summary,
    link: getPermalink(path, method.type),
    request: request,
    responses: responses
  };

  if (method.description) {
    servicesMethod.description = method.description;
  }

  if (params) {
    servicesMethod.parameters = params;
  }

  return servicesMethod;
}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(82);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(60);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(80);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(61);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _jsonSchemaRefParser = __webpack_require__(454);

var _jsonSchemaRefParser2 = _interopRequireDefault(_jsonSchemaRefParser);

var _securityParser = __webpack_require__(337);

var _navigationParser = __webpack_require__(334);

var _schemaParser = __webpack_require__(333);

var _schemaParser2 = _interopRequireDefault(_schemaParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Construct navigation and services ready to be consumed by the UI
 *
 * @param {Object} paths
 * @param {Array} apiSecurity
 * @param {Object} securityDefinitions
 * @return {{navigation: [], services: []}}
 */
function getUINavigationAndServices(_ref) {
  var paths = _ref.paths,
      _ref$apiSecurity = _ref.apiSecurity,
      apiSecurity = _ref$apiSecurity === undefined ? [] : _ref$apiSecurity,
      securityDefinitions = _ref.securityDefinitions;

  var _buildNavigationAndSe = buildNavigationAndServices(paths, apiSecurity, securityDefinitions),
      navigation = _buildNavigationAndSe.navigationMethods,
      servicesMethods = _buildNavigationAndSe.servicesMethods;

  // Need to wrap up the methods to be individual services blocks.
  // This simplifies the component logic.


  var services = servicesMethods.map(function (method) {
    return {
      title: method.title,
      methods: [method]
    };
  });

  return { navigation: navigation, services: services };
}

/**
 * Construct navigation and services ready to be consumed by the UI using tags.
 * This will group the paths by the logical tags.
 *
 * @param {Array} tags
 * @param {Object} paths
 * @param {Array} apiSecurity
 * @param {Object} securityDefinitions
 * @param {Function} sortFunc
 * @return {{navigation: [], services: []}}
 */
function getUINavigationAndServicesByTags(_ref2) {
  var tags = _ref2.tags,
      paths = _ref2.paths,
      _ref2$apiSecurity = _ref2.apiSecurity,
      apiSecurity = _ref2$apiSecurity === undefined ? [] : _ref2$apiSecurity,
      securityDefinitions = _ref2.securityDefinitions,
      sortFunc = _ref2.sortFunc;

  var navigation = [];
  var services = [];
  var isFunc = typeof sortFunc === 'function';

  var _loop = function _loop(i, tagLength) {
    var tag = tags[i];
    var exclusionFunc = function exclusionFunc(method) {
      return method.tags.includes(tag) === false;
    };

    var _buildNavigationAndSe2 = buildNavigationAndServices(paths, apiSecurity, securityDefinitions, exclusionFunc),
        navigationMethods = _buildNavigationAndSe2.navigationMethods,
        servicesMethods = _buildNavigationAndSe2.servicesMethods;

    navigation.push({
      title: tag,
      methods: isFunc ? navigationMethods.sort(sortFunc) : navigationMethods
    });

    services.push({
      title: tag,
      methods: isFunc ? servicesMethods.sort(sortFunc) : servicesMethods
    });
  };

  for (var i = 0, tagLength = tags.length; i < tagLength; i++) {
    _loop(i, tagLength);
  }

  return { navigation: navigation, services: services };
}

/**
 * Build the navigation and services from the given paths.
 * Optionally run an `exclusionFunc` which if returns true, will skip
 * the path from being included in the result.
 *
 * @param {Object} paths
 * @param {Array} apiSecurity
 * @param {Object} securityDefinitions
 * @param {Function} exclusionFunc
 * @return {{navigation: [], services: []}}
 */
function buildNavigationAndServices(paths, apiSecurity, securityDefinitions, exclusionFunc) {
  var pathIds = Object.keys(paths);
  var navigationMethods = [];
  var servicesMethods = [];
  var isFunc = typeof exclusionFunc === 'function';

  for (var j = 0, pathIdLength = pathIds.length; j < pathIdLength; j++) {
    var pathId = pathIds[j];
    var path = paths[pathId];
    var methodTypes = Object.keys(path);

    for (var k = 0, methodLength = methodTypes.length; k < methodLength; k++) {
      var methodType = methodTypes[k];
      var method = Object.assign({ type: methodType }, path[methodType]);

      // Should this be included in the output?
      if (isFunc && exclusionFunc(method)) {
        continue;
      }

      // Add the navigation item
      navigationMethods.push((0, _navigationParser.getNavigationMethod)(pathId, method));

      // Construct the full method object
      var servicesMethod = (0, _navigationParser.getServicesMethod)({
        path: pathId,
        method: method,
        request: getUIRequest(method.description, method.requestBody),
        params: getUIParameters(method.parameters),
        responses: getUIResponses(method.responses)
      });

      // Security can be declared per method, or globally for the entire API.
      if (method.security) {
        servicesMethod.security = (0, _securityParser.getUISecurity)(method.security, securityDefinitions);
      } else if (apiSecurity.length) {
        servicesMethod.security = (0, _securityParser.getUISecurity)(apiSecurity, securityDefinitions);
      }

      servicesMethods.push(servicesMethod);
    }
  }

  return { navigationMethods: navigationMethods, servicesMethods: servicesMethods };
}

/**
 * Add media type info, e.g. schema and examples to UI object
 * This method mutates the `uiObject` parameter.
 *
 * @param {Object} uiObject
 * @param {Object} mediaType Open API mediaType object
 */
function addMediaTypeInfoToUIObject(uiObject, mediaType) {
  if (mediaType.schema) {
    var schema = (0, _schemaParser2.default)(mediaType.schema);

    if (schema.length) {
      uiObject.schema = schema;
    }
  }

  var examples = [];

  if (mediaType.example) {
    examples.push(mediaType.example);
  }

  if (mediaType.examples) {
    examples = [].concat((0, _toConsumableArray3.default)(examples), (0, _toConsumableArray3.default)(Object.keys(mediaType.examples).map(function (example) {
      return mediaType.examples[example];
    })));
  }

  if (examples.length) {
    uiObject.examples = examples;
  }
}

/**
 * Construct parameters object ready to be consumed by the UI
 *
 * @param {Array} parameters
 * @return {Object}
 */
function getUIParameters(parameters) {
  if (parameters) {
    var uiParameters = {};
    var parameterTypes = ['path', 'query', 'header', 'cookie'];

    parameterTypes.forEach(function (parameterType) {
      var uiParameter = getUIParametersForLocation(parameters, parameterType);

      if (uiParameter) {
        uiParameters[parameterType] = uiParameter;
      }
    });

    return uiParameters;
  }

  return null;
}

/**
 * Construct a parameters array for a location, ready to be consumed by the UI
 *
 * @param {Array} parameters
 * @param {String} location. Possible values: query, path, header, cookie
 * @return {Array}
 */
function getUIParametersForLocation(parameters, location) {
  if (!parameters) {
    return null;
  }

  var resultArray = parameters.filter(function (parameter) {
    return parameter.in === location;
  }).map(function (parameter) {
    var uiParameter = {
      name: parameter.name,
      description: parameter.description,
      required: parameter.required

      // TODO: We set the type to be an array because the Property component
      // handles this. Property should eventually be split and this won't be
      // necessary...
    };if (parameter.type) {
      uiParameter.type = [parameter.type];
    } else if (parameter.schema && parameter.schema.type) {
      uiParameter.type = [parameter.schema.type];
    }

    if (parameter.schema && parameter.schema.default !== undefined) {
      uiParameter.defaultValue = parameter.schema.default;
    }

    return uiParameter;
  });

  return resultArray.length ? resultArray : null;
}

/**
 * Construct request object ready to be consumed by the UI
 *
 * @param {String} description
 * @param {Object} requestBody
 * @return {Object}
 */
function getUIRequest(description) {
  var requestBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var uiRequest = {};

  if (description) {
    uiRequest.description = description;
  }

  if (requestBody) {
    var mediaType = getMediaType(requestBody.content);

    if (mediaType) {
      addMediaTypeInfoToUIObject(uiRequest, mediaType);
    }
  }

  return uiRequest;
}

/**
 * Construct responses object ready to be consumed by the UI
 *
 * @param {Object} responses
 * @return {Array}
 */
function getUIResponses(responses) {
  var uiResponses = [];

  for (var statusCode in responses) {
    var response = responses[statusCode];

    var uiResponse = {
      code: statusCode,
      description: response.description
    };

    var mediaType = getMediaType(response.content);

    if (mediaType) {
      addMediaTypeInfoToUIObject(uiResponse, mediaType);
    }

    uiResponses.push(uiResponse);
  }

  return uiResponses;
}

/**
 * Extracts the content for UI from the first available media type
 *
 * @param {Object} content Open API v3 Content Object
 * @return {Object|null}
 */
function getMediaType(content) {
  if (!content) {
    return null;
  }

  var mediaTypeIds = Object.keys(content);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mediaTypeIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mediaTypeId = _step.value;

      var mediaType = content[mediaTypeId];

      if (mediaType.schema) {
        return mediaType;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}

/**
 * Extract unique tags from paths object
 *
 * @param {Object} paths
 * @return {Array} of strings
 */
function getTags(paths) {
  var tagCollection = [];

  for (var pathKey in paths) {
    var path = paths[pathKey];

    for (var methodKey in path) {
      var method = path[methodKey];

      if (Array.isArray(method.tags) === false) {
        continue;
      }

      method.tags.forEach(function (tag) {
        if (!tagCollection.includes(tag)) {
          tagCollection.push(tag);
        }
      });
    }
  }

  return tagCollection.sort();
}

/**
 * If tag definitions exist, extract this information and add it to the
 * navigation array. This mutates the `navigation` parameter.
 *
 * @param {Array} navigation
 * @param {Array} tagDefinitions
 */
function addTagDetailsToNavigation(navigation, tagDefinitions) {
  var getTag = function getTag(tag) {
    return tagDefinitions.find(function (def) {
      return def.name === tag;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = navigation[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var navGroup = _step2.value;

      var tagDefinition = getTag(navGroup.title);

      if (tagDefinition) {
        navGroup.handle = navGroup.title;
        navGroup.title = tagDefinition.name;

        if (tagDefinition.description) {
          navGroup.description = tagDefinition.description;
        }

        if (tagDefinition.externalDocs) {
          navGroup.externalDocs = tagDefinition.externalDocs;
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

/**
 * Converts openApiV3 object to new object ready to be consumed by the UI.
 *
 * @param {Object} openApiV3
 * @param {Function} sortFunc
 * @return {Object}
 */

exports.default = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(openApiV3, sortFunc) {
    var derefOpenApiV3, info, paths, apiSecurity, securityDefinitions, tags, _ref4, navigation, services, infoObj, definition;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            derefOpenApiV3 = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _jsonSchemaRefParser2.default.dereference(openApiV3);

          case 4:
            derefOpenApiV3 = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            throw new Error('Unable to dereference input definition. Details: ' + JSON.stringify(_context.t0));

          case 10:
            info = derefOpenApiV3.info;
            paths = derefOpenApiV3.paths;
            apiSecurity = derefOpenApiV3.security || [];
            securityDefinitions = (0, _securityParser.getSecurityDefinitions)(derefOpenApiV3);

            // Construct navigation and services, which differs depending on
            // if the definition utilises tags or not.

            tags = getTags(paths);
            _ref4 = tags.length ? getUINavigationAndServicesByTags({ tags: tags, paths: paths, apiSecurity: apiSecurity, securityDefinitions: securityDefinitions, sortFunc: sortFunc }) : getUINavigationAndServices({ paths: paths, apiSecurity: apiSecurity, securityDefinitions: securityDefinitions }), navigation = _ref4.navigation, services = _ref4.services;

            // If we have top-level tag descriptions, add it to the navigation

            if (derefOpenApiV3.tags) {
              addTagDetailsToNavigation(navigation, derefOpenApiV3.tags);
            }

            // Additional information (if applicable)
            infoObj = (0, _extends3.default)({}, info);

            delete infoObj.title;
            delete infoObj.version;
            delete infoObj.description;

            definition = {
              title: info.title,
              version: info.version,
              description: info.description,
              info: infoObj,
              navigation: navigation,
              services: services,
              security: securityDefinitions
            };
            return _context.abrupt('return', definition);

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  function getUIReadyDefinition(_x2, _x3) {
    return _ref3.apply(this, arguments);
  }

  return getUIReadyDefinition;
}();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDefinition = undefined;

var _regenerator = __webpack_require__(82);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(80);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @param {string} definitionUrl
 * @return {Promise<boolean>}
 */
var validateDefinition = exports.validateDefinition = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(definitionUrl) {
    var url, result, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = VALIDATOR_HOST + '/api/v1/validate';
            _context.next = 3;
            return (0, _isomorphicFetch2.default)(url + '?url=' + definitionUrl);

          case 3:
            result = _context.sent;

            if (!result.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return result.json();

          case 7:
            response = _context.sent;

            if (!(response.status === false)) {
              _context.next = 10;
              break;
            }

            throw new Error('The definition did not validate, see ' + VALIDATOR_HOST + '.');

          case 10:
            return _context.abrupt('return', true);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validateDefinition(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _isomorphicFetch = __webpack_require__(194);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALIDATOR_HOST = 'https://openapi-converter.herokuapp.com';

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(60);

var _extends3 = _interopRequireDefault(_extends2);

exports.getSecurityDefinitions = getSecurityDefinitions;
exports.getUISecurity = getUISecurity;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extracts any security schemes from the given Open API V3 definition file.
 * Security schemes are defined in `components.securitySchemes`.
 * The API defines what security applies at either the top level (`security`)
 * or per operation.
 *
 * @param {Object} definition
 * @return {Object}
 */
function getSecurityDefinitions(definition) {
  var securityDefinitions = {};

  if (definition.components && definition.components.securitySchemes) {
    securityDefinitions = (0, _extends3.default)({}, definition.components.securitySchemes);
  }

  // Always set a name.
  Object.keys(securityDefinitions).forEach(function (key) {
    var scheme = securityDefinitions[key];
    var example = void 0;

    if (!scheme.name) {
      scheme.name = key;
    }

    if (scheme.type === 'http') {
      example = 'Authorization: ' + scheme.scheme + ' credentials';
    } else if (scheme.type === 'apiKey') {
      if (scheme.in === 'query') {
        example = '?' + scheme.name + '=credentials';
      } else {
        example = scheme.name + ': credentials';
      }
    }

    if (example) {
      scheme.example = example;
    }
  });

  return securityDefinitions;
}

/**
 * Simplifies the security definition for operation objects by merging the
 * global definition in.
 *
 * @param {Array} security
 * @param {Object} definitions
 * @return {Object}
 */
function getUISecurity(security, definitions) {
  return security.reduce(function (prev, curr) {
    var name = Object.keys(curr)[0];
    var definition = (0, _extends3.default)({}, definitions[name]);

    // If this definition is OAuth2/OpenIdConnect, add the applicable scopes.
    if (['oauth2', 'openIdConnect'].includes(definition.type) && curr[name].length) {
      definition.applicableScopes = curr[name];
    }

    prev[name] = definition;

    return prev;
  }, {});
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParserFunction = getParserFunction;
exports.getValidatorFunction = getValidatorFunction;

var _openApiV3Parser = __webpack_require__(335);

var _openApiV3Parser2 = _interopRequireDefault(_openApiV3Parser);

var _openApiV3Validator = __webpack_require__(336);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} type
 * @return {Function<Promise>}
 */
function getParserFunction(type) {
  if (type === 'open-api-v3') {
    return _openApiV3Parser2.default;
  }

  var errorMsg = 'Invalid type: ' + type;
  throw new Error(errorMsg);
}

/**
 * @param {string} type
 * @return {Function<Promise>}
 */
function getValidatorFunction(type) {
  if (type === 'open-api-v3') {
    return _openApiV3Validator.validateDefinition;
  }

  var errorMsg = 'Invalid type: ' + type;
  throw new Error(errorMsg);
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(23);

var _classnames2 = _interopRequireDefault(_classnames);

var _markdownIt = __webpack_require__(584);

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(296);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cm = (0, _markdownIt2.default)('commonmark');

var Description = (0, _Description.styles)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Description, _PureComponent);

  function Description() {
    (0, _classCallCheck3.default)(this, Description);
    return (0, _possibleConstructorReturn3.default)(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  (0, _createClass3.default)(Description, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isInline = _props.isInline,
          description = _props.description,
          classes = _props.classes;


      var text = void 0;
      if (isInline) {
        text = {
          __html: cm.renderInline(description)
        };
      } else {
        text = {
          __html: cm.render(description)
        };
      }

      return _react2.default.createElement('div', { className: (0, _classnames2.default)(classes.description, (0, _defineProperty3.default)({}, classes.inline, isInline)), dangerouslySetInnerHTML: text });
    }
  }]);
  return Description;
}(_react.PureComponent)) || _class;

exports.default = Description;


Description.propTypes = {
  description: _propTypes2.default.string.isRequired,
  isInline: _propTypes2.default.bool,
  classes: _propTypes2.default.object
};

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIj48c3R5bGU+LnN0MHtmaWxsOiNGRkY7fSAuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTUuMjkxMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSAuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I0QxODVCODtzdHJva2Utd2lkdGg6MTY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30gLnN0M3tmaWxsOiNEMDg0QjQ7c3Ryb2tlOiNEMTg1Qjg7c3Ryb2tlLXdpZHRoOjAuOTA3ODtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSAuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjguODAxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48cGF0aCBmaWxsPSJ0cmFuc3BhcmVudCIgZD0iTTAgMGg1MDB2NTAwSDB6Ii8+PHBhdGggZD0iTTMxNC4zIDI3My43SDEzNi42djE0Ny40YzAgMTYuNiAxMy41IDMwLjEgMzAuMSAzMC4xaDE2Mi45YzE2LjYgMCAzMC4xLTEzLjUgMzAuMS0zMC4xdi0xMDJjLS4xLTI1LjEtMjAuMy00NS40LTQ1LjQtNDUuNHoiLz48Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDEuOSIgY3k9IjM0Mi45IiByPSIyNS44Ii8+PGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjkyLjciIGN5PSIzNDIuOSIgcj0iMjUuOCIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMTkuNSAzMTMuM2gyMS43Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI0OC4xIDQwOWMtNS44IDQuNS0xNC4zIDkuMS0yNi43IDEyLjctMjQgNi45LTM1LjMtNS41LTQwLjMtMTQuOC0xLjMtMi41IDEuMi01LjIgMy44LTQuMiA2LjcgMi44IDE3LjUgMy45IDMwLjUtNy43IDIyLTE5LjYgMjQtNy44IDMyLjEtOGgxLjJjOCAuMiAxMC4xLTExLjcgMzIuMSA4IDEzIDExLjYgMjMuOSAxMC42IDMwLjUgNy43IDIuNi0xLjEgNS4xIDEuNyAzLjggNC4yLTQuOSA5LjMtMTYuMiAyMS43LTQwLjMgMTQuOC0xMi43LTMuNi0yMC45LTgtMjYuNy0xMi43ek0zNzcuOCAyNzQuOWwtMjkuMy04TDM4MiAxNDMuNmM1LjUtMjAuMi02LjQtNDEuMS0yNi42LTQ2LjZMMjQ4LjkgNjhjLTIwLjItNS41LTQxLjEgNi40LTQ2LjYgMjYuNkwxNjguOCAyMThsLTI5LjMtOGMtMTMuMS0zLjYtMjYuNyA0LjItMzAuMyAxNy4zbC00LjMgMTUuOGMtMy42IDEzLjEgNC4yIDI2LjcgMTcuMyAzMC4zbDIzOC40IDY0LjljMTMuMSAzLjYgMjYuNy00LjIgMzAuMy0xNy4zbDQuMy0xNS44YzMuNS0xMy4yLTQuMy0yNi43LTE3LjQtMzAuM3oiLz48cGF0aCBkPSJNMzY3LjEgMzU1LjFjLTMuNiAwLTcuMi0uNS0xMC43LTEuNGwtMjM4LjQtNjVjLTIxLjYtNS45LTM0LjQtMjguMi0yOC41LTQ5LjhsNC4zLTE1LjhjNS45LTIxLjYgMjguMi0zNC40IDQ5LjgtMjguNWwxNCAzLjhMMTg3IDkwLjVjNy44LTI4LjcgMzcuNS00NS42IDY2LjItMzcuOGwxMDYuNSAyOWMxMy45IDMuOCAyNS41IDEyLjcgMzIuNiAyNS4yIDcuMSAxMi41IDkgMjcgNS4yIDQwLjlMMzY4IDI1NS43bDE0IDMuOGMyMS42IDUuOSAzNC40IDI4LjIgMjguNSA0OS44bC00LjMgMTUuOGMtMi44IDEwLjUtOS42IDE5LjItMTkgMjQuNi02LjIgMy42LTEzLjEgNS40LTIwLjEgNS40ek0xMzMgMjI1LjFjLTMuOCAwLTcuNCAyLjYtOC40IDYuNGwtNC4zIDE1LjhjLTEuMyA0LjYgMS41IDkuNCA2LjEgMTAuN2wyMzguNCA2NC45YzIuNC43IDUgLjMgNy4xLTEuMSAxLjgtMS4yIDMuMS0zLjEgMy43LTUuM2w0LjItMTUuNWMxLjMtNC42LTEuNS05LjQtNi4xLTEwLjdsLTI3LjUtNy41Yy05LjUtMi42LTE1LjEtMTIuNC0xMi41LTIxLjlsMzMuMS0xMjEuNWMxLjUtNS43LjgtMTEuNi0yLjEtMTYuNy0yLjktNS4xLTcuNi04LjgtMTMuMy0xMC4zbC0xMDYuNS0yOWMtMTEuNy0zLjItMjMuOCAzLjctMjcgMTUuNGwtMzMuMSAxMjEuNWMtMi42IDkuNS0xMi40IDE1LjEtMjEuOSAxMi41bC0yNy41LTcuNWMtLjktLjEtMS43LS4yLTIuNC0uMnoiLz48L3N2Zz4K"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAqJJREFUSA3tVEtrU0EUPnNvYoNtaUUp1AcoPkAXIroriFjro6VJLPXm1USxQnHR/AavG39CCxFKSPr0IrU34qMiaERcFUGhIl10WRAKwbaamJs5nqmM3KZJaIgryWzOzJzvfN+cc2YGoD7qFahXoF6BWivQ6xu46w4O7auVp1z8df+to3afIhYeLTwMiKNobbwKhUJ77IB/Mff4wnqB5xe9vlCX5NsUBofLYMC+AuCZtTzMa9pQiwTUYnVdV9xaaIQjv0c8KgI7IPmYnHgCg/uxkHuLgMdo84MLWq8Yxsi69FdrNU3f9ROWJiiZG8BYVkHmN41xU/L8FRYb3sDtQ5zn0ohwmDGWhtbG7lQs9kOCd2o9g4PNuJZ9ggCdVMmMojLP3PT4O3v8FmHhcGuRIwg8TSc9SEGv9zY6e+PxeNYeVGneF4m0WTn+HBHPUvwKc6jXzKnEp+KYPz227aaM5HKD0ylOukJlv7S6kZ+NRqMNNkjZqTi0leXvhSiBllTV2VFKVBBsy1iy9vkjJy3O35B4G2OQam9t6o/FYnnpL7ae4M3TaBVeEL6dfAtOl9ozm0x+K8bJ9baMpWN2JvmFnF2U+Sr13L2SWZ+iW+qQfrv1BsLn0bLSQlS0R2l2XawkKmLLCgvnnDHxmanqZSLLkHj/wuJSQjwR4ZPD7Q95Cxzn6SK1UGUMFxzvMcfG1qS/nN1CUgpkTic+qqBepSfxnXoXJPExspstojd6Bzg8ps/HRRuj506dCBiG/qsUT/Fe2R4XA6mcHbzAX1JmTXSIh3TiZY74YBPHQH/6aPJ+cUyl9Y6FBQnd2gsA/Bn1crdY01vnDNkwfQyjYl3NqEpYEIv/tgAsxRAVpkDYnJk0qhGsCev2D3RT9p01kdSD6xX47yrwGz/H8jji2YS/AAAAAElFTkSuQmCC"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);


/***/ })

},[758]);