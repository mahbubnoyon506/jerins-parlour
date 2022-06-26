import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = ({setaddStudentd, refetch}) => {

    const [grade, setGrade] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        const studentInfo = {
            name : e.target.name.value,
            classLevel: e.target.class.value,
            score: e.target.score.value
        }
        fetch('http://localhost:5000/results', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(studentInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true ){
                toast.success('Wow! Student added Successfully')
                refetch()
                setaddStudentd('')
            }
            else{
                toast.error('Something wend wrong')
            }         
        })

    };
    const handleGrade = e => {
        setGrade(e.target.value);
    }
    return (
        <div>
            <input type="checkbox" id="addStudent" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    
                    <h3 className="text-lg font-bold">Add Student</h3>
                    <div className=''>
                        <form onSubmit={handleSubmit}>
                            <label className="label">Students name</label>
                            <input
                                type="text"
                                name='name'
                                required
                                className="input input-sm input-bordered w-full focus:outline-0 py-3 mb-2"
                            />
                            <label htmlFor="">Class</label>
                            <input
                                type="number"
                                name='class'
                                required
                                className="input input-sm input-bordered w-full  focus:outline-0 py-3"
                            />
                            <label className="label text-sm">
                              Please input value between 1 & 12
                            </label>
                            <label htmlFor="">Score</label>
                            <input
                                onChange={handleGrade}
                                type="number"
                                name='score'
                                required
                                className="input input-sm input-bordered w-full  focus:outline-0 py-3"
                            />
                            <label className="label text-sm">
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
                             <label htmlFor="addStudent" className='btn btn-outline btn-sm btn-primary mr-2 hover:text-white'>Cancel</label>
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