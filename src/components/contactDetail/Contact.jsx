import "./contact.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";

const Contact = ({ register, control, errors }) => {
  return (
    <div className="contact__detail">
      <h3>
        {" "}
        <u>Contact Details</u> :
      </h3>
      <div className="contact__detail-input">
        <div className="input__field">
          <label htmlFor="name">Guardian Details</label>
          <FormControl style={{ width: "120px" }}>
            <InputLabel id="demo-simple-select-label">Relation</InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Relation"
                  value={field.value || ""}
                  style={{ height: "39px" }}
                  onChange={field.onChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="Father">Father</MenuItem>
                  <MenuItem value="Mother">Mother</MenuItem>
                  <MenuItem value="Spouse">Spouse</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              )}
              name="relation"
              control={control}
              defaultValue=""
            />
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Enter Guardian Name"
            variant="outlined"
            size="small"
            name="guardian_name"
            InputProps={{
              style: { height: "39px" },
            }}
            style={{ width: "250px" }}
            {...register("guardian_name")}
          />
        </div>
        <div className="input__field">
          <label htmlFor="name">Email</label>
          <div className="error__display">
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              InputProps={{
                style: { height: "39px" },
              }}
              style={{ width: "250px" }}
              {...register("email")}
            />
            {errors.email && (
              <span className="error__display-message">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="input__field">
          <label htmlFor="name">Emergency Contact Number</label>
          <div className="error__display">
            <TextField
              id="outlined-basic"
              label="Emergency Number"
              name="econtact"
              variant="outlined"
              size="small"
              InputProps={{
                style: { height: "39px" },
              }}
              style={{ width: "250px" }}
              {...register("econtact")}
            />
            {errors.econtact && (
              <span className="error__display-message">
                {errors.econtact.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
