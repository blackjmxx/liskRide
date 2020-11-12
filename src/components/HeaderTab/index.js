import React, { Component } from "react";
import { Grid, Header, Icon, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class HeaderTab extends Component {
  render() {
    const { name } = this.props;
    return (
      <Grid fluid style={{ height: "70px" }} columns={2}>
        <Grid.Column width={2} verticalAlign="middle">
          <Button style={{backgroundColor:'#fff'}} as={NavLink} icon size="large" to={"/home"}>
            <Icon name="close" size="large" color="gray" />
          </Button>
        </Grid.Column>
        <Grid.Column textAlign={'center'} width={14} verticalAlign="middle">
          <Header as="h1" textAlign="left" verticalAlign="middle">
            {name}
          </Header>
        </Grid.Column>
      </Grid>
      // <Grid.Row Relaxed verticalAlign='bottom' style={{'backgroundColor': '#f4f4f4'}}>
      //         <Grid.Column verticalAlign='bottom' floated={'right'} width={1}>
      //         <Button as={NavLink} icon floated='right' size='large'  style={{'backgroundColor': '#f4f4f4', 'paddingBottom': '3px'}} to={'/'}>
      //           <Icon name='close' color='black' />
      //         </Button>
      //       </Grid.Column>
      // </Grid.Row>
    );
  }
}

export default HeaderTab;
