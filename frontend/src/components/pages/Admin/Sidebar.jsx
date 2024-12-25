import { FaChartLine,  FaPlusCircle, FaSignOutAlt,FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen  bg-green-800 text-white flex flex-col items-center p-4 space-y-6">
      {/* TODO: make cursive font */}
      <div className="text-lg font-logoFont  mb-8 text-center  ">SAC SNACKS WALLET</div>

      {/* Navigation Icons and Text */}
      <div className="flex flex-col space-y-8">
        {/* Sales */}
        <div className="flex flex-col items-center">
          <button className="p-3 rounded-full hover:bg-gray-700">
            <FaChartLine size={24} />
          </button>
          <span className="text-xs mt-2">Sales</span>
        </div>

        {/* Servers */}
        <div className="flex flex-col items-center">
          <button className="p-3 rounded-full hover:bg-gray-700">
            <FaUser size={24} />
          </button>
          <span className="text-xs mt-2">Caterer</span>
        </div>

        {/* Add Items */}
        <div className="flex flex-col items-center">
          <button className="p-3 rounded-full hover:bg-gray-700">
            <FaPlusCircle size={24} />
          </button>
          <span className="text-xs mt-2">Add Items</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Logout */}
      <div className="flex flex-col items-center">
        <button className="p-3 rounded-full hover:bg-gray-700">
          <FaSignOutAlt size={24} />
        </button>
        <span className="text-xs mt-2">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
