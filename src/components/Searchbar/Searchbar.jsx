import { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { Form, Button, Label, Input } from './Searchbar.styled';

const inform = () => toast('Enter a value');

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleNameChange = ev => {
    this.setState({ imagesName: ev.currentTarget.value.toLowerCase() });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    if (this.state.imagesName.trim() === '') {
      inform();
      return;
    }

    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };

  render() {
    return (
      <header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imagesName}
            onChange={this.handleNameChange}
          />
          <Button type="submit">
            <Label>Search</Label>
          </Button>
        </Form>
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
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
