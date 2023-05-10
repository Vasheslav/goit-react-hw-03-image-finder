import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow } from '../Modal/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { smollImg, largeImg, tags } = this.props;
    return (
      <div>
        <Item>
          <Img src={smollImg} alt={tags} />
        </Item>
        {this.state.showModal && (
          <ModalWindow>
            <img src={largeImg} alt={tags} />
          </ModalWindow>
        )}
      </div>
    );
  }
}

// export const ImageGalleryItem = ({ smollImg, largeImg, tags }) => {
//   return (
//     <div>
//       <Item>
//         <Img src={smollImg} alt={tags} />
//       </Item>
//       {showModal && (
//         <ModalWindow>
//           <img src={largeImg} alt={tags} />
//         </ModalWindow>
//       )}
//     </div>
//   );
// };

ImageGalleryItem.propTypes = {
  smollImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
