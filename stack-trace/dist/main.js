class S {
  get isLoggedIn() {return true;}
  get isAdmin() {return false;}
}
function n(state) {console.log("Is logged in?", state.isLoggedIn);return state.isLoggedIn && state.isAdmin;}

const s = new S();
console.log("Can read names?", n());
//# sourceMappingURL=./main.js.map