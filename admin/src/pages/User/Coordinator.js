import React,{useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch,useSelector} from "react-redux";
import { deleteUsers, loadUsers, loadAdmins, loadCoordinator, loadCoordinators } from '../../redux/action';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
  
  

const useStyles= makeStyles((theme)=>({
  table:{
      marginTop:100,
      minWidth : 900
  },
  toolbar: {
    marginBottom: theme.spacing(2)
  },
 
  
}));

const Coordinator = () => {
    const classes = useStyles();
    let dispatch = useDispatch();
    const {users}= useSelector(state=>state.data)
    let history = useHistory();

    useEffect(()=>{
      dispatch(loadCoordinators());
    },[]);

  const handleDelete=(id)=>{
      if(window.confirm("Are you sure wanted to delete the user ?")){
        dispatch(deleteUsers(id));
        
      }
  }

return (
    <div >
      
      
      <div className={classes.toolbar}>
      <Button variant="contained" onClick ={()=> history.push("/app/user/addUser")}>Add Coordinator</Button>
      </div>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell align="center">Password</StyledTableCell>
            <StyledTableCell align="center">UserType</StyledTableCell>
            <StyledTableCell align="center">UserToken</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user._id}>
             
              <StyledTableCell component="th" scope="row"> {user.userName}</StyledTableCell>
              <StyledTableCell align="center">{user.password}</StyledTableCell>
              <StyledTableCell align="center">{user.userType}</StyledTableCell>
              <StyledTableCell align="center">{user.userToken}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup 
              
                 variant="contained" 
                 aria-label="outlined primary button group">
                  <Button 
                    onClick={()=>history.push(`/app/user/editUser/${user._id}`)} 
                    style={{marginRight:"5px"}} 
                    color = "primary"
                    >Edit</Button>
                  <Button onClick={()=> handleDelete(user._id)} color = "secondary">Delete</Button>
               
              </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Coordinator;
