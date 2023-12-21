import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authContext } from "../../Context/AuthContext";

const ProfileMenu = () => {
  let { user, logOut } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success(`Successfully Logged Out!!`, {
          style: {
            border: "2px solid green",
            padding: "8px",
            color: "#713200",
          },
          iconTheme: {
            primary: "green",
            secondary: "#FFFAEE",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let goToDashboard = () => {
    navigate("/dashboard/all-task");
  };

  const profileMenuItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard fontSize={"20px"} />,
      action: goToDashboard,
    },

    {
      label: "Sign Out",
      icon: <AiOutlinePoweroff fontSize={"20px"} />,
      action: handleLogOut,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://i.ibb.co/HN9NtYY/user.png"
            }
          />
          <BsChevronDown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {profileMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.action}
            className="flex items-center gap-4 text-[15px] font-bold"
          >
            <span>{item.icon}</span>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
