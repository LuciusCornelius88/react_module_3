import { Component } from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
// import Counter from './Counter/Counter';
// import Modal from './Modal/Modal';
// import ToDoList from './ToDoList/ToDoList';
// import FormLogin from './FormLogin/FormLogin';

import { nanoid } from 'nanoid';
import ContentInfo from './ContentInfo/ContentInfo';

class App extends Component {
  state = {
    isShowModal: false,
    searchText: '',
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
  };

  handleSearch = searchText => {
    this.setState({
      searchText,
    });
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
        {/* <Counter /> */}
        {/* <ToDoList /> */}
        {/* {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin createUser={this.createUser} closeModal={this.closeModal} />
          </Modal>
        )} */}
      </div>
    );
  }
}

export default App;
