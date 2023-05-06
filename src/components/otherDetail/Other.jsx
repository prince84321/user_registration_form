import "./other.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import data from "../../DummyData";
import { Controller } from "react-hook-form";

const Other = ({ register, control }) => {
  return (
    <div className="other__detail">
      <h3>
        {" "}
        <u>Other Details</u> :
      </h3>
      <div className="other__detail-input">
        <div className="input__field">
          <label htmlFor="name">Occupation</label>

          <TextField
            label="Enter Occupation"
            name="occupation"
            variant="outlined"
            size="small"
            InputProps={{
              style: { height: "39px" },
            }}
            style={{ width: "270px" }}
            {...register("occupation")}
          />
        </div>
        <div className="input__field">
          <label htmlFor="name">Religion</label>
          <FormControl style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">
              Enter Religion
            </InputLabel>

            <Controller
              render={({ field }) => (
                <Select
                  value={field.value || ""}
                  labelId="demo-simple-select-label"
                  id="religion"
                  label="Enter Religion"
                  style={{ height: "39px" }}
                  onChange={field.onChange}
                >
                  <MenuItem value="Hinduism">Hinduism</MenuItem>
                  <MenuItem value="Islam">Islam</MenuItem>
                  <MenuItem value="Christianity">Christianity</MenuItem>
                  <MenuItem value="Sikhism">Sikhism</MenuItem>
                  <MenuItem value="Buddhism">Buddhism</MenuItem>
                  <MenuItem value="Jainism">Jainism</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              )}
              name="religion"
              control={control}
              defaultValue=""
            />
          </FormControl>
        </div>
        <div className="input__field">
          <label htmlFor="name">Marial Status</label>
          <FormControl style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">
              Enter Marial Status
            </InputLabel>

            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  value={field.value || ""}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Enter Marital Status"
                  style={{ height: "39px" }}
                  onChange={field.onChange}
                >
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Unmarried">Unmarried</MenuItem>
                  <MenuItem value="Divorced">Divorced</MenuItem>
                  <MenuItem value="Widowed">Widowed</MenuItem>
                  <MenuItem value="Separated">Separated</MenuItem>
                </Select>
              )}
              name="Marital"
              control={control}
              defaultValue=""
            />
          </FormControl>
        </div>
        <div className="input__field">
          <label htmlFor="name">Blood Group</label>
          <FormControl style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Group</InputLabel>

            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={field.value || ""}
                  label="Gropu"
                  style={{ height: "39px" }}
                  onChange={field.onChange}
                >
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
              )}
              name="Blood_Group"
              control={control}
              defaultValue=""
            />
          </FormControl>
        </div>
      </div>
      <div className="input__field">
        <label htmlFor="name">Nationality</label>
        <Stack spacing={2} sx={{ width: 270 }}>
          <Controller
            name="nationality"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Autocomplete
                {...field}
                value={field.value}
                onChange={(event, value) => {
                  field.onChange(value);
                }}
                freeSolo
                id="nationality"
                disableClearable
                options={data.nationality}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Nationality"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      sx: { height: "39px" },
                    }}
                    InputLabelProps={{
                      sx: {
                        position: "absolute",
                        top: "-7px",
                      },
                    }}
                  />
                )}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Other;
