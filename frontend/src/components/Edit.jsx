import * as React from "react"
import { useState, useEffect, createContext } from "react"
import { observer } from "mobx-react-lite"
import worker from "../data/worker"
import Roles from "./Roles"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { FormControl, Button } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"
import Input from "@mui/joy/Input"
import FormLabel from "@mui/joy/FormLabel"
import Card from "@mui/joy/Card"
import CardActions from "@mui/joy/CardActions"
import CardContent from "@mui/joy/CardContent"
import Typography from "@mui/joy/Typography"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Alert from "@mui/material/Alert"

export const WorkerContext = createContext(null)

const Edit = observer(() => {
  let { id } = useParams()
  const [w, setWorker] = useState(null)
  const workerContext = { w, setWorker }
  const [dateError, setDateError] = useState(false)

  useEffect(() => {
    if (id) {
      const fetchWorker = async () => {
        const fetchedWorker = await worker.getByIdWorkers(id)
        setWorker(fetchedWorker)
        setFormData({
          firstName: fetchedWorker?.firstName || "",
          lastName: fetchedWorker?.lastName || "",
          birthDate: fetchedWorker?.birthDate || "",
          startWorking: fetchedWorker?.startWorking || "",
          gender: fetchedWorker?.gender || 0,
        })
      }
      fetchWorker()
    } else {
      setWorker({
        gender: -1,
        firstName: "",
        lastName: "",
        startWorking: "",
        birthDate: "",
        rolesList: [],
      })
    }
  }, [id])

  const [formData, setFormData] = useState(null)

  const { handleSubmit } = useForm()


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (name === "startWorking" || name === "birthDate")
      if (new Date(value) < new Date(w.birthDate)) setDateError(true)
      else {
        setDateError(false)
        setWorker({ ...w, [name]: value })
      }
  }
  const navigate = useNavigate()

  function update() {
    if (!dateError) {
      formData.rolesList = w.rolesList
      formData.gender = parseInt(formData.gender)
      console.log(formData)
      if (w.id) worker.putWorkers(w.id, formData)
      else worker.postWorkers(formData)
      navigate("/")
      window.location.reload()
    }
  }
  function cancel() {
    navigate("/")
    window.location.reload()
  }
  return (
    <form onSubmit={handleSubmit(update)}>
      <Card
        data-resizable
      >
        <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
          Edit details
        </Typography>
        <CardContent sx={{ maxWidth: "40ch" }}>
          <FormControl>
            <FormLabel>First Name:</FormLabel>
            <Input
              value={formData?.firstName}
              endDecorator={<PersonIcon />}
              name="firstName"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name:</FormLabel>
            <Input
              value={formData?.lastName}
              endDecorator={<PersonIcon />}
              name="lastName"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Birth Date:</FormLabel>
            <Input
              value={formData?.birthDate}
              type="datetime-local"
              name="birthDate"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Start Working:</FormLabel>
            <Input
              value={formData?.startWorking}
              type="datetime-local"
              name="startWorking"
              onChange={handleInputChange}
            />
          </FormControl>
          {dateError && <Alert severity="error"> Start date must be after birth date.</Alert>}
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="gender"
              value={formData?.gender || 0}
              onChange={handleInputChange}
            >
              <FormControlLabel value={0} control={<Radio />} label="Male" />
              <FormControlLabel value={1} control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <WorkerContext.Provider value={workerContext}>
            <Roles />
          </WorkerContext.Provider>
        </CardContent>
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            "--Button-radius": "40px",
            width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
          }}
        >
          <Button type="submit" variant="solid" color="primary">
            Submit
          </Button>
          <Button onClick={cancel} variant="solid" color="primary">
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
  )
})

export default Edit
