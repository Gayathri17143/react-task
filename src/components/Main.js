import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
 
  FormControl,
  styled,
  IconButton,
  InputBase,
  Card,
  CardContent,
  Checkbox,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SecurityIcon from "@mui/icons-material/Security";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import dayjs from "dayjs";
import CancelIcon from '@mui/icons-material/Cancel';
import Picture from "../assets/fam.png";
import Pic from "../assets/cheerful-family.jpg";
const HoverColumns = () => {
  const [dense, setDense] = React.useState(false);
  const [value, setValue] = React.useState(dayjs("1991-01-22"));
  const columns = [
    {
      id: 1,
      icon: <HomeIcon sx={{ fontSize: 50, color: "white" }} />,
       
      text: "Term Insurance",
    },
    {
      id: 2,
      icon: <AccountBalanceIcon sx={{ fontSize: 50, color: "white" }} />,
       
      backgroundImage: { Image },
      text: "Retirement Plan",
      hoverEffect: true,  
    },
    {
      id: 3,
      icon: <SavingsIcon sx={{ fontSize: 50, color: "white" }} />,
      
      text: "ULIP Plan",
    },
    {
      id: 4,
      icon: <HealthAndSafetyIcon sx={{ fontSize: 50, color: "white" }} />,
    
      text: "Savings Plan",
    },
    {
      id: 5,
      icon: <SecurityIcon sx={{ fontSize: 50, color: "white" }} />,
      
      text: "Health Plans",
    },
  ];

  const StyledInput = styled(InputBase)(({ theme }) => ({
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "8px 12px",
    fontSize: "14px",
    width: "200px",
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  }));
  const [showProducts, setShowProducts] = useState(false);

  const handleViewProductsClick = () => {
    setShowProducts(true); // Show the component when the button is clicked
  };
  const handleCloseProductsClick = () => {
    setShowProducts(false); // Show the component when the button is clicked
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${Picture})`,  
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Centered Title */}
      {/* <Typography
        variant="h3"
        sx={{
          color: "white",
          // fontWeight: "bold",
          textAlign: "center",
          position: "absolute",
          top: "10%",
          zIndex: 1,
        }}
      >
        Protect your <strong>future</strong> today
      </Typography> */}
      {!showProducts ? (
        <Grid container sx={{ height: "100%", width: "100%" }}>
          {columns.map((column, index) => (
            <Grid
              key={column.id}
              item
        
              md={2.4} // Five equal columns on larger screens
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",

                position: "relative",
                cursor: column.hoverEffect ? "pointer" : "default",
                borderRight:
                  index < columns.length - 1 ? "1px solid #36383d" : "none",  
                transition: "all 0.3s ease-in-out",
                "&:hover": column.hoverEffect && {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backgroundImage: `url(${Pic})`,  
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                },
                "&:hover .hoverContent": column.hoverEffect && {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              
              {column.icon}
              <Typography variant="h6" mt={1}>
                {column.title}
              </Typography>
              <Typography variant="body2">{column.text}</Typography>

              
              {column.hoverEffect && (
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.3s ease-in-out",
                    color: "white",
                  }}
                >
                  <Typography variant="h4" m={1}>
                    Retirement Plan
                  </Typography>
                  <Typography sx={{ fontSize: "15px" }}>
                    Retirement Plan extends beyond assets and
                    income,encompassing a holistic evaluation of future
                    costs,liabilities, and life expectancy.
                  </Typography>
                  <Button
                    sx={{
                      border: "1px solid #ccc",
                      color: "#fff",
                      marginTop: "20px",
                      textTransform: "none",
                    }}
                    onClick={handleViewProductsClick}
                  >
                    {" "}
                    View Products{" "}
                  </Button>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "100vh",
            width: "100%",
            bgcolor: "#005CA8",
            color: "white",
            
          }}
        >
          
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height:"100vh"
            }}
          >
            <img
              src={Pic}
              alt="Family"
              style={{   width: "100%", height: "100vh" }}
            />
          </Box>
         

         
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              
              padding: " 3% ",
             
            }}
          >
            
            <Box sx={{display:"flex" ,alignItems:"center",justifyContent:"space-between" }}>
              <Typography
                variant="h4"
                sx={{
                   
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Retirement Plans
              </Typography>
               
                <IconButton onClick={handleCloseProductsClick}>
                  <CancelIcon sx={{color:"#fff",fontSize:"30px" }}/>
                </IconButton>
               
            </Box>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                marginBottom: "20px",
              }}
            >
              Retirement planning refers to a multi-step process of defining
              retirement income <br /> goals and the strategy required to
              achieve the said goals.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                
                textTransform: "none",
                marginBottom: "30px",
                border: "1px solid #fff",
                width: "10%",
              }}
            >
              Learn More
            </Button>

           
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: 2,
                    position: "relative",
                    overflow: "hidden",
                    transition:
                      "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e51c24", 
                      transform: "scale(1.05)",  
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",  
                      color: "white",  
                    },
                    "&:hover .hover-buttons": {
                      opacity: 1, // Make buttons visible
                      visibility: "visible",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "center",
                        color: "gray",
                        marginBottom: "15px",
                        "&:hover": { color: "white" },
                      }}
                    >
                      ANNUITY PLAN
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", "&:hover": { color: "white" } }}
                    >
                      Kotak
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#1e4679",
                        fontSize: "30px",
                        "&:hover": { color: "white" },
                      }}
                    >
                      Lifetime Income Plan
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 2,
                      }}
                    >
                      <Rating
                        name="rating"
                        defaultValue={4} // Default rating value
                        precision={1} // Allows half-star ratings
                        size="small"
                        icon={<StarIcon fontSize="inherit" />}
                        emptyIcon={
                          <StarIcon
                            fontSize="inherit"
                            style={{ opacity: 0.3 }}
                          />
                        }
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ "&:hover": { color: "white" }, paddingTop: "10px" }}
                    >
                      Secure your family with the best term plan that Kotak
                      offers. <br />
                      • 7% discount on online purchase. <br />
                      • Get up to 75 lakhs of coverage. <br />• Low premiums and
                      affordable.
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                      }}
                    >
                      Learn More <KeyboardArrowRightOutlinedIcon />
                    </Typography>
                  </CardContent>
                  <Box
                    className="hover-button"
                    sx={{
                      background: "#1e4679", 
                    }}
                  >
                    <Button
                      sx={{
                        color: "#fff",
                        padding: "10px 20px",
                      }}
                      endIcon={<ArrowCircleRightOutlinedIcon />}
                    >
                      Buy Online
                    </Button>
                  </Box>
                </Card>
              </Grid>

              {/* Plan 2 */}
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: 2,
                    position: "relative",
                    overflow: "hidden",
                    transition:
                      "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e51c24",  
                      transform: "scale(1.05)", 
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",  
                      color: "white",  
                    },
                    "&:hover .hover-buttons": {
                      opacity: 1,  
                      visibility: "visible",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "center",
                        color: "gray",
                        marginBottom: "15px",
                        "&:hover": { color: "white" },
                      }}
                    >
                      RETIREMENT PLAN
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", "&:hover": { color: "white" } }}
                    >
                      Kotak
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#1e4679",
                        fontSize: "30px",
                        "&:hover": { color: "white" },
                      }}
                    >
                      Assured Pension Plan
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 2,
                      }}
                    >
                      <Rating
                        name="rating"
                        defaultValue={4} // Default rating value
                        precision={1} // Allows half-star ratings
                        size="small"
                        icon={<StarIcon fontSize="inherit" />}
                        emptyIcon={
                          <StarIcon
                            fontSize="inherit"
                            style={{ opacity: 0.3 }}
                          />
                        }
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ "&:hover": { color: "white" }, paddingTop: "10px" }}
                    >
                      Secure your family with the best term plan that Kotak
                      offers. <br />
                      • 7% discount on online purchase. <br />
                      • Get up to 75 lakhs of coverage. <br />• Low premiums and
                      affordable.
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                      }}
                    >
                      Learn More <KeyboardArrowRightOutlinedIcon />
                    </Typography>
                  </CardContent>
                  <Box
                    className="hover-button"
                    sx={{
                      background: "#1e4679",   
                    }}
                  >
                    <Button
                      sx={{
                        color: "#fff",
                        padding: "10px 20px",
                      }}
                      endIcon={<ArrowCircleRightOutlinedIcon />}
                    >
                      Buy Online
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      
      <Box
        sx={{
          backgroundColor: "#eff5fb",
          position: "relative",
          zIndex: 2,
          padding: "50px 20px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: 1000,
            margin: "0 auto",
            backgroundColor: "white",
            padding: "30px",

            marginTop: "-80px",  
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              marginBottom: "10px",
              
            }}
          >
            ₹1Cr life cover at just Rs.18 per day
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              color: "#77787a",
              fontSize: "15px",
            }}
          >
            Zero cost insurance with discounts up to 7.5%.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <FormControl defaultValue="" required sx={{ margin: "10px" }}>
              <StyledInput placeholder="John Krish" />
            </FormControl>
            <FormControl defaultValue="" required sx={{ margin: "10px" }}>
              <StyledInput placeholder="John@gmail.com" />
            </FormControl>
            <FormControl defaultValue="" required sx={{ margin: "10px" }}>
              <StyledInput placeholder="+91 8394773483" />
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  "& .MuiInputBase-root": {
                    
                    fontSize: "15px",
                    height: "50px",
                    width: "150px",
                  },
                }}
              />
            </LocalizationProvider>
            <Button
              sx={{
                color: "#fff",
                background: "red",
                textTransform: "none",
                margin: "10px",
                padding: "13px 10px",
                fontSize: "14px",
              }}
              endIcon={<ArrowRightAltOutlinedIcon />}
            >
              View Prices
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dense}
                    onChange={(event) => setDense(event.target.checked)}
                  />
                }
                label={
                  <span style={{ fontSize: "14px", color: "#c5c5c6" }}>
                    I agree to KLI and its representatives contacting me through
                    call, SMS, email, or WhatsApp.
                  </span>
                }
              />
            </FormGroup>
            <Box
              sx={{
                background: "#f3faff",
                padding: "10px",
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "red" }}>
                <HeadsetMicOutlinedIcon
                  sx={{ color: "#ccc", fontSize: "0.8rem" }}
                />{" "}
                Talk to our expert OR{" "}
                <GroupOutlinedIcon sx={{ color: "#ccc", fontSize: "0.8rem" }} />{" "}
                Meet An Advisor
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HoverColumns;
