import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Global keyboard shortcuts hook
 * - ESC: Navigate back to home (when on project detail page)
 * - ? : Show help overlay (TODO)
 */
const useKeyboardShortcuts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // ESC - Navigate back to home when on project page
      if (e.key === 'Escape' && location.pathname.startsWith('/projects/')) {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname]);
};

export default useKeyboardShortcuts;
