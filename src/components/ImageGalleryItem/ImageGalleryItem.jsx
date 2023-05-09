import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smollImg, tags }) => {
  return (
    <Item>
      <Img src={smollImg} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  smollImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
