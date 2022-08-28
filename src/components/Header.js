import React, { useState } from "react"
import { AppBar, Box, Toolbar, Tab, Tabs, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function Header() {
  const [value, setValue] = useState()
  let navigate = useNavigate()
  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "#000",
          height: "70px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              fontWeight: 900,
              fontSize: "40px",
              letterSpacing: "3px",
              cursor: "pointer",
            }}
          >
            DREAM
            <Typography sx={{ color: "orange", fontWeight: "bold" }}>
              BIG
            </Typography>
          </Typography>
{/* ------------------------------------------------------------------------------------------------------           */}
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <Tabs
              indicatorColor='primary'
              textColor='inherit'
              value={value}
              onChange={(e, value) => setValue(value)}
            >


              {/* <Tab label='Selection' onClick={() => navigate("/select")} /> */}

              <Tab label='Job portal' onClick={() => navigate("/jobportal")} />

              {/* <Tab label='Financial tips' onClick={() => navigate("/finance")} /> */}
              <Tab label='Funding' onClick={() => navigate("/funding")} />

              <Tab label='Mentorship' onClick={() => navigate("/Mentorship")} />
              <Tab label='Crowdfunding' onClick={() => navigate("/crowdfunding")} />
            
              <Tab label='Guide' onClick={() => navigate("/guide")} />
              {/* <Tab label='Joined Events' onClick={() => navigate("/joinedevents")} /> */}
              {/* <Tab label='Maps' onClick={() => navigate("/map")} /> */}
            </Tabs>

{/* 
            <Btn onClick={() => navigate("/signup")}>SignUp</Btn>
            <Btn onClick={() => navigate("/login")}>LogIn</Btn> */}
          </Box>

{/* ---------------------------------------------------------------------------------------------------------- */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
const Btn = styled.button`
  color: black;
  font-weight: 700;
  background-color: #FC724D; 
  padding: 2px 25px 2px 25px;
  border-radius: 30px;
  margin: 0px 5px 0px 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export default Header
