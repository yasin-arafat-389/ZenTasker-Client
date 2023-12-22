import axios from "axios";
import { useContext, useState } from "react";
import { authContext } from "../../Context/AuthContext";
import { ImSpinner9 } from "react-icons/im";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Dialog,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { CirclesWithBar } from "react-loader-spinner";
import { MdDeleteForever } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useQuery } from "@tanstack/react-query";

const AllTasks = () => {
  let { user } = useContext(authContext);
  let [statusUpdateLoading, setStatusUpdateLoading] = useState(false);

  let {
    data: totalTasks = [],
    isLoading: totalTasksLoading,
    refetch: totalTasksRefetch,
  } = useQuery({
    queryKey: ["myTotalTasks"],
    queryFn: async () => {
      let res = await axios
        .get(
          `https://zen-tasker-server.vercel.app/my-tasks/to-do/all?email=${user?.email}`
        )
        .then();
      return res.data;
    },
  });

  let {
    data: myTasks = [],
    isLoading: myTasksLoading,
    refetch,
  } = useQuery({
    queryKey: ["myTasks"],
    queryFn: async () => {
      let res = await axios
        .get(
          `https://zen-tasker-server.vercel.app/my-tasks/to-do?email=${user?.email}`
        )
        .then();
      return res.data;
    },
  });

  let {
    data: ongoingTask = [],
    isLoading: ongoingLoading,
    refetch: ongoingRefetch,
  } = useQuery({
    queryKey: ["ongoingTasks"],
    queryFn: async () => {
      let res = await axios
        .get(
          `https://zen-tasker-server.vercel.app/ongoing-task?email=${user?.email}`
        )
        .then();
      return res.data;
    },
  });

  let {
    data: completedTask = [],
    isLoading: completedTaskLoading,
    refetch: completedRefetch,
  } = useQuery({
    queryKey: ["completedTasks"],
    queryFn: async () => {
      let res = await axios
        .get(
          `https://zen-tasker-server.vercel.app/completed-task?email=${user?.email}`
        )
        .then();
      return res.data;
    },
  });

  // Task deletion operation
  let handleDeleteTask = async (id) => {
    swal({
      title: "Are you sure you want to delete this task?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://zen-tasker-server.vercel.app/delete-task?id=${id}`)
          .then(() => {
            refetch();
            ongoingRefetch();
            completedRefetch();
            totalTasksRefetch();
            toast.success(`Task has been deleted!!`, {
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
          });
      }
    });
  };

  // Task update operation
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let handleOpenModal = async (data) => {
    setOpen(!open);
    setUpdatedTask(data);
  };

  let handleUpdateTask = async () => {
    setLoading(true);
    await axios
      .post(`https://zen-tasker-server.vercel.app/update-task`, updatedTask)
      .then(() => {
        toast.success(`Task successfully updated`, {
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
        setLoading(false);
        setOpen(!open);
        refetch();
        ongoingRefetch();
        completedRefetch();
      });
  };

  // Drag and drop
  let handleDragAndDrop = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    if (destination.droppableId === "OngoingList") {
      if (source.droppableId === "ToDoList") {
        myTasks.splice(source.index, 1);
      } else if (source.droppableId === "CompletedList") {
        completedTask.splice(source.index, 1);
      }

      setStatusUpdateLoading(true);
      axios
        .post("https://zen-tasker-server.vercel.app/update-status-to-ongoing", {
          status: "ongoing",
          id: result.draggableId,
        })
        .then(() => {
          completedRefetch();
          ongoingRefetch();
          refetch();
          setStatusUpdateLoading(false);
          toast.success(`Task has been moved to Ongoing!!`, {
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
        });
    }

    if (destination.droppableId === "CompletedList") {
      if (source.droppableId === "ToDoList") {
        myTasks.splice(source.index, 1);
      } else if (source.droppableId === "OngoingList") {
        ongoingTask.splice(source.index, 1);
      }

      setStatusUpdateLoading(true);
      axios
        .post(
          "https://zen-tasker-server.vercel.app/update-status-to-completed",
          {
            status: "completed",
            id: result.draggableId,
          }
        )
        .then(() => {
          completedRefetch();
          ongoingRefetch();
          refetch();
          setStatusUpdateLoading(false);
          toast.success(`Task has been moved to Completed!!`, {
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
        });
    }

    if (destination.droppableId === "ToDoList") {
      if (source.droppableId === "OngoingList") {
        ongoingTask.splice(source.index, 1);
      } else if (source.droppableId === "CompletedList") {
        completedTask.splice(source.index, 1);
      }

      setStatusUpdateLoading(true);
      axios
        .post("https://zen-tasker-server.vercel.app/update-status-to-todo", {
          status: "to do",
          id: result.draggableId,
        })
        .then(() => {
          completedRefetch();
          ongoingRefetch();
          refetch();
          setStatusUpdateLoading(false);
          toast.success(`Task has been moved to To Do!!`, {
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
        });
    }
  };

  if (
    totalTasksLoading ||
    myTasksLoading ||
    ongoingLoading ||
    completedTaskLoading ||
    statusUpdateLoading
  ) {
    return (
      <div className="flex h-screen justify-center items-center">
        <CirclesWithBar
          height="300"
          width="300"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
      <div>
        {totalTasks.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-7">
            <img
              src="https://i.ibb.co/gFyvdXD/unfinished-task-7557377-6168994.png"
              className="w-[300px]"
            />
            <h1 className="text-2xl font-bold">You currently have no tasks</h1>
            <Link to="/dashboard/add-task">
              <Button className="bg-orange-500 text-black text-lg font-bold">
                Add Task Now
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center gap-2 mb-5">
              <FaInfoCircle className="text-orange-600 text-xl" />
              <h1 className="text-gray-600 font-bold">
                Please drag and drop tasks between three columns to update
                status of the task
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {/* To Do */}
              <Droppable droppableId="ToDoList">
                {(provided) => (
                  <div
                    className="rounded-lg border-2 border-gray-500"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="title bg-gray-500  rounded-md rounded-b-none">
                      <h1 className="text-2xl font-bold text-white text-center py-2">
                        To Do
                      </h1>
                    </div>

                    {/* Tasks */}
                    <div className="tasks-container grid-cols-1 gap-2">
                      {myTasks.map((item, index) => (
                        <Draggable
                          key={item?._id}
                          draggableId={item?._id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="w-[80%] cursor-move mx-auto mt-2 flex flex-col justify-between items-start bg-yellow-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
                                <div className="w-full">
                                  <div className="flex gap-1 justify-between">
                                    <h4 className="text-gray-800 font-bold mb-3 ">
                                      {item?.title}
                                    </h4>
                                    <button
                                      onClick={() =>
                                        handleDeleteTask(item?._id)
                                      }
                                      className="w-8 h-8 flex justify-center items-center bg-red-500 p-1 rounded-full"
                                    >
                                      <MdDeleteForever className="text-[40px] text-white" />
                                    </button>
                                  </div>
                                  <p className="text-gray-800 text-sm">
                                    {item?.description}
                                  </p>
                                </div>

                                <div className="my-3">
                                  <h1 className="flex gap-3 justify-center items-center">
                                    <span className="text-gray-700 font-bold">
                                      Priority:
                                    </span>{" "}
                                    <Chip
                                      size="md"
                                      className={`${
                                        (item?.priority === "Low" &&
                                          "bg-green-600") ||
                                        (item?.priority === "Moderate" &&
                                          "bg-orange-600") ||
                                        (item?.priority === "High" &&
                                          "bg-red-600")
                                      }`}
                                      value={item?.priority}
                                    />
                                  </h1>
                                </div>

                                <div className="w-full flex flex-col items-start">
                                  <div className="flex items-center justify-between text-gray-800 w-full">
                                    <p className="text-sm text-gray-800 font-bold">
                                      Deadline: {item?.deadline}
                                    </p>
                                    <button
                                      onClick={() => handleOpenModal(item)}
                                      className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
                                      aria-label="edit note"
                                      role="button"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-pencil"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                        <line
                                          x1="13.5"
                                          y1="6.5"
                                          x2="17.5"
                                          y2="10.5"
                                        ></line>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>

              {/* Update task modal */}
              <Dialog
                size="xs"
                open={open}
                handler={handleOpenModal}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                  <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                      Sign In
                    </Typography>

                    <Input
                      label="Title"
                      name="title"
                      defaultValue={updatedTask?.title}
                      onChange={handleInputChange}
                      size="lg"
                    />

                    <Textarea
                      label="Description"
                      defaultValue={updatedTask?.description}
                      onChange={handleInputChange}
                      name="description"
                      size="lg"
                    />

                    <Input
                      label="Deadline"
                      type="date"
                      defaultValue={updatedTask?.deadline}
                      onChange={handleInputChange}
                      name="deadline"
                      size="lg"
                    />

                    <label htmlFor="priority_">Priority</label>
                    <select
                      label="Priority"
                      id="priority_"
                      className="outline-none border border-1 rounded-lg border-gray-400 p-2"
                      defaultValue={updatedTask?.priority}
                      onChange={handleInputChange}
                      name="priority"
                    >
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                    </select>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button
                      variant="gradient"
                      onClick={handleUpdateTask}
                      fullWidth
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <div className="flex justify-center items-center gap-4">
                          <ImSpinner9 className="animate-spin text-[20px]" />
                          Updating
                        </div>
                      ) : (
                        "Update Task"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </Dialog>

              {/* Ongoing */}
              <Droppable droppableId="OngoingList">
                {(provided) => (
                  <div
                    className="rounded-lg border-2 border-blue-500"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="title bg-blue-500 rounded-md rounded-b-none">
                      <h1 className="text-2xl font-bold text-white text-center py-2">
                        Ongoing
                      </h1>
                    </div>

                    <div className="tasks-container grid-cols-1 gap-2">
                      {ongoingTask?.map((item, index) => (
                        <Draggable
                          key={item?._id}
                          draggableId={item?._id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="w-[80%] cursor-move mx-auto mt-2 flex flex-col justify-between items-start bg-yellow-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
                                <div className="w-full">
                                  <div className="flex gap-1 justify-between">
                                    <h4 className="text-gray-800 font-bold mb-3 ">
                                      {item?.title}
                                    </h4>
                                    <button
                                      onClick={() =>
                                        handleDeleteTask(item?._id)
                                      }
                                      className="w-8 h-8 flex justify-center items-center bg-red-500 p-1 rounded-full"
                                    >
                                      <MdDeleteForever className="text-[40px] text-white" />
                                    </button>
                                  </div>
                                  <p className="text-gray-800 text-sm">
                                    {item?.description}
                                  </p>
                                </div>

                                <div className="my-3">
                                  <h1 className="flex gap-3 justify-center items-center">
                                    <span className="text-gray-700 font-bold">
                                      Priority:
                                    </span>{" "}
                                    <Chip
                                      size="md"
                                      className={`${
                                        (item?.priority === "Low" &&
                                          "bg-green-600") ||
                                        (item?.priority === "Moderate" &&
                                          "bg-orange-600") ||
                                        (item?.priority === "High" &&
                                          "bg-red-600")
                                      }`}
                                      value={item?.priority}
                                    />
                                  </h1>
                                </div>

                                <div className="w-full flex flex-col items-start">
                                  <div className="flex items-center justify-between text-gray-800 w-full">
                                    <p className="text-sm text-gray-800 font-bold">
                                      Deadline: {item?.deadline}
                                    </p>
                                    <button
                                      onClick={() => handleOpenModal(item)}
                                      className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
                                      aria-label="edit note"
                                      role="button"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-pencil"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                        <line
                                          x1="13.5"
                                          y1="6.5"
                                          x2="17.5"
                                          y2="10.5"
                                        ></line>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>

              {/* Completed */}
              <Droppable droppableId="CompletedList">
                {(provided) => (
                  <div
                    className="rounded-lg border-2 border-green-500"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="title bg-green-500 rounded-md rounded-b-none">
                      <h1 className="text-2xl font-bold text-white text-center py-2">
                        Completed
                      </h1>
                    </div>

                    <div className="tasks-container grid-cols-1 gap-2">
                      {completedTask?.map((item, index) => (
                        <Draggable
                          key={item?._id}
                          draggableId={item?._id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="w-[80%] cursor-move mx-auto mt-2 flex flex-col justify-between items-start bg-yellow-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
                                <div className="w-full">
                                  <div className="flex gap-1 justify-between">
                                    <h4 className="text-gray-800 font-bold mb-3 ">
                                      {item?.title}
                                    </h4>
                                    <button
                                      onClick={() =>
                                        handleDeleteTask(item?._id)
                                      }
                                      className="w-8 h-8 flex justify-center items-center bg-red-500 p-1 rounded-full"
                                    >
                                      <MdDeleteForever className="text-[40px] text-white" />
                                    </button>
                                  </div>
                                  <p className="text-gray-800 text-sm">
                                    {item?.description}
                                  </p>
                                </div>

                                <div className="my-3">
                                  <h1 className="flex gap-3 justify-center items-center">
                                    <span className="text-gray-700 font-bold">
                                      Priority:
                                    </span>{" "}
                                    <Chip
                                      size="md"
                                      className={`${
                                        (item?.priority === "Low" &&
                                          "bg-green-600") ||
                                        (item?.priority === "Moderate" &&
                                          "bg-orange-600") ||
                                        (item?.priority === "High" &&
                                          "bg-red-600")
                                      }`}
                                      value={item?.priority}
                                    />
                                  </h1>
                                </div>

                                <div className="w-full flex flex-col items-start">
                                  <div className="flex items-center justify-between text-gray-800 w-full">
                                    <p className="text-sm text-gray-800 font-bold">
                                      Deadline: {item?.deadline}
                                    </p>
                                    <button
                                      onClick={() => handleOpenModal(item)}
                                      className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
                                      aria-label="edit note"
                                      role="button"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-pencil"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                        <line
                                          x1="13.5"
                                          y1="6.5"
                                          x2="17.5"
                                          y2="10.5"
                                        ></line>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          </>
        )}
      </div>
    </DragDropContext>
  );
};

export default AllTasks;
