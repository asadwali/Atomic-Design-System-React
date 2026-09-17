// import { Button } from "@/components/ui/button";
// import { ArrowUpDown, MoreVertical } from "lucide-react";
// import CheckBox from "../CheckBox/CheckBox";
// import Badge from "../../atoms/Badges/Badges";
// import Tooltip from "../Tooltips/Tooltips";

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";



// export const employeeColumns = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <CheckBox
//         size="sm"
//         indeterminate={table.getIsSomePageRowsSelected()}
//         checked={table.getIsAllPageRowsSelected()}
//         onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
//       />
//     ),
//     cell: ({ row }) => (
//       <CheckBox
//         size="sm"
//         checked={row.getIsSelected()}
//         onChange={(e) => row.toggleSelected(e.target.checked)}
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     id: "name",
//     accessorKey: "name",
//     header: "Name",
//     size: 200,
//     cell: ({ row }) => {
//       const name = row.original.name;
//       const email = row.original.email;
//       return (
//         <div className="flex flex-col space-y-1">
//           <span className="font-medium">{name}</span>
//           <span className="text-xs text-muted-foreground">{email}</span>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "email",
//     id: "email",
//     size: 100,
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() =>
//           column.toggleSorting(column.getIsSorted() === "asc")
//         }
//       >
//         Email <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <span>{row.getValue("email")}</span>,
//   },
//   {
//     accessorKey: "status",
//     id: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       const status = row.getValue("status");
//       return (
//         <Badge variant="primary" dotLeft size="md">
//           {status}
//         </Badge>
//       );
//     },
//   },
//   {
//     id: "teams",
//     header: "Teams",
//     accessorKey: "teams",
//     cell: ({ row }) => {
//       const teamList = row.getValue("teams") || [];
//       const visibleTeams = teamList.slice(0, 3);
//       const hiddenTeams = teamList.slice(3);
//       const hiddenCount = hiddenTeams.length;

//       return (
//         <div className="flex flex-wrap gap-1">
//           {visibleTeams.map((team, idx) => (
//             <Badge key={idx} variant="primary" size="sm">
//               {team}
//             </Badge>
//           ))}
//           {hiddenCount > 0 && (
//             <Tooltip
//               label={hiddenTeams.join(", ")}
//               variant="tertiary"
//               arrow="bottom-center"
//             >
//               <Badge variant="gray" size="sm">
//                 +{hiddenCount}
//               </Badge>
//             </Tooltip>
//           )}
//         </div>
//       );
//     },
//   },
//   {
//     id: "actions",
//     header: "",
//     cell: ({ row }) => {
//       const employee = row.original;
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="size-8 p-0">
//               <MoreVertical className="size-5" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => {
//                 navigator.clipboard.writeText(employee.id);
//               }}
//             >
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem onClick={() => console.log("View", employee)}>
//               View employee
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => console.log("Edit", employee)}>
//               Edit
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => console.log("Delete", employee)}>
//               Delete
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
// ];


// utils/columnBuilder.ts
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import CheckBox from "../CheckBox/CheckBox";

// Function to generate columns
export const generateTableColumns = (dynamicColumns = []) => {
    const fixedColumns = [
        {
            id: "select",
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
        ...dynamicColumns,
        {
            id: "actions",
            header: "",
            cell: ({ row }) => {
                const employee = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="size-8 p-0">
                                <MoreVertical className="size-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => console.log("View", employee)}>
                                View employee
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => console.log("Edit", employee)}>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => console.log("Delete", employee)}>
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return fixedColumns;
};
