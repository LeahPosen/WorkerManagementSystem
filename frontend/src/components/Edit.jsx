//ראשוני? לא זוכרת מה יש שם
// import * as React from 'react';
// import { useContext } from 'react';
// import { observer } from 'mobx-react-lite';
// import { OpenContext } from './Workers';
// import worker from '../data/worker';
// import Table from '@mui/joy/Table';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, FormControl, MenuItem, IconButton, Button, Slide } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import PersonIcon from '@mui/icons-material/Person';
// import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import Input from '@mui/joy/Input';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Typography from '@mui/joy/Typography';
// import FormLabel from '@mui/joy/FormLabel';
// import Select from '@mui/material/Select';

// const Edit = observer(({ w }) => {
//   const {open,setOpen} = useContext(OpenContext);

//   const { register, handleSubmit, reset, setValue } = useForm();
//   function update(upWorker) {
//     worker.putWorkers(w.id, upWorker);
//     setOpen(false)
//   }
//   return (<form onSubmit={handleSubmit(update)}>
//     <Card
//       data-resizable
//       sx={{
//         textAlign: 'center',
//         alignItems: 'center',
//         width: 343,
//         // to make the demo resizable
//         overflow: 'auto',
//         resize: 'horizontal',
//         '--icon-size': '100px',
//       }}
//     >
//       <CardOverflow variant="solid" color="primary">
//         <AspectRatio
//           variant="outlined"
//           color="primary"
//           ratio="1"
//           sx={{
//             m: 'auto',
//             transform: 'translateY(50%)',
//             borderRadius: '50%',
//             width: 'var(--icon-size)',
//             boxShadow: 'sm',
//             bgcolor: 'background.surface',
//             position: 'relative',
//           }}
//         >
//           <div>
//             <EditIcon color="primary" sx={{ fontSize: '4rem' }} />
//           </div>
//         </AspectRatio>
//       </CardOverflow>
//       <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
//         Edit details
//       </Typography>
//       <CardContent sx={{ maxWidth: '40ch' }}>
//         <FormControl >
//           <FormLabel>First Name:</FormLabel>
//           <Input defaultValue={w?.firstName || ''} endDecorator={<PersonIcon />} {...register("firstName")} />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Last Name:</FormLabel>
//           <Input defaultValue={w?.lastName || ''} endDecorator={<PhoneEnabledIcon />} type="tel" {...register("lastName")} />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Birth Date:</FormLabel>
//           <Input defaultValue={w?.birthDate || ''}  type="datetime-local"  {...register("birthDate")} />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Start Working:</FormLabel>
//           <Input defaultValue={w?.startWorking || ''}  type="datetime-local"  {...register("startWorking")} />
//         </FormControl>

//       </CardContent>
//       <CardActions
//         orientation="vertical"
//         buttonFlex={1}
//         sx={{
//           '--Button-radius': '40px',
//           width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
//         }}
//       >
//         <Button type="submit" variant="solid" color="primary">
//           Update
//         </Button>

//       </CardActions>
//     </Card>
//   </form>);
// });
// export default Edit;

//שני עובד מעולה, אני מחליפה עיצוב
// import * as React from 'react';
// import { useContext, useState, useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
// import worker from '../data/worker';
// import Table from '@mui/joy/Table';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, FormControl, MenuItem, IconButton, Button, Slide } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import PersonIcon from '@mui/icons-material/Person';
// import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import Input from '@mui/joy/Input';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Typography from '@mui/joy/Typography';
// import FormLabel from '@mui/joy/FormLabel';
// import Select from '@mui/material/Select';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import CollapsibleTable from './Roles';

// const Edit = observer(() => {
//   const { id } = useParams();
//   const [w, setWorker] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const fetchWorker = async () => {
//         const fetchedWorker = await worker.getByIdWorkers(id);
//         setWorker(fetchedWorker);
//       };
//       fetchWorker();
//     }
//   }, [id]);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     startWorking: '',
//     gender: -1
//   });

//   const { register, handleSubmit, reset, setValue } = useForm();

//   useEffect(() => {
//     if (w) {
//       setFormData({
//         firstName: w.firstName || '',
//         lastName: w.lastName || '',
//         birthDate: w.birthDate || '',
//         startWorking: w.startWorking || '',
//         gender: w.gender
//       });
//     }
//   }, [w]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const navigate = useNavigate();

//   function update() {
//     formData.rolesList = []
//     formData.gender=parseInt(formData.gender)
//     console.log(formData);
//     worker.putWorkers(w.id, formData);
//     navigate("/")
//     window.location.reload();
//   }

//   return (
//     <form onSubmit={handleSubmit(update)}>
//       <Card
//         data-resizable
//         sx={{
//           textAlign: 'center',
//           alignItems: 'center',
//           width: 343,
//           overflow: 'auto',
//           resize: 'horizontal',
//           '--icon-size': '100px',
//         }}
//       >
//         <CardOverflow variant="solid" color="primary">
//           <AspectRatio
//             variant="outlined"
//             color="primary"
//             ratio="1"
//             sx={{
//               m: 'auto',
//               transform: 'translateY(50%)',
//               borderRadius: '50%',
//               width: 'var(--icon-size)',
//               boxShadow: 'sm',
//               bgcolor: 'background.surface',
//               position: 'relative',
//             }}
//           >
//             <div>
//               <EditIcon color="primary" sx={{ fontSize: '4rem' }} />
//             </div>
//           </AspectRatio>
//         </CardOverflow>
//         <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
//           Edit details
//         </Typography>
//         <CardContent sx={{ maxWidth: '40ch' }}>
//           <FormControl>
//             <FormLabel>First Name:</FormLabel>
//             <Input value={formData.firstName} endDecorator={<PersonIcon />} name="firstName" onChange={handleInputChange} />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Last Name:</FormLabel>
//             <Input value={formData.lastName} endDecorator={<PhoneEnabledIcon />} type="tel" name="lastName" onChange={handleInputChange} />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Birth Date:</FormLabel>
//             <Input value={formData.birthDate} type="datetime-local" name="birthDate" onChange={handleInputChange} />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Start Working:</FormLabel>
//             <Input value={formData.startWorking} type="datetime-local" name="startWorking" onChange={handleInputChange} />
//           </FormControl>

//           <FormControl>
//             <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-controlled-radio-buttons-group"
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChange}
//             >
//               <FormControlLabel value={0} control={<Radio />} label="Male" />
//               <FormControlLabel value={1} control={<Radio />} label="Female" />
//             </RadioGroup>
//           </FormControl>

//           <CollapsibleTable/>
//         </CardContent>
//         <CardActions
//           orientation="vertical"
//           buttonFlex={1}
//           sx={{
//             '--Button-radius': '40px',
//             width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
//           }}
//         >
//           <Button type="submit" variant="solid" color="primary">
//             Update
//           </Button>
//         </CardActions>
//       </Card>
//     </form>
//   );
// });

// export default Edit;

//יש בעיה בשמירת הנתונים בטופס ולכן אני מחליפה להוק
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startWorking: "",
    gender: -1,
  })

  const { register, handleSubmit, reset, setValue } = useForm()

  useEffect(() => {
    if (w) {
      setFormData({
        firstName: w.firstName || "",
        lastName: w.lastName || "",
        birthDate: w.birthDate || "",
        startWorking: w.startWorking || "",
        gender: w.gender,
      })
    }
  }, [w])

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
        // sx={{
        //   textAlign: 'center',
        //   alignItems: 'center',
        //   width: 343,
        //   overflow: 'auto',
        //   resize: 'horizontal',
        //   '--icon-size': '100px',
        // }}
      >
        <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
          Edit details
        </Typography>
        <CardContent sx={{ maxWidth: "40ch" }}>
          <FormControl>
            <FormLabel>First Name:</FormLabel>
            <Input
              value={formData.firstName}
              endDecorator={<PersonIcon />}
              name="firstName"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name:</FormLabel>
            <Input
              value={formData.lastName}
              endDecorator={<PersonIcon />}
              name="lastName"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Birth Date:</FormLabel>
            <Input
              value={formData.birthDate}
              type="datetime-local"
              name="birthDate"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Start Working:</FormLabel>
            <Input
              value={formData.startWorking}
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
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value={0} control={<Radio />} label="Male" />
              <FormControlLabel value={1} control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <WorkerContext.Provider value={workerContext}>
            <Roles />
            {/* <Roles w={w} /> */}
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
            Update
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

// import * as React from 'react';
// import { useState, useEffect, createContext } from 'react';
// import { observer } from 'mobx-react-lite';
// import worker from '../data/worker';
// import Roles from './Roles';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { FormControl, Button } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import Input from '@mui/joy/Input';
// import FormLabel from '@mui/joy/FormLabel';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

// export const WorkerContext = createContext(null);

// const Edit = observer(() => {
//   let { id } = useParams();
//   const [w, setWorker] = useState(null);
//   const workerContext = { w, setWorker };
//   const { register, handleSubmit, reset, setValue } = useForm();

//   useEffect(() => {
//     if (id) {
//       // const fetchWorker = async () => {
//       //   const fetchedWorker = await worker.getByIdWorkers(id);
//       //   setWorker(fetchedWorker);
//       // };
//       //fetchWorker();
//       const ww = worker.getById(id);
//       setWorker(ww);
//       console.log(JSON.stringify(ww))
//       setValue("firstName",w?.firstName||"");
//       setValue("lastName", w?.lastName ||"");
//       setValue("startWorking", w?.startWorking ||"");
//       setValue("birthDate", w?.birthDate ||"");
//       setValue("gender", parseInt(w?.gender));
//     }
//     else {
//       setWorker({ gender: -1, firstName: "", lastName: "", startWorking: "", birthDate: "", rolesList: [] })
//     }
//   }, [w,setValue]);

//   const navigate = useNavigate();

//   function update(data) {
//     data.rolesList = w.rolesList
//     console.log("before" + JSON.stringify(data));
//     data.gender = parseInt(data.gender)
//     console.log("after" + JSON.stringify(data));
//     if (w.id)
//       worker.putWorkers(w.id, data);
//     else
//       worker.postWorkers(data);
//     navigate("/")
//     //window.location.reload();
//   }
//   function cancel() {
//     navigate("/")
//     window.location.reload();
//   }
//   return (
//     <form onSubmit={handleSubmit(update)}>
//       <Card data-resizable >
//         <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
//           Edit details
//         </Typography>
//         <CardContent sx={{ maxWidth: '40ch' }}>
//           <FormControl>
//             <FormLabel>First Name:</FormLabel>
//             <Input endDecorator={<PersonIcon />} {...register("firstName")} />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Last Name:</FormLabel>
//             <Input endDecorator={<PersonIcon />} {...register("lastName")} />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Birth Date:</FormLabel>
//             <Input  type="datetime-local" {...register("birthDate")} />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Start Working:</FormLabel>
//             <Input type="datetime-local" {...register("startWorking")} />
//           </FormControl>

//           <FormControl >
//             <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-controlled-radio-buttons-group"
//               {...register("gender")}
//             >
//               <FormControlLabel value={0} control={<Radio />} label="Male" />
//               <FormControlLabel value={1} control={<Radio />} label="Female" />
//             </RadioGroup>
//           </FormControl>
//           <WorkerContext.Provider value={workerContext}>
//             <Roles />
//             {/* <Roles w={w} /> */}
//           </WorkerContext.Provider>
//         </CardContent>
//         <CardActions
//           orientation="vertical"
//           buttonFlex={1}
//           sx={{
//             '--Button-radius': '40px',
//             width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
//           }}
//         >
//           <Button type="submit" variant="solid" color="primary">
//             Update
//           </Button>
//           <Button onClick={cancel} variant="solid" color="primary">
//             Cancel
//           </Button>
//         </CardActions>
//       </Card>
//     </form>
//   );
// });

// export default Edit;

//העיגול של הכרטיס
{
  /* <CardOverflow variant="solid" color="primary">
          <AspectRatio
            variant="outlined"
            color="primary"
            ratio="1"
            sx={{
              m: 'auto',
              transform: 'translateY(50%)',
              borderRadius: '50%',
              width: 'var(--icon-size)',
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              position: 'relative',
            }}
          >
            <div>
              <EditIcon color="primary" sx={{ fontSize: '4rem' }} />
            </div>
          </AspectRatio>
        </CardOverflow> */
}
