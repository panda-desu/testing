import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Hash,
  Users,
  MessageSquare,
  ThumbsUp,
  Send,
  UserPlus,
  UserMinus,
  Crown,
} from "lucide-react";

interface Channel {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  isJoined: boolean;
  category: "general" | "tech" | "finance" | "marketing";
}

interface Comment {
  id: string;
  channelId: string;
  user: string;
  message: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  avatar: string;
}

const ChannelSystem = () => {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");
  const [channels, setChannels] = useState<Channel[]>([
    {
      id: "general",
      name: "general-chat",
      description: "General job discussions and networking",
      memberCount: 1247,
      isJoined: true,
      category: "general",
    },
    {
      id: "tech-jobs",
      name: "tech-opportunities",
      description: "Software, AI, and tech job discussions",
      memberCount: 892,
      isJoined: true,
      category: "tech",
    },
    {
      id: "finance-roles",
      name: "finance-careers",
      description: "Banking, investment, and finance opportunities",
      memberCount: 567,
      isJoined: false,
      category: "finance",
    },
    {
      id: "marketing-hub",
      name: "marketing-creative",
      description: "Digital marketing and creative roles",
      memberCount: 423,
      isJoined: false,
      category: "marketing",
    },
  ]);

  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      channelId: "general",
      user: "TechNinja_MN",
      message:
        "🔥 Just landed a remote job at a US company! The AI matching here is insane!",
      timestamp: "2 hours ago",
      likes: 23,
      isLiked: false,
      avatar: "🥷",
    },
    {
      id: "2",
      channelId: "general",
      user: "CodeQueen23",
      message: "Anyone know about the new fintech startups hiring? 👀",
      timestamp: "1 hour ago",
      likes: 7,
      isLiked: true,
      avatar: "👑",
    },
    {
      id: "3",
      channelId: "tech-jobs",
      user: "AIEnthusiast",
      message:
        "MongoDB is hiring junior devs! No degree required, just skills 💪",
      timestamp: "30 minutes ago",
      likes: 15,
      isLiked: false,
      avatar: "🤖",
    },
    {
      id: "4",
      channelId: "finance-roles",
      user: "bomboardic",
      message: "Энэ компаны цалингаа өгдөггүй юм байна лээ битгий ороорой",
      timestamp: "30 minutes ago",
      likes: 15,
      isLiked: false,
      avatar: "🤖",
    },
  ]);

  const toggleChannelJoin = (channelId: string) => {
    setChannels((prev) =>
      prev.map((channel) =>
        channel.id === channelId
          ? {
              ...channel,
              isJoined: !channel.isJoined,
              memberCount: channel.isJoined
                ? channel.memberCount - 1
                : channel.memberCount + 1,
            }
          : channel
      )
    );
  };

  const addComment = () => {
    if (!newComment.trim() || !selectedChannel) return;

    const comment: Comment = {
      id: Date.now().toString(),
      channelId: selectedChannel,
      user: "You",
      message: newComment,
      timestamp: "now",
      likes: 0,
      isLiked: false,
      avatar: "😎",
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  const toggleLike = (commentId: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment
      )
    );
  };

  const channelComments = comments.filter(
    (c) => c.channelId === selectedChannel
  );

  return (
    <div className="bg-[#36393f] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-white mb-4">
            Job Communities
          </h2>
          <p className="text-gray-300 text-lg">
            Join channels, network, and discover opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Channel List */}
          <div className="lg:col-span-1">
            <div className="bg-[#2f3136] rounded-lg p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Hash className="w-5 h-5 mr-2" />
                Channels
              </h3>
              <div className="space-y-3">
                {channels.map((channel) => (
                  <div key={channel.id} className="group">
                    <div
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedChannel === channel.id
                          ? "bg-[#404EED] text-white"
                          : "hover:bg-[#40444b] text-gray-300"
                      }`}
                      onClick={() => setSelectedChannel(channel.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <Hash className="w-4 h-4" />
                        <div>
                          <div className="font-medium">{channel.name}</div>
                          <div className="text-xs text-gray-400 flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {channel.memberCount}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={channel.isJoined ? "destructive" : "default"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleChannelJoin(channel.id);
                        }}
                        className="text-xs"
                      >
                        {channel.isJoined ? (
                          <>
                            <UserMinus className="w-3 h-3 mr-1" />
                            Leave
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-3 h-3 mr-1" />
                            Join
                          </>
                        )}
                      </Button>
                    </div>
                    {channel.isJoined && (
                      <Badge
                        variant="secondary"
                        className="ml-7 mt-1 text-xs bg-green-600"
                      >
                        Member
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {selectedChannel ? (
              <div className="bg-[#2f3136] rounded-lg border border-gray-700 h-[600px] flex flex-col">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <Hash className="w-5 h-5 text-gray-400" />
                    <span className="text-white font-semibold">
                      {channels.find((c) => c.id === selectedChannel)?.name}
                    </span>
                    <Badge variant="secondary" className="bg-gray-600">
                      {
                        channels.find((c) => c.id === selectedChannel)
                          ?.memberCount
                      }{" "}
                      members
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    {
                      channels.find((c) => c.id === selectedChannel)
                        ?.description
                    }
                  </p>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {channelComments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-white font-medium">
                            {comment.user}
                          </span>
                          {comment.user === "TechNinja_MN" && (
                            <Crown className="w-4 h-4 text-yellow-500" />
                          )}
                          <span className="text-gray-400 text-xs">
                            {comment.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-300">{comment.message}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleLike(comment.id)}
                          className={`mt-2 text-xs ${
                            comment.isLiked ? "text-red-400" : "text-gray-400"
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {comment.likes}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <Input
                      placeholder={`Message #${
                        channels.find((c) => c.id === selectedChannel)?.name
                      }`}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addComment()}
                      className="bg-[#40444b] border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={addComment}
                      className="bg-[#404EED] hover:bg-[#404EED]/90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#2f3136] rounded-lg border border-gray-700 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <Hash className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Select a Channel
                  </h3>
                  <p className="text-gray-400">
                    Choose a channel to start chatting and networking
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelSystem;
