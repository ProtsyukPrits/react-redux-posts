import React, { useState } from 'react';
// import './BackToTopButton.css'; // Підключаємо стилі для кнопки

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функція, яка прокручує сторінку вгору
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Функція, яка перевіряє, чи необхідно відображати кнопку
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Додаємо прослуховувач подій при монтажі компоненту
  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      &#x27A4;
    </div>
  );
};

export default BackToTopButton;
