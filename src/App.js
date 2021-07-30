import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import * as MaIcons from "react-icons/md";
import Icon from "@material-ui/core/Icon";
// import { classes } from "istanbul-lib-coverage";
const useStyle = makeStyles((themes) => ({
  root: {
    "& .MuiTextField-root": {
      margin: themes.spacing(1),
    },
  },
}));
function App() {
  const classes = useStyle();
  const [inputField, setInputfield] = useState([{ Name: "", Email: "" }]);
  const handelChange = (index, event) => {
    console.log(index, event.target.name);
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setInputfield(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let arrNames = [];
    let arrEmails = [];
    for (let i = 0; i < inputField.length; i++) {
      arrNames.push(inputField[i].Name);
      arrEmails.push(inputField[i].Email);
    }
    console.log(arrNames, arrEmails);
  };
  const handleAdd = () => {
    setInputfield([...inputField, { Name: "", Email: "" }]);
  };
  const handleRemove = (index) => {
    const values = [...inputField];
    if (values.length > 1) {
      values.splice(index, 1);
    } else {
      alert("cannot remove");
    }
    setInputfield(values);
  };
  return (
    <Container>
      <h1>Add Member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputField.map((inputfill, index) => {
          return (
            <div key={index} className="divinput">
              <TextField
                type="text"
                name="Name"
                label="Name"
                required
                value={inputfill.Name}
                onChange={(event) => handelChange(index, event)}
              />
              <TextField
                name="Email"
                label="Email"
                value={inputfill.Email}
                required
                onChange={(event) => handelChange(index, event)}
              />
              <IconButton onClick={() => handleRemove(index)}>
                <MaIcons.MdRemove />
              </IconButton>
              <IconButton onClick={() => handleAdd()}>
                <MaIcons.MdAdd />
              </IconButton>
            </div>
          );
        })}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<MaIcons.MdSend />}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </Container>
  );
}

export default App;
