// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// function createData(name) {
//   return {
//     name,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>

//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt'),
//   createData('Ice cream sandwich'),
//   createData('Eclair'),
//   createData('Cupcake'),
//   createData('Gingerbread'),
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Roles:</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

//עובד מעולה רק יש בעיה ב"האם מנהל" ולכן אני מנסה להשתמש בהוק-פורם
// import * as React from 'react';
// import { useForm } from 'react-hook-form';
// import { WorkerContext } from './Edit';
// import { useContext, useState, useEffect } from 'react';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import { observer } from "mobx-react-lite";
// import { FormControl } from '@mui/material';
// import Input from '@mui/joy/Input';
// import FormLabel from '@mui/joy/FormLabel';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

// function Row(props) {
//   const { role } = props;
//   const [open, setOpen] = React.useState(false);
//   const { handleSubmit } = useForm();
//   const { w, setWorker } = useContext(WorkerContext);

//   const [formData, setFormData] = useState({
//     name: '',
//     isAdministrative: '',
//     startRole: '',
//   });

//   useEffect(() => {
//     if (role) {
//       setFormData({
//         name: role.name,
//         isAdministrative: role.isAdministrative,
//         startRole: role.startRole || '',
//       });
//     }
//   }, [role]);

//   const handleDeleteRow = () => {
//     w.rolesList = w.rolesList.filter(r => r.id !== role.id);
//     setWorker({ ...w });
//   };

//   function updateRole(data) {
//     console.log(JSON.stringify(formData));
//     setOpen(false);
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => open ? updateRole(role) : setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <EditIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell>
//           <IconButton aria-label="delete row" size="small" onClick={handleDeleteRow}>
//             <DeleteIcon />
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {role.name}
//         </TableCell>

//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <FormControl onSubmit={handleSubmit(updateRole)}>
//               <FormControl>
//                 <FormLabel>Name:</FormLabel>
//                 <Input value={formData.name} name="name" onChange={handleInputChange} />
//               </FormControl>
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox defaultChecked={formData.isAdministrative=="true"} />} label="Is Administrative" name="isAdministrative" onChange={handleInputChange} />
//               </FormGroup>
//               <FormControl>
//                 <FormLabel>Start Working:</FormLabel>
//                 <Input value={formData.startRole} type="datetime-local" name="startRole" onChange={handleInputChange} />
//               </FormControl>
//             </FormControl>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// // Row.propTypes = {
// //   row: PropTypes.shape({
// //     name: PropTypes.string.isRequired,
// //   }),
// // };

// const Roles = observer(({ w }) => {
//   const handleAddRole = () => {
//     // Implement logic to add a new role
//     console.log('Adding a new role');
//   };
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Roles:
//               <IconButton aria-label="add role" size="small" onClick={handleAddRole}>
//                 <AddIcon />
//               </IconButton>
//             </TableCell>
//             <TableCell>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {w?.rolesList.map((r) => (
//             <Row key={r.id} role={r} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// });
// export default Roles;

//עובד מושלם כולל הכל למעט הוספת תפקיד ובחירת שם תפקיד מתוך תפריט בחירה
// import * as React from 'react';
// import tagRole from '../data/tagRole';
// import { useForm } from 'react-hook-form';
// import { WorkerContext } from './Edit';
// import { useContext, useState, useEffect } from 'react';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import { observer } from "mobx-react-lite";
// import { Button, Card, FormControl } from '@mui/material';
// import Input from '@mui/joy/Input';
// import FormLabel from '@mui/joy/FormLabel';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

// function Row(props) {
//   const { role } = props;
//   const [open, setOpen] = React.useState(false);
//   const  {w, setWorker} = useContext(WorkerContext);
//   //const w= useContext(WorkerContext).w;
//   //const   setWorker = useContext(WorkerContext).setWorker;

//   const { register, handleSubmit, reset } = useForm();

//   const handleDeleteRow = () => {
//     w.rolesList = w.rolesList.filter(r => r.id !== role.id);
//     setWorker({ ...w });
//   };

//   const handleFormSubmit = (data) => {
//     const updatedRole = {
//       id: role.id,
//       tagRoleId: data.tagRoleId,
//       isAdministrative: data.isAdministrative,
//       startRole: data.startRole
//     };
//     const updatedRolesList = w.rolesList.map(r => (r.id === role.id ? updatedRole : r));
//     w.rolesList = updatedRolesList
//     setWorker({...w});
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <EditIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell>
//           <IconButton aria-label="delete row" size="small" onClick={handleDeleteRow}>
//             <DeleteIcon />
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {role.tagRoleId}
//         </TableCell>

//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>

//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <div>
//               <FormControl>
//                 <FormLabel>Name:</FormLabel>
//                 <Input {...register("tagRoleId")} defaultValue={role.tagRoleId} type="number"/>
//               </FormControl>
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox
//                   defaultChecked={role.isAdministrative} />} label="Is Administrative" {...register("isAdministrative")} />

//               </FormGroup>
//               <FormControl>
//                 <FormLabel>Start Working:</FormLabel>
//                 <Input type="datetime-local" {...register("startRole")} defaultValue={role.startRole} />
//               </FormControl>
//               <Button type='submit' onClick={handleSubmit(handleFormSubmit)}>Submit</Button>
//             </div>
//           </Collapse>

//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// const Roles = observer(({ w }) => {
//   const handleAddRole = () => {
//     // Implement logic to add a new role
//     console.log('Adding a new role');
//   };
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Roles:
//               <IconButton aria-label="add role" size="small" onClick={handleAddRole}>
//                 <AddIcon />
//               </IconButton>
//             </TableCell>
//             <TableCell>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {w?.rolesList.map((r) => (
//             <Row key={r.id} role={r} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// });
// export default Roles;

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

//const Roles = observer(({ w }) => {
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
