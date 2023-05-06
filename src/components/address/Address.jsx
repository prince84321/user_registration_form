import "./address.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";
import data from "./../../DummyData";

const Address = ({ register, control }) => {
  return (
    <div className="address__detail">
      <h3>
        {" "}
        <u>Address Details</u> :
      </h3>
      <div className="address__detail-input">
        <div className="input__field">
          <label htmlFor="name">Address</label>

          <TextField
            id="outlined-basic"
            label="Enter Address"
            variant="outlined"
            size="small"
            name="address"
            InputProps={{
              style: { height: "39px" },
            }}
            style={{ width: "450px" }}
            {...register("address")}
          />
        </div>
        <div className="input__field">
          <label htmlFor="name">State</label>
          <Stack spacing={2} sx={{ width: 236 }}>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  value={field.value || ""}
                  onChange={(event, value) => {
                    field.onChange(value);
                  }}
                  freeSolo
                  id="state"
                  disableClearable
                  options={data.state_name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Enter State"
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
        <div className="input__field">
          <label htmlFor="name">Enter City/Town/Village</label>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  value={field.value || ""}
                  onChange={(event, value) => {
                    field.onChange(value);
                  }}
                  freeSolo
                  id="city"
                  disableClearable
                  options={data.city_name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Enter City/Town/Village"
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
      <div className="input__field">
        <label htmlFor="name">Country</label>
        <Stack spacing={2} sx={{ width: 450 }}>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Autocomplete
                {...field}
                value={field.value || ""}
                onChange={(event, value) => {
                  field.onChange(value);
                }}
                freeSolo
                id="country"
                disableClearable
                options={data.country_name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Enter Country"
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
        <div className="input__field">
          <label htmlFor="name">Pincode</label>

          <TextField
            name="pincode"
            label="Enter Pincode"
            variant="outlined"
            size="small"
            InputProps={{
              style: { height: "39px" },
            }}
            style={{ width: "350px" }}
            {...register("pincode")}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
