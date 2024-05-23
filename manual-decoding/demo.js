function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
var _field = /*#__PURE__*/ new WeakMap();
class A {
    method() {
        inExpr(_class_private_field_get(this, _field));
    }
    constructor(){
        _class_private_field_init(this, _field, {
            writable: true,
            value: void 0
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEEge1xuICAjZmllbGQ7XG5cbiAgbWV0aG9kKCkge1xuICAgIGluRXhwcih0aGlzLiNmaWVsZClcbiAgfVxufSJdLCJuYW1lcyI6WyJBIiwibWV0aG9kIiwiaW5FeHByIiwiZmllbGQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0U7QUFERixNQUFNQTtJQUdKQyxTQUFTO1FBQ1BDLGdDQUFPLElBQUksRUFBRUM7SUFDZjs7UUFKQSxnQ0FBQTs7bUJBQUEsS0FBQTs7O0FBS0YifQ==
