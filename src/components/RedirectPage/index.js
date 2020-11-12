import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { User } from "parse";

class VoucherPage extends Component {
  constructor() {
    super();
    this.state = {
      storesModalOpen: false
    };
  }

  componentDidMount() {
    // that is client id
    const { ci } = this.props.match.params;
    this.props.setInitializeIdCampaign(ci);
  }

  render() {
    const { error } = this.props;
    const { ci } = this.props.match.params;
    if (ci) {
      let currentUser = User.current();
      if (currentUser) {
        this.props.linkCardToUserProfile(currentUser, this.props.history, ci)
      } else {
        return <Redirect to={"/home/params"} />;
      }
    } else if (error) {
      return <Redirect to={"/" + 404} />;
    }
    return <div></div>;
  }
}

export default VoucherPage;
