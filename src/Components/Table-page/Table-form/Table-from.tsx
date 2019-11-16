import React from "react";
import "./Table-form.scss"
const TableForm = () => {
    return (
        <div className="marpage">
            <div>
                <label className="text">ปี 1</label>
                <table>
                    {/* <caption >ปี 1 เทอม 1</caption> */}
                    {/*head row*/}
                    <tr>
                        <th className="col1">รหัสวิชา</th>
                        <th className="col2">ชื่อวิชา</th>
                        <th className="col3">หน่วยกิต</th>
                        <th className="col4">เกรด</th>
                    </tr>
                    {/*row 1*/}
                    <tr>
                        <td className="col1">202113</td>
                        <td className="col2">Physics I</td>
                        <td className="col3">3</td>
                        <td className="col4">D</td>
                    </tr>
                    {/*row 2*/}
                    <tr>
                        <td className="col1">202113</td>
                        <td className="col2">Physics I</td>
                        <td className="col3">3</td>
                        <td className="col4">D</td>
                    </tr>
                    {/*row 3*/}
                    <tr>
                        <td className="col1">202113</td>
                        <td className="col2">Physics I</td>
                        <td className="col3">3</td>
                        <td className="col4">D</td>
                    </tr>
                    {/*row 4*/}
                    <tr>
                        <td className="col1">202113</td>
                        <td className="col2">Physics I</td>
                        <td className="col3">3</td>
                        <td className="col4">D</td>
                    </tr>
                    {/*row 5*/}
                    <tr>
                        <td className="col1">202113</td>
                        <td className="col2">Physics I</td>
                        <td className="col3">3</td>
                        <td className="col4">D</td>
                    </tr>
                    {/*row 6*/}
                    <tr>
                        <td className="col1">202113</td>
                        <td className="col2">Physics I</td>
                        <td className="col3">3</td>
                        <td className="col4">D</td>
                    </tr>
                </table>
            </div>

            {/* <label>ปี 2</label>
            <label>ปี 3</label>
            <label>ปี 4</label> */}



        </div >
    );
};
export default TableForm;