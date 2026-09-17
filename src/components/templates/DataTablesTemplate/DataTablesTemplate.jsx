import { Edit, Trash2, MoreVertical } from 'lucide-react';
import AvatarWithInfo from '../../molecules/AvatarWithInfo/AvatarWithInfo';
import Badge from '../../atoms/Badges/Badges';
import DataTable from '../../molecules/DataTables/DataTables';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import AvatarGroup from '../../molecules/AvatarGroup/AvatarGroup';
import Button from '../../atoms/Button/Button';


const DataTableTemplates = () => {

    const data = [
        { name: "Asad Wali", status: "active", role: "Software Engineer", email: "asad.wali@ebitlogix.com", teams: ["Label 1", "Label 2", "Label 3", "Label 4"], },
        { name: "Arshad", status: "active", role: "Head of EVP", email: "moazzam@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Bilal", status: "active", role: "QA Analyst", email: "bilal@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Waseem", status: "active", role: "Sr. QA Analyst", email: "waseem@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Hamza", status: "active", role: "QA Analyst", email: "humza@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Malik", status: "active", role: "Sr. Back End Developer", email: "malik@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Shahbaz", status: "active", role: "Front End Developer", email: "shahbaz@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Ahsan", status: "active", role: "Sr. Front End Developer", email: "ahsan@bitlogix.com", teams: ["Label A", "Label B"], },
        { name: "Sidra", status: "active", role: "Sr. Front End Developer", email: "sidra@bitlogix.com", teams: ["Label A", "Label B"], },
    ];

    const columns = [
        {
            header: "Name",
            accessor: "name",
            render: (item) => (
                <AvatarWithInfo
                    size="sm"
                    type="notification"
                    imageUrl="https://i.pravatar.cc/300"
                    userName={item.name}
                    email={item.email}
                />
            ),
        },
        {
            header: "Status",
            accessor: "status",
            render: (item) => (
                <Badge variant="primary" size="sm" dotLeft>{item.status}</Badge>
            ),
        },
        { header: "Role", accessor: "role" },
        { header: "Email Address", accessor: "email" },
        {
            header: "Teams",
            accessor: "teams",
            render: (item) => {
                const teamList = item.teams || [];
                const visibleTeams = teamList.slice(0, 3);
                const hiddenCount = teamList.length - visibleTeams.length;

                return (
                    <div className="flex flex-wrap gap-1">
                        {visibleTeams.map((team, idx) => (
                            <Badge key={idx} variant="primary" size="sm">
                                {team}
                            </Badge>
                        ))}
                        {hiddenCount > 0 && (
                            <Badge variant="gray" size="sm">
                                +{hiddenCount}
                            </Badge>
                        )}
                    </div>
                );
            },
        },
        {
            header: "",
            accessor: "actions",
            render: (item) => (
                <div className="flex items-center gap-2">
                    <button className="p-1 hover:text-red-600" onClick={() => console.log("Delete", item)}><Trash2 size={16} /></button>
                    <button className="p-1 hover:text-green-600" onClick={() => console.log("Edit", item)}><Edit size={16} /></button>
                </div>
            )
        }
    ];


    const data2 = [
        {
            name: "Asad Wali", status: "active", role: "Content curating app", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',

            ], license: 75, email: "user@bitlogix.com",
        },
        {
            name: "Arshad", status: "active", role: "Head of EVP", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',

            ], license: 55, email: "user@bitlogix.com",
        },
        {
            name: "Bilal", status: "active", role: "QA Analyst", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',

            ], license: 79, email: "user@bitlogix.com",
        },
        {
            name: "Waseem", status: "active", role: "Sr. QA Analyst", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',

            ], license: 75, email: "user@bitlogix.com",
        },
        {
            name: "Hamza", status: "active", role: "QA Analyst", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',


            ], license: 25, email: "user@bitlogix.com",
        },
        {
            name: "Malik", status: "active", role: "Sr. Back End Developer", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',

            ], license: 95, email: "user@bitlogix.com",
        },
        {
            name: "Shahbaz", status: "active", role: "Front End Developer", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',


            ], license: 45, email: "user@bitlogix.com",
        },
        {
            name: "Ahsan", status: "active", role: "Sr. Front End Developer", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',



            ], license: 66, email: "user@bitlogix.com",
        },
        {
            name: "Sidra", status: "active", role: "Sr. Front End Developer", imageUrls: [
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',
                'https://i.pravatar.cc/300',


            ], license: 56, email: "user@bitlogix.com",
        },
    ];

    const columns2 = [
        {
            header: "Company",
            accessor: "name",
            render: (item) => (
                <AvatarWithInfo
                    size="sm"
                    type="notification"
                    imageUrl="https://i.pravatar.cc/300"
                    userName={item.name}
                    email={item.email}
                />
            ),
        },
        {
            header: "Status",
            accessor: "status",
            render: (item) => (
                <Badge variant="primary" size="sm">{item.status}</Badge>
            ),
        },
        { header: "About", accessor: "role" },
        {
            header: "Users", accessor: "users",
            render: (item) => (
                <AvatarGroup avatars={item.imageUrls} size="sm" maxVisible={10} showMoreButton={true} />
            )
        },
        {
            header: "License use",
            accessor: "license",
            render: (item) => (
                <ProgressBar progress={item.license} variant="primary" showPercentage="inline-right" />
            ),
        },
        {
            header: "",
            accessor: "actions",
            render: (item) => (
                <div className="flex items-center gap-2">
                    <button className="p-1 hover:text-red-600" onClick={() => console.log("more", item)}><MoreVertical size={16} /></button>
                </div>
            )
        }
    ];

    const data3 = [
        { name: "bitlogixuser.pdf", size: "20 KB", uploded: "Jan 4, 2025", email: "asad.wali@ebitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "40 KB", uploded: "Jan 4, 2025", email: "moazzam@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "25 KB", uploded: "Jan 4, 2025", email: "bilal@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "40 KB", uploded: "Jan 4, 2025", email: "waseem@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "30 KB", uploded: "Jan 4, 2025", email: "humza@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "23 KB", uploded: "Jan 4, 2025", email: "malik@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "21 KB", uploded: "Jan 4, 2025", email: "shahbaz@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "52 KB", uploded: "Jan 4, 2025", email: "ahsan@bitlogix.com", updated: "Jan 4, 2025" },
        { name: "bitlogixuser.pdf", size: "33 KB", uploded: "Jan 4, 2025", email: "sidra@bitlogix.com", updated: "Jan 4, 2025" },
    ];

    const columns3 = [
        {
            header: "File Name",
            accessor: "name",
            render: (item) => (
                <AvatarWithInfo
                    size="sm"
                    type="notification"
                    imageUrl="https://i.pravatar.cc/300"
                    userName={item.name}
                    email={item.email}
                />
            ),
        },
        {
            header: "File Size",
            accessor: "size",

        },
        { header: "Date Uploaded", accessor: "uploded" },
        { header: "Last Updated", accessor: "updated" },
        {
            header: "Uploaded By",
            accessor: "name",
        },
        {
            header: "",
            accessor: "actions",
            render: (item) => (
                <div className="flex items-center gap-2">
                   <Button variant="ghost" size="base">Delete</Button>
                    <Button variant="ghost" className='text-primary' size="base">Edit</Button>
                </div>
            )
        }
    ];
    return (
        <>


            <div className="p-6">
                <DataTable
                    title="Customers"
                    description="These companies have purchased in the last 12 months."
                    items={data}
                    columns={columns}
                    selectable={true}
                    pageSize={5}
                    striped={true}
                />
            </div>

            <div className="p-6">
                <DataTable
                    title="Customers"
                    description="These companies have purchased in the last 12 months."
                    items={data2}
                    columns={columns2}
                    pageSize={5}
                    striped={true}
                />
            </div>

            <div className="p-6">
                <DataTable
                    title="Customers"
                    description="These companies have purchased in the last 12 months."
                    items={data3}
                    columns={columns3}
                    pageSize={5}
                    striped={true}
                    selectable={true}
                />
            </div>

        </>
    )
}

export default DataTableTemplates;