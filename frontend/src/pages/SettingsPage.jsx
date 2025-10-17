import { useState } from "react";
import {
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  LogOut,
} from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";
import useLogout from "../hooks/useLogout";
import { useThemeStore } from "../store/useThemeStore";

const SettingsPage = () => {
  const { authUser } = useAuthUser();
  const { logout } = useLogout();
  const { theme, setTheme } = useThemeStore();
  const [activeSection, setActiveSection] = useState("profile");

  const settingsSections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "general", label: "General", icon: Globe },
  ];

  const themes = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
    { id: "cupcake", label: "Cupcake" },
    { id: "bumblebee", label: "Bumblebee" },
    { id: "emerald", label: "Emerald" },
    { id: "corporate", label: "Corporate" },
    { id: "synthwave", label: "Synthwave" },
    { id: "retro", label: "Retro" },
    { id: "cyberpunk", label: "Cyberpunk" },
    { id: "valentine", label: "Valentine" },
    { id: "halloween", label: "Halloween" },
    { id: "garden", label: "Garden" },
    { id: "forest", label: "Forest" },
    { id: "aqua", label: "Aqua" },
    { id: "lofi", label: "Lofi" },
    { id: "pastel", label: "Pastel" },
    { id: "fantasy", label: "Fantasy" },
    { id: "wireframe", label: "Wireframe" },
    { id: "black", label: "Black" },
    { id: "luxury", label: "Luxury" },
    { id: "dracula", label: "Dracula" },
    { id: "cmyk", label: "CMYK" },
    { id: "autumn", label: "Autumn" },
    { id: "business", label: "Business" },
    { id: "acid", label: "Acid" },
    { id: "lemonade", label: "Lemonade" },
    { id: "night", label: "Night" },
    { id: "coffee", label: "Coffee" },
    { id: "winter", label: "Winter" },
  ];

  const handleLogout = () => {
    logout();
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={authUser?.profilePic} alt="Profile" />
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder={authUser?.fullName}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                placeholder={authUser?.bio || "Tell us about yourself..."}
                className="textarea textarea-bordered w-full max-w-md resize-none"
                rows={3}
                value={authUser?.bio || ""}
                onChange={(e) =>
                  setAuthUser({ ...authUser, bio: e.target.value })
                }
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder={authUser?.email}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder={authUser?.username}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Push Notifications</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Email Notifications</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Friend Requests</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Message Notifications</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="space-y-6">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show Online Status</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Allow Friend Requests</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show Last Seen</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
          </div>
        );

      case "appearance":
        return (
          <div className="space-y-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Theme</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                {themes.map((themeOption) => (
                  <option key={themeOption.id} value={themeOption.id}>
                    {themeOption.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case "general":
        return (
          <div className="space-y-6">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Auto-save Drafts</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Keyboard Shortcuts</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-primary"
                />
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Settings className="size-8 text-primary" />
          Settings
        </h1>
        <p className="text-base-content/70 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-base-200 rounded-lg p-4 space-y-2">
            {settingsSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
                    activeSection === section.id ? "btn-active" : ""
                  }`}
                >
                  <IconComponent className="size-5" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Logout Button */}
          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline w-full gap-3"
            >
              <LogOut className="size-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-base-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6 capitalize">
              {settingsSections.find((s) => s.id === activeSection)?.label}
            </h2>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
