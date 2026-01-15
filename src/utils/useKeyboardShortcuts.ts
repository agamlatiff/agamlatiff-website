'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Global keyboard shortcuts hook
 * - ESC: Navigate back to home (when on project detail page)
 * - ? : Show help overlay (TODO)
 */
const useKeyboardShortcuts = () => {
  const router = useRouter();
  const pathname = usePathname();

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
      if (e.key === 'Escape' && pathname.startsWith('/projects/')) {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, pathname]);
};

export default useKeyboardShortcuts;
