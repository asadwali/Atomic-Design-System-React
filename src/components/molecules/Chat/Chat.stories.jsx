import ChatMessage from "./Chat";

export default {
    title: "Molecules/ChatMessage",
    component: ChatMessage,
    argTypes: {
        currentUser: { control: "text" },
        chatTitle: { control: "text" },
        chatSubtitle: { control: "text" },
        showTabs: { control: "boolean" },
        className: { control: "text" },
    },
};

const Template = (args) => <ChatMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
    currentUser: "You",
    chatTitle: "Group Chat",
    chatSubtitle: "Project Apollo Team",
    showTabs: true,
    participants: [
        {
            name: "Lana Steiner",
            imageUrl: "https://i.pravatar.cc/150?img=1",
            email: "lana@example.com",
        },
        {
            name: "Phoenix Baker",
            imageUrl: "https://i.pravatar.cc/150?img=2",
            email: "phoenix@example.com",
        },
    ],
    messages: [
        {
            id: 1,
            name: "Lana Steiner",
            time: "Thursday 11:40am",
            message: "Hey Olivia, can you please review the latest design?",
            avatar: "https://i.pravatar.cc/150?img=1",
            isCurrentUser: false,
            dateString: "2025-08-20T11:40:00",
        },
        {
            id: 2,
            name: "Phoenix Baker",
            time: "Friday 2:20pm",
            message: "",
            attachment: {
                name: "Latest design screenshot.jpg",
                url: "#",
                size: "1.2 MB",
            },
            avatar: "https://i.pravatar.cc/150?img=2",
            isCurrentUser: false,
            dateString: "2025-08-21T14:20:00",
        },
        {
            id: 3,
            name: "You",
            time: "Friday 2:25pm",
            message: "Sure thing, I’ll have a look today.",
            avatar: "https://i.pravatar.cc/150?img=3",
            isCurrentUser: true,
            dateString: "2025-08-21T14:25:00",
        },
    ],
};

export const WithoutTabs = Template.bind({});
WithoutTabs.args = {
    ...Default.args,
    showTabs: false,
};

export const EmptyChat = Template.bind({});
EmptyChat.args = {
    ...Default.args,
    messages: [],
    showTabs: false,
    chatTitle: "New Chat",
    chatSubtitle: "No messages yet",
};
