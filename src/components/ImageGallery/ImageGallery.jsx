import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Gallery } from './ImageGallery.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34228603-b891bcae5effe4f7195da3207';
const notify = () => toast('Nothing found');
const messageError = () =>
  toast('An error occurred, please try again or enter a different value');

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, _) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ page: 1, images: [], status: 'pending' });

      axios
        .get(
          `${BASE_URL}?q=${this.props.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(res => {
          if (res.data.hits.length === 0) {
            notify();
          }
          this.setState({
            images: res.data.hits,
            status: 'resolved',
          });
        })
        .catch(error => messageError());
    }
  }

  onChangePage = async () => {
    await this.setState(state => ({
      page: state.page + 1,
    }));

    axios
      .get(
        `${BASE_URL}?q=${this.props.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          status: 'resolved',
        }));
      })
      .catch(error => messageError());
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return null;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return (
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      );
    }

    if (status === 'resolved') {
      return (
        <div>
          <Gallery>
            {images.map(item => (
              <ImageGalleryItem
                key={item.id}
                smollImg={item.webformatURL}
                tags={item.tags}
              />
            ))}
          </Gallery>
          {images.length < 12 ? null : <Button onCklick={this.onChangePage} />}
        </div>
      );
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string.isRequired,
      smollImg: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
