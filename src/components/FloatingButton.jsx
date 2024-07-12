import React from 'react';
import Swal from 'sweetalert2';
import './FloatingButton.css';

const FloatingButton = () => {
  const handleClick = () => {
    Swal.fire({
      title: 'Join the Community Now!!',
      text: "Do you want to join the Community?",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://chat.whatsapp.com/CeCwwP6VV1jDbKXAm3Btqj', '_blank');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'See you next time :"(',
          'error'
        );
      }
    });
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      <i className="fa fa-users" aria-hidden="true"></i>
    </button>
  );
};

export default FloatingButton;
