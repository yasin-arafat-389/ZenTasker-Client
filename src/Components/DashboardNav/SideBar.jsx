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
  let { logOut } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/sign-in");
        toast.success("Successfully Logged out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hidden md:hidden lg:block">
      <div>
        <div className="w-full max-w-[20rem] bg-yellow-200 rounded-xl p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <img src="https://i.ibb.co/q7L0zZ5/fit-Sync-prev-ui.png" alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
