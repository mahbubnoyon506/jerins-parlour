import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateStudent = ({ updateStudent, setUpdateStudent, refetch }) => {

    const [grade, setGrade] = useState(null)
    const {_id} = updateStudent;

    const handleSubmit = e => {
        e.preventDefault();
        const studentInfo = {
            name : e.target.name.value,
            classLevel: e.target.class.value,
            score: e.target.score.value
        }
        console.log(studentInfo)
        fetch(`http://localhost:5000/results/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(studentInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true ){
                toast.success('Wow! Student updated Successfully')
                refetch()
                setUpdateStudent('')
            }
            else{
                toast.error('Something wend wrong')
            }        
        })
    };

    const handleGrade = e => {
        setGrade(e.target.value);
    }
    const handleCancel = () => {
        setUpdateStudent('')
    }
    return (
        <div>

           


            <input type="checkbox" id="updateStudent" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">   
                    <h3 className="text-lg font-bold">Edit Student</h3>
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
                                <label onClick={handleCancel} className='btn btn-outline btn-sm btn-primary mr-2 hover:text-white'>Cancel</label>
                                <input className='btn btn-sm  bg-primary text-white border-0 uppercase' type="submit" value="Confirm" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default UpdateStudent;