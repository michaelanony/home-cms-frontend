import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import LoginPage from "./Pages/LoginRegisterPage/LoginRegisterPage"
import { actions } from "./Store/actions/actionCreators";
import { connect } from "react-redux";
import store, { AppState } from "./Store";
import './App.scss'
import SiderBar from "./Components/SiderBar/SiderBar"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { getCookie } from "./lib/util"

const App: React.FC<
    ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
> = ({ isLogin, userSigninWithSSOSuccess, userLoginSuccess }) => {
    const generateContet = () => {
        const cookie = getCookie("SESSIONID")
        if (cookie) {
            store.dispatch(actions.userLoginSuccess())
            return (
                <Switch>
                    <Redirect
                        path="/index"
                        exact
                        to={{ pathname: "/index" }}
                    // to={{ pathname: "/config/certificates" }}
                    ></Redirect>
                    <Route path="/index" component={MainPage} />
                </Switch>
            )
        } else {
            return (
                <Switch>
                    <Redirect
                        path="/"
                        exact
                        to={{ pathname: "/login" }}
                    // to={{ pathname: "/config/certificates" }}
                    ></Redirect>
                    <Route path="/" component={LoginPage} />
                </Switch>
            )
        }
    }
    return (
        <Router>
            <div className="content">
                <div className="content">
                    <SiderBar

                    />
                    <div className="right-content">
                        <Header

                        />
                        <div className="app_content">
                            {generateContet()}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
    )

}
const mapStateToProps = (state: AppState) => ({
    isLogin: state.loginStatus.isLogin
});
const mapDispatchToProps = {
    userSigninWithSSOSuccess: actions.userSigninWithSSOSuccess,
    userLoginSuccess: actions.userLoginSuccess
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

