import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Modal from '@mui/material/Modal';
import InputBase from "@mui/material/InputBase";

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  boxShadow: 24,
  // p: 4,
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderBottom: "2px solid transparent", // Add transparent underline
    "&:focus": {
    },
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

export default function SearchInput ({ onClose }) {
  return (
    <div>
      <Modal
        open={true} 
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Modal>
    </div>
  );
}
