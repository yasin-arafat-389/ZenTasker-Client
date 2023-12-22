import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import swal from "sweetalert";
import { ImSpinner9 } from "react-icons/im";
import { authContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddTask = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let { user } = useContext(authContext);
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    data.email = user?.email;
    data.status = "to do";

    await axios.post("http://localhost:5000/add-task", data).then(() => {
      setLoading(false);
      toast.success(`Task Added Successfully 👍`, {
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
      navigate("/dashboard/all-task");
    });
  };

  useEffect(() => {
    if (errors.priority) {
      swal("Priority is required", "", "warning");
    }
  }, [errors.priority]);

  useEffect(() => {
    if (errors.description) {
      swal("Description is required", "", "warning");
    }
  }, [errors.description]);

  useEffect(() => {
    if (errors.deadline) {
      swal("Deadline is required", "", "warning");
    }
  }, [errors.deadline]);

  useEffect(() => {
    if (errors.title) {
      swal("Title is required", "", "warning");
    }
  }, [errors.title]);

  return (
    <div className="ml-0 md:ml-0 lg:ml-10">
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div color="transparent">
          <div className={`mb-1 flex flex-col gap-6 `}>
            <Input
              label="Title"
              {...register("title", { required: "Title" })}
            />

            <Textarea
              label="Description"
              {...register("description", { required: "Description" })}
            />

            <Input
              label="Deadline"
              type="date"
              {...register("deadline", { required: "Deadline" })}
            />

            <Controller
              control={control}
              name="priority"
              rules={{ required: "Deadline" }}
              render={({ field }) => (
                <Select label="Priority" {...field}>
                  <Option value="Low">Low</Option>
                  <Option value="Moderate">Moderate</Option>
                  <Option value="High">High</Option>
                </Select>
              )}
            />
          </div>

          <Button
            type="submit"
            className="mt-6"
            fullWidth
            disabled={loading ? true : false}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-4">
                <ImSpinner9 className="animate-spin text-[20px]" />
                Adding Task
              </div>
            ) : (
              "Add Task"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
