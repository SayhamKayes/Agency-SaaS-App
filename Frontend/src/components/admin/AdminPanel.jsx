import { useState } from "react";
import { useApp } from "../../Context/AppContext";
import {
  X,
  LayoutDashboard,
  Boxes,
  Inbox,
  Briefcase,
  Quote,
  Sliders,
  Plus,
  Trash2,
  Edit2,
  Send,
  MessageCircle,
  Mail,
  Instagram,
  Globe,
  Lock,
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  LogOut
} from "lucide-react";

export const AdminPanel = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    messages,
    replyToMessage,
    deleteMessage,
    businessUnits,
    updateBusinessUnit,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    theme,
    setThemeMode,
    setColorPreset,
    setCustomColors
  } = useApp();

  // Authentication State from .env
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem("skz_admin_auth") === "true";
    } catch {
      return false;
    }
  });
  const [authMode, setAuthMode] = useState("password"); // 'password' | 'pin'
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");

  const ENV_ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || "admin";
  const ENV_ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin@skzlab2026";
  const ENV_ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || "2026";

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError("");

    if (authMode === "pin") {
      if (pinInput.trim() === ENV_ADMIN_PIN) {
        sessionStorage.setItem("skz_admin_auth", "true");
        setIsAuthenticated(true);
        setPinInput("");
        setAuthError("");
      } else {
        setAuthError("Access Denied: Invalid Master PIN. Please verify your .env settings.");
      }
    } else {
      if (
        usernameInput.trim().toLowerCase() === ENV_ADMIN_USERNAME.toLowerCase() &&
        passwordInput === ENV_ADMIN_PASSWORD
      ) {
        sessionStorage.setItem("skz_admin_auth", "true");
        setIsAuthenticated(true);
        setUsernameInput("");
        setPasswordInput("");
        setAuthError("");
      } else {
        setAuthError("Access Denied: Invalid Username or Password. Please verify your .env settings.");
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("skz_admin_auth");
    setIsAuthenticated(false);
    setAuthError("");
  };

  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedMessage, setSelectedMessage] = useState(messages[0] || null);
  const [replyText, setReplyText] = useState("");
  const [replyChannel, setReplyChannel] = useState("email");
  const [inboxFilter, setInboxFilter] = useState("all");
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: "",
    tagline: "",
    description: "",
    category: "Enterprise SaaS",
    status: "Live",
    mrr: "$25,000",
    activeUsers: "50,000+",
    uptime: "99.99%",
    featuresText: "High throughput pipeline, Real-time sync, Multi-tenant security",
    techStackText: "Python, Django REST, React, Redis",
    isFeatured: true,
    isLatestLaunch: true,
    launchDate: "2026-09-26",
    accentColor: "#F05A28",
    architectureTier: "Distributed Cloud Microservice"
  });
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [testForm, setTestForm] = useState({
    author: "",
    role: "",
    company: "",
    quote: "",
    avatarText: "SK",
    metric: "+150% Velocity",
    productUsed: "Chomotkar Commerce Engine"
  });
  if (!isAdminOpen) return null;
  const filteredMessages = messages.filter((m) => {
    if (inboxFilter === "all") return true;
    return m.channel === inboxFilter;
  });
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      tagline: "",
      description: "",
      category: "Enterprise SaaS",
      status: "Live",
      mrr: "$25,000",
      activeUsers: "50,000+",
      uptime: "99.99%",
      featuresText: "High throughput pipeline, Real-time sync, Multi-tenant security",
      techStackText: "Python, Django REST, React, Redis",
      isFeatured: true,
      isLatestLaunch: true,
      launchDate: "2026-09-26",
      accentColor: "#F05A28",
      architectureTier: "Distributed Cloud Microservice"
    });
    setIsProductModalOpen(true);
  };
  const handleOpenEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      name: prod.name,
      tagline: prod.tagline,
      description: prod.description,
      category: prod.category,
      status: prod.status,
      mrr: prod.mrr,
      activeUsers: prod.activeUsers,
      uptime: prod.uptime,
      featuresText: prod.features.join(", "),
      techStackText: prod.techStack.join(", "),
      isFeatured: prod.isFeatured,
      isLatestLaunch: prod.isLatestLaunch,
      launchDate: prod.launchDate,
      accentColor: prod.accentColor || "#F05A28",
      architectureTier: prod.architectureTier || "Distributed Cloud Microservice"
    });
    setIsProductModalOpen(true);
  };
  const handleSaveProduct = (e) => {
    e.preventDefault();
    const features = productForm.featuresText.split(",").map((s) => s.trim()).filter(Boolean);
    const techStack = productForm.techStackText.split(",").map((s) => s.trim()).filter(Boolean);
    if (editingProduct) {
      updateProduct(editingProduct.id, {
        name: productForm.name,
        tagline: productForm.tagline,
        description: productForm.description,
        category: productForm.category,
        status: productForm.status,
        mrr: productForm.mrr,
        activeUsers: productForm.activeUsers,
        uptime: productForm.uptime,
        features,
        techStack,
        isFeatured: productForm.isFeatured,
        isLatestLaunch: productForm.isLatestLaunch,
        launchDate: productForm.launchDate,
        accentColor: productForm.accentColor,
        architectureTier: productForm.architectureTier
      });
    } else {
      addProduct({
        name: productForm.name,
        tagline: productForm.tagline,
        description: productForm.description,
        category: productForm.category,
        status: productForm.status,
        mrr: productForm.mrr,
        activeUsers: productForm.activeUsers,
        uptime: productForm.uptime,
        features,
        techStack,
        isFeatured: productForm.isFeatured,
        isLatestLaunch: productForm.isLatestLaunch,
        launchDate: productForm.launchDate,
        accentColor: productForm.accentColor,
        architectureTier: productForm.architectureTier
      });
    }
    setIsProductModalOpen(false);
  };
  const handleSendReply = (e) => {
    e.preventDefault();
    if (!selectedMessage || !replyText.trim()) return;
    replyToMessage(selectedMessage.id, replyText, replyChannel);
    if (replyChannel === "whatsapp" && selectedMessage.phone) {
      const cleanPhone = selectedMessage.phone.replace(/[^0-9]/g, "");
      const encodedMsg = encodeURIComponent(replyText);
      window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, "_blank");
    } else if (replyChannel === "email" && selectedMessage.email) {
      const mailtoLink = `mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}&body=${encodeURIComponent(replyText)}`;
      window.open(mailtoLink, "_blank");
    }
    setReplyText("");
  };
  const handleSaveTestimonial = (e) => {
    e.preventDefault();
    if (!testForm.author || !testForm.quote) return;
    addTestimonial(testForm);
    setIsTestimonialModalOpen(false);
    setTestForm({
      author: "",
      role: "",
      company: "",
      quote: "",
      avatarText: "SK",
      metric: "+150% Velocity",
      productUsed: "Chomotkar Commerce Engine"
    });
  };
  const getChannelBadge = (ch) => {
    switch (ch) {
      case "whatsapp":
        return { label: "WhatsApp", icon: MessageCircle, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" };
      case "messenger":
        return { label: "Messenger", icon: MessageCircle, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" };
      case "instagram":
        return { label: "Instagram", icon: Instagram, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" };
      case "web":
        return { label: "Web Chat", icon: Globe, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" };
      default:
        return { label: "Email", icon: Mail, color: "text-orange-400 bg-orange-500/10 border-orange-500/20" };
    }
  };

  // If not authenticated, require Admin Login Gate
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-xl animate-in fade-in duration-200">
        <div className="relative w-full max-w-md bg-neutral-900/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-950/30 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button to return to public site */}
          <button
            onClick={() => setIsAdminOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors"
            title="Exit to Public Site"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header & Logo */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 mb-2 shadow-inner">
              <Lock className="w-7 h-7 text-orange-400" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white font-syne">
              SKz LAB Admin Console
            </h2>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto">
              Protected authentication gate. Credentials configured in <code className="text-orange-400 font-mono">.env</code>.
            </p>
          </div>

          {/* Mode Switcher: Password or Master PIN */}
          <div className="grid grid-cols-2 p-1 bg-neutral-950 rounded-xl border border-neutral-800/80 mb-5 text-xs font-mono">
            <button
              type="button"
              onClick={() => { setAuthMode("password"); setAuthError(""); }}
              className={`py-2 rounded-lg font-medium transition-all ${
                authMode === "password"
                  ? "bg-neutral-800 text-white font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Password Login
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode("pin"); setAuthError(""); }}
              className={`py-2 rounded-lg font-medium transition-all ${
                authMode === "pin"
                  ? "bg-neutral-800 text-white font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Master PIN
            </button>
          </div>

          {/* Error Banner */}
          {authError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2.5 text-xs text-red-400">
              <ShieldAlert className="w-4 h-4 shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {authMode === "password" ? (
              <>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Admin Username
                  </label>
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="e.g. admin"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-xs outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-xs outline-none transition-all"
                  />
                </div>
              </>
            ) : (
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase text-center">
                  Enter 4-Digit Master PIN
                </label>
                <input
                  type="password"
                  maxLength={6}
                  required
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="••••"
                  className="w-full py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-center font-mono text-2xl tracking-[0.5em] text-white outline-none transition-all"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-lg shadow-orange-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>Unlock Admin Console</span>
            </button>
          </form>

          {/* Vault Info */}
          <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>Vault: <span className="text-emerald-400">ENCRYPTED</span></span>
            <span>Env: <span className="text-neutral-400">Frontend/.env</span></span>
          </div>
        </div>
      </div>
    );
  }

  return <div className="fixed inset-0 z-50 flex flex-col bg-neutral-950 text-neutral-100 overflow-hidden">
      {
    /* Top Admin Header Bar */
  }
      <header className="h-14 px-6 border-b border-neutral-800 bg-neutral-900/90 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-bold text-white tracking-tight">SKz LAB Admin Console</span>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
            PROD_CMS_v2.6
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>AUTHENTICATED</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
            title="Lock and Log Out"
          >
            <LogOut className="w-3.5 h-3.5 text-amber-400" />
            <span>Lock & Log Out</span>
          </button>
          <button
    onClick={() => setIsAdminOpen(false)}
    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
  >
            <span>Exit to Public Site</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {
    /* Main Admin Body */
  }
      <div className="flex-1 flex overflow-hidden">
        {
    /* Left Sidebar Navigation */
  }
        <aside className="w-60 bg-neutral-900/60 border-r border-neutral-800 p-4 space-y-1 shrink-0 overflow-y-auto hidden md:block">
          <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider px-3 mb-2">
            Control Center
          </div>

          <button
    onClick={() => setActiveTab("inbox")}
    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeTab === "inbox" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"}`}
  >
            <span className="flex items-center gap-2.5">
              <Inbox className="w-4 h-4 text-orange-400" />
              <span>Omnichannel Inbox</span>
            </span>
            {messages.filter((m) => m.status === "unread").length > 0 && <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-orange-500 text-white font-bold">
                {messages.filter((m) => m.status === "unread").length}
              </span>}
          </button>

          <button
    onClick={() => setActiveTab("products")}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeTab === "products" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"}`}
  >
            <Boxes className="w-4 h-4 text-cyan-400" />
            <span>SaaS Products CMS</span>
          </button>

          <button
    onClick={() => setActiveTab("overview")}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeTab === "overview" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"}`}
  >
            <LayoutDashboard className="w-4 h-4 text-amber-400" />
            <span>System Telemetry</span>
          </button>

          <button
    onClick={() => setActiveTab("units")}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeTab === "units" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"}`}
  >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Business Units</span>
          </button>

          <button
    onClick={() => setActiveTab("testimonials")}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeTab === "testimonials" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"}`}
  >
            <Quote className="w-4 h-4 text-purple-400" />
            <span>Testimonials Editor</span>
          </button>

          <button
    onClick={() => setActiveTab("appearance")}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeTab === "appearance" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"}`}
  >
            <Sliders className="w-4 h-4 text-pink-400" />
            <span>Theme & Colors</span>
          </button>

          <div className="pt-6 border-t border-neutral-800/80 mt-6 px-3">
            <div className="text-[10px] font-mono text-neutral-500">
              ARCHITECTURE NODE:
            </div>
            <div className="text-xs font-mono text-emerald-400 mt-1">
              Dhaka Foundry Master
            </div>
          </div>
        </aside>

        {
    /* Center / Right Content Panel */
  }
        <main className="flex-1 bg-neutral-950 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {
    /* TAB 1: OMNICHANNEL INBOX & MULTI-PLATFORM REPLY */
  }
          {activeTab === "inbox" && <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Omnichannel Direct Inbox</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Messages received from Web, WhatsApp, Messenger, Instagram, or Email. Reply directly
                    across channels.
                  </p>
                </div>

                {
    /* Filter channel tabs */
  }
                <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-lg border border-neutral-800 text-xs font-mono">
                  {["all", "whatsapp", "email", "messenger", "instagram", "web"].map((ch) => <button
    key={ch}
    onClick={() => setInboxFilter(ch)}
    className={`px-2.5 py-1 rounded transition-colors uppercase ${inboxFilter === ch ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white"}`}
  >
                      {ch}
                    </button>)}
                </div>
              </div>

              {
    /* Inbox Two-Pane View: List on left, Reply & Details on right */
  }
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
                {
    /* Left: Message Items */
  }
                <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-1">
                  {filteredMessages.length === 0 ? <div className="p-8 text-center text-xs text-neutral-500 font-mono">
                      No incoming inquiries matching filter.
                    </div> : filteredMessages.map((msg) => {
    const isSelected = selectedMessage?.id === msg.id;
    const badge = getChannelBadge(msg.channel);
    const BadgeIcon = badge.icon;
    return <div
      key={msg.id}
      onClick={() => {
        setSelectedMessage(msg);
        setReplyChannel(msg.channel);
      }}
      className={`p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? "bg-neutral-900 border-neutral-600 shadow-lg" : "bg-neutral-950/60 hover:bg-neutral-900/60 border-neutral-800/80"}`}
    >
                          <div className="flex items-center justify-between mb-1.5">
                            <span
      className={`px-2 py-0.5 rounded text-[10px] font-mono border flex items-center gap-1 ${badge.color}`}
    >
                              <BadgeIcon className="w-3 h-3" />
                              <span>{badge.label}</span>
                            </span>

                            <span className="text-[10px] font-mono text-neutral-500">
                              {new Date(msg.createdAt).toLocaleDateString()}
                            </span>
                          </div>

                          <h4 className="text-sm font-semibold text-white truncate">
                            {msg.name} {msg.company ? `(${msg.company})` : ""}
                          </h4>
                          <p className="text-xs text-neutral-400 font-medium truncate mt-0.5">
                            {msg.subject}
                          </p>
                          <p className="text-xs text-neutral-500 line-clamp-2 mt-1">
                            {msg.message}
                          </p>

                          <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono pt-2 border-t border-neutral-800/60">
                            <span className={msg.status === "replied" ? "text-emerald-400" : "text-orange-400"}>
                              STATUS: {msg.status.toUpperCase()}
                            </span>
                            {msg.replies.length > 0 && <span className="text-neutral-400">
                                {msg.replies.length} REPLIES SENT
                              </span>}
                          </div>
                        </div>;
  })}
                </div>

                {
    /* Right: Message Details & Direct Multi-Platform Reply Box */
  }
                <div className="lg:col-span-7 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between shadow-xl">
                  {selectedMessage ? <div className="space-y-6">
                      {
    /* Message Header */
  }
                      <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-white">
                              {selectedMessage.name}
                            </h3>
                            {selectedMessage.company && <span className="text-xs text-neutral-400 font-mono">
                                @ {selectedMessage.company}
                              </span>}
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mt-1">
                            <span>Email: {selectedMessage.email}</span>
                            {selectedMessage.phone && <>
                                <span>·</span>
                                <span>Phone: {selectedMessage.phone}</span>
                              </>}
                          </div>
                        </div>

                        <button
    onClick={() => deleteMessage(selectedMessage.id)}
    className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
    title="Delete Message"
  >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {
    /* Subject & Body */
  }
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-orange-400 font-semibold uppercase">
                          Subject: {selectedMessage.subject}
                        </div>
                        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap">
                          {selectedMessage.message}
                        </div>
                      </div>

                      {
    /* Reply History */
  }
                      {selectedMessage.replies.length > 0 && <div className="space-y-2 pt-2 border-t border-neutral-800">
                          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                            Sent Response History:
                          </div>
                          {selectedMessage.replies.map((rep) => {
    const badge = getChannelBadge(rep.channel);
    return <div
      key={rep.id}
      className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 space-y-1"
    >
                                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                                  <span className="text-emerald-400 font-semibold">
                                    DISPATCHED VIA {badge.label.toUpperCase()}
                                  </span>
                                  <span>{new Date(rep.timestamp).toLocaleTimeString()}</span>
                                </div>
                                <p className="text-xs text-neutral-300">{rep.message}</p>
                              </div>;
  })}
                        </div>}

                      {
    /* Reply Form (The exact requirement from user prompt) */
  }
                      <form onSubmit={handleSendReply} className="pt-4 border-t border-neutral-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                            Reply Channel Dispatch:
                          </label>

                          <div className="flex items-center gap-1.5 text-xs font-mono">
                            {["email", "whatsapp", "messenger", "instagram", "web"].map((c) => <button
    key={c}
    type="button"
    onClick={() => setReplyChannel(c)}
    className={`px-2 py-0.5 rounded transition-colors uppercase ${replyChannel === c ? "bg-orange-500 text-white font-bold" : "bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800"}`}
  >
                                {c}
                              </button>)}
                          </div>
                        </div>

                        <textarea
    required
    rows={3}
    value={replyText}
    onChange={(e) => setReplyText(e.target.value)}
    placeholder={`Type your reply to ${selectedMessage.name}. It will be sent via ${replyChannel.toUpperCase()}...`}
    className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-white text-xs outline-none resize-none transition-colors"
  />

                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-neutral-500">
                            Action will trigger native {replyChannel} handler
                          </span>

                          <button
    type="submit"
    className="px-5 py-2 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-colors flex items-center gap-1.5 shadow-md"
  >
                            <Send className="w-3.5 h-3.5" />
                            <span>Dispatch Reply via {replyChannel.toUpperCase()}</span>
                          </button>
                        </div>
                      </form>
                    </div> : <div className="h-full flex items-center justify-center text-xs text-neutral-500 font-mono">
                      Select an inquiry from the left to view details and reply.
                    </div>}
                </div>
              </div>
            </div>}

          {
    /* TAB 2: PRODUCTS CMS */
  }
          {activeTab === "products" && <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <h2 className="text-xl font-bold text-white">SaaS Products Management</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Add, edit, or remove SaaS platforms displayed across the public studio showcase.
                  </p>
                </div>

                <button
    onClick={handleOpenAddProduct}
    className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-500 transition-colors flex items-center gap-1.5"
  >
                  <Plus className="w-4 h-4" />
                  <span>Add New SaaS Product</span>
                </button>
              </div>

              {
    /* Products Table */
  }
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-950 border-b border-neutral-800 font-mono text-neutral-400 uppercase">
                    <tr>
                      <th className="py-3 px-4">Product Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">MRR</th>
                      <th className="py-3 px-4">Latest Launch</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {products.map((prod) => <tr key={prod.id} className="hover:bg-neutral-800/40">
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white">{prod.name}</div>
                          <div className="text-[11px] text-neutral-400 line-clamp-1">
                            {prod.tagline}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-neutral-300">
                          {prod.category}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {prod.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-white tabular-nums">
                          {prod.mrr}
                        </td>
                        <td className="py-3.5 px-4">
                          <button
    onClick={() => updateProduct(prod.id, { isLatestLaunch: !prod.isLatestLaunch })}
    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${prod.isLatestLaunch ? "bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold" : "bg-neutral-800 text-neutral-500"}`}
  >
                            {prod.isLatestLaunch ? "YES (LAUNCHED)" : "NO"}
                          </button>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
    onClick={() => handleOpenEditProduct(prod)}
    className="p-1.5 rounded bg-neutral-800 text-neutral-300 hover:text-white"
    title="Edit Product"
  >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
    onClick={() => deleteProduct(prod.id)}
    className="p-1.5 rounded bg-neutral-800 text-neutral-400 hover:text-red-400"
    title="Delete Product"
  >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>}

          {
    /* TAB 3: SYSTEM TELEMETRY / OVERVIEW */
  }
          {activeTab === "overview" && <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">System Telemetry & Foundry Health</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Total SaaS Engines</div>
                  <div className="text-2xl font-bold text-white mt-1 tabular-nums">
                    {products.length} Products
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-2">100% Operational</div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Aggregate Foundry MRR</div>
                  <div className="text-2xl font-bold text-orange-400 mt-1 tabular-nums">
                    $166,500/mo
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-2">+24% MoM Growth</div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Total User Inquiries</div>
                  <div className="text-2xl font-bold text-cyan-400 mt-1 tabular-nums">
                    {messages.length} Incoming
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-2">
                    {messages.filter((m) => m.status === "replied").length} Replied
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Average Edge Ping</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1 tabular-nums">
                    18.4ms
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-2">Zero dropped packets</div>
                </div>
              </div>

              {
    /* Django & React Stack verification */
  }
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 font-mono text-xs">
                <div className="text-white font-bold text-sm">
                  Active Stack Verification (From Project Blueprints):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300">
                  <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="text-orange-400 font-semibold">Backend:</span> Django REST Core (`chomotkar`), Celery workers, GeoDjango Couriers, Gemini AI Assistant microservice.
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="text-cyan-400 font-semibold">Frontend:</span> React 19 Concurrent Root, Context State, Tailwind CSS v4, Motion Transitions.
                  </div>
                </div>
              </div>
            </div>}

          {
    /* TAB 4: BUSINESS UNITS EDITOR */
  }
          {activeTab === "units" && <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Business Units Content Editor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessUnits.map((unit) => <div
    key={unit.id}
    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3"
  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-orange-400 uppercase">
                        {unit.subtitle}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {unit.teamSize}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white">{unit.title}</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {unit.description}
                    </p>

                    <div className="pt-2 text-xs font-mono text-neutral-400">
                      Flagship: <span className="text-white">{unit.flagship}</span>
                    </div>
                  </div>)}
              </div>
            </div>}

          {
    /* TAB 5: TESTIMONIALS EDITOR */
  }
          {activeTab === "testimonials" && <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <h2 className="text-xl font-bold text-white">Testimonials Management</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Manage testimonials featured in the 3D Coverflow slider.
                  </p>
                </div>

                <button
    onClick={() => setIsTestimonialModalOpen(true)}
    className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-500 transition-colors flex items-center gap-1.5"
  >
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((test) => <div
    key={test.id}
    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 flex flex-col justify-between"
  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400">
                          {test.metric}
                        </span>
                        <button
    onClick={() => deleteTestimonial(test.id)}
    className="text-neutral-500 hover:text-red-400"
  >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-200 italic leading-relaxed">
                        "{test.quote}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-800 text-xs">
                      <div className="font-bold text-white">{test.author}</div>
                      <div className="text-neutral-400">{test.role} · {test.company}</div>
                    </div>
                  </div>)}
              </div>
            </div>}

          {
    /* TAB 6: THEME & COLOR PALETTE EDITOR */
  }
          {activeTab === "appearance" && <div className="space-y-6 max-w-xl">
              <h2 className="text-xl font-bold text-white">Appearance & Color Grading</h2>

              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                <div className="text-xs font-mono text-neutral-400 uppercase">
                  1. Global Mode:
                </div>
                <div className="flex items-center gap-3">
                  <button
    onClick={() => setThemeMode("dark")}
    className={`px-4 py-2 rounded-lg text-xs font-medium border ${theme.mode === "dark" ? "bg-neutral-800 text-white border-orange-500 font-semibold" : "bg-neutral-950 text-neutral-400 border-neutral-800"}`}
  >
                    Dark Theme (Default Obsidian)
                  </button>
                  <button
    onClick={() => setThemeMode("light")}
    className={`px-4 py-2 rounded-lg text-xs font-medium border ${theme.mode === "light" ? "bg-neutral-800 text-white border-orange-500 font-semibold" : "bg-neutral-950 text-neutral-400 border-neutral-800"}`}
  >
                    Light Theme
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                <div className="text-xs font-mono text-neutral-400 uppercase">
                  2. Custom Hex Colors:
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-neutral-400 block mb-1">
                      Primary Brand Color
                    </label>
                    <div className="flex items-center gap-2">
                      <input
    type="color"
    value={theme.primaryColor}
    onChange={(e) => setCustomColors(e.target.value, theme.secondaryColor)}
    className="w-10 h-8 rounded border border-neutral-700 bg-transparent cursor-pointer"
  />
                      <span className="font-mono text-xs">{theme.primaryColor}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-400 block mb-1">
                      Secondary Cyan/Accent Color
                    </label>
                    <div className="flex items-center gap-2">
                      <input
    type="color"
    value={theme.secondaryColor}
    onChange={(e) => setCustomColors(theme.primaryColor, e.target.value)}
    className="w-10 h-8 rounded border border-neutral-700 bg-transparent cursor-pointer"
  />
                      <span className="font-mono text-xs">{theme.secondaryColor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </main>
      </div>

      {
    /* Product Add / Edit Modal */
  }
      {isProductModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-xl w-full p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white">
                {editingProduct ? "Edit SaaS Product" : "Add New SaaS Platform"}
              </h3>
              <button
    onClick={() => setIsProductModalOpen(false)}
    className="p-1 rounded text-neutral-400 hover:text-white"
  >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-mono mb-1">Product Title</label>
                <input
    type="text"
    required
    value={productForm.name}
    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
    placeholder="e.g. Chomotkar Commerce"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none focus:border-orange-500"
  />
              </div>

              <div>
                <label className="block text-neutral-400 font-mono mb-1">Tagline</label>
                <input
    type="text"
    required
    value={productForm.tagline}
    onChange={(e) => setProductForm({ ...productForm, tagline: e.target.value })}
    placeholder="Autonomous Multi-Tenant E-Commerce SaaS"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none focus:border-orange-500"
  />
              </div>

              <div>
                <label className="block text-neutral-400 font-mono mb-1">Description</label>
                <textarea
    required
    rows={3}
    value={productForm.description}
    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none focus:border-orange-500"
  />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 font-mono mb-1">Category</label>
                  <select
    value={productForm.category}
    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  >
                    <option value="Enterprise SaaS">Enterprise SaaS</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Cloud Infra">Cloud Infra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 font-mono mb-1">Status</label>
                  <select
    value={productForm.status}
    onChange={(e) => setProductForm({ ...productForm, status: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  >
                    <option value="Live">Live</option>
                    <option value="Beta">Beta</option>
                    <option value="Enterprise Pilot">Enterprise Pilot</option>
                    <option value="In Incubation">In Incubation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 font-mono mb-1">MRR</label>
                  <input
    type="text"
    value={productForm.mrr}
    onChange={(e) => setProductForm({ ...productForm, mrr: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-mono mb-1">Active Users</label>
                  <input
    type="text"
    value={productForm.activeUsers}
    onChange={(e) => setProductForm({ ...productForm, activeUsers: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-mono mb-1">Uptime SLA</label>
                  <input
    type="text"
    value={productForm.uptime}
    onChange={(e) => setProductForm({ ...productForm, uptime: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-mono mb-1">
                  Features (comma separated)
                </label>
                <input
    type="text"
    value={productForm.featuresText}
    onChange={(e) => setProductForm({ ...productForm, featuresText: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
              </div>

              <div>
                <label className="block text-neutral-400 font-mono mb-1">
                  Tech Stack (comma separated)
                </label>
                <input
    type="text"
    value={productForm.techStackText}
    onChange={(e) => setProductForm({ ...productForm, techStackText: e.target.value })}
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
    type="checkbox"
    checked={productForm.isLatestLaunch}
    onChange={(e) => setProductForm({ ...productForm, isLatestLaunch: e.target.checked })}
    className="rounded bg-neutral-950 border-neutral-800 text-orange-500"
  />
                  <span>Show in Latest Launches</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
    type="checkbox"
    checked={productForm.isFeatured}
    onChange={(e) => setProductForm({ ...productForm, isFeatured: e.target.checked })}
    className="rounded bg-neutral-950 border-neutral-800 text-orange-500"
  />
                  <span>Featured Product</span>
                </label>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
    type="button"
    onClick={() => setIsProductModalOpen(false)}
    className="px-4 py-2 rounded-lg text-neutral-400 hover:text-white"
  >
                  Cancel
                </button>
                <button
    type="submit"
    className="px-5 py-2 rounded-lg text-white font-semibold bg-orange-600 hover:bg-orange-500"
  >
                  Save Platform
                </button>
              </div>
            </form>
          </div>
        </div>}

      {
    /* Testimonial Add Modal */
  }
      {isTestimonialModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white">Add Verification Testimonial</h3>
              <button
    onClick={() => setIsTestimonialModalOpen(false)}
    className="p-1 rounded text-neutral-400 hover:text-white"
  >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTestimonial} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Author Name *</label>
                <input
    type="text"
    required
    value={testForm.author}
    onChange={(e) => setTestForm({ ...testForm, author: e.target.value })}
    placeholder="e.g. Sayham Rahman"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Role</label>
                  <input
    type="text"
    required
    value={testForm.role}
    onChange={(e) => setTestForm({ ...testForm, role: e.target.value })}
    placeholder="Chief Technology Officer"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Company</label>
                  <input
    type="text"
    required
    value={testForm.company}
    onChange={(e) => setTestForm({ ...testForm, company: e.target.value })}
    placeholder="Apex Technologies"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Quote *</label>
                <textarea
    required
    rows={3}
    value={testForm.quote}
    onChange={(e) => setTestForm({ ...testForm, quote: e.target.value })}
    placeholder="Describe architectural impact or quantifiable improvements..."
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none resize-none"
  />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Metric Tag</label>
                  <input
    type="text"
    value={testForm.metric}
    onChange={(e) => setTestForm({ ...testForm, metric: e.target.value })}
    placeholder="+90% Checkout Speed"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Product Used</label>
                  <input
    type="text"
    value={testForm.productUsed}
    onChange={(e) => setTestForm({ ...testForm, productUsed: e.target.value })}
    placeholder="Chomotkar Commerce Engine"
    className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white outline-none"
  />
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex justify-end gap-3">
                <button
    type="button"
    onClick={() => setIsTestimonialModalOpen(false)}
    className="px-4 py-2 text-neutral-400 hover:text-white"
  >
                  Cancel
                </button>
                <button
    type="submit"
    className="px-5 py-2 font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg"
  >
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
};
