import Constants from "../constants/UserConstants";

export default {
    updateLogin(b) {
        this.dispatch(Constants.UPDATE_LOGIN, b);
    }
};