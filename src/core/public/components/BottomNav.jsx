import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { IoCardOutline } from "react-icons/io5";
import { LuUser, LuWallet } from "react-icons/lu";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", icon: <FiHome /> },
    { name: "Wallet", icon: <LuWallet /> },
    { name: "Payments", icon: <IoCardOutline /> },
    { name: "Profile", icon: <LuUser /> },
  ];

  return (
    <div className="fixed bottom-0 pb-5 left-0 w-full bg-white shadow-md flex justify-around py-2 md:px-96 px-0 z-50">
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          className={`flex flex-col items-center justify-center cursor-pointer px-3 py-2 rounded-xl ${
            activeTab === item.name ? "text-blue-600 bg-blue-100" : "text-gray-500"
          }`}
        >
          <div
            className={`text-2xl mb-1 ${
              activeTab === item.name ? " rounded-full" : ""
            }`}
          >
            {item.icon}
          </div>
          <span className="text-xs font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
