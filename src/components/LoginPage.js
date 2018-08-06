import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLogin} value="google">Login with Google</button>
      <button className="button" onClick={startLogin} value="github">Login with Github</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: e => dispatch(startLogin(e))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);