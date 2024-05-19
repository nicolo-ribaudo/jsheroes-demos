import _classPrivateMethodInitSpec from "@babel/runtime/helpers/classPrivateMethodInitSpec";
import _classPrivateFieldInitSpec from "@babel/runtime/helpers/classPrivateFieldInitSpec";
import _classPrivateGetter from "@babel/runtime/helpers/classPrivateGetter";
import _classPrivateFieldGet from "@babel/runtime/helpers/classPrivateFieldGet2";
import _classPrivateFieldSet from "@babel/runtime/helpers/classPrivateFieldSet2";
var _name = /*#__PURE__*/new WeakMap();
var _title = /*#__PURE__*/new WeakMap();
var _Pet_brand = /*#__PURE__*/new WeakSet();
class Pet {
  constructor({
    name,
    title
  }) {
    _classPrivateMethodInitSpec(this, _Pet_brand);
    _classPrivateFieldInitSpec(this, _name, void 0);
    _classPrivateFieldInitSpec(this, _title, void 0);
    _classPrivateFieldSet(_name, this, name);
    _classPrivateFieldSet(_title, this, title);
  }
  sayHi() {
    console.log(`Hello, I'm ${_classPrivateGetter(_Pet_brand, this, _get_fullName)}`);
  }
}
function _get_fullName(_this) {
  return `${_classPrivateFieldGet(_title, _this)} ${_classPrivateFieldGet(_name, _this)}`;
}
const timmy = new Pet({
  name: "Timmy",
  title: "Dr"
});
timmy.sayHi();
//# sourceMappingURL=main.js.map