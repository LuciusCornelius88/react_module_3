import { useState } from 'react';
import Header from './Header/Header';
// import Search from './Search/Search';
// import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
import ToDoList from './ToDoList/ToDoList';
import FormLogin from './FormLogin/FormLogin';

import { nanoid } from 'nanoid';
import ContentInfo from './ContentInfo/ContentInfo';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const showModal = () => setIsShowModal(true);

  const closeModal = () => setIsShowModal(false);

  // const handleSearch = (searchText) => setSearchText(searchText);

  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
  };

  return (
    <div className="container">
      <Toaster
        position="top-right"
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 1500 },
        }}
      />
      <Header showModal={showModal} />
      {/* <Search handleSearch={handleSearch} /> */}
      <ContentInfo searchText={searchText} />
      {/* <Counter /> */}
      <ToDoList />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
