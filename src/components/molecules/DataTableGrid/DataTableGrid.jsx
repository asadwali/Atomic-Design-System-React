import { cn } from "@/lib/utils";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";



import { SearchX } from "lucide-react";
import Button from "../../atoms/Button/Button";
import Pagination from "../Pagination/Pagination";
import FilterPanel from "./Filtration";

const DataTableGrid = ({
    title = "Data Table",
    description = "Manage and view your records below.",
    columns,
    data,
    filterColumnKey = [],
    showFilterInput = true,
    showFilteration = true,
    stripedRows = false,
    enableRowPinning = false,
    leftpinnedColumnCount = 0,
    rightPinnedColumnCount = 0,
    pinnedRows = { top: [], bottom: [] },
    topPinnedRowCount = 0,
    bottomPinnedRowCount = 0,
}) => {
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})
    const topPinned = pinnedRows?.top || [];
    const bottomPinned = pinnedRows?.bottom || [];
    const [globalFilter, setGlobalFilter] = useState("")

    const topPinnedIds = data.slice(0, topPinnedRowCount).map((r) => r.id || r.email);
    const bottomPinnedIds = data.slice(-bottomPinnedRowCount).map((r) => r.id || r.email);



    const [rowPinning, setRowPinning] = useState({
        top: topPinnedIds,
        bottom: bottomPinnedIds,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            rowPinning: {
                top: data.slice(0, topPinnedRowCount).map((row, idx) => `${idx}`), // first N rows
                bottom: data
                    .slice(-bottomPinnedRowCount)
                    .map((row, idx) => `${data.length - bottomPinnedRowCount + idx}`), // last N rows
            },
        },




        enableRowPinning,
        globalFilterFn: (row, columnId, filterValue) => {
            return String(row.getValue(columnId))
                .toLowerCase()
                .includes(String(filterValue).toLowerCase())
        },
        onGlobalFilterChange: setGlobalFilter,

        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            rowPinning,
            globalFilter
        },
        onRowPinningChange: setRowPinning,
        getRowId: (row) => row.id || row.email || JSON.stringify(row),
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        filterFns: {
            multi: (row, _, value) => {
                return filterColumnKey.some(key => {
                    const cellValue = row.getValue(key)
                    return String(cellValue || "")
                        .toLowerCase()
                        .includes(String(value).toLowerCase())
                })
            }
        }
    })

    const [page, setPage] = useState(1);
    const handlePageChange = (newPage) => {
        setPage(newPage);
        table.setPageIndex(newPage - 1);
    };
    const totalPages = table.getPageCount();

    const getPinnedStyle = (colIndex) => {
        let headerGroups = table.getHeaderGroups()[0].headers;
        const totalCols = headerGroups.length;

        // LEFT pinning
        if (colIndex < leftpinnedColumnCount) {
            let leftOffset = 0;
            for (let i = 0; i < colIndex; i++) {
                leftOffset += headerGroups[i].getSize();
            }
            const currentWidth = headerGroups[colIndex].getSize();

            return {
                position: 'sticky',
                left: `${leftOffset}px`,
                width: `${currentWidth}px`,
                minWidth: `${currentWidth}px`,
                maxWidth: `${currentWidth}px`,
                background: 'white',
                zIndex: 3,
            };
        }

        // RIGHT pinning
        if (colIndex >= totalCols - rightPinnedColumnCount) {
            let rightOffset = 0;
            for (let i = totalCols - 1; i > colIndex; i--) {
                rightOffset += headerGroups[i].getSize();
            }
            const currentWidth = headerGroups[colIndex].getSize();

            return {
                position: 'sticky',
                right: `${rightOffset}px`,
                width: `${currentWidth}px`,
                minWidth: `${currentWidth}px`,
                maxWidth: `${currentWidth}px`,
                background: 'white',
                zIndex: 3,
            };
        }

        return {};
    };





    return (
        <div className="w-full bg-white rounded-xl">
            {/* ---------- Header Title + Description ---------- */}
            <div className="mb-4 px-6 pt-5">
                <h1 className="h1">{title}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center px-6 py-4 gap-2">

                {/* Left Side: Search input */}
                <div className="flex items-center gap-2 flex-1">
                    {showFilterInput && filterColumnKey.length > 0 && (
                        <Input
                            placeholder={`Filter by ${filterColumnKey.join(", ")}...`}
                            value={globalFilter ?? ""}
                            onChange={(event) => setGlobalFilter(event.target.value)}
                            className="w-full max-w-sm"
                        />
                    )}
                </div>

                {/* Right Side: Rows per page + Filter button */}
                <div className="flex items-center gap-4 ml-auto">
                    <div className="flex items-center gap-2">
                        <label htmlFor="pageSize" className="text-sm text-gray-600">
                            Rows per page:
                        </label>

                        <Select
                            value={String(table.getState().pagination.pageSize)}
                            onValueChange={(value) => {
                                table.setPageSize(Number(value));
                                setPage(1); // reset to page 1 when page size changes
                            }}
                        >
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="bg-white w-[65px] min-w-[65px]">
                                {[5, 10, 25, 50, 75, 100].map(size => (
                                    <SelectItem key={size} value={String(size)}>
                                        {size}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>


                    {showFilteration && (
                        <FilterPanel
                            onSearch={(filters) => {
                                setGlobalFilter(filters.name || filters.email || filters.status || "");
                            }}
                            onReset={() => {
                                setGlobalFilter("");
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="rounded-md overflow-x-auto bg-white w-full">
                <Table className="w-full">
                    <TableHeader className="bg-white">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="border-b border-gray-200">
                                {headerGroup.headers.map((header, colIndex) => (
                                    <TableHead
                                        key={header.id}
                                        className="px-6 py-3"
                                        style={getPinnedStyle(colIndex)}

                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {/* Top pinned */}
                        {rowPinning.top?.map((rowId) => {
                            const row = table.getRow(rowId);
                            if (!row) return null;
                            return (
                                <TableRow key={row.id} className="bg-gray-100">
                                    {row.getVisibleCells().map((cell, colIndex) => (
                                        <TableCell key={cell.id} style={getPinnedStyle(colIndex)} className="px-6 py-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}

                        {/* Normal rows excluding pinned */}
                        {table
                            .getRowModel()
                            .rows.filter(
                                (row) =>
                                    !rowPinning.top?.includes(row.id) &&
                                    !rowPinning.bottom?.includes(row.id)
                            )
                            .map((row, idx) => (
                                <TableRow
                                    key={row.id}
                                    className={cn(
                                        "border-b border-gray-200",
                                        stripedRows && idx % 2 === 1 ? "bg-gray-50" : ""
                                    )}
                                >
                                    {row.getVisibleCells().map((cell, colIndex) => (
                                        <TableCell key={cell.id} style={getPinnedStyle(colIndex)} className="px-6 py-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}

                        {/* Bottom pinned */}
                        {rowPinning.bottom?.map((rowId) => {
                            const row = table.getRow(rowId);
                            if (!row) return null;
                            return (
                                <TableRow key={row.id} className="bg-gray-100">
                                    {row.getVisibleCells().map((cell, colIndex) => (
                                        <TableCell key={cell.id} style={getPinnedStyle(colIndex)} className="px-6 py-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>



                </Table>
            </div>

            <div className="flex items-center justify-between py-4 px-6 border-t border-gray-200">
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    onPageChange={handlePageChange}
                    color="primary"
                    arrowStyle="outline"
                    shape="square"
                />
            </div>
        </div>
    )
}

export default DataTableGrid
