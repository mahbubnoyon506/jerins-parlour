import React from 'react';
import { useQuery } from 'react-query';
import './style.css'

const Students = () => {

    const { data: results, refetch } = useQuery('allresults', () =>
        fetch('results.json')
            .then(res => {
                console.log(res)
                return res.json()
            })
    )
    return (
        <div className='pt-5 px-5'>
            <div className='flex justify-between mb-5'>
                <h2 className='text-lg'>Students</h2>
                <button className='btn btn-primary px-10 text-base-100'> ADD</button>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                                <tr class="hover tableRow">
                                    <th>{index + 1}</th>
                                    <td>{result.name}</td>
                                    <td>{result.class}th</td>
                                    <td>
                                        {
                                            result.score < 30 ?
                                                <button className='btn btn-xs btn-error px-5'>Fail</button>
                                                :
                                                <button className='btn btn-xs btn-success px-5'>Passed</button>
                                        }
                                    </td>
                                    <td>{result.score}/100</td>
                                    <td>
                                        {
                                            result.score <= 30 ?
                                                <p className='text-error font-semibold'>Poor</p>
                                                :
                                                result.score <= 75 ?
                                                    <p className='text-primary font-semibold'>Average</p>
                                                    :
                                                    <p className='text-success font-semibold'>Excellent</p>
                                        }
                                    </td>
                                    <td>
                                        <button className='px-5'>Update</button>
                                    </td>
                                    <td>
                                        <button className='px-5 '>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;