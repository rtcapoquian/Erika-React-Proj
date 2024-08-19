// src/components/EquipmentForm.js
import React, { useState } from 'react';
import FormInput from './FormInput';

const EquipmentForm = () => {
    const [formData, setFormData] = useState({
        category: '',
        itemName: '',
        itemModel: '',
        itemDescription: '',
        quantity: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Equipment Data:', formData);
        // Submit the formData to the backend service
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput label="Category" type="text" name="category" value={formData.category} onChange={handleChange} />
            <FormInput label="Item Name" type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
            <FormInput label="Item Model" type="text" name="itemModel" value={formData.itemModel} onChange={handleChange} />
            <FormInput label="Item Description" type="text" name="itemDescription" value={formData.itemDescription} onChange={handleChange} />
            <FormInput label="Quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
            <FormInput label="Location" type="text" name="location" value={formData.location} onChange={handleChange} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default EquipmentForm;
