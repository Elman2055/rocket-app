import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import Loader from "../../loader/Loader";
import RocketApi from "../../../services/rocketApi";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
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

const DialogStyled = styled(Dialog)({
  "& .MuiDialog-paper": {
    overflowX: "hidden",
  },
});

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  padding: "16px 24px",
  "& h2, & p": {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  padding: "20px 24px",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

const buttonStyled = {
  cursor: "pointer",
  width: "94%",
  margin: "2% auto 0",
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
  const [errors, setErrors] = useState({
    oldPasswordError: "",
    newPasswordError: "",
  });
  const [loading, setLoading] = useState(false);

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      oldPasswordError: "",
      newPasswordError: "",
    }));
  };

  const validatePasswords = () => {
    const { input2, input3 } = inputValues;
    if (input2.trim() !== input3.trim()) {
      setErrors((prev) => ({
        ...prev,
        newPasswordError: "Пароли не совпадают!",
      }));
      return false;
    }
    if (!input2.trim() || !input3.trim()) {
      setErrors((prev) => ({
        ...prev,
        newPasswordError: "Пароль должен содержать значение!",
      }));
      return false;
    }
    return true;
  };

  const getNewPassword = async () => {
    if (!validatePasswords()) return;

    setLoading(true);
    try {
      const { input1, input2 } = inputValues;
      await RocketApi.getNewPassword({
        oldPassword: input1,
        newPassword: input2,
      });
      setInputValues({ input1: "", input2: "", input3: "" });
      setOpen(false);
    } catch (error) {
      if (error.response?.data) {
        setErrors((prev) => ({
          ...prev,
          oldPasswordError: `${error.response.data.message}!`,
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Loader isOpen={loading} />
      <DialogStyled open={open} onClose={handleClose}>
        <Box width="85%" m="25px auto">
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
              sx={{ position: "absolute", right: 8, top: 8 }}
            />
          </DialogTitleStyled>
          <DialogContentStyled>
            <CustomTextField
              name="input1"
              label="Старый пароль"
              variant="outlined"
              margin="normal"
              value={inputValues.input1}
              onChange={handleChange}
              error={Boolean(errors.oldPasswordError)}
              helperText={errors.oldPasswordError}
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
              error={Boolean(errors.newPasswordError)}
              helperText={errors.newPasswordError}
            />
          </DialogContentStyled>
          <DialogActions>
            <button style={buttonStyled} onClick={getNewPassword}>
              Сохранить
            </button>
          </DialogActions>
        </Box>
      </DialogStyled>
    </>
  );
}
