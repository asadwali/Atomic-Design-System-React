import { Building2, User } from 'lucide-react';
import Avatar from "../../atoms/Avatar/Avatar";
import AvatarGroup from "../../molecules/AvatarGroup/AvatarGroup";
import AvatarWithInfo from "../../molecules/AvatarWithInfo/AvatarWithInfo";


const AvatarTemplate = () => {

    const imageUrls = [
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

    ];

    const names = [
        "Asad Wali",
        "Abbas Mastan",
    ]

    return (

        <>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-8">

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Sizes</h2>
                    <div className="flex flex-wrap gap-3">
                        <Avatar size="xs" imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="sm" imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="md" imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="lg" imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="xl" imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="2xl" imageUrl="https://i.pravatar.cc/300" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Initials</h2>
                    <div className="flex flex-wrap gap-3">
                        <Avatar size="xs" type="initials" userName="Asad Wali" />
                        <Avatar size="sm" type="initials" userName="Asad Wali" />
                        <Avatar size="md" type="initials" userName="Asad Wali" />
                        <Avatar size="lg" type="initials" userName="Asad Wali" />
                        <Avatar size="xl" type="initials" userName="Asad Wali" />
                        <Avatar size="2xl" type="initials" userName="Asad Wali" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Placeholder</h2>
                    <div className="flex flex-wrap gap-3">
                        <Avatar size="xs" type="icon" placeholderIcon={<User />} />
                        <Avatar size="sm" type="icon" placeholderIcon={<User />} />
                        <Avatar size="md" type="icon" placeholderIcon={<User />} />
                        <Avatar size="lg" type="icon" placeholderIcon={<User />} />
                        <Avatar size="xl" type="icon" placeholderIcon={<User />} />
                        <Avatar size="2xl" type="icon" placeholderIcon={<User />} />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar Status Indicator</h2>
                    <div className="flex flex-wrap gap-3">
                        <Avatar size="xs" showNotification imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="sm" showNotification imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="md" showNotification imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="lg" showNotification imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="xl" showNotification imageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="2xl" showNotification imageUrl="https://i.pravatar.cc/300" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar With Icon</h2>
                    <div className="flex flex-wrap gap-3">
                        <Avatar size="xs" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyIcon={<Building2 className="size-4 text-blue-600" />} />
                        <Avatar size="sm" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyIcon={<Building2 className="size-4 text-blue-600" />} />
                        <Avatar size="md" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyIcon={<Building2 className="size-4 text-blue-600" />} />
                        <Avatar size="lg" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyIcon={<Building2 className="size-4 text-blue-600" />} />
                        <Avatar size="xl" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyIcon={<Building2 className="size-4 text-blue-600" />} />
                        <Avatar size="2xl" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyIcon={<Building2 className="size-4 text-blue-600" />} />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar With Image</h2>
                    <div className="flex flex-wrap gap-3">
                        <Avatar size="xs" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyImageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="sm" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyImageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="md" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyImageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="lg" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyImageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="xl" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyImageUrl="https://i.pravatar.cc/300" />
                        <Avatar size="2xl" showCompanyIcon imageUrl="https://i.pravatar.cc/300" companyImageUrl="https://i.pravatar.cc/300" />
                    </div>
                </div>


                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar Group</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarGroup avatars={imageUrls} size="sm" maxVisible={10} showMoreButton={false} />
                        <AvatarGroup avatars={imageUrls} size="md" maxVisible={10} showMoreButton={false} />
                        <AvatarGroup avatars={imageUrls} size="lg" maxVisible={10} showMoreButton={false} />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar Group with Show More</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarGroup avatars={imageUrls} size="sm" maxVisible={10} showMoreButton={true} />
                        <AvatarGroup avatars={imageUrls} size="md" maxVisible={10} showMoreButton={true} />
                        <AvatarGroup avatars={imageUrls} size="lg" maxVisible={10} showMoreButton={true} />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar Group with Add Button</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarGroup avatars={imageUrls} size="sm" maxVisible={10} showMoreButton={false} showAddButton={true} onAddClick={() => alert('Add new user')} />
                        <AvatarGroup avatars={imageUrls} size="md" maxVisible={10} showMoreButton={false} showAddButton={true} onAddClick={() => alert('Add new user')} />
                        <AvatarGroup avatars={imageUrls} size="lg" maxVisible={10} showMoreButton={false} showAddButton={true} onAddClick={() => alert('Add new user')} />
                    </div>
                </div>


                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar Group with Show More & Add Button</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarGroup avatars={imageUrls} size="sm" maxVisible={8} showMoreButton={true} showAddButton={true} onAddClick={() => alert('Add new user')} />
                        <AvatarGroup avatars={imageUrls} size="md" maxVisible={8} showMoreButton={true} showAddButton={true} onAddClick={() => alert('Add new user')} />
                        <AvatarGroup avatars={imageUrls} size="lg" maxVisible={8} showMoreButton={true} showAddButton={true} onAddClick={() => alert('Add new user')} />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar User Info</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarWithInfo size="sm" imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="md" imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="lg" imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="xl" imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar User Info With Status Indicator</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarWithInfo size="sm" showNotification imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="md" showNotification imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="lg" showNotification imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="xl" showNotification imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar User Info With Icon</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarWithInfo size="sm" type="company" companyIcon={<Building2 className="size-4 text-primary" />} imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="md" type="company" companyIcon={<Building2 className="size-4 text-primary" />} imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="lg" type="company" companyIcon={<Building2 className="size-4 text-primary" />} imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="xl" type="company" companyIcon={<Building2 className="size-4 text-primary" />} imageUrl="https://i.pravatar.cc/300" userName="Asad Wali" email="asadwali@gmail.com" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar User Info With Initials</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarWithInfo size="sm" type="initials" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="md" type="initials" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="lg" type="initials" userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="xl" type="initials" userName="Asad Wali" email="asadwali@gmail.com" />
                    </div>
                </div>

                <div className="col-span-6 space-y-6 max-w-full p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-300">
                    <h2 className="text-primary font-bold text-lg">Avatar User Info With Placeholder</h2>
                    <div className="flex flex-col space-y-4">
                        <AvatarWithInfo size="sm" type="icon" placeholderIcon={<User />} userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="md" type="icon" placeholderIcon={<User />} userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="lg" type="icon" placeholderIcon={<User />} userName="Asad Wali" email="asadwali@gmail.com" />
                        <AvatarWithInfo size="xl" type="icon" placeholderIcon={<User />} userName="Asad Wali" email="asadwali@gmail.com" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AvatarTemplate;