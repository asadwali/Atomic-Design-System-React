import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const arrowVariants = {
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  'arrows-only': 'text-gray-600 hover:bg-gray-100 px-2 py-2 border rounded-sm',
};

const PaginationInfoBar = ({
  totalPages = 1,
  currentPage = 1,
  onPageChange,
  variant = 'ghost',         // 'ghost' | 'outline' | 'arrows-only'
  layout = 'top',            // 'top' | 'center' | 'split' | 'mobile'
  prevLabel = 'Previous',
  nextLabel = 'Next',
  className = '',
  ...props
}) => {
  const arrowStyle = arrowVariants[variant];

  const renderButton = (type) => (
    <button
      onClick={() => {
        if (type === 'prev') onPageChange(Math.max(1, currentPage - 1));
        if (type === 'next') onPageChange(Math.min(totalPages, currentPage + 1));
      }}
      disabled={(type === 'prev' && currentPage === 1) || (type === 'next' && currentPage === totalPages)}
      className={clsx(
        'text-sm px-3 py-1 rounded disabled:opacity-40 flex items-center gap-1',
        arrowStyle
      )}
    >
      {variant === 'arrows-only' ? (
        type === 'prev' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />
      ) : (
        <>
          {type === 'prev' && <ArrowLeft size={16} />}
          {type === 'prev' ? prevLabel : nextLabel}
          {type === 'next' && <ArrowRight size={16} />}
        </>
      )}
    </button>
  );

  const renderLayout = () => {
    switch (layout) {
      case 'top':
        return (
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
            <div className="text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex gap-2">
              {renderButton('prev')}
              {renderButton('next')}
            </div>
          </div>
        );

      case 'center':
        return (
          <div className="flex flex-col-reverse gap-2 sm:flex-row justify-between items-center">
            <div className="flex gap-2">
              {renderButton('prev')}
              {renderButton('next')}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="grid grid-cols-3 items-center">
            <div className="flex justify-start">{renderButton('prev')}</div>
            <div className="flex justify-center text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex justify-end">{renderButton('next')}</div>
          </div>
        );

      case 'mobile':
        return (
          <div className="flex items-center justify-between w-full">
            {renderButton('prev')}
            <div className="text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            {renderButton('next')}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={clsx('w-full', className)} {...props}>
      {renderLayout()}
    </div>
  );
};

export default PaginationInfoBar;
