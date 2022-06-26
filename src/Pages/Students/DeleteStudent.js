import React from 'react';
import { toast } from 'react-toastify';

const DeleteStudent = ({ deleteSudent, setdeleteSudent, refetch }) => {
    const { _id, name, classLevel } = deleteSudent;
    const handleDelete = () => {
        fetch(`http://localhost:5000/results/${_id}`, {
            method: 'DELETE',
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Student Deleted')
                    setdeleteSudent('')
                }
            })
    }
    const handleCancel = () => {
        setdeleteSudent('')
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div>
                        <p className='font-semibold'>Are you sure you want to remove the current student from the list?</p>
                        <p className='uppercase pt-2'>Student Name: <span className='capitalize text-sm'>{name}</span></p>
                        <p className='uppercase pt-2'>Class: <span className='lowercase text-sm'>{classLevel}th</span></p>
                    </div>
                    <div className='flex justify-end'>
                        <label onClick={handleCancel} className='btn btn-outline btn-sm btn-primary mr-2 hover:text-white'>Cancel</label>
                        <input onClick={handleDelete} className='btn btn-sm  bg-error text-white border-0 uppercase' type="submit" value="Confirm" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteStudent;