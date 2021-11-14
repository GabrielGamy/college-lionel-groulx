import React from 'react';
import HeaderDiscussion from '../../components/Header/HeaderDiscussion';
import DiscussionList from "./DiscussionList";
import MessageInput from "./MessageInput";

export default class Discussion extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <HeaderDiscussion
          avatar={user.avatarUrl}
          name={user.fullName}
          goBack={this.props.goBack}
        />
        <DiscussionList />
        <MessageInput />
      </>
    );
  }
}
