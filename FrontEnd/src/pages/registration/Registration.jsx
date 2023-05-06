import "./registration.css";
import Personal from "./../../components/personalDetail/Personal";
import Contact from "./../../components/contactDetail/Contact";
import Address from "./../../components/address/Address";
import Other from "./../../components/otherDetail/Other";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationSchema from "../../components/validation/ValidationSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:8080/user", data);
      console.log(response);
      reset();
      navigate("/data_table"); // navigate to data_table page on successful submission
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    reset();
  };

  return (
    <div className="user__registration">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__container">
          <Personal register={register} control={control} errors={errors} />
          <Contact register={register} control={control} errors={errors} />
          <Address register={register} control={control} />
          <Other register={register} control={control} />
          <Button className="btn-1" variant="contained" onClick={onCancel}>
            CANCEL
          </Button>

          <Button type="submit" className="btn-2" variant="contained">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
