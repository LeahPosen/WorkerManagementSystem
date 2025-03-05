import * as React from "react"
import worker from "../data/worker"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton, Slide } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"


const Workers = observer(() => {
  const navigate = useNavigate()
  const [selectedWorker, setSelectedWorker] = React.useState() // הוספת המשתנה לאחסון העובד שנבחר לעריכה
  const columns = [
    { field: "id", headerName: "Id", width: 90 },
    { field: "firstName", headerName: "First Name", width: 90 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "startWorking", headerName: "Start Working", width: 150 },
    { field: "birthDate", headerName: "Birth Date", width: 150 },
    {
      field: "actions",
      headerName: "",
      width: 100,
      renderCell: (params) => (
        <strong>
          <IconButton
            onClick={() => {
              handleEditClick(params.id)
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              worker.deleteWorkers(params.id)
              window.location.reload()
            }}
          >
            <DeleteIcon />
          </IconButton>
        </strong>
      ),
    },
  ]
  async function handleEditClick(id) {
    const w = await worker.getByIdWorkers(id)
    setSelectedWorker(w)
    navigate(`/edit/${id}`)
  }

  return (
    <React.Fragment>
      <div style={{ width: "100%" }}>
        <DataGrid rows={worker.workers} columns={columns} slots={{ toolbar: GridToolbar }} />
      </div>
    </React.Fragment>
  )
})

export default Workers
