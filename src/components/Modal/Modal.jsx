import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overley, Modal } from './Modal.styled';

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overley onClick={this.handleBackdropClick}>
        <Modal>{this.props.children}</Modal>
      </Overley>
    );
  }
}

ModalWindow.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
