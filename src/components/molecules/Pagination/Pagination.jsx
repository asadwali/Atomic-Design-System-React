import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const colorStyles = {
  primary: {
    active: 'bg-violet-100 text-violet-600',
    default: 'hover:bg-violet-50 text-gray-500',
  }
};

const arrowButtonStyles = {
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  'arrows-only': 'text-gray-600 hover:bg-gray-100 px-2 py-1',
};

const shapeStyles = {
  square: 'rounded-lg size-10',
  circle: 'rounded-full size-10',
};

const Pagination = ({
  totalPages = 10,
  currentPage = 1,
  onPageChange,
  color = 'primary',
  arrowStyle = 'ghost',
  shape = 'square', // 'square' | 'circle'
  prevLabel = 'Previous',
  nextLabel = 'Next',
  className = '',
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const leftCount = 3;
    const rightCount = 3;

    const showLeftDots = currentPage > leftCount;
    const showRightDots = currentPage < totalPages - rightCount + 1;

    const startPages = [1, 2, 3].filter(p => p <= totalPages);
    const endPages = [totalPages - 2, totalPages - 1, totalPages].filter(p => p > 3);

    if (showLeftDots && showRightDots) {
      pages.push(...startPages, '...', currentPage, '...', ...endPages);
    } else if (!showLeftDots && showRightDots) {
      const mid = [];
      for (let i = 1; i <= Math.min(totalPages, 3); i++) mid.push(i);
      pages.push(...mid, '...', ...endPages);
    } else if (showLeftDots && !showRightDots) {
      const mid = [];
      for (let i = totalPages - 4; i <= totalPages; i++) {
        if (i > 0) mid.push(i);
      }
      pages.push(...startPages, '...', ...mid);
    } else {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    }

    return [...new Set(pages)];
  };

  const goToPage = (page) => {
    if (page === '...') return;
    onPageChange(page);
  };

  const { active, default: defaultBtn } = colorStyles[color];
  const arrowBtn = arrowButtonStyles[arrowStyle];
  const shapeClass = shapeStyles[shape] || shapeStyles.square;

  return (
    <div className={clsx('grid grid-cols-3 items-center w-full mx-auto', className)}>
      {/* Previous */}
      <div className="flex justify-start">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={clsx(
            'rounded px-3 py-1 text-sm disabled:opacity-40 flex items-center gap-1',
            arrowBtn
          )}
        >
          <ArrowLeft size={16} />
          {arrowStyle !== 'arrows-only' && prevLabel}
        </button>
      </div>

      {/* Page Numbers */}
      <div className="flex justify-center gap-1 flex-wrap">
        {getPageNumbers().map((page, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(page)}
            disabled={page === '...'}
            className={clsx(
              'text-sm font-medium flex items-center justify-center',
              shapeClass,
              page === currentPage ? active : defaultBtn,
              page === '...' && 'cursor-default text-primary'
            )}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <div className="flex justify-end">
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={clsx(
            'rounded px-3 py-1 text-sm disabled:opacity-40 flex items-center gap-1',
            arrowBtn
          )}
        >
          {arrowStyle !== 'arrows-only' && nextLabel}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
