webpackJsonp([4],{

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxForm = __webpack_require__(295);
	
	var _ChangePassword = __webpack_require__(778);
	
	var _ChangePassword2 = _interopRequireDefault(_ChangePassword);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validate = function validate(values) {
	  var errors = {};
	  if (!values.username || values.username.trim() === '') {
	    errors.username = 'Введіть імя';
	  }
	  if (!values.email || values.email.trim() === '') {
	    errors.email = 'Введіть email';
	  }
	  if (!values.password || values.password.trim() === '') {
	    errors.password = 'Введіть пароль';
	  }
	  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
	    errors.confirmPassword = 'Введіть підтвердження паролю';
	  }
	  if (values.password && values.password.trim() !== '' && values.confirmPassword && values.confirmPassword.trim() !== '' && values.password !== values.confirmPassword) {
	    errors.confirmPassword = 'Паролі не співпадають';
	  }
	  return errors;
	};
	
	// function validateAndSignup (values, dispatch) {
	//   return new Promise((resolve, reject) => {
	//     dispatch(signup(values))
	//     .then((response) => {
	//       let data = response.payload.data
	//       if (response.payload.status !== 200) {
	//         dispatch(signupFailure(response.payload))
	//         reject(data)
	//       } else {
	//         dispatch(signupSuccess(response.payload))
	//         resolve()
	//       }
	//     })
	//   })
	// }
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    user: state.user
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {};
	};
	
	exports.default = (0, _reduxForm.reduxForm)({
	  form: 'SignupForm',
	  fields: ['username', 'email', 'password', 'confirmPassword'],
	  validate: validate
	}, mapStateToProps, mapDispatchToProps)(_ChangePassword2.default);

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(257);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(390);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(395);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(396);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(397);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(432);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(185);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChangePassword = function (_Component) {
	  (0, _inherits3.default)(ChangePassword, _Component);
	
	  function ChangePassword() {
	    (0, _classCallCheck3.default)(this, ChangePassword);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ChangePassword).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ChangePassword, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.user && nextProps.user.status === 'authenticated' && !nextProps.user.error && !nextProps.user.loading) {
	        this.context.router.push('/');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var _props$fields = _props.fields;
	      var username = _props$fields.username;
	      var email = _props$fields.email;
	      var password = _props$fields.password;
	      var confirmPassword = _props$fields.confirmPassword;
	      var handleSubmit = _props.handleSubmit;
	      var submitting = _props.submitting;
	      var signup = _props.signup;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'settings-form-container col-xs-offset-1 col-xs-10 col-md-offset-4 col-md-4' },
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group ' + (username.touched && username.error ? 'has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'username', className: 'control-label' },
	              'Імя'
	            ),
	            _react2.default.createElement('input', (0, _extends3.default)({
	              id: 'username',
	              placeholder: '@username',
	              type: 'text',
	              className: 'form-control'
	            }, username)),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8 col-sm-offset-4  text-danger' },
	              username.touched ? username.error : ''
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group ' + (email.touched && email.error ? 'has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'username', className: 'control-label' },
	              'Email'
	            ),
	            _react2.default.createElement('input', (0, _extends3.default)({
	              id: 'email',
	              placeholder: '@email',
	              type: 'text',
	              className: 'form-control'
	            }, email)),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8 col-sm-offset-4  text-danger' },
	              email.touched ? email.error : ''
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group ' + (password.touched && password.error ? 'has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'password', className: 'control-label' },
	              'Пароль*'
	            ),
	            _react2.default.createElement('input', (0, _extends3.default)({
	              id: 'password',
	              type: 'password',
	              className: 'form-control'
	            }, password)),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8 col-sm-offset-4  text-danger' },
	              password.touched ? password.error : ''
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group ' + (confirmPassword.touched && confirmPassword.error ? 'has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'password', className: 'control-label' },
	              'Підтвердіть пароль*'
	            ),
	            _react2.default.createElement('input', (0, _extends3.default)({
	              id: 'password',
	              type: 'password',
	              className: 'form-control'
	            }, confirmPassword)),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8 col-sm-offset-4  text-danger' },
	              confirmPassword.touched ? confirmPassword.error : ''
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group text-center' },
	            _react2.default.createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-primary submit' },
	              _react2.default.createElement('i', { className: submitting ? 'fa fa-spinner fa-spin' : 'fa fa-paper-plane' }),
	              'Зберегти пароль'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return ChangePassword;
	}(_react.Component);
	
	ChangePassword.contextTypes = {
	  router: _react.PropTypes.object
	};
	exports.default = ChangePassword;
	
	
	ChangePassword.propTypes = {
	  fields: _react.PropTypes.object,
	  handleSubmit: _react.PropTypes.func,
	  resetMe: _react.PropTypes.func,
	  submitting: _react.PropTypes.bool
	};

/***/ }

});
//# sourceMappingURL=4.password.6cc28c834979400822ec.js.map