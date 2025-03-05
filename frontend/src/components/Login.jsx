import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import auth from "../data/auth"

export default function Login() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function config(data) {
    console.log(data)
    auth.postAuth(data)
    setIsAdmin(true)
  }
  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
        autoComplete="off"
      >
        <form onSubmit={handleSubmit(config)}>
          <TextField {...register("name")}
            id="outlined-textarea"
            label="Name"
            placeholder="Enter your name here:"
            multiline />

          <FormControl
            sx={{
              m: 1, width: '35ch', display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
            variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput {...register("password")}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
              label="Password" />
          </FormControl>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
        {isAdmin && <Typography>Success</Typography>}
      </Box>
    </>
  )
}
