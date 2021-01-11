import React from 'react';
import classes from './Table.css';
import { MdDelete } from "react-icons/md";
import defaultImg from '../../../Assets/Images/defaultProduct.png';
import Aux from '../../../HOC/Auxiliary/Auxiliary';

const Table = (props) => {

    const aRows = [...props.aRows];

    const DeletItemHandler = (oEvent, index) => {
        props.fnDeletItemHandler(index);
    };


    let xTableRow = aRows.map((oRow, index) => {
        return (
            <tr key={index}>
                <td><button onClick={(oEvent) => DeletItemHandler(oEvent, index)}><MdDelete style={{
                    fontSize: '1.2rem'
                }} /></button></td>
                <td><img className={classes.TableImgData} src={defaultImg} /></td>
                <td>{oRow.name}</td>
                <td>{oRow.price}</td>
                <td>{oRow.Quantity}</td>
                <td>{oRow.Amount}</td>
                <td>{oRow.Amount}</td>
            </tr>
        );
    });

    return (
        <Aux>
            <table style={{
                width: '100%'
            }}>
                <tr>
                    <th></th>
                    <th></th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>AMT</th>
                    <th>TOTAL</th>
                </tr>
                {xTableRow}
            </table>
            <div className={classes.TableFooterDiv}>
                <span className={classes.Total}>{props.iTotalAmt} .Rs</span>
            </div>
        </Aux>
    );
};

export default Table;