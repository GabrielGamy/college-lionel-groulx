import React from "react";

export default class Modal extends React.Component {
  componentDidMount() {
    alert(this.props.message);
  }

  render() {
    return <></>;
  }
}
