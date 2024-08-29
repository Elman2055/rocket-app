import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import RocketApi from "../../../services/rocketApi";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "0",
    borderBottom: "1px solid gray",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderBottom: "2px solid black",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "3%",
    color: "inherit",
    "&.Mui-focused": {
      color: "gray",
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
    "&.Mui-focused": {
      color: "gray",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  width: "100%",
});

const Container = styled(Box)({
  width: "85%",
  margin: "25px auto",
});

const DialogStyled = styled(Dialog)({
  "& .MuiDialog-paper": {
    overflowX: "hidden",
  },
});

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  padding: "16px 24px",
  "& h2": {
    margin: "0",
  },
  "& p": {
    fontSize: "15px",
    margin: "0",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    padding: "0",
  },
}));

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  padding: "20px 24px",
  [theme.breakpoints.between("xs", "sm")]: {
    padding: "0",
  },
}));

const buttonStyled = {
  cursor: "pointer",
  width: "94%",
  margin: "0 auto",
  marginTop: "2%",
  border: "none",
  padding: "9px 15px",
  backgroundColor: "#1A1A1A",
  color: "#EFEFEF",
};

export default function ModalForm({ open, setOpen }) {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    oldPasswordError: "",
    newPasswordError: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    setErrorMessages({
      ...errorMessages,
      oldPasswordError: "",
      newPasswordError: "",
    });
  };

  const getNewPassword = async () => {
    if (inputValues.input2 !== inputValues.input3) {
      setErrorMessages((prev) => ({
        ...prev,
        newPasswordError: "Пароли не совпадают!",
      }));
    } else {
      try {
        const oldPassword = inputValues.input1;
        const newPassword = inputValues.input2;
        const response = await RocketApi.getNewPassword({
          oldPassword,
          newPassword,
        });
        setOpen(false);
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessages((prev) => ({
            ...prev,
            oldPasswordError: `${error.response.data.message}!`,
          }));
        }
      }
    }
  };

  return (
    <div>
      <DialogStyled open={open} onClose={handleClose}>
        <Container>
          <DialogTitleStyled>
            <h2>Смена пароля</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam odio elementum
              gravida orci ipsum dolor
            </p>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            ></IconButton>
          </DialogTitleStyled>
          <DialogContentStyled>
            <CustomTextField
              name="input1"
              label="Старый пароль"
              variant="outlined"
              margin="normal"
              value={inputValues.input1}
              onChange={handleChange}
              error={Boolean(errorMessages.oldPasswordError)}
              helperText={errorMessages.oldPasswordError}
            />
            <CustomTextField
              name="input2"
              label="Новый пароль"
              variant="outlined"
              margin="normal"
              value={inputValues.input2}
              onChange={handleChange}
            />
            <CustomTextField
              name="input3"
              label="Повторите пароль"
              variant="outlined"
              margin="normal"
              value={inputValues.input3}
              onChange={handleChange}
              error={Boolean(errorMessages.newPasswordError)}
              helperText={errorMessages.newPasswordError}
            />
          </DialogContentStyled>
          <DialogActions>
            <button style={buttonStyled} onClick={getNewPassword}>
              Сохранить
            </button>
          </DialogActions>
        </Container>
      </DialogStyled>
    </div>
  );
}
