import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { MenuProps, useStyles, options } from "./utils";

function App() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => {
          const vls = options
            .filter((o) => selected.includes(o.id))
            .map((value) => value.libelle);
          return vls.join(", ");
        }}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option.id) > -1} />
            </ListItemIcon>
            <ListItemText primary={option.libelle} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default App;
