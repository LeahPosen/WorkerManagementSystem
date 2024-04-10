// import { observer } from "mobx-react-lite";
// import worker from "../data/worker";
// import * as React from 'react';
// import Table from '@mui/joy/Table';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, FormControl, MenuItem, IconButton, Button, StepIcon } from '@mui/material';
// import Slide from '@mui/material/Slide';
// import { useForm } from 'react-hook-form';
// import Edit from "./Edit";
// import { createContext } from "react";
// export const OpenContext = createContext(null);

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const Workers = observer(() => {
//   const [open, setOpen] = React.useState(false);
//   const openContext = { open, setOpen };

//   const [selectedWorker, setSelectedWorker] = React.useState(); // הוספת המשתנה לאחסון העובד שנבחר לעריכה

//   async function handleEditClick(id) {
//     const w = await worker.getByIdWorkers(id);
//     setSelectedWorker(w)
//     setOpen(true);
//   };

//   return (
//     <React.Fragment>
//       <Table hoverRow>
//         <thead>
//           <tr>
//             <th></th>
//             <th>Name:</th>
//             <th>Start Working</th>
//             <th>Birth Day</th>
//             <th>Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {worker.workers.map((w, i) => (
//             <tr key={w.id}>
//               <td>
//                 <IconButton onClick={() => { handleEditClick(w.id); }}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton onClick={() => { worker.deleteWorkers(w.id); window.location.reload(); }}>
//                   <DeleteIcon />
//                 </IconButton>
//               </td>
//               <td>{w.firstName} {w.lastName}</td>
//               <td>{w.startWorking}</td>
//               <td>{w.birthDate}</td>
//               <td>{w.gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={() => setOpen(false)}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <OpenContext.Provider value={openContext}>
//           <Edit w={selectedWorker} /> {/* העברת העובד הנבחר לקומפוננטת העריכה */}
//         </OpenContext.Provider>
//       </Dialog>
//     </React.Fragment>
//   );
// });

// export default Workers;

import * as React from "react"
import worker from "../data/worker"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton, Slide } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

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
