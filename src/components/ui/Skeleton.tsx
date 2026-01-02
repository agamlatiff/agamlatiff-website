import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse'
}) => {
  const baseClasses = 'bg-slate-200 dark:bg-slate-800';

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  };

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const style: React.CSSProperties = {
    width: width,
    height: height
  };

  return (
    <div
      className={`${baseClasses} ${animationClasses[animation]} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

// Pre-built skeleton layouts
export const ProjectDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 md:pt-24">
      {/* Back button skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Skeleton width={150} height={24} />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Gallery Skeleton */}
          <div className="space-y-4">
            <Skeleton className="w-full aspect-video" />
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <Skeleton key={i} className="w-20 h-14 flex-shrink-0" />
              ))}
            </div>
          </div>

          {/* Project Info Skeleton */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex gap-3">
              <Skeleton width={120} height={32} className="rounded-full" />
              <Skeleton width={100} height={32} className="rounded-full" />
            </div>

            {/* Title */}
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-3/4 h-12" />

            {/* Meta */}
            <div className="flex gap-4">
              <Skeleton width={120} height={20} />
              <Skeleton width={120} height={20} />
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <Skeleton width={80} height={16} />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <Skeleton key={i} width={80} height={28} className="rounded-full" />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Skeleton width={160} height={48} className="rounded-xl" />
              <Skeleton width={160} height={48} className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section Skeleton */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Skeleton width={200} height={32} className="mb-8" />
          <div className="space-y-4">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-3/4 h-6" />
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-5/6 h-6" />
          </div>
        </div>
      </section>
    </div>
  );
};

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800">
      <Skeleton className="w-full aspect-[4/3]" />
      <div className="p-8 space-y-4">
        <Skeleton width={100} height={24} className="rounded-lg" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <div className="flex justify-between pt-4">
          <Skeleton width={80} height={16} />
          <Skeleton width={100} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
