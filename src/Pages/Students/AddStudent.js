import React, { useState } from 'react';

import { toast } from 'react-toastify';

const AddStudent = () => {

    const [grade, setGrade] = useState(null)


    const handleSubmit = e => {
        e.preventDefault();

    };

    const handleGrade = e => {
        setGrade(e.target.value);
    }
    const handleCancel = () => {
        setGrade('')
    }
    console.log(grade)
    return (
        <div>
            <input type="checkbox" id="addStudent" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="addStudent" class="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Add Student</h3>
                    <div className=''>
                        <form onSubmit={handleSubmit}>
                            <label class="label">Students name</label>
                            <input
                                type="text"
                                name='name'
                                required
                                class="input input-sm input-bordered w-full focus:outline-0 py-5 mb-2"
                            />
                            <label htmlFor="">Class</label>
                            <input
                                type="number"
                                name='class'
                                required
                                class="input input-sm input-bordered w-full  focus:outline-0 py-5"
                            />
                            <label class="label">
                              Please input value between 1 & 12
                            </label>
                            <label htmlFor="">Score</label>
                            <input
                                onChange={handleGrade}
                                type="number"
                                name='score'
                                required
                                class="input input-sm input-bordered w-full  focus:outline-0 py-5"

                            />
                            <label class="label">
                              Please input value between 0 & 100
                            </label>
                            <div>
                                <p className=' uppercase'>Result</p>
                                {
                                    grade < 1 ? <p>-</p>
                                    : 
                                    grade < 30 ? <button className='btn btn-xs btn-error px-5 my-2'>Fail</button>
                                    :
                                    <button className='btn btn-xs btn-success px-5 my-2'>Pass</button>
                                }
                                
                            </div>
                            <div className='mb-5 border-b-2 pb-5'>
                            <p className='uppercase'>Grade</p>
                            {
                                grade < 1 ? <p>-</p> 
                                :
                                grade <= 30 ? 
                                <p className='text-error'>Poor</p>
                                :
                                grade > 75 ? 
                                <p className='text-success'>Excellent</p>
                                :
                                <p className='text-primary'>Average</p>
                            }
                            </div>
                            <div className='flex justify-end'>
                             <label for="addStudent" className='btn btn-outline btn-sm btn-primary mr-2 hover:text-white'>Cancel</label>
                            <input className='btn btn-sm  bg-primary text-white border-0 uppercase' type="submit" value="Confirm" />
                            </div>
                        </form>
                
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddStudent;