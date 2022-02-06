import React from 'react'
import AddButton from '../components/Buttons/AddButton';
import 'bootstrap/dist/css/bootstrap.css';
import Img from '../Rectangle 3.png';
import * as MdIcons from 'react-icons/md';
import './Properties.css';
import { Link } from 'react-router-dom';
import AddPropertyForm from '../components/Modals/AddPropertyFormModal/AddPropertyForm';
import Rent from '../components/Modals/RentModal/Rent';
import Grid from '@material-ui/core/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RESPAY from '../Adapters/Axios';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Properties() {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [properties, setProperties] = React.useState([]);
    const [showUpload, setShowUpload] = React.useState(false)
    const getProperties = async () => {
        const response = await RESPAY.get('/api/GetPropertyCreatedAssigned')
        console.log(response.data?.data)
        setProperties(response.data?.data)
    }
    React.useEffect( ()=> {
        getProperties()
    console.log('here')
  }, [])
    return (
        <>
        <AddPropertyForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} showUpload={showUpload} setShowUpload={setShowUpload}/>
        <Rent showUpload={showUpload} setShowUpload={setShowUpload}/>
        <div className='property'>
            <div className='properties'>
                <div className='add-property' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '25px'
                }}>
                    <h1>Properties</h1>
                    <AddButton isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                   
                </div>
            </div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    {properties.map((property) => {
                        return (
                            <Grid item md={4} sm={4}>
                                <Item style={{
                                    margin: "0 0 20px 20px",
                                    padding: "0"
                                }}>  
                                    <Link to={`/property-details/${property.propertyId}`}>
                                        <div className="prop-deets" style={{width: '100%'}}>
                                            <img src={Img} className="card-img-top" alt="apartment-view" />
                                            <div className="card-body">
                                                <h5 className="card-title">{property.propertyName} <span className='unit'>{property.totalUnit} units</span></h5>
                                                <div className='btn' >
                                                    <span className='res'>{property.strPropType}</span>
                                                    <MdIcons.MdKeyboardArrowDown />
                                                </div>
                                                <p className="card-text">{`${property.city}, ${property.strState}`}</p>                 
                                            </div>
                                        </div>
                                    </Link>    
                                </Item>
                            </Grid> 
                        )
                    })}
                                      
                </Grid>
            </Box>
        </div>
        </>
    )
}