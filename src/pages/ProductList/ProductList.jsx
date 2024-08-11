import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Pagination from '@mui/material/Pagination';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductList = () => {
    
  const [showBy, setShowBy] = useState("");
  const [CateBy, setCateBy] = useState("");
  return (

<div className="card shadow border-0 p-3 mt-4">
     <h3 className="hd">Best Selling Products</h3>
     <div className="row cardFillters mt-3">
       <div className="col md-3">
         <h4>SHOW BY</h4>
         <FormControl size="small" className="w-100">
           <Select
             value={showBy}
             onClick={(e) => setShowBy(e.target.value)}
             displayEmpty
             inputProps={{ "aria-label": "Without label" }}
             labelId="demo-select-small-label"
             className="w-100"
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
           </Select>
         </FormControl>
       </div>
       <div className="col md-3">
         <h4>CATEGORY BY</h4>
         <FormControl size="small" className="w-100">
           <Select
             value={CateBy}
             onClick={(e) => setCateBy(e.target.value)}
             displayEmpty
             inputProps={{ "aria-label": "Without label" }}
             labelId="demo-select-small-label"
             className="w-100"
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
           </Select>
         </FormControl>
       </div>
       <div className="table-responsive mt-3">
         <table className="table table-bordered table-striped v-align">
           <thead className="thead-dark">
             <tr>
               <th>UID</th>
               <th style={{ width: "300px" }}>PRODUCT</th>
               <th>CATEGORY</th>
               <th>BRAND</th>
               <th>PRICE</th>
               <th>STOCK</th>
               <th>RATING </th>
               <th>ORDERT</th>
               <th>SALES</th>
               <th>ACTION</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>#1</td>
               <td>
                 <div className="d-flex align-items-center productBox">
                   <div className="imgWrapper">
                     <div className="img shadow">
                       <img
                         src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                         alt="productImg"
                         className="w-100"
                       />
                     </div>
                   </div>
                   <div className="info pl-0">
                     <h6>Tops and skirt set for...</h6>
                     <p>Women's exclusive summ...</p>
                   </div>
                 </div>
               </td>
               <td>womans</td>
               <td>richman</td>
               <td>
                 <div style={{ width: "70px" }}>
                   <del className="old">$21.00</del>
                   <span className="new text-danger">$21.00</span>
                 </div>
               </td>
               <td>30</td>
               <td>4.9(16) </td>
               <td>380</td>
               <td>$38k</td>
               <td>
                 <div className="actions d-flex align-items-center">
                 <Link to='/product/details'>
                   <Button className="secondary">
                     <FaEye />
                   </Button>
                   </Link>
                   <Button className="success">
                     <FaPencilAlt />
                   </Button>
                   <Button className="danger">
                     <MdDelete />
                   </Button>
                 </div>
               </td>
             </tr>
             <tr>
               <td>#1</td>
               <td>
                 <div className="d-flex align-items-center productBox">
                   <div className="imgWrapper">
                     <div className="img shadow ">
                       <img
                         src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                         alt="productImg"
                         className="w-100"
                       />
                     </div>
                   </div>
                   <div className="info pl-0">
                     <h6>Tops and skirt set for...</h6>
                     <p>Women's exclusive summ...</p>
                   </div>
                 </div>
               </td>
               <td>womans</td>
               <td>richman</td>
               <td>
                 <div style={{ width: "70px" }}>
                   <del className="old">$21.00</del>
                   <span className="new text-danger">$21.00</span>
                 </div>
               </td>
               <td>30</td>
               <td>4.9(16) </td>
               <td>380</td>
               <td>$38k</td>
               <td>
                 <div className="actions d-flex align-items-center">
                 <Link to='/product/details'>
                   <Button className="secondary">
                     <FaEye />
                   </Button>
                   </Link>
                   <Button className="success">
                     <FaPencilAlt />
                   </Button>
                   <Button className="danger">
                     <MdDelete />
                   </Button>
                 </div>
               </td>
             </tr>
             <tr>
               <td>#1</td>
               <td>
                 <div className="d-flex align-items-center productBox">
                   <div className="imgWrapper">
                     <div className="img shadow">
                       <img
                         src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                         alt="productImg"
                         className="w-100"
                       />
                     </div>
                   </div>
                   <div className="info pl-0">
                     <h6>Tops and skirt set for...</h6>
                     <p>Women's exclusive summ...</p>
                   </div>
                 </div>
               </td>
               <td>womans</td>
               <td>richman</td>
               <td>
                 <div style={{ width: "70px" }}>
                   <del className="old">$21.00</del>
                   <span className="new text-danger">$21.00</span>
                 </div>
               </td>
               <td>30</td>
               <td>4.9(16) </td>
               <td>380</td>
               <td>$38k</td>
               <td>
                 <div className="actions d-flex align-items-center">
                 <Link to='/product/details'>
                   <Button className="secondary">
                     <FaEye />
                   </Button>
                   </Link>
                   <Button className="success">
                     <FaPencilAlt />
                   </Button>
                   <Button className="danger">
                     <MdDelete />
                   </Button>
                 </div>
               </td>
             </tr>
             <tr>
               <td>#1</td>
               <td>
                 <div className="d-flex align-items-center productBox">
                   <div className="imgWrapper">
                     <div className="img shadow">
                       <img
                         src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                         alt="productImg"
                         className="w-100"
                       />
                     </div>
                   </div>
                   <div className="info pl-0">
                     <h6>Tops and skirt set for...</h6>
                     <p>Women's exclusive summ...</p>
                   </div>
                 </div>
               </td>
               <td>womans</td>
               <td>richman</td>
               <td>
                 <div style={{ width: "70px" }}>
                   <del className="old">$21.00</del>
                   <span className="new text-danger">$21.00</span>
                 </div>
               </td>
               <td>30</td>
               <td>4.9(16) </td>
               <td>380</td>
               <td>$38k</td>
               <td>
                 <div className="actions d-flex align-items-center">
                 <Link to='/product/details'>
                   <Button className="secondary">
                     <FaEye />
                   </Button>
                   </Link>
                   <Button className="success">
                     <FaPencilAlt />
                   </Button>
                   <Button className="danger">
                     <MdDelete />
                   </Button>
                 </div>
               </td>
             </tr>
             <tr>
               <td>#1</td>
               <td>
                 <div className="d-flex align-items-center productBox">
                   <div className="imgWrapper">
                     <div className="img shadow">
                       <img
                         src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                         alt="productImg"
                         className="w-100"
                       />
                     </div>
                   </div>
                   <div className="info pl-0">
                     <h6>Tops and skirt set for...</h6>
                     <p>Women's exclusive summ...</p>
                   </div>
                 </div>
               </td>
               <td>womans</td>
               <td>richman</td>
               <td>
                 <div style={{ width: "70px" }}>
                   <del className="old">$21.00</del>
                   <span className="new text-danger">$21.00</span>
                 </div>
               </td>
               <td>30</td>
               <td>4.9(16) </td>
               <td>380</td>
               <td>$38k</td>
               <td>
                 <div className="actions d-flex align-items-center">
                 <Link to='/product/details'>
                   <Button className="secondary">
                     <FaEye />
                   </Button>
                   </Link>
                   <Button className="success">
                     <FaPencilAlt />
                   </Button>
                   <Button className="danger">
                     <MdDelete />
                   </Button>
                 </div>
               </td>
             </tr>
             <tr>
               <td>#1</td>
               <td>
                 <div className="d-flex align-items-center productBox">
                   <div className="imgWrapper">
                     <div className="img shadow">
                       <img
                         src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                         alt="productImg"
                         className="w-100"
                       />
                     </div>
                   </div>
                   <div className="info pl-0">
                     <h6>Tops and skirt set for...</h6>
                     <p>Women's exclusive summ...</p>
                   </div>
                 </div>
               </td>
               <td>womans</td>
               <td>richman</td>
               <td>
                 <div style={{ width: "70px" }}>
                   <del className="old">$21.00</del>
                   <span className="new text-danger">$21.00</span>
                 </div>
               </td>
               <td>30</td>
               <td>4.9(16) </td>
               <td>380</td>
               <td>$38k</td>
               <td>
                 <div className="actions d-flex align-items-center">
                   <Link to='/product/details'>
                   <Button className="secondary">
                     <FaEye />
                   </Button>
                   </Link>
                   <Button className="success">
                     <FaPencilAlt />
                   </Button>
                   <Button className="danger">
                     <MdDelete />
                   </Button>
                 </div>
               </td>
             </tr>
           </tbody>
         </table>
       <div className="d-flex tableFooter">
       showing <b>12</b> of <b>60</b> results
       <Pagination count={10} color="primary" className="Pagination"  showFirstButton showLastButton />
       </div>
       </div>
     </div>
   </div>

  )
}

export default ProductList
