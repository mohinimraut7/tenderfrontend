
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate,Link} from 'react-router-dom';
// import { addUser, fetchUsers, deleteUser, editUser } from '../store/actions/userActions';
// import { DataGrid } from '@mui/x-data-grid';
// import IconButton from '@mui/material/IconButton';
// import { Typography, Box, Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddUser from '../components/modals/AddUser';
// import { CircularProgress} from '@mui/material';
// import { styled } from '@mui/material/styles';
// const columns = (handleDeleteUser, handleEditUser) => [
//   { field: 'id', headerName: 'ID', width: 70 },

//   {
//     field: 'actions',
//     headerName: 'Actions',
//     width: 200,
//     renderCell: (params) => (
//       <>
//         <IconButton sx={{ color: '#FFA534' }} onClick={() => handleDeleteUser(params.row._id)}>
//           <DeleteIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#23CCEF' }} onClick={() => handleEditUser(params.row)}>
//           <EditIcon />
//         </IconButton>
//       </>
//     ),
//   },
//   // { field: 'cn', headerName: 'CONSUMER NO.', width: 130 },

  

//   // {
//   //   field: 'username',
//   //   headerName: 'USER NAME',
//   //   width: 130,
//   //   renderCell: (params) => (
//   //     <Link 
//   //       to={`/consumer-bill-details/${params.row.cn}`} 
//   //       state={{ consumerData: params.row }} 
//   //       style={{ textDecoration: 'none', color: '#23CCEF' }}
//   //     >
//   //       {params.row.username}
//   //     </Link>
//   //   ),
//   // },

//   { field: 'username', headerName: 'USER NAME', width: 200 },

//   { field: 'email', headerName: 'EMAIL', width: 200 },


//   // { field: 'username', headerName: 'USER NAME', width: 130 },



//   { field: 'contactNumber', headerName: 'CONTACT NUMBER', width: 130 },
//   { field: 'address', headerName: 'ADDRESS', width: 130 },
//   // { field: 'roleSupervisor', headerName: 'ROLE SUPERVISOR', width: 130 },
//   { field: 'ward', headerName: 'Ward', width: 130 },
 
  
// ];
// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { users, loading, error } = useSelector((state) => state.users);
//   const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
//   const [userOpen, setUserOpen] = useState(false)
//   const [currentUser, setCurrentUser] = useState(null);
  
//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);
//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }
//   if (error) {
//     return <p>Error: {error}</p>;
//   }
//   // const rows = users.filter((user)=>(user?.role !== "Super Admin" && user?.role !== "Admin"  && user?.role !== "Executive Engineer" && user?.role !== "Junior Engineer")).map((user, index) => ({
//     const rows = users.map((user,index) => ({
//     id: index + 1,
//     _id: user?._id,
//     // cn: user.cn,
//     username: user?.username,
//     email: user?.email,
//     role: user?.role || '-',
//     roleSupervisor: user?.roleSupervisor || '-',
//     contactNumber: user?.contactNumber,
//     address: user?.address || '-',
//     ward: user?.ward || '-'

//   }));
//   const gridStyle = {
//     height: 'auto',
//     width: isSidebarOpen ? '80%' : '90%',
//     marginLeft: isSidebarOpen ? '19%' : '7%',
//     transition: 'margin-left 0.3s',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '30px 0px',
//     paddingLeft: '10px',
//   };
//   const innerDivStyle = {
//     border: '1px solid #F7F7F8',
//     width: '99%',
//     padding: '30px 10px',
//   };

//   const rowColors = ['#F7F9FB', 'white'];

//   const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
//     '& .MuiDataGrid-cell': {
//       padding: theme.spacing(1),
//     },
//     '& .MuiDataGrid-row': {
//       '&:nth-of-type(odd)': {
//         backgroundColor: rowColors[0],
//       },
//       '&:nth-of-type(even)': {
//         backgroundColor: rowColors[1],
//       },
//     },
//   }));
//   const handleAddUserOpen = () => {
//     setCurrentUser(null);
//     setUserOpen(true)
//   }
//   const handleAddUserClose = () => {
//     setUserOpen(false)
//   }
//   const handleAddUser = (userData) => {
//     dispatch(addUser(userData));
//     handleAddUserClose();
//   };
//   const handleEditUser = (user) => {
//     setCurrentUser(user);
//     setUserOpen(true);
//   };
//   const handleDeleteUser = (userId) => {
//     dispatch(deleteUser(userId));
//   };
//   return (
//     <div style={gridStyle}>
//       <Box sx={innerDivStyle}>
//         <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Typography style={{ paddingLeft: '20px', color: '#0d2136' }} className="title-2">
//             USER MASTER
//           </Typography>
//           <Button
//             sx={{
//               color: '#23CCEF',
//               border: '0.1px solid #23CCEF',
//               cursor: 'pointer',
//               textTransform: 'none',
//               display: 'flex',
//               justifyContent: 'space-between',
//               width: '115px',
//             }}
//             onClick={handleAddUserOpen}
//           >
//             <AddIcon sx={{ marginLeft: '2px' }} />
//             <Typography onClick={handleAddUserOpen}>Add User</Typography>
//           </Button>
//         </Box>
//         <StyledDataGrid
//           rows={rows}
//           columns={columns(handleDeleteUser, handleEditUser)}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5,10,20,30]}
//           checkboxSelection
//         />
//         <AddUser
//           open={userOpen}
//           handleClose={handleAddUserClose}
//           handleAddUser={handleAddUser}
//           currentUser={currentUser}
//           editUser={(userId, userData) => {
//             dispatch(editUser(userId, userData));
//             dispatch(fetchUsers());
//           }}
//         />
//       </Box>
//     </div>
//   );
// };
// export default User;
// ===================================
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate,Link} from 'react-router-dom';
import { addUser, fetchUsers, deleteUser, editUser } from '../store/actions/userActions';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import { Typography, Box, Button, Paper, Container, useTheme, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddUser from '../components/modals/AddUser';
import { CircularProgress} from '@mui/material';
import { styled } from '@mui/material/styles';

const columns = (handleDeleteUser, handleEditUser) => [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 80,
    minWidth: 60,
    flex: 0.3,
    headerAlign: 'center',
    align: 'center',
    sortable: true
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    minWidth: 120,
    flex: 0.5,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
        <IconButton 
          sx={{
            color:'#FFA534',
            '&:hover': {
              backgroundColor: 'rgba(255, 165, 52, 0.1)',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.2s'
          }}  
          onClick={() => handleDeleteUser(params.row._id)}
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton 
          sx={{
            color:'#20B2AA',
            '&:hover': {
              backgroundColor: 'rgba(35, 204, 239, 0.1)',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.2s'
          }}  
          onClick={() => handleEditUser(params.row)}
          size="small"
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
  { 
    field: 'username', 
    headerName: 'USER NAME', 
    width: 200,
    minWidth: 150,
    flex: 1,
    headerAlign: 'left',
    align: 'left',
    sortable: true
  },
  { 
    field: 'email', 
    headerName: 'EMAIL', 
    width: 200,
    minWidth: 150,
    flex: 1.2,
    headerAlign: 'left',
    align: 'left',
    sortable: true
  },
  { 
    field: 'contactNumber', 
    headerName: 'CONTACT NUMBER', 
    width: 150,
    minWidth: 130,
    flex: 1,
    headerAlign: 'left',
    align: 'left',
    sortable: true
  },
  { 
    field: 'address', 
    headerName: 'ADDRESS', 
    width: 150,
    minWidth: 130,
    flex: 1,
    headerAlign: 'left',
    align: 'left',
    sortable: true
  },
  { 
    field: 'ward', 
    headerName: 'Ward', 
    width: 130,
    minWidth: 100,
    flex: 0.8,
    headerAlign: 'left',
    align: 'left',
    sortable: true
  },
];

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const [userOpen, setUserOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUserOpen = () => {
    setCurrentUser(null);
    setUserOpen(true)
  }

  const handleAddUserClose = () => {
    setUserOpen(false)
  }

  const handleAddUser = (userData) => {
    dispatch(addUser(userData));
    handleAddUserClose();
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setUserOpen(true);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <CircularProgress size={60} sx={{ color: '#23CCEF' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <Typography variant="h6" color="error">Error: {error}</Typography>
      </Box>
    );
  }

  const rows = users.map((user,index) => ({
    id: index + 1,
    _id: user?._id,
    username: user?.username,
    email: user?.email,
    role: user?.role || '-',
    roleSupervisor: user?.roleSupervisor || '-',
    contactNumber: user?.contactNumber,
    address: user?.address || '-',
    ward: user?.ward || '-'
  }));

  const getResponsiveWidth = () => {
    if (isMobile) return '100%';
    if (isTablet) return isSidebarOpen ? '85%' : '95%';
    return isSidebarOpen ? '82%' : '92%';
  };

  const getResponsiveMargin = () => {
    if (isMobile) return '0';
    if (isTablet) return isSidebarOpen ? '15%' : '5%';
    return isSidebarOpen ? '18%' : '8%';
  };

  const gridStyle = {
    minHeight: 'calc(100vh - 40px)',
    width: getResponsiveWidth(),
    marginLeft: getResponsiveMargin(),
    marginTop: '20px',
    marginBottom: '20px',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f9fa',
    padding: isMobile ? '10px' : '20px',
  };

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    '& .MuiDataGrid-main': {
      borderRadius: '12px',
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid #e9ecef',
      borderRadius: '12px 12px 0 0',
      fontSize: '14px',
      fontWeight: 600,
      color: '#495057',
      minHeight: '56px !important',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 600,
      fontSize: '14px',
      color: '#495057',
    },
    '& .MuiDataGrid-cell': {
      padding: theme.spacing(1.5),
      fontSize: '14px',
      color: '#495057',
      borderBottom: '1px solid #f1f3f4',
    },
    '& .MuiDataGrid-row': {
      '&:nth-of-type(odd)': {
        backgroundColor: '#fbfcfd',
      },
      '&:nth-of-type(even)': {
        backgroundColor: 'white',
      },
      '&:hover': {
        backgroundColor: '#e3f2fd !important',
        transform: 'translateY(-1px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-in-out',
      },
    },
    '& .MuiDataGrid-footerContainer': {
      backgroundColor: '#f8f9fa',
      borderTop: '2px solid #e9ecef',
      borderRadius: '0 0 12px 12px',
      minHeight: '56px',
    },
    '& .MuiDataGrid-selectedRowCount': {
      color: '#495057',
    },
    '& .MuiCheckbox-root': {
      color: '#23CCEF',
    },
    '& .MuiDataGrid-checkboxInput.Mui-checked': {
      color: '#23CCEF',
    },
    '& .MuiDataGrid-menuIcon': {
      color: '#495057',
    },
    '& .MuiDataGrid-sortIcon': {
      color: '#495057',
    },
    '& .MuiDataGrid-columnSeparator': {
      color: '#e9ecef',
    },
  }));

  return (
    <div style={gridStyle}>
      <Container maxWidth={false} sx={{ padding: '0 !important' }}>
        <Paper 
          elevation={0} 
          sx={{ 
            padding: isMobile ? '20px 15px' : '30px 25px',
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e9ecef'
          }}
        >
          <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 2 : 0
          }}>
            <Typography 
              variant={isMobile ? "h5" : "h4"}
              sx={{
                color: '#0d2136',
                fontWeight: 600,
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                letterSpacing: '0.5px',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              USER MASTER
            </Typography>
            <Button
              size="small"
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor:'#20B2AA',
                color: '#fff',
                borderColor: '#20B2AA',
                cursor: 'pointer',
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: '#20B2AA',
                  borderColor: '#20B2AA',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px #20B2AA',
                  opacity:'0.8'
                },
                transition: 'all 0.2s ease-in-out',
              }}
              onClick={handleAddUserOpen}
            >
              Add User
            </Button>
          </Box>

          <Box sx={{ 
            width: '100%', 
            height: isMobile ? '400px' : '600px',
            '& .MuiDataGrid-root': {
              height: '100%',
            }
          }}>
            <StyledDataGrid
              rows={rows}
              columns={columns(handleDeleteUser, handleEditUser)}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: isMobile ? 5 : 10 },
                },
              }}
              pageSizeOptions={[5, 10, 20, 30]}
              // checkboxSelection
              disableRowSelectionOnClick
              autoHeight={false}
              sx={{
                minHeight: isMobile ? '400px' : '500px',
              }}
            />
          </Box>

          <AddUser
            open={userOpen}
            handleClose={handleAddUserClose}
            handleAddUser={handleAddUser}
            currentUser={currentUser}
            editUser={(userId, userData) => {
              dispatch(editUser(userId, userData));
              dispatch(fetchUsers());
            }}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default User;