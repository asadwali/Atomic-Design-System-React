import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import Swal from 'sweetalert2';


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import DataTableGrid from "../../molecules/DataTableGrid/DataTableGrid";
import CheckBox from "../../molecules/CheckBox/CheckBox";
import Badge from "../../atoms/Badges/Badges";
import Tooltip from "../../molecules/Tooltips/Tooltips";

const DataTableGridTemplate = () => {


    const users = [
        {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Software Engineer",
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            role2: "Software Engineer",
            role3: "Software Engineer",
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
            accessorKey: "role2",
            id: "role2",
            header: "Role 2",
            size: 150,
            cell: ({ row }) => row.getValue("role2")
        },
        {
            accessorKey: "role3",
            id: "role3",
            header: "Role 3",
            size: 150,
            cell: ({ row }) => row.getValue("role3")
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
            size: 60,
            cell: ({ row }) => row.getValue("leaves")
        },
        {
            accessorKey: "missingPunches",
            id: "missingPunches",
            size: 140,
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
            size: 80,
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
                            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
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
    return (
        <div className="p-6">
            <DataTableGrid
                title="Data Table Grid"
                description="Browse, filter, and manage user information"
                data={users}
                columns={columns2}
                filterColumnKey={["name", "email", "status"]}
                showFilterInput={true}
                stripedRows={false}
                showFilteration={true}
                leftpinnedColumnCount={2}
                rightPinnedColumnCount={1}
                topPinnedRowCount={0}
                bottomPinnedRowCount={1}
            />
        </div>
    )
}

export default DataTableGridTemplate;