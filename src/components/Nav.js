import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../assets/logo.png";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { FaWhatsapp } from "react-icons/fa";
export default function SelectLabels() {
  const [options, setOptions] = React.useState("");

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "#191d23",
        }}
      >
        <Box>
          <FormControl
            sx={{ m: 1, minWidth: 120, boxShadow: "none", border: "none" }}
          >
            <Select
              value={options}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "black",  
                    color: "white",  
                  },
                },
              }}
              sx={{
                "& .MuiSelect-icon": {
                  color: "white",  
                },
                "&.MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",  
                  },
                },
                color: "white",
              }}
            >
              <MenuItem
                value=""
                sx={{
                  color: "white",  
                  bgcolor: "black",  
                }}
              >
                <em>English</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Typography sx={{ marginRight: "20px" }}>
            Any queries?
            <FaWhatsapp color="green" />
            Whatsapp to 9321003007
          </Typography>
          <Typography>About Kotak Life</Typography>
          <Stack spacing={2} direction="row" sx={{ marginLeft: "20px" }}>
            
            <Button
              sx={{
                color: "#fff",
                background: "#1e4679",
                textTransform: "none",
              }}
              endIcon={<ArrowDropDownOutlinedIcon />}
            >
              Support
            </Button>
           
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#1d2632",
          color: "#fff",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "25px",
              color: "#fff",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={Logo} alt="Logo" width="50%" />
            life
          </span>
        </div>
        <FormControl
          sx={{ m: 1, minWidth: 120, boxShadow: "none", border: "none" }}
        >
          <Select
            value={options}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "black",  
                  color: "white",  
                },
              },
            }}
            sx={{
              "& .MuiSelect-icon": {
                color: "white",  
              },
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",  
                },
              },
              color: "white",
            }}
          >
            <MenuItem
              value=""
              sx={{
                color: "white",  
                bgcolor: "black",  
              }}
            >
              <em>Insurance Plans</em>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, boxShadow: "none", border: "none" }}
        >
          <Select
            value={options}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "black",  
                  color: "white",  
                },
              },
            }}
            sx={{
              "& .MuiSelect-icon": {
                color: "white",  
              },
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",  
                },
              },
              color: "white",
            }}
          >
            <MenuItem
              value=""
              sx={{
                color: "white",  
                bgcolor: "black",  
              }}
            >
              <em>Calculators</em>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, boxShadow: "none", border: "none" }}
        >
          <Select
            value={options}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "black",  
                  color: "white",  
                },
              },
            }}
            sx={{
              "& .MuiSelect-icon": {
                color: "white",  
              },
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",  
                },
              },
              color: "white",
            }}
          >
            <MenuItem
              value=""
              sx={{
                color: "white",  
                bgcolor: "black",  
              }}
            >
              <em>Claims</em>
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, boxShadow: "none", border: "none" }}
        >
          <Select
            value={options}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "black",  
                  color: "white",  
                },
              },
            }}
            sx={{
              "& .MuiSelect-icon": {
                color: "white", 
              },
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",  
                },
              },
              color: "white",
            }}
          >
            <MenuItem
              value=""
              sx={{
                color: "white", 
                bgcolor: "black",  
              }}
            >
              <em>How Do I</em>
            </MenuItem>
          </Select>
        </FormControl>

        <SearchOutlinedIcon />
        <Stack spacing={2} direction="row" sx={{ marginLeft: "20px" }}>
           
          <Button
            sx={{
              color: "#fff",
              border: "1px solid #fff",
              textTransform: "none",
            }}
          >
            Pay Premium
          </Button>
          <Button
            sx={{ color: "#000", background: "#fff", textTransform: "none" }}
            startIcon={<GroupOutlinedIcon />}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
}
