// src/components/StudentForm.js
import React, { useState } from 'react';
import FormInput from './FormInput';

// Helper function to validate URL
const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};

const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        address: '',
        studentNo: '',
        department: '',
        program: '',
        yearAndSection: '',
        contactNumber: '',
        email: '',
        registrationCard: '',
        updatedClassSchedule: ''
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
        // Validate URLs
        if (!isValidURL(formData.registrationCard)) {
            alert('Registration Card must be a valid URL');
            return;
        }
        if (!isValidURL(formData.updatedClassSchedule)) {
            alert('Updated Class Schedule must be a valid URL linking to an image');
            return;
        }

        console.log('Student Data:', formData);
        // Submit the formData to the backend service
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            
            <label>
                Gender
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
            </label>
            
            <FormInput label="Address" type="text" name="address" value={formData.address} onChange={handleChange} />
            <FormInput label="Student No." type="text" name="studentNo" value={formData.studentNo} onChange={handleChange} />
            
            <label>
                Department
                <select name="department" value={formData.department} onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="Department1">Department1</option>
                    <option value="Department2">Department2</option>
                    {/* Add other departments as needed */}
                </select>
            </label>
            
            <label>
                Program
                <select name="program" value={formData.program} onChange={handleChange}>
                    <option value="">Select Program</option>
                    <option value="Program1">Program1</option>
                    <option value="Program2">Program2</option>
                    {/* Add other programs as needed */}
                </select>
            </label>

            <FormInput label="Year and Section" type="text" name="yearAndSection" value={formData.yearAndSection} onChange={handleChange} />
            <FormInput label="Contact Number" type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />

            <FormInput 
                label="Registration Card" 
                type="text" 
                name="registrationCard" 
                value={formData.registrationCard} 
                onChange={handleChange}
                placeholder="Enter a valid URL"
            />
            
            <FormInput 
                label="Updated Class Schedule" 
                type="text" 
                name="updatedClassSchedule" 
                value={formData.updatedClassSchedule} 
                onChange={handleChange}
                placeholder="Enter a URL linking to an image"
            />
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default StudentForm;
