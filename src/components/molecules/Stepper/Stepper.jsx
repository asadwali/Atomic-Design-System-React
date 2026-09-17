import { CheckCircleIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

const Stepper = ({ steps }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="bg-white divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className="relative md:flex md:flex-1">
            <a
              href={step.href}
              className={`group flex w-full items-start px-6 py-4 transition-colors
                ${step.status === 'done' ? 'bg-white' : ''}
                ${step.status === 'active' ? 'bg-white' : ''}
              `}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">

                  <span
                    className={`text-sm font-medium ${step.status === 'done'
                        ? 'text-gray'
                        : step.status === 'active'
                          ? 'text-violet-600'
                          : 'text-gray-500 group-hover:text-gray-900'
                      }`}
                  >
                    {step.label}
                  </span>
                  {step.status === 'done' && (
                    <CheckCircleIcon className="size-5 text-gray" aria-hidden="true" />
                  )}
                </div>
                <p
                  className={`mt-1 text-sm ${step.status === 'done'
                      ? 'text-gray'
                      : step.status === 'active'
                        ? 'text-violet-500'
                        : 'text-gray-500 group-hover:text-gray-700'
                    }`}
                >
                  {step.description}
                </p>
              </div>
            </a>

            {stepIdx !== steps.length - 1 && (
              <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                <svg
                  className="h-full w-full text-gray-300"
                  viewBox="0 0 22 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vectorEffect="non-scaling-stroke"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Optional: Add PropTypes for validation
Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      href: PropTypes.string,
      status: PropTypes.oneOf(['done', 'active', 'inactive']),
    })
  ).isRequired,
}

export default Stepper
