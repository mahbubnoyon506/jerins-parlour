import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import StudentsTableRow from './StudentsTableRow';
import UpdateStudent from './UpdateStudent';
import { MdOutlineAdd } from "react-icons/md";

const Students = () => {
    const [addStudentd, setaddStudentd] = useState(null)
    const [updateStudent, setUpdateStudent] = useState(null)
    const [deleteSudent, setdeleteSudent] = useState(null)
    const { data: results, isLoading, refetch } = useQuery('results', () =>
        fetch('https://immense-retreat-09101.herokuapp.com/results')
            .then(res => {
                return res.json()            
            })
    )
    if(isLoading){
        return <Loader></Loader>
    }
    
if(isLoading){
    return <Loader></Loader>
}
    return (
        <div className='pt-5 px-5'>
            <div className='flex justify-between mb-5'>
                <h2 className='text-lg'>Students</h2>
                <label onClick={setaddStudentd} for="addStudent" className='btn btn-primary px-10 text-base-100'> <MdOutlineAdd></MdOutlineAdd> ADD</label>
            </div>
                {
                  addStudentd && <AddStudent setaddStudentd={setaddStudentd} refetch={refetch}></AddStudent>  
                }
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Student Name</th>
                            <th>Class</th>
                            <th>Result</th>
                            <th>Score</th>
                            <th>Grade</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map((result, index) => 
                               <StudentsTableRow key={result._id} result={result} index={index} setUpdateStudent={setUpdateStudent} setdeleteSudent={setdeleteSudent} ></StudentsTableRow>
                            )
                        }
                    </tbody>
                    {
                        updateStudent && <UpdateStudent updateStudent={updateStudent} setUpdateStudent={setUpdateStudent} refetch={refetch}></UpdateStudent>
                    }
                    {
                      deleteSudent && <DeleteStudent deleteSudent={deleteSudent} setdeleteSudent={setdeleteSudent} refetch={refetch}></DeleteStudent>  
                    }
                </table>
            </div>
        </div>
    );
};

export default Students;