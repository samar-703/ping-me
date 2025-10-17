import { useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Heart,
  MessageCircle,
  Phone,
} from "lucide-react";

const FriendsPage = () => {
  const [activeTab, setActiveTab] = useState("friends");

  // Static data for friends
  const friends = [
    {
      id: 1,
      name: "Alex Johnson",
      bio: "Language enthusiast from New York",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "online",
      nativeLanguage: "English",
      learningLanguage: "Spanish",
      location: "New York, USA",
    },
    {
      id: 2,
      name: "Maria Garcia",
      bio: "Native Spanish speaker, learning French",
      profilePic:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      status: "online",
      nativeLanguage: "Spanish",
      learningLanguage: "French",
      location: "Madrid, Spain",
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      bio: "Japanese teacher and anime lover",
      profilePic:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      status: "away",
      nativeLanguage: "Japanese",
      learningLanguage: "English",
      location: "Tokyo, Japan",
    },
    {
      id: 4,
      name: "Emma Wilson",
      bio: "French literature student",
      profilePic:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      nativeLanguage: "French",
      learningLanguage: "German",
      location: "Paris, France",
    },
  ];

  // Static data for suggestions
  const suggestions = [
    {
      id: 5,
      name: "Carlos Rodriguez",
      bio: "Native Portuguese speaker",
      profilePic:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      nativeLanguage: "Portuguese",
      learningLanguage: "English",
      location: "São Paulo, Brazil",
      mutualFriends: 3,
    },
    {
      id: 6,
      name: "Anna Schmidt",
      bio: "German teacher and traveler",
      profilePic:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      nativeLanguage: "German",
      learningLanguage: "Italian",
      location: "Berlin, Germany",
      mutualFriends: 1,
    },
    {
      id: 7,
      name: "Ahmed Hassan",
      bio: "Arabic language expert",
      profilePic:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      nativeLanguage: "Arabic",
      learningLanguage: "English",
      location: "Cairo, Egypt",
      mutualFriends: 2,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-success";
      case "away":
        return "bg-warning";
      case "offline":
        return "bg-base-300";
      default:
        return "bg-base-300";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "online":
        return "Online";
      case "away":
        return "Away";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Users className="size-8 text-primary" />
            Friends
          </h1>
          <p className="text-base-content/70 mt-2">
            Connect with language partners and discover new friends
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-bordered mb-8">
          <button
            className={`tab tab-bordered ${
              activeTab === "friends" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("friends")}
          >
            Your Oomfs ({friends.length})
          </button>
          <button
            className={`tab tab-bordered ${
              activeTab === "suggestions" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("suggestions")}
          >
            Suggestions ({suggestions.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === "friends" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Oomfs</h2>
              <div className="flex gap-2">
                <div className="form-control">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search friends..."
                      className="input input-bordered input-sm"
                    />
                    <button className="btn btn-square btn-sm">
                      <Search className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {friends.length === 0 ? (
              <div className="text-center py-12">
                <Users className="size-16 mx-auto text-base-content/30 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No friends yet</h3>
                <p className="text-base-content/70">
                  Start connecting with language partners!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="card-body p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="avatar relative">
                          <div className="w-12 rounded-full">
                            <img src={friend.profilePic} alt={friend.name} />
                          </div>
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-base-200 ${getStatusColor(
                              friend.status
                            )}`}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{friend.name}</h3>
                          <p className="text-xs text-base-content/70">
                            {getStatusText(friend.status)}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-base-content/80 mb-3">
                        {friend.bio}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="badge badge-secondary badge-sm">
                          {friend.nativeLanguage}
                        </span>
                        <span className="badge badge-outline badge-sm">
                          {friend.learningLanguage}
                        </span>
                      </div>

                      <div className="flex items-center text-xs text-base-content/70 mb-4">
                        <span>{friend.location}</span>
                      </div>

                      <div className="flex gap-2">
                        <button className="btn btn-primary btn-sm flex-1">
                          <MessageCircle className="size-4 mr-1" />
                          Chat
                        </button>
                        <button className="btn btn-outline btn-sm">
                          <Phone className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "suggestions" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Friend Suggestions</h2>
              <p className="text-sm text-base-content/70">
                Based on your interests and mutual connections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((user) => (
                <div
                  key={user.id}
                  className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="card-body p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user.profilePic} alt={user.name} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-xs text-base-content/70">
                          {user.mutualFriends} mutual friends
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-base-content/80 mb-3">
                      {user.bio}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      <span className="badge badge-secondary badge-sm">
                        {user.nativeLanguage}
                      </span>
                      <span className="badge badge-outline badge-sm">
                        {user.learningLanguage}
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-base-content/70 mb-4">
                      <span>{user.location}</span>
                    </div>

                    <div className="flex gap-2">
                      <button className="btn btn-primary btn-sm flex-1">
                        <UserPlus className="size-4 mr-1" />
                        Add Friend
                      </button>
                      <button className="btn btn-outline btn-sm">
                        <Heart className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
