import React, { useState, useRef, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import Grid from '@mui/material/Grid';
import { Dialog } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { addIntern, updateIntern, deleteIntern } from "../app/store/reducer/InternSlice";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useEffect } from 'react';

const Add_Interns = () => {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null)
  const [disabled, setDisabled] = useState(true);
  const rowData = useSelector((state) => state.interns.allInterns);
  const dispatch = useDispatch();
  //filter state
  const [selectedCollege, setSelectedCollege] = useState([]);//  a selected category
  const [collegeList, setCollegeList] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState([]);//  a selected category
  const [batchList, setBatchList] = useState([]);
  const [filterInternList, setFilterInternList] = useState([]);
  const [isFilter, setIsFilter] = useState(false);


  const [InternDetails, setInternDetails] = useState({
    id: "",
    fname: "",
    lname: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    bloodGroup: "",
    gender: "",
    dob: "",
    college: "",
    batch: "",
    degree: "",
    dept: "",
    year: "",
    cgpa: "",

  });
  useEffect(() => {
    filterDetail();
  }, [collegeList, batchList]);

  const filterDetail = () => {
    const collegeArray = ["all"];
    const batchArray = ["all"];

    rowData.forEach((data) => {
      collegeArray.push(data.college);
      batchArray.push(data.batch);
    });

    const uniqueColleges = [...new Set(collegeArray)];
    setCollegeList(uniqueColleges);

    const uniqueBatches = [...new Set(batchArray)];
    setBatchList(uniqueBatches);
  };

  useEffect(() => {
    Filter();
  }, [selectedCollege, selectedBatch]);

  const Filter = () => {
    if (selectedCollege.length === 0 && selectedBatch.length === 0) {
      setIsFilter(false);
    } else {
      const filteredData = rowData.filter((data) => {
        let college = true;
        let batch = true;

        if (selectedCollege.length > 0) {
          college = selectedCollege.includes("all") || selectedCollege.includes(data.college);
        }

        if (selectedBatch.length > 0) {
          batch = selectedBatch.includes("all") || selectedBatch.includes(data.batch);
        }

        return college && batch;
      });
      setFilterInternList(filteredData);
      setIsFilter(true)
    }
  };




  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInternDetails((prev) => ({
      ...prev,
      [name]: value

    }))
    if (
      InternDetails.id &&
      InternDetails.fname &&
      InternDetails.lname &&
      InternDetails.fatherName &&
      InternDetails.motherName &&
      InternDetails.email &&
      InternDetails.phone &&
      InternDetails.address &&
      InternDetails.age &&
      InternDetails.bloodGroup &&
      InternDetails.gender &&
      InternDetails.dob &&
      InternDetails.college &&
      InternDetails.batch &&
      InternDetails.degree &&
      InternDetails.dept &&
      InternDetails.year &&
      InternDetails.cgpa
    ) {

      setDisabled(false);

    } else {

      setDisabled(true);

    }

  }
  const handleSubmit = () => {
    if (editIndex === null) {
      dispatch(addIntern(InternDetails));
    }
    else {
      dispatch(updateIntern(InternDetails));
      setEditIndex(null);
    }
    setInternDetails({
      id: "",
      fname: "",
      lname: "",
      fatherName: "",
      motherName: "",
      email: "",
      phone: "",
      address: "",
      age: "",
      bloodGroup: "",
      gender: "",
      dob: "",
      college: "",
      batch: "",
      degree: "",
      dept: "",
      year: "",
      cgpa: "",

    })

    setOpen(false);
    console.log(InternDetails);
  }
  const handleEdit = (data, index) => {
    setInternDetails(data)
    console.log('edit', data);
    setOpen(true)
    setEditIndex(index)
    if (
      InternDetails.id &&
      InternDetails.fname &&
      InternDetails.lname &&
      InternDetails.fatherName &&
      InternDetails.motherName &&
      InternDetails.email &&
      InternDetails.phone &&
      InternDetails.address &&
      InternDetails.age &&
      InternDetails.bloodGroup &&
      InternDetails.gender &&
      InternDetails.dob &&
      InternDetails.college &&
      InternDetails.batch &&
      InternDetails.degree &&
      InternDetails.dept &&
      InternDetails.year &&
      InternDetails.cgpa
    ) {

      setDisabled(false);

    } else {

      setDisabled(true);

    }
  }
  const handleDelete = (data, index) => {

    dispatch(deleteIntern(data.id));
    setEditIndex(null);
  }
  localStorage.setItem("internData", JSON.stringify(rowData));



  const gridRef = useRef(); // Optional - for accessing Grid's API
  // Set rowData to Array of Objects, one Object per Row
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "id", headerName: "Id" },
    { field: "fname", headerName: "First Name" },
    { field: "lname", headerName: "Last Name" },
    { field: "fatherName", headerName: "Father Name" },
    { field: "motherName", headerName: "Mother Name" },
    { field: "email", headerName: "EMail" },
    { field: "phone", headerName: "Phone" },
    { field: "address", headerName: "Address" },
    { field: "age", headerName: "Age" },
    { field: "bloodGroup", headerName: "Blood Group" },
    { field: "gender", headerName: "Gender" },
    { field: "dob", headerName: "DOB" },
    { field: "college", headerName: "College" },
    { field: "batch", headerName: "Batch" },
    { field: "degree", headerName: "Degree" },
    { field: "dept", headerName: "Department" },
    { field: "year", headerName: "Year" },
    { field: "cgpa", headerName: "CGPA" },
    { field: "edit", headerName: "Edit", filter: false, cellRenderer: editRenderer },
    { field: "delete", headerName: "Delete", filter: false, cellRenderer: deleteRenderer },
  ]);
  function editRenderer(params) {
    return (
      <div>
        <button onClick={() => handleEdit(params.data, params.rowIndex)}>Edit</button>
      </div>
    );

  }
  function deleteRenderer(params) {
    return (
      <div>
        <button onClick={() => handleDelete(params.data, params.rowIndex)}>Delete</button>
      </div>
    );

  }
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);




  const defaultColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
  }));

  return (
    <div>

      <Button align="right" sx={{ m: 3 }} onClick={handleClickOpen} variant="contained">Add Interns</Button>

      <h1 className='m-3 font-bold'>Total Items{isFilter ? filterInternList.length : rowData.length}</h1>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Interns Information</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            label="Id"
            type="text"
            fullWidth
            name='id'
            value={InternDetails.id}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label=" First Name"
            type="text"
            fullWidth
            name='fname'
            value={InternDetails.fname}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label=" Last Name"
            type="text"
            fullWidth
            name='lname'
            value={InternDetails.lname}
            onChange={handleChange}
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            label=" Father Name"
            type="text"
            fullWidth
            name='fatherName'
            value={InternDetails.fatherName}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label=" Mother Name"
            type="text"
            fullWidth
            name='motherName'
            value={InternDetails.motherName}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="text"
            fullWidth
            name="email"
            value={InternDetails.email}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Phone"
            type="text"
            fullWidth
            name='phone'
            value={InternDetails.phone}
            onChange={handleChange}
            variant="standard"
          />
          <textarea placeholder='Address'
            name='address'
            value={InternDetails.address}
            onChange={handleChange}
            className='border-2'
          />
          <TextField
            autoFocus
            margin="dense"
            label="Age"
            type="text"
            fullWidth
            name='age'
            value={InternDetails.age}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Blood Group"
            type="text"
            fullWidth
            name='bloodGroup'
            value={InternDetails.bloodGroup}
            onChange={handleChange}
            variant="standard"
          /><br />

          <div className='border-2'>

            <input name='dob' type='date' value={InternDetails.dob} placeholder='DOB' onChange={handleChange} />
          </div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              value={InternDetails.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            label="College"
            type="text"
            fullWidth
            name='college'
            value={InternDetails.college}
            onChange={handleChange}
            variant="standard"
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Batch</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="batch"
              value={InternDetails.batch}
              onChange={handleChange}
            >
              <FormControlLabel value="I" control={<Radio />} label="I" />
              <FormControlLabel value="II" control={<Radio />} label="II" />
              <FormControlLabel value="III" control={<Radio />} label="III" />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            label="Degree"
            type="text"
            fullWidth
            name='degree'
            value={InternDetails.degree}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Department"
            type="text"
            fullWidth
            name="dept"
            value={InternDetails.dept}
            onChange={handleChange}
            variant="standard"
          />
          <select
            value={InternDetails.year}
            onChange={handleChange}
            name="year"
            className='border-2'
          >
            <option value=""> Year</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>


          <TextField
            autoFocus
            margin="dense"
            label="CGPA"
            type="text"
            fullWidth
            name="cgpa"
            value={InternDetails.cgpa}
            onChange={handleChange}
            variant="standard"
          />
        </DialogContent>


        <DialogActions>
          <Button onClick={() => handleSubmit()} variant="contained" disabled={disabled} color="secondary">{editIndex !== null ? 'Update' : 'Add'}
          </Button>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
        </DialogActions>
      </Dialog>
      <div className='flex'>
        <div>
          <Button align="right" sx={{ m: 3 }} variant="contained" color="secondary">Add Filter</Button>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={collegeList}
            value={selectedCollege}
            onChange={(_, val) => {
              setSelectedCollege(val)
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="College" />}
          />
          <div sx={{ m: 3 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={batchList}
              value={selectedBatch}
              onChange={(_, val) => {
                setSelectedBatch(val)
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Batch" />}
            />
          </div>
        </div>


        <div className="ag-theme-alpine " style={{ width: 2000, height: 500 }}>

          <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API

            rowData={filterInternList?.length ? filterInternList : rowData} // Row Data for Rows

            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties

            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows

            onCellClicked={cellClickedListener} // Optional - registering for Grid Event

          />

        </div>
      </div>
    </div>
  )
}

export default Add_Interns;