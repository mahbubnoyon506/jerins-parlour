import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

const StudentsTableRow = ({result, index, setUpdateStudent, setdeleteSudent}) => {
    const {name, classLevel, score} = result
    return (
        <tr className="hover tableRow">
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
            <button className=''><label onClick={() => setUpdateStudent(result)} for="updateStudent" className="cursor-pointer hover:text-primary"><FaPencilAlt></FaPencilAlt></label></button>
        </td>
        <td>
            <label onClick={() => setdeleteSudent(result)} for="my-modal-3" className="cursor-pointer hover:text-primary"><FaRegTrashAlt></FaRegTrashAlt></label>
        </td>
    </tr>
    );
};

export default StudentsTableRow;