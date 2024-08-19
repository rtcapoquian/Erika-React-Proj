// src/components/TransactionForm.js
import React, { useState } from 'react';
import FormInput from './FormInput';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        transactionId: '',
        dateAndTime: '',
        qrIdReferencingStudent: '',
        itemName: '',
        quantity: '',
        subject: '',
        professor: '',
        roomNo: '',
        borrowedDuration: '',
        transactionType: '',
        returnStatus: ''
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
        console.log('Transaction Data:', formData);
        // Submit the formData to the backend service
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput label="Transaction ID" type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} />
            <FormInput label="Date and Time" type="datetime-local" name="dateAndTime" value={formData.dateAndTime} onChange={handleChange} />
            <FormInput label="QR ID Referencing Student" type="text" name="qrIdReferencingStudent" value={formData.qrIdReferencingStudent} onChange={handleChange} />
            <FormInput label="Item Name" type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
            <FormInput label="Quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
            <FormInput label="Subject" type="text" name="subject" value={formData.subject} onChange={handleChange} />
            <FormInput label="Professor" type="text" name="professor" value={formData.professor} onChange={handleChange} />
            <FormInput label="Room No." type="text" name="roomNo" value={formData.roomNo} onChange={handleChange} />
            <FormInput label="Borrowed Duration" type="text" name="borrowedDuration" value={formData.borrowedDuration} onChange={handleChange} />
            <FormInput label="Transaction Type" type="text" name="transactionType" value={formData.transactionType} onChange={handleChange} />
            <FormInput label="Return Status" type="text" name="returnStatus" value={formData.returnStatus} onChange={handleChange} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default TransactionForm;
