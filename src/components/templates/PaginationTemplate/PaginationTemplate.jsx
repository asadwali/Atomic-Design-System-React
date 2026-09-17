import { useState } from "react";
import Pagination from "../../molecules/Pagination/Pagination";
import PaginationGroup from "../../molecules/Pagination/PaginationGroup";
import PaginationInfoBar from "../../molecules/Pagination/PaginationInfoBar";

const PaginationTemplate = () => {
    const [page, setPage] = useState(1);

    return (
        <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

            <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Pagination Full Page</h2>

                <Pagination
                    totalPages={10}
                    currentPage={page}
                    onPageChange={setPage}
                    color="primary"
                    arrowStyle="ghost"
                    shape="square"
                    prevLabel="Back"
                    nextLabel="Forward"
                />

                <Pagination
                    totalPages={10}
                    currentPage={page}
                    onPageChange={setPage}
                    color="primary"
                    arrowStyle="ghost"
                    shape="circle"
                />

                <Pagination
                    totalPages={20}
                    currentPage={page}
                    onPageChange={setPage}
                    color="primary"
                    arrowStyle="outline"
                />

                <Pagination
                    totalPages={20}
                    currentPage={page}
                    onPageChange={setPage}
                    color="primary"
                    arrowStyle="outline"
                    shape="circle"
                />

                <Pagination
                    totalPages={25}
                    currentPage={page}
                    onPageChange={setPage}
                    color="primary"
                    arrowStyle="arrows-only"
                />

            </div>

            <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Pagination Info Bar Full Page</h2>

                <PaginationInfoBar
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                    layout="top"
                    variant="outline"
                />

                <PaginationInfoBar
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                    layout="center"
                    variant="outline"
                />

                <PaginationInfoBar
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                    layout="split"          // 'top', 'center', 'split', 'mobile'
                    variant="outline"       // 'ghost', 'outline', 'arrows-only'
                />

            </div>

            <div className="col-span-4 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Pagination Info Bar Mobile View</h2>

                <PaginationInfoBar
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                    layout="mobile"
                    variant="arrows-only"
                />
            </div>

            <div className="col-span-12 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                <h2 className="text-primary font-bold text-lg">Pagination Group</h2>
                <PaginationGroup
                    totalPages={10}
                    currentPage={page}
                    onPageChange={setPage}
                    alignment="right"
                    buttonStyle="text+arrow" // text | arrow | text+arrow
                    prevLabel="Back"
                    nextLabel="Forward"
                />

                <PaginationGroup
                    totalPages={10}
                    currentPage={page}
                    onPageChange={setPage}
                    alignment="left"
                    buttonStyle="text+arrow" // text | arrow | text+arrow
                />

                <PaginationGroup
                    totalPages={10}
                    currentPage={page}
                    onPageChange={setPage}
                    alignment="center"
                    buttonStyle="text+arrow" // text | arrow | text+arrow
                />
            </div>



        </div>
    )
}

export default PaginationTemplate;