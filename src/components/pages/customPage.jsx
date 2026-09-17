import { Edit, Trash2 } from 'lucide-react';
import '../../index.css';
import Badge from '../atoms/Badges/Badges';
import AvatarWithInfo from '../molecules/AvatarWithInfo/AvatarWithInfo';
import DataTable from '../molecules/DataTables/DataTables';
import DataTableGrid from '../molecules/DataTableGrid/DataTableGrid';
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import CheckBox from '../molecules/CheckBox/CheckBox';
import Tooltip from '../molecules/Tooltips/Tooltips';
import { generateTableColumns } from '../molecules/DataTableGrid/ItemsList';
import Swal from 'sweetalert2';
import { MoreVertical } from "lucide-react";
import { motion } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
// import Button from '../atoms/Button/Button';

const CustomPage = () => {

    // const data = [
    //     { name: "Asad Wali", status: "active", role: "Software Engineer", email: "asadwali@bitlogix.com", teams: ["Label 1", "Label 2", "Label 3", "Label 4"], },
    //     { name: "Arshad", status: "active", role: "Head of EVP", email: "moazzam@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Bilal", status: "active", role: "QA Analyst", email: "bilal@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Waseem", status: "active", role: "Sr. QA Analyst", email: "waseem@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Hamza", status: "active", role: "QA Analyst", email: "humza@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Malik", status: "active", role: "Sr. Back End Developer", email: "malik@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Shahbaz", status: "active", role: "Front End Developer", email: "shahbaz@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Ahsan", status: "active", role: "Sr. Front End Developer", email: "ahsan@bitlogix.com", teams: ["Label A", "Label B"], },
    //     { name: "Sidra", status: "active", role: "Sr. Front End Developer", email: "sidra@bitlogix.com", teams: ["Label A", "Label B"], },
    // ];

    // const columns = [
    //     {
    //         header: "Name",
    //         accessor: "name",
    //         render: (item) => (
    //             <AvatarWithInfo
    //                 size="sm"
    //                 type="notification"
    //                 imageUrl="https://i.pravatar.cc/300"
    //                 userName={item.name}
    //                 email={item.email}
    //             />
    //         ),
    //     },
    //     {
    //         header: "Status",
    //         accessor: "status",
    //         render: (item) => (
    //             <Badge variant="primary" size="sm" dotLeft>{item.status}</Badge>
    //         ),
    //     },
    //     { header: "Role", accessor: "role" },
    //     { header: "Email Address", accessor: "email" },
    //     {
    //         header: "Teams",
    //         accessor: "teams",
    //         render: (item) => {
    //             const teamList = item.teams || [];
    //             const visibleTeams = teamList.slice(0, 3);
    //             const hiddenCount = teamList.length - visibleTeams.length;

    //             return (
    //                 <div className="flex flex-wrap gap-1">
    //                     {visibleTeams.map((team, idx) => (
    //                         <Badge key={idx} variant="primary" size="sm">
    //                             {team}
    //                         </Badge>
    //                     ))}
    //                     {hiddenCount > 0 && (
    //                         <Badge variant="gray" size="sm">
    //                             +{hiddenCount}
    //                         </Badge>
    //                     )}
    //                 </div>
    //             );
    //         },
    //     },
    //     {
    //         header: "",
    //         accessor: "actions",
    //         render: (item) => (
    //             <div className="flex items-center gap-2">
    //                 <button className="p-1 hover:text-red-600" onClick={() => console.log("Delete", item)}><Trash2 size={16} /></button>
    //                 <button className="p-1 hover:text-green-600" onClick={() => console.log("Edit", item)}><Edit size={16} /></button>
    //             </div>
    //         )
    //     }
    // ];


    const handleClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        });
    };

    const users = [
        {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Active",
            leaves: 5,
            missingPunches: 0,
            teams: ["HR", "New York"],
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Vacation",
            leaves: 5,
            missingPunches: 0,
            teams: ["IT", "San Francisco"],
        },
        {
            id: "3",
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Other Leave",
            leaves: 5,
            missingPunches: 0,
            teams: ["Finance", "Chicago", "IT", "San Francisco"],
        },
        {
            id: "4",
            name: "Alice Brown",
            email: "alice.brown@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Left",
            leaves: 5,
            missingPunches: 0,
            teams: ["Marketing", "Denver"],
        },
        {
            id: "5",
            name: "David Wilson",
            email: "david.wilson@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Active",
            leaves: 5,
            missingPunches: 0,
            teams: ["Sales", "Houston"],
        },
        {
            id: "6",
            name: "Emily Taylor",
            email: "emily.taylor@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Vacation",
            leaves: 5,
            missingPunches: 0,
            teams: ["Engineering", "Denver"],
        },
        {
            id: "7",
            name: "Michael Lee",
            email: "michael.lee@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Other Leave",
            leaves: 5,
            missingPunches: 0,
            teams: ["IT", "Seattle"],
        },
        {
            id: "8",
            name: "Olivia Hernandez",
            email: "olivia.hernandez@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Left",
            leaves: 5,
            missingPunches: 0,
            teams: ["Finance", "Denver"],
        },
        {
            id: "9",
            name: "Sophia Martinez",
            email: "sophia.martinez@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Active",
            leaves: 5,
            missingPunches: 0,
            teams: ["Marketing", "Atlanta"],
        },
        {
            id: "10",
            name: "James Adams",
            email: "james.adams@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Vacation",
            leaves: 5,
            missingPunches: 0,
            teams: ["Sales", "New York"],
        },
        {
            id: "11",
            name: "James Frost",
            email: "james.frost@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Active",
            leaves: 5,
            missingPunches: 0,
            teams: ["Finance", "Denver"],
        },
        {
            id: "12",
            name: "Lucy Heinz",
            email: "lucy.heinz@example.com",
            role: "Software Engineer",
            experience: "5 Years",
            amount: 1500,
            status: "Active",
            leaves: 5,
            missingPunches: 0,
            teams: ["IT", "New York"],
        },
    ];

    const columns2 = [

        {
            id: "select",
            size: 60,
            header: ({ table }) => (
                <CheckBox
                    size="sm"
                    indeterminate={table.getIsSomePageRowsSelected()}
                    checked={table.getIsAllPageRowsSelected()}
                    onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
                />
            ),
            cell: ({ row }) => (
                <CheckBox
                    size="sm"
                    checked={row.getIsSelected()}
                    onChange={(e) => row.toggleSelected(e.target.checked)}
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "name",
            accessorKey: "name",
            header: "Name",
            size: 200,
            cell: ({ row }) => {
                const name = row.original.name;
                const email = row.original.email;
                const badge = row.original.badge;

                return (
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">{name}</span>
                            {badge && <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded">{badge}</span>}
                        </div>
                        <span className="text-xs text-muted-foreground">{email}</span>
                    </div>
                );
            },
        },
        {
            accessorKey: "email",
            id: "email",
            size: 220,
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <span>{row.getValue("email")}</span>,
        },
        {
            accessorKey: "role",
            id: "role",
            header: "Role",
            size: 150,
            cell: ({ row }) => row.getValue("role")
        },
        {
            accessorKey: "experience",
            id: "experience",
            header: "Experience",
            size: 100,
            cell: ({ row }) => row.getValue("experience")
        },
        {
            accessorKey: "amount",
            id: "amount",
            header: "Amount",
            size: 100,
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("amount"))
                return <div>${amount.toFixed(2)}</div>
            },
        },
        {
            accessorKey: "status",
            id: "status",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant="primary" dotLeft size='md'>
                    {row.getValue("status")}
                </Badge>
            )
        },
        {
            accessorKey: "leaves",
            id: "leaves",
            header: "Leaves",
            size: 30,
            cell: ({ row }) => row.getValue("leaves")
        },
        {
            accessorKey: "missingPunches",
            id: "missingPunches",
            size: 50,
            header: "Missing Punches",
            cell: ({ row }) => row.getValue("missingPunches")
        },
        {
            id: "teams",
            header: "Teams",
            accessorKey: "teams",
            size: 240,
            cell: ({ row }) => {
                const teamList = row.getValue("teams") || [];
                const visibleTeams = teamList.slice(0, 3);
                const hiddenTeams = teamList.slice(3); // hidden ones
                const hiddenCount = hiddenTeams.length;

                return (
                    <div className="flex gap-1">
                        {visibleTeams.map((team, idx) => (
                            <Badge key={idx} variant="primary" size="sm">
                                {team}
                            </Badge>
                        ))}

                        {hiddenCount > 0 && (
                            <Tooltip
                                label={hiddenTeams.join(", ")} // comma-separated names
                                variant="tertiary"
                                arrow="left"
                            >
                                <Badge variant="gray" size="sm">
                                    +{hiddenCount}
                                </Badge>
                            </Tooltip>
                        )}
                    </div>
                );
            },
        },
        {
            id: "actions",
            header: "",
            size: 30,
            minSize: 30,
            cell: ({ row }) => {
                const employee = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="size-8 p-0 cursor-pointer">
                                <MoreVertical className="size-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="cursor-pointer" onClick={handleClick}>
                                View employee
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={handleClick}>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={handleClick}>
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },

    ]



    const dynamicColumns = [
        {
            id: "name",
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => {
                const name = row.original.name;
                const email = row.original.email;
                return (
                    <div className="flex flex-col space-y-1">
                        <span className="font-medium">{name}</span>
                        <span className="text-xs text-muted-foreground">{email}</span>
                    </div>
                );
            },
        },
        {
            accessorKey: "email",
            id: "email",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Email <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <span>{row.getValue("email")}</span>,
        },
        {
            accessorKey: "status",
            id: "status",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant="primary" dotLeft size="md">
                    {row.getValue("status")}
                </Badge>
            ),
        },
        {
            id: "teams",
            header: "Teams",
            accessorKey: "teams",
            cell: ({ row }) => {
                const teamList = row.getValue("teams") || [];
                const visibleTeams = teamList.slice(0, 3);
                const hiddenTeams = teamList.slice(3);
                const hiddenCount = hiddenTeams.length;

                return (
                    <div className="flex flex-wrap gap-1">
                        {visibleTeams.map((team, idx) => (
                            <Badge key={idx} variant="primary" size="sm">
                                {team}
                            </Badge>
                        ))}
                        {hiddenCount > 0 && (
                            <Tooltip
                                label={hiddenTeams.join(", ")}
                                variant="tertiary"
                                arrow="bottom-center"
                            >
                                <Badge variant="gray" size="sm">
                                    +{hiddenCount}
                                </Badge>
                            </Tooltip>
                        )}
                    </div>
                );
            },
        },
    ];

    const columns = generateTableColumns(dynamicColumns);

    return (
        <>


            {/* <div className="p-6">
                <DataTable
                    title="Data Table"
                    description="These companies have purchased in the last 12 months."
                    items={data}
                    columns={columns}
                    selectable={true}
                    pageSize={5}
                    striped={true}
                />
            </div> */}

            {/* <div className="p-6">
                <DataTableGrid
                    title="Data Table Grid"
                    description="Browse, filter, and manage user information"
                    data={users}
                    columns={columns2}
                    filterColumnKey={["name", "email", "status"]}
                    // enableRowPinning={true}
                    // pinnedColumns={{ left: ['select', 'email'], right: ['actions'] }}
                    // pinnedRows={{ top: ['1'], bottom: [1] }}
                    // enableColumnPinning={true}
                    showFilterInput={true}
                    showColumnToggle={true}
                    selectableRows={true}
                    stripedRows={false}
                    showFilteration={true}
                    pinnedColumnCount={2}
                />
            </div> */}

            <div className="flex items-center justify-center p-6">
                <div className="text-center relative">
                    {/* 👋 Animated hand in top-right */}
                    <motion.div
                        className=" text-4xl"
                        animate={{ rotate: [0, 20, -10, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                        👋
                    </motion.div>

                    <h1 className="text-3xl font-bold mb-4 dark:text-white">
                        Welcome To Atomic Design System
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                        Atomic Design is a methodology for creating consistent, scalable, and reusable design systems.
                        It breaks interfaces down into smaller building blocks, which can be combined to form complex UIs.
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto w-fit text-gray-700 dark:text-gray-400">
                        <li>Atoms – the basic building blocks (buttons, inputs, labels)</li>
                        <li>Molecules – combinations of atoms that work together</li>
                        <li>Organisms – groups of molecules and atoms forming sections</li>
                        <li>Templates – page-level layouts</li>
                        <li>Pages – templates with real content</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default CustomPage;