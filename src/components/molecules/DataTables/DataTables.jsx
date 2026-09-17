import { useLayoutEffect, useRef, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import PaginationInfoBar from '../Pagination/PaginationInfoBar';
import CheckBox from '../CheckBox/CheckBox';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const DataTable = ({
    items = [],
    columns = [],
    selectable = false,
    pageSize = 5,
    title = '',
    description = '',
    actionColumn = null,
    striped = false,
}) => {
    const checkbox = useRef();
    const [selectedItems, setSelectedItems] = useState([]);
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [page, setPage] = useState(1);

    useLayoutEffect(() => {
        if (!selectable) return;
        const isIndeterminate =
            selectedItems.length > 0 && selectedItems.length < items.length;
        setChecked(selectedItems.length === items.length);
        setIndeterminate(isIndeterminate);
        if (checkbox.current) checkbox.current.indeterminate = isIndeterminate;
    }, [selectedItems, items.length, selectable]);

    const toggleAll = () => {
        if (checked || indeterminate) {
            setSelectedItems([]);
        } else {
            setSelectedItems(items);
        }
        setChecked(!checked && !indeterminate);
        setIndeterminate(false);
    };

    const paginatedItems = items.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    const renderActions = (item) => {
        if (!actionColumn) return null;

        const { variant = 'icon', getActions } = actionColumn;
        const actions = getActions(item); // Expects an array of { label, icon, onClick }

        if (variant === 'menu') {
            return (
                <div className="relative group">
                    <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                    </button>
                    {/* Optional dropdown: for simplicity, just tooltip-style */}
                    <div className="absolute hidden group-hover:block bg-white shadow-lg border mt-2 p-2 rounded text-sm z-10">
                        {actions.map((action, i) => (
                            <button
                                key={i}
                                onClick={action.onClick}
                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="flex space-x-2">
                {actions.map((action, i) => (
                    <button
                        key={i}
                        onClick={action.onClick}
                        className={classNames(
                            'inline-flex items-center px-2 py-1 rounded text-sm',
                            variant === 'ghost'
                                ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                                : 'text-gray-500 hover:text-gray-800'
                        )}
                    >
                        {action.icon && <span className="mr-1">{action.icon}</span>}
                        {variant === 'ghost' && action.label}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div>
            <div className="sm:flex sm:items-center bg-white px-6 py-5 rounded-t-xl">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold leading-6 text-gray-900">
                        {title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">{description}</p>
                </div>
            </div>

            <div className="flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative overflow-x-auto max-w-full">
                            <table className="min-w-full table-fixed divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        {selectable && (
                                            <th className="relative px-7 sm:w-12 sm:px-6">
                                                <CheckBox
                                                    type="checkbox"
                                                    className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    ref={checkbox}
                                                    checked={checked}
                                                    indeterminate={indeterminate}
                                                    onChange={toggleAll}
                                                    size="sm"
                                                />
                                            </th>
                                        )}
                                        {columns.map((col) => (
                                            <th
                                                key={col.accessor}
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                {col.header}
                                            </th>
                                        ))}
                                        {actionColumn && (
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                {actionColumn.header || 'Actions'}
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {paginatedItems.map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className={classNames(
                                                selectedItems.includes(item) ? 'bg-gray-100' : '',
                                                striped ? (idx % 2 === 1 ? 'bg-gray-50' : 'bg-white') : 'bg-white'
                                            )}
                                        >
                                            {selectable && (
                                                <td className="relative px-7 sm:w-12 sm:px-6">
                                                    <CheckBox
                                                        className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-indigo-600"
                                                        checked={selectedItems.includes(item)}
                                                        size="sm"
                                                        onChange={(e) =>
                                                            setSelectedItems((prev) =>
                                                                e.target.checked
                                                                    ? [...prev, item]
                                                                    : prev.filter((u) => u !== item)
                                                            )
                                                        }
                                                    />

                                                </td>
                                            )}
                                            {columns.map((col) => (
                                                <td
                                                    key={col.accessor}
                                                    className="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
                                                >
                                                    {col.render
                                                        ? col.render(item)
                                                        : item[col.accessor]}
                                                </td>
                                            ))}
                                            {actionColumn && (
                                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {renderActions(item)}
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center bg-white justify-between rounded-b-xl border-t border-gray-200 px-4 py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:justify-end space-x-2">
                                <Pagination
                                    totalPages={Math.ceil(items.length / pageSize)}
                                    currentPage={page}
                                    onPageChange={(newPage) => setPage(newPage)}
                                    color="primary"
                                    arrowStyle="outline"
                                    shape="square"

                                />
                                {/* <PaginationInfoBar

                                    currentPage={page}
                                    totalPages={Math.ceil(items.length / pageSize)}
                                    onPageChange={(newPage) => setPage(newPage)}
                                    layout="mobile"
                                    variant="arrows-only"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
