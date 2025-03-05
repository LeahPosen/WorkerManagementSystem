import * as React from "react"
import tagRole from "../data/tagRole"
import { useForm } from "react-hook-form"
import { WorkerContext } from "./Edit"
import { useContext, useState, useEffect } from "react"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import { observer } from "mobx-react-lite"
import { Button, Card, FormControl } from "@mui/material"
import Input from "@mui/joy/Input"
import FormLabel from "@mui/joy/FormLabel"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import InputLabel from "@mui/material/InputLabel"
import NativeSelect from "@mui/material/NativeSelect"
import Alert from "@mui/material/Alert"

function Row(props) {
  const { role } = props
  const [open, setOpen] = React.useState(false)
  const { w, setWorker } = useContext(WorkerContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleDeleteRow = () => {
    w.rolesList = w.rolesList.filter((r) => r.id !== role.id)
    setWorker({ ...w })
  }

  const handleFormSubmit = (data) => {
    const updatedRole = {
      id: role.id,
      tagRoleId: data.tagRoleId,
      isAdministrative: data.isAdministrative,
      startRole: data.startRole,
    }
    const updatedRolesList = w.rolesList.map((r) =>
      r.tagRoleId === role.tagRoleId ? updatedRole : r,
    )
    w.rolesList = updatedRolesList
    setWorker({ ...w })
    setOpen(false)
  }
  function contain(id) {
    return w.rolesList.find((r) => r.tagRoleId == id)
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <EditIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton aria-label="delete row" size="small" onClick={handleDeleteRow}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {tagRole.getNameById(role.tagRoleId)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Role
                </InputLabel>
                <NativeSelect
                  defaultValue={role.tagRoleId}
                  inputProps={{
                    name: "tagRoleId",
                    id: "uncontrolled-native",
                  }}
                  {...register("tagRoleId", {
                    validate: {
                      newTagRole: (value) => !contain(value),
                    },
                  })}
                >
                  {tagRole.tags.map((t, i) => (
                    <option key={i} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
              {errors.tagRoleId && <Alert severity="error"> Exsit role.</Alert>}
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked={role.isAdministrative} />}
                  label="Is Administrative"
                  {...register("isAdministrative")}
                />
              </FormGroup>
              <FormControl>
                <FormLabel>Start Working:</FormLabel>
                <Input
                  type="datetime-local"
                  {...register("startRole", {
                    validate: {
                      isAfterBirthDate: (value) => new Date(value) > new Date(w.startWorking),
                    },
                  })}
                  defaultValue={role.startRole}
                />
              </FormControl>
              {errors.startRole && (
                <Alert severity="error"> Start date must be after start working.</Alert>
              )}
              <Button type="submit" onClick={handleSubmit(handleFormSubmit)}>
                Submit
              </Button>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const Roles = observer(() => {
  const { w, setWorker } = useContext(WorkerContext)
  const handleAddRole = () => {
    w.rolesList?.push({ TagRoleId: 1, IsAdministrative: false, StartRole: new Date() })
    console.log(JSON.stringify(w))
    setWorker({ ...w })
    setCount(count + 1)
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              Roles:
              <IconButton aria-label="add role" size="small" onClick={handleAddRole}>
                <AddIcon />
              </IconButton>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {w?.rolesList.map((r, i) => (
            <Row key={i} role={r} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})
export default Roles
