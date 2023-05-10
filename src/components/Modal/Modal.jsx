import React, { Component } from 'react';
import { Overley, Modal } from './Modal.styled';

export class ModalWindow extends Component {
  render() {
    return (
      <Overley>
        <Modal>{this.props.children}</Modal>
      </Overley>
    );
  }
}
