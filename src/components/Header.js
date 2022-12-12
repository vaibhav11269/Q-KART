import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useHistory,Link } from "react-router-dom";
import React,{ useState } from "react";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {hasHiddenAuthButtons !== undefined ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => {
            history.push("/");
          }}
        >
            Back to explore
        </Button>
      ) : localStorage.getItem("username") === null ? (
        <Stack direction="row" spacing={1}>
            <Button
              onClick={() => {
                history.push("/login")
            }}
            >
            Login

          </Button>
            <Button className="register-button"
              onClick={() => {
                history.push("/register");
             }}
            >
              Register
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={2}>
          <div className="user">
            <Avatar
                  src="avatar.png"
                  alt={localStorage.getItem("username")}
                  style={{ marginRight: "1rem" }}
            ></Avatar>
            <span >
              {localStorage.getItem("username")}
            </span>
          </div>
          <Button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
