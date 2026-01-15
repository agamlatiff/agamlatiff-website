'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
