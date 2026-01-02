import React from 'react';
import useKeyboardShortcuts from '@/utils/useKeyboardShortcuts';

/**
 * Component that activates global keyboard shortcuts
 * Must be rendered inside Router context
 */
const KeyboardShortcuts: React.FC = () => {
  useKeyboardShortcuts();
  return null;
};

export default KeyboardShortcuts;
