import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// const GreenRadio = withStyles({
//     root: {
//       color: green[400],
//       '&$checked': {
//         color: green[600],
//       },
//     },
//     checked: {},
// })((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    MaxWidth: '527px'
  },
    button: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '32px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#FF5C00',
        marginTop: '1em',
        background: 'transparent',
        border: 'none',
        textAlign: 'left',
    },
    submitBox: {
        textAlign: 'right',
        marginTop: theme.spacing(3),
    },
    submit: {
        background: '#FF5C00',
        color: '#ffffff',
        padding: theme.spacing(1, 3),
    },
}));

export default function CustomerModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('customer');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  // const handleChangeEvent = (event) => {
  //   setSelectedValue(event.target.value);
  // };
//   form starts

    const history = useHistory();
    const [data, setData] = useState({
    firstname: "",
    lastname: "",
    story: "",
    kind: "",
    campus: "",
    image: "",
    });
    const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
    };
    const handleSubmit = async () => {
    try {
        let formData = new FormData();
        formData.append("image", data.image);
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("story", data.story);
        formData.append("kind", data.kind);
        // formData.append("name", data.name);

        const res = await fetch(`http://localhost:5000/user`, {
        method: "POST",
        body: formData,
        });
        if (res.ok) {
        setData({ 
            firstname: "", 
            story: "",
            kind: "",
            campus: "",
            image: "" 
        });
        history.replace("/");
        }
    } catch (error) {
        console.log(error);
    }
    };
// ends

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        SHARE YOUR STORY
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Share your amazing story!</h2>
            <form className='' noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField
                    id="image-upload"
                    label="Upload Profile Picture"
                    name="image"
                    value={data.image}
                    type="file"
                    // accept="image/*"
                    onChange={handleChange("name")}
                    // style={{ margin: 8 }}
                    placeholder="Upload Image"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                </div>
                <div>
                    <Grid container spacing="2">
                        <Grid item md={6}>
                            <TextField
                            id="first-name"
                            label="First Name"
                            // name="firstname"
                            value={data.firstname}
                            // type="text"
                            onChange={handleChange("name")}
                            fullWidth
                            // defaultValue="Hello World"
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                            error
                            id="last-name"
                            label="Last Name"
                            name="lastname"
                            value={data.lastname}
                            onChange={handleChange("name")}
                            fullWidth
                            variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <TextField
                    id="outlined-multiline-static"
                    label="Share your story"
                    name="story"
                    value={data.story}
                    onChange={handleChange("name")}
                    multiline
                    rows={4}
                    fullWidth
                    style={{ marginTop: 8 }}
                    // defaultValue="Default Value"
                    variant="outlined"
                    />
                </div>
                
                <div>
                What did you interact with Vasiti as?
                    <Radio
                        checked={selectedValue === 'customer'}
                        onChange={handleChange}
                        value="customer"
                        name="customer"
                        inputProps={{ 'aria-label': 'A' }}
                    /> Customer
                    <Radio
                        checked={selectedValue === 'vendor'}
                        onChange={handleChange}
                        value="vendor"
                        name="vendor"
                        inputProps={{ 'aria-label': 'B' }}
                    /> Vendor
                </div>

                <div>
                    <TextField
                    id="filled-full-width"
                    label="City of Higher Education"
                    placeholder="Placeholder"
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                </div>
                <div className={classes.submitBox}>
                <Button variant="contained" className={classes.submit}>
                    Share your story!
                </Button>
                </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
