/**
 * Honeypot Component - Invisible field to catch bots
 * Real users won't see or fill this field, but bots will
 */

import React from 'react';

interface HoneypotProps {
  value: string;
  onChange: (value: string) => void;
}

const Honeypot: React.FC<HoneypotProps> = ({ value, onChange }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        pointerEvents: 'none',
        tabIndex: -1,
      }}
      aria-hidden="true"
    >
      <label htmlFor="website_url">
        Website (Leave this field empty)
      </label>
      <input
        type="text"
        id="website_url"
        name="website_url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
      />
    </div>
  );
};

export default Honeypot;
