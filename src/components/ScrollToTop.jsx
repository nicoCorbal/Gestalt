import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [is_visible, set_is_visible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggle_visibility = () => {
      if (window.pageYOffset > 300) {
        set_is_visible(true);
      } else {
        set_is_visible(false);
      }
    };

    window.addEventListener('scroll', toggle_visibility);

    return () => {
      window.removeEventListener('scroll', toggle_visibility);
    };
  }, []);

  const scroll_to_top = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {is_visible && (
        <button
          onClick={scroll_to_top}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-curated-text text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center md:hidden"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
