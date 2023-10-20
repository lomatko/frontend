import React from "react";
import '../style/login-styles.scss'

export function LoginView() {

    return (
        <div className="signup">
            <div className="signup-connect">
                <h1>CollabCoin</h1>
                <a href="/client" className="btn btn-social">
                    <i className="fa"></i> Log in as Client / User</a>
                <a href="/organisation" className="btn btn-social">
                    <i className="fa"></i> Log in as Charity Organisation</a>
                <a href="/bank" className="btn btn-social">
                    <i className="fa"></i> Log in as Bank</a>
            </div>
        </div>

    );
}