import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../store";
import useDesktop from "../hooks/useDesktop";
import searchImage from "../../../public/search.png";
import closeImage from "../../../public/closeImage.png";
import { Box, InputAdornment } from "@mui/material";

const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1,
});

const Container = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
  backgroundColor: "#fff",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "90%",
    borderRadius: "0",
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    zIndex: "1007",
    paddingTop: "80px",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  height: "30px",
  top: "22%",
  right: "1%",
  zIndex: "200",
  backgroundColor: "#e0e0e0",
  "&:hover": {
    backgroundColor: "#bdbdbd",
  },
  [theme.breakpoints.down("md")]: {
    top: "13%",
    right: "7%",
  },
}));

const MobileCloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "2%",
  right: "5%",
  zIndex: "300",
  backgroundColor: "#e0e0e0",
  display: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    backgroundColor: "transparent",
  },
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  "& .MuiAutocomplete-listbox": {
    padding: "0",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderBottom: "2px solid #000",
    borderRadius: 0,
    paddingLeft: "40px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 0",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#000",
    opacity: 1,
  },
});

const ProductListItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  boxSizing: "border-box",
  marginLeft: "-20px",
});

const ProductImage = styled("img")({
  height: "195px",
  width: "200px",
});

const ProductInfo = styled(Box)({
  textAlign: "left",
});

const Price = styled("p")({
  margin: "5px 0",
});

const BeforePrice = styled("p")({
  margin: "5px 0",
  textDecoration: "line-through",
  color: "gray",
});

const CustomListboxContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  height: "300px",
  whiteSpace: "nowrap",
  width: "100%",
  "&::-webkit-scrollbar": {
    height: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },
});

const CustomListbox = styled("ul")({
  display: "inline-flex",
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export default function SearchWithProductList({
  setIsOpenSearch,
  isOpenSearch,
}) {
  const isDesktop = useDesktop();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(true);

  const {
    products: { products },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (isOpenSearch) {
      setOpen(true);
    }
  }, [isOpenSearch]);

  return (
    <>
      {isOpenSearch && (
        <>
          <Overlay onClick={() => setIsOpenSearch(false)} />
          <Container
            style={
              isOpenSearch && !isDesktop ? { transform: "translateX(0)" } : {}
            }
          >
            <MobileCloseButton onClick={() => setIsOpenSearch(false)}>
              <img src={closeImage} alt="close" />
            </MobileCloseButton>

            <CloseButton onClick={() => setIsOpenSearch(false)}>
              &times;
            </CloseButton>
            <StyledAutocomplete
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              options={products}
              getOptionLabel={(option) => option.title}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  placeholder="Поиск..."
                  variant="outlined"
                  autoFocus
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={searchImage}
                          alt="search"
                          style={{ width: "20px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              ListboxComponent={(props) => (
                <CustomListboxContainer>
                  <CustomListbox {...props} />
                </CustomListboxContainer>
              )}
              renderOption={(props, option) => (
                <Box
                  {...props}
                  key={option.id}
                  onClick={() => {
                    navigate({ pathname: `/product/${option.id}` });
                    setIsOpenSearch(false);
                  }}
                >
                  <ProductListItem>
                    <ProductImage src={option.image} alt={option.title} />
                    <ProductInfo>
                      <h3>{option.title}</h3>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width="150px"
                      >
                        {option.beforePrice && (
                          <BeforePrice>{option.beforePrice}</BeforePrice>
                        )}
                        <Price
                          style={option.beforePrice ? { marginTop: "5px" } : {}}
                        >
                          {option.price}
                        </Price>
                      </Box>
                    </ProductInfo>
                  </ProductListItem>
                </Box>
              )}
            />
          </Container>
        </>
      )}
    </>
  );
}
