/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx 
 * Native base
 * Mini clone WhatsApp 
 */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Header from './components/Header/Header';
import Inbox from './components/Inbox/index';
import Discussion from './components/Discussion/Discussion';
import { USERS } from './data';

export default class App extends React.Component {
  state = {
    showDiscussion: false,
    selectedUser: USERS[0],
  };

  setShowDiscussion = (show) => {
    this.setState({ showDiscussion: show });
  };

  setSelectedUser = (user) => {
    this.setState({ selectedUser: user, showDiscussion: true });
  };

  render() {
    return (
      <NativeBaseProvider>
        {!this.state.showDiscussion && (
          <Inbox onPressDiscussion={this.setSelectedUser} />
        )}
        {this.state.showDiscussion && (
          <Discussion
            user={this.state.selectedUser}
            goBack={() => this.setShowDiscussion(false)}
          />
        )}
      </NativeBaseProvider>
    );
  }
}
