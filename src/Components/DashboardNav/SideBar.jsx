import { List, ListItemPrefix } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import toast from "react-hot-toast";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";

const SideBar = () => {
  let { logOut, user } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged out!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hidden md:hidden lg:block">
      <div>
        <div className="w-full max-w-[20rem] bg-yellow-200 rounded-xl p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4 flex items-center gap-3">
            <img
              src={user?.photoURL}
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <h1 className="text-xl font-bold">{user?.displayName}</h1>
          </div>
          <List>
            <NavLink to="/dashboard/all-task">
              <div className="flex p-3 font-bold">
                <ListItemPrefix>
                  <FaTasks fontSize={"20"} />
                </ListItemPrefix>
                Manage Task
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
