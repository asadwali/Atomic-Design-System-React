import clsx from 'clsx';
import { Paperclip, SendHorizontal, Smile, X } from 'lucide-react';
import { useState } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Badge from '../../atoms/Badges/Badges';
import AvatarWithInfo from '../AvatarWithInfo/AvatarWithInfo';

const ChatMessage = ({
  currentUser = 'You',
  messages = [],
  onSend = () => { },
  chatTitle = '',
  chatSubtitle = '',
  participants = [],
  showTabs = false,
  onAttach = () => { },
  onEmoji = () => { },
  className = '',
  ...props
}) => {
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState('chat');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ✅ Utility: Format date labels
  const formatDateLabel = (dateString) => {
    if (!dateString) return "";
    const msgDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isToday =
      msgDate.getDate() === today.getDate() &&
      msgDate.getMonth() === today.getMonth() &&
      msgDate.getFullYear() === today.getFullYear();

    const isYesterday =
      msgDate.getDate() === yesterday.getDate() &&
      msgDate.getMonth() === yesterday.getMonth() &&
      msgDate.getFullYear() === yesterday.getFullYear();

    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";

    return msgDate.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div
      className={clsx(
        "flex flex-col bg-white rounded-lg shadow-md h-[calc(100vh_-_105px)] w-full",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{chatTitle}</h2>
            <p className="text-xs text-gray-500">{chatSubtitle}</p>
          </div>
          <X className="size-4 text-gray-400 cursor-pointer" />
        </div>

        {/* Tabs - only show if showTabs = true */}
        {showTabs && (
          <div className="px-4 my-2">
            <div className="flex items-center gap-0.5 bg-gray-100 p-1 rounded-lg w-full">
              <button
                onClick={() => setActiveTab('chat')}
                className={clsx(
                  'flex-1 px-4 py-1.5 text-sm font-medium rounded-md transition-all',
                  activeTab === 'chat'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'bg-transparent text-gray-600 hover:text-gray-800'
                )}
              >
                Messages
              </button>

              <button
                onClick={() => setActiveTab('participants')}
                className={clsx(
                  'flex-1 px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-1',
                  activeTab === 'participants'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'bg-transparent text-gray-600 hover:text-gray-800'
                )}
              >
                Participants
                <span>
                  <Badge variant="primary" size="sm">
                    {participants.length}
                  </Badge>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 bg-white">
        {activeTab === 'chat' ? (
          messages.map((msg, index) => {
            const isCurrentUser = msg.name === currentUser;
            const showDateDivider =
              index === 0 ||
              new Date(msg.dateString).toDateString() !==
                new Date(messages[index - 1].dateString).toDateString();

            return (
              <div key={msg.id || index}>
                {showDateDivider && (
                  <div className="flex items-center justify-center my-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-sm text-gray-500">
                      {formatDateLabel(msg.dateString)}
                    </span>
                    <hr className="flex-grow border-t border-gray-300" />
                  </div>
                )}

                <div
                  className={clsx(
                    'flex',
                    isCurrentUser ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div className="flex items-start gap-2 max-w-[80%]">
                    {!isCurrentUser && (
                      <Avatar size="xs" showNotification imageUrl={msg.avatar} />
                    )}
                    <div className="flex flex-col">
                      <div className="text-xs text-gray-500 mb-1">
                        <span className="font-medium text-gray-700">
                          {msg.name}
                        </span>{' '}
                        · {msg.time}
                      </div>
                      <div
                        className={clsx(
                          'px-4 py-3 rounded-xl text-sm whitespace-pre-wrap',
                          isCurrentUser
                            ? 'bg-violet-600 text-white rounded-tr-none'
                            : 'bg-gray-100 text-gray-900 rounded-tl-none'
                        )}
                      >
                        {msg.attachment ? (
                          <a
                            href={msg.attachment.url}
                            download
                            className={clsx(
                              'block',
                              isCurrentUser ? 'text-blue-200' : 'text-blue-600'
                            )}
                          >
                            📎 {msg.attachment.name} ({msg.attachment.size})
                          </a>
                        ) : (
                          msg.message
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="space-y-3">
            {participants.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <AvatarWithInfo
                  size="sm"
                  showNotification
                  imageUrl={p.imageUrl}
                  userName={p.name}
                  email={p.email}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input - only show on chat tab */}
      {activeTab === 'chat' && (
        <div className="border-t border-gray-200 p-3 bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-500 rounded-lg"
          />

          <button
            type="button"
            onClick={onAttach}
            className="p-2 text-gray-500 hover:text-violet-600"
          >
            <Paperclip size={18} />
          </button>

          <button
            type="button"
            onClick={onEmoji}
            className="p-2 text-gray-500 hover:text-violet-600"
          >
            <Smile size={18} />
          </button>

          <button
            onClick={handleSend}
            className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
          >
            <SendHorizontal size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
