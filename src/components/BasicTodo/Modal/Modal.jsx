import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal--root');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal conmponent Did Mount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('Modal conmponent Will Umount');
    window.removeEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }

  handleKeyDown = evt => {
    {
      evt.code === 'Escape' && this.props.onClose();
    }
  };
  handleBackdropClick = evt => {
    // console.log('Кликнули на бакдроп');

    // console.log('Это курентТаргет', evt.currentTarget);
    // console.log('Это Таргет', evt.target);
    {
      evt.target === evt.currentTarget &&
        this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className="Modal__backdrop"
        onClick={this.handleBackdropClick}
      >
        <div className="Modal__content">
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
