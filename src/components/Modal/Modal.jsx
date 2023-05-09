import * as basicLightbox from 'basiclightbox';

export const Modal = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    const instance = basicLightbox.create(
      <div class="overlay">
        <div class="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
    // setIsOpen(true);
    // instance.show();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};
