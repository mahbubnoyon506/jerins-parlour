import React from 'react';

const StudentsTableRow = ({result, index, setUpdateStudent, setdeleteSudent}) => {
    const {name, classLevel, score} = result
    return (
        <tr class="hover tableRow">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{classLevel}th</td>
        <td>
            {
                score < 30 ?
                    <button className='btn btn-xs btn-error px-5'>Fail</button>
                    :
                    <button className='btn btn-xs btn-success px-5'>Passed</button>
            }
        </td>
        <td>{score}/100</td>
        <td>
            {
                score <= 30 ?
                    <p className='text-error font-semibold'>Poor</p>
                    :
                    score <= 75 ?
                        <p className='text-primary font-semibold'>Average</p>
                        :
                        <p className='text-success font-semibold'>Excellent</p>
            }
        </td>
        <td>
            <label onClick={() => setUpdateStudent(result)} for="updateStudent" class="btn modal-button btn-xs">open modal</label>
        </td>
        <td>

            <label onClick={() => setdeleteSudent(result)} for="my-modal-3" class="btn modal-button btn-xs">open modal</label>
        </td>
    </tr>
    );
};

export default StudentsTableRow;