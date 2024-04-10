import * as React from "react"
import { observer } from "mobx-react-lite"
import Table from "@mui/joy/Table"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton, Button, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import tagRole from "../data/tagRole"
import TextField from "@mui/material/TextField"
import { Box } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import CloseIcon from "@mui/icons-material/Close"
import Alert from "@mui/material/Alert"
import worker from '../data/worker'
const Tag = observer(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  function addTag(data) {
    console.log(data)
    tagRole.postTags(data)
    reset()
    setOpen(true)
  }
  const [open, setOpen] = React.useState(false)
  function contain(name) {
    return tagRole.tags.find((r) => r.name === name)
  }
  function noWorkers(id) {
    for (const w of worker.workers) {
      for (const role of w.rolesList) {
        if (role.tagRoleId === id) {
          return true
        }
      }
    }
    return false;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  )
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <Table hoverRow sx={{ width: "35ch", padding: "1rem" }}>
          <thead>
            <tr>
              <th></th>
              <th>Name:</th>
            </tr>
          </thead>
          <tbody>
            {tagRole.tags.map((t, i) => (
              <tr key={t.id}>
                <td>
                  <IconButton
                    onClick={() => {
                      tagRole.deleteTags(t.id)
                      window.location.reload()
                    }} disabled={noWorkers(t.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
                <td>{t.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Box
          sx={{
            "& .MuiTextField-root": { width: "35ch" },
            padding: "1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          autoComplete="off"
        >
          <form onSubmit={handleSubmit(addTag)}>
            <Typography>Add tag role:</Typography>
            <br />
            <TextField
              label="Name:"
              variant="outlined"
              {...register("name", {
                validate: {
                  newTagRole: (value) => !contain(value),
                },
              })}
            />
            {errors.name && <Alert severity="error"> Exsit role.</Alert>}
            <br />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added successfully"
        action={action}
      />
    </>
  )
})

export default Tag
