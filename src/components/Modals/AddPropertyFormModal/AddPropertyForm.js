import React, {useEffect, useState} from 'react'
import './AddPropertyForm.css';
import * as MdIcons from 'react-icons/md';
import { Modal } from "antd";
import { Form, Input, Button, Select } from "antd";
import Rent from '../RentModal/Rent';
import tagRender from "../../tagRender";
import RESPAY from '../../../Adapters/Axios/'
import Item from 'antd/lib/list/Item';
const { TextArea } = Input;
const { Option } = Select;




const AddPropertyForm = ({isModalVisible, setIsModalVisible, showUpload, setShowUpload}) => {
  const [countryState, setCountryState] = useState([])
  const [stateCity, setStateCity] = useState([])
  const [propertyType, setPropertyType] = useState([])
  const [buildingType, setBulidingType] = useState([])
  const [amenities, setAmenities] = useState([])

  const getLocation = async() => {
    const response = await RESPAY.get('/api/State/156');
    const response1 = await RESPAY.get(`/api/Utilities/CityByState`, {
    params: {
      State: 'Lagos'
    }
  })
    setStateCity(response1?.data?.data)
    setCountryState(response?.data?.data)
  }

  const getPropertyTypes = async() => {
    const response = await RESPAY.get('/api/PropertyType');
    
    setPropertyType(response?.data?.data)
  }

  const getBuildingTypes = async() => {
    const response = await RESPAY.get('/api/BuildingType');
    console.log(response)
    setBulidingType(response?.data?.data)
  }

  const getAmenities = async() => {
    const response = await RESPAY.get('/api/Amenities');
    
    const data = await response?.data?.data
    
    const amenityOptions = data.map((item)=>({value: item.name}))
    setAmenities(amenityOptions)
  }

  useEffect( ()=> {
    getLocation()
    getPropertyTypes()
    getBuildingTypes()
    getAmenities()
    console.log('here')
  }, [])

  
  


  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal 
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closable={false}
    >
      
      <span
        style={{
          cursor: "pointer",    
          fontFamily: 'MetaPro, serif',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '21px',
          letterSpacing: '-0.41px',
          color: '#767272',
        }}
        onClick={handleCancel}
      >
        <MdIcons.MdOutlineArrowBack />
        {" "}
        Back
      </span>
      
      <h1>Add Property</h1>
      <Form
        name="add-property-form"
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        style={{
          padding: "0 3rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Form.Item
          label="Property Name"
          name="property-name"
          rules={[{ required: true, message: "Enter Property Name" }]}
          style={{
            flexBasis: "100%",
          }}
        >
          <Input placeholder="Zone B House" style={{
            height: '62px',
            border: '1px solid #A6A6A6',
            boxSizing: 'border-box',
            borderRadius: '5px'
          }}/>
        </Form.Item>

        <Form.Item
          label="Property Description"
          name="property-description"
          rules={[{ required: true, message: "Enter Property Description" }]}
          style={{
            flexBasis: "100%",
          }}
        >
          <TextArea placeholder="Semi-Detached Bungalow" style={{
            height: '102px',
            border: '1px solid #A6A6A6',
            boxSizing: 'border-box',
            borderRadius: '5px'
          }}/>
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          layout="inline"
          rules={[{ required: true, message: "Pick a State" }]}
          style={{
            flexBasis: "47%",
            
          }}
        >
          <Select placeholder="State" allowClear showSearch style={{
            
            border: '1px solid #A6A6A6',
            boxSizing: 'border-box',
            borderRadius: '5px',
          
          }}>
            {countryState.map((item)=>{
              return (<Option value={item.states}>{item.states}</Option>)
            })}
            
            
          </Select>
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Pick a City" }]}
          style={{
            flexBasis: "47%",
          }}
        >
          <Select placeholder="City" allowClear showSearch >
             {stateCity.map((item)=>{
              return (<Option value={item.name}>{item.name}</Option>)
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Enter Address" }]}
          style={{
            flexBasis: "100%",
          }}
        >
          <Input placeholder="Address" style={{
            height: '62px',
            border: '1px solid #A6A6A6',
            boxSizing: 'border-box',
            borderRadius: '5px'
          }}/>
        </Form.Item>

        <Form.Item
          label="Property Type"
          name="property-type"
          layout="inline"
          rules={[{ required: true, message: "Enter Property Type" }]}
          style={{
            flexBasis: "47%",
          }}
        >
          <Select placeholder="Residential" allowClear showSearch>
            {propertyType.map((item)=>{
               return (<Option value={item.name}>{item.name}</Option>)
            })}
            
            
          </Select>
        </Form.Item>

        <Form.Item
          label="Building Type"
          name="building-type"
          rules={[{ required: true, message: "Enter Building Type" }]}
          style={{
            flexBasis: "47%",
          }}
        >
          <Select placeholder="Building Type" allowClear showSearch >
           {buildingType.map((item)=>{
               return (<Option value={item.name}>{item.name}</Option>)
            })}

          </Select>
        </Form.Item>

        <Form.Item
          label="Amenities"
          name="amenities"
          style={{
            flexBasis: "100%",
          }}
        >
          <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            placeholder="Amenities"
            options={amenities}
          />
        </Form.Item>

        <p onClick={()=> setShowUpload(true)} className='btn'>Upload Property Images?</p>

        <Form.Item
          style={{
            flexBasis: "100%",
          }}
        >
          <Button htmlType="submit" block style={{
            background: '#038618',
            borderRadius: '4px',
            fontFamily: 'MetaPro, serif',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '22px',            textAlign: 'center',
            height: '62px',
            color: '#ffffff'
          }}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};



export default AddPropertyForm 

