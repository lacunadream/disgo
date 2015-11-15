import Fluxxor from "fluxxor";
import Constants from "../constants/UserConstants";

const UserStore = Fluxxor.createStore({
    initialize() {
        this.state = {};
        this.state.loggedIn = false;

        this.bindActions(
            Constants.UPDATE_LOGIN, this.onUpdateLogin,
        );
    },
    onUpdateLogin(status) {
        this.state.loggedIn = status;
        this.emit("change");
    },
    getState() {
        return this.state;
    }
});

export default UserStore;