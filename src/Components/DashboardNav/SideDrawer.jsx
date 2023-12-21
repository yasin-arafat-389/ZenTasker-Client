import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../Context/AuthContext";
import { Card, Drawer, List, ListItemPrefix } from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosAddCircle, IoMdArrowRoundBack } from "react-icons/io";
import { FaTasks } from "react-icons/fa";

const SideDrawer = () => {
  const [open, setOpen] = React.useState(false);

  let { logOut, user } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Successfully Logged out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <div>
        <GiHamburgerMenu onClick={openDrawer} className="text-[25px]" />

        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <div className="mb-2 p-4 flex items-center gap-3">
                <img
                  src={user?.photoURL}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <h1 className="text-xl font-bold">{user?.displayName}</h1>
              </div>
            </div>
            <List>
              <NavLink to="/dashboard/all-task">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <FaTasks fontSize={"20"} />
                  </ListItemPrefix>
                  All Task
                </div>
              </NavLink>

              <NavLink to="/dashboard/add-task">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <IoIosAddCircle fontSize={"20"} />
                  </ListItemPrefix>
                  Add Task
                </div>
              </NavLink>

              <NavLink to="/">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <IoMdArrowRoundBack fontSize={"20"} />
                  </ListItemPrefix>
                  Back to site
                </div>
              </NavLink>

              <button className="bg-transparent" onClick={handleLogOut}>
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <FaPowerOff fontSize={"20"} />
                  </ListItemPrefix>
                  Sign Out
                </div>
              </button>
            </List>
          </Card>
        </Drawer>
      </div>
    </div>
  );
};

export default SideDrawer;
