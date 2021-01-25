import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

import PropTypes from 'prop-types';
// import '../NavBar/NavBar.css';

export class LogoutPage extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }


  render() {
    return (
      <Fragment>
        <li onClick = {this.props.logout} className={"px-3"} href = "#">
           {/* <h4 className={"fontSize4"}>Logout</h4> */}
           Logout
        </li>
      </Fragment>
    );
  }
}

export default connect (null, {logout} )(LogoutPage);