import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
export default function Template({ onSelect, defaultValue }) {
  return (
    <Autocomplete
      defaultValue={defaultValue}
      options={templates}
      getOptionLabel={(option) => option.title}
      onChange={(e, newValue) => {
        onSelect(newValue);
      }}
      fullWidth
      renderInput={(params) => (
        <TextField {...params} label="Template" variant="outlined" />
      )}
    />
  );
}
const templates = [
  { title: "Math", folderName: "math-example" },
  { title: "Greek", folderName: "greek-template" },
  { title: "Formal letter", folderName: "formal-letter" },
  { title: "Book", folderName: "book-template" },
  { title: "Article", folderName: "article-template" },
];
Template.propTypes = {
  onSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
