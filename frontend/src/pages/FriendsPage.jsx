import { useState } from "react";
import {
  Users,
  UserPlus,
  Heart,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import {
  getUserFriends,
  getRecommendedUsers,
  sendFriendRequest,
  getOutgoingFriendReqs,
} from "../lib/api";
import { getLanguageFlag } from "../components/FriendCard";
import { capitialize } from "../lib/utils";

const FriendsPage = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const queryClient = useQueryClient();

  // Fetch real friends data
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  // Fetch real recommended users data
  const { data: recommendedUsers = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers,
  });

  // Fetch outgoing friend requests to check which users already have pending requests
  const { data: outgoingFriendReqs } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
  });

  // Send friend request mutation
  const { mutate: sendRequestMutation, isPending: isSendingRequest } =
    useMutation({
      mutationFn: sendFriendRequest,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["outgoingFriendReqs"] });
      },
    });

  // Create a set of user IDs that already have pending requests
  const outgoingRequestsIds = new Set();
  if (outgoingFriendReqs && outgoingFriendReqs.length > 0) {
    outgoingFriendReqs.forEach((req) => {
      outgoingRequestsIds.add(req.recipient._id);
    });
  }

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
            Suggestions ({recommendedUsers.length})
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
                  </div>
                </div>
              </div>
            </div>

            {loadingFriends ? (
              <div className="flex justify-center py-12">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : friends.length === 0 ? (
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
                    key={friend._id}
                    className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="card-body p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="avatar relative">
                          <div className="w-12 rounded-full">
                            <img
                              src={friend.profilePic}
                              alt={friend.fullName}
                            />
                          </div>
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-base-200 ${getStatusColor(
                              "online"
                            )}`}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{friend.fullName}</h3>
                          <p className="text-xs text-base-content/70">Online</p>
                        </div>
                      </div>

                      <p className="text-sm text-base-content/80 mb-3">
                        {friend.bio || "Language exchange partner"}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="badge badge-secondary badge-sm">
                          {getLanguageFlag(friend.nativeLanguage)}
                          {capitialize(friend.nativeLanguage)}
                        </span>
                        <span className="badge badge-outline badge-sm">
                          {getLanguageFlag(friend.learningLanguage)}
                          {capitialize(friend.learningLanguage)}
                        </span>
                      </div>

                      <div className="flex items-center text-xs text-base-content/70 mb-4">
                        <span>
                          {friend.location || "Location not specified"}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/chat/${friend._id}`}
                          className="btn btn-primary btn-sm flex-1"
                        >
                          <MessageCircle className="size-4 mr-1" />
                          Chat
                        </Link>
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

            {loadingUsers ? (
              <div className="flex justify-center py-12">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : recommendedUsers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="size-16 mx-auto text-base-content/30 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No suggestions available
                </h3>
                <p className="text-base-content/70">
                  Check back later for new language partners!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedUsers.map((user) => {
                  const hasRequestBeenSent = outgoingRequestsIds.has(user._id);

                  return (
                    <div
                      key={user._id}
                      className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="card-body p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="avatar">
                            <div className="w-12 rounded-full">
                              <img src={user.profilePic} alt={user.fullName} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{user.fullName}</h3>
                            <p className="text-xs text-base-content/70">
                              Language partner
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-base-content/80 mb-3">
                          {user.bio || "Looking for language exchange partners"}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          <span className="badge badge-secondary badge-sm">
                            {getLanguageFlag(user.nativeLanguage)}
                            {capitialize(user.nativeLanguage)}
                          </span>
                          <span className="badge badge-outline badge-sm">
                            {getLanguageFlag(user.learningLanguage)}
                            {capitialize(user.learningLanguage)}
                          </span>
                        </div>

                        <div className="flex items-center text-xs text-base-content/70 mb-4">
                          <span>
                            {user.location || "Location not specified"}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            className={`btn btn-sm flex-1 ${
                              hasRequestBeenSent
                                ? "btn-disabled"
                                : "btn-primary"
                            }`}
                            onClick={() => sendRequestMutation(user._id)}
                            disabled={hasRequestBeenSent || isSendingRequest}
                          >
                            <UserPlus className="size-4 mr-1" />
                            {hasRequestBeenSent ? "Request Sent" : "Add Friend"}
                          </button>
                          <button className="btn btn-outline btn-sm">
                            <Heart className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
