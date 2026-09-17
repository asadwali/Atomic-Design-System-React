import { Edit, Trash2 } from 'lucide-react';
import Badge from '../../atoms/Badges/Badges';
import AvatarWithInfo from '../AvatarWithInfo/AvatarWithInfo';
import DataTable from './DataTables';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  argTypes: {
    actionVariant: {
      name: 'Action Button Type',
      control: { type: 'select' },
      options: ['icon', 'ghost', 'menu'],
      defaultValue: 'icon',
    },
  },
};

const data = [
  {
    name: 'Asad Wali',
    status: 'active',
    role: 'Software Engineer',
    email: 'asad.wali@ebitlogix.com',
    teams: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  },
  {
    name: 'Arshad',
    status: 'active',
    role: 'Head of EVP',
    email: 'moazzam@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Bilal',
    status: 'active',
    role: 'QA Analyst',
    email: 'bilal@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Waseem',
    status: 'active',
    role: 'Sr. QA Analyst',
    email: 'waseem@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Hamza',
    status: 'active',
    role: 'QA Analyst',
    email: 'humza@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Malik',
    status: 'active',
    role: 'Sr. Back End Developer',
    email: 'malik@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Shahbaz',
    status: 'active',
    role: 'Front End Developer',
    email: 'shahbaz@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Ahsan',
    status: 'active',
    role: 'Sr. Front End Developer',
    email: 'ahsan@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
  {
    name: 'Sidra',
    status: 'active',
    role: 'Sr. Front End Developer',
    email: 'sidra@bitlogix.com',
    teams: ['Label A', 'Label B'],
  },
];

const columns = [
  {
    header: 'Name',
    accessor: 'name',
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
    header: 'Status',
    accessor: 'status',
    render: (item) => (
      <Badge variant="primary" size="sm" dotLeft>
        {item.status}
      </Badge>
    ),
  },
  { header: 'Role', accessor: 'role' },
  { header: 'Email Address', accessor: 'email' },
  {
    header: 'Teams',
    accessor: 'teams',
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
  // Removed inline actions here
];

const Template = ({ actionVariant, ...args }) => {
  const actionColumn = {
    header: 'Actions',
    variant: actionVariant,
    getActions: (item) => [
      {
        label: 'Edit',
        icon: <Edit size={14} />,
        onClick: () => console.log('Edit', item),
      },
      {
        label: 'Delete',
        icon: <Trash2 size={14} />,
        onClick: () => console.log('Delete', item),
      },
    ],
  };

  return <DataTable {...args} columns={columns} actionColumn={actionColumn} />;
};

export const TeamDirectory = Template.bind({});
TeamDirectory.args = {
  items: data,
  title: 'Team Members',
  description: 'List of active team members with roles and teams.',
  selectable: true,
  striped: true,
  pageSize: 5,
  actionVariant: 'icon',
};
