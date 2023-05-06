import "./personal.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";

const Personal = ({ register, control, errors }) => {
  return (
    <div className="personal__detail">
      <h3>
        {" "}
        <u>Personal Details</u> :
      </h3>
      <div className="personal__detail-input">
        <div className="input__field">
          <label htmlFor="name">
            Name<span className="required-asterisk">*</span>
          </label>
          <div className="error__display">
            <TextField
              id="outlined-basic"
              name="name"
              label="Enter Name"
              variant="outlined"
              size="small"
              InputProps={{
                style: { height: "39px" },
              }}
              style={{ width: "350px" }}
              {...register("name")}
            />
            {errors.name && (
              <span className="error__display-message">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        <div className="input__field">
          <label htmlFor="name">
            Date of Birth or Age
            <span className="required-asterisk">*</span>
          </label>
          <div className="error__display">
            <TextField
              id="outlined-basic"
              label="DD/MM/YYYY or Age"
              variant="outlined"
              size="small"
              name="age"
              InputProps={{
                style: { height: "39px" },
              }}
              style={{ width: "300px" }}
              {...register("age")}
            />
            {errors.age && (
              <span className="error__display-message">
                {errors.age.message}
              </span>
            )}
          </div>
        </div>
        <div className="input__field">
          <label htmlFor="name">
            Sex<span className="required-asterisk">*</span>
          </label>
          <FormControl style={{ width: "150px" }}>
            <InputLabel id="select__sex-label">Enter Sex</InputLabel>
            <Controller
              render={({ field }) => (
                <div className="error__display">
                  <Select
                    {...field}
                    labelId="select__sex-label"
                    label="Enter Sex"
                    value={field.value || ""}
                    onChange={field.onChange}
                    style={{ height: "39px" }}
                  >
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  {errors.sex && (
                    <span className="error__display-message">
                      {errors.sex.message}
                    </span>
                  )}
                </div>
              )}
              name="sex"
              control={control}
              defaultValue=""
            />
          </FormControl>
        </div>
      </div>
      <div className="personal__detail-input">
        <div className="input__field">
          <label htmlFor="name">Mobile</label>
          <div className="error__display">
            <TextField
              label="Enter Mobile"
              name="mobile"
              variant="outlined"
              size="small"
              InputProps={{
                style: { height: "39px" },
              }}
              style={{ width: "350px" }}
              {...register("mobile")}
            />
            {errors.mobile && (
              <span className="error__display-message">
                {errors.mobile.message}
              </span>
            )}
          </div>
        </div>
        <div className="input__field">
          <label htmlFor="name">Govt Issued ID</label>
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="select__govt-id-label">ID Type</InputLabel>

            <Controller
              render={({ field }) => (
                <div className="error__display">
                  <Select
                    {...field}
                    labelId="select__govt-id-label"
                    id="select__govt-id"
                    label="ID Type"
                    value={field.value || ""}
                    style={{ height: "39px" }}
                    onChange={field.onChange}
                  >
                    <MenuItem value="Aadhar Card">Aadhar Card</MenuItem>
                    <MenuItem value="Pan Card">Pan Card</MenuItem>
                    <MenuItem value="Voter-ID">Voter ID</MenuItem>
                  </Select>
                  {errors.id_Type && (
                    <span className="error__display-message">
                      {errors.id_Type.message}
                    </span>
                  )}
                </div>
              )}
              name="id_Type"
              control={control}
              defaultValue=""
            />
          </FormControl>
          <div className="error__display">
            <TextField
              label="Enter Govt ID"
              variant="outlined"
              name="id_No"
              size="small"
              InputProps={{
                style: { height: "39px" },
              }}
              style={{ width: "415px" }}
              {...register("id_No")}
            />
            {errors.id_No && (
              <span className="error__display-message">
                {errors.id_No.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
