class State {
  get isLoggedIn() {
    return true;
  }
  get isAdmin() {
    return false;
  }
}

function canReadNames(state) {
  console.log("Is logged in?", state.isLoggedIn);
  return state.isLoggedIn && state.isAdmin;
}

const state = new State();
console.log("Can read names?", canReadNames());
