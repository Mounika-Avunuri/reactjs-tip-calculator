import React, { useState } from 'react'


function Input() {
  const [state, setState]=useState([]);

  const [total,setTotal]=useState(0);

  const [totaltip,setTotalTip]=useState(0);

const [customerdata, setCustomerdata]=useState({
  name: "",tip:0,service:0,totalamt:0
});

const Handleinput =(e)=>{  
    
    setCustomerdata({ ...customerdata,[e.target.name]:e.target.value });
    console.log(e.target.name + e.target.value);
  

}
function AddCustomer(){
   customerdata.tip=customerdata.totalamt*customerdata.service/100;
    // console.log(customerdata.service);
   setState([...state,customerdata]);

}

 const CalculateTotal =()=>{
   let tiptotal=0;
    state.map((ele)=>(
      tiptotal=tiptotal+ele.tip
    ))
    setTotalTip(tiptotal);

  setTotal(state.length);
}



    return (
       <div className="Main">  
  
    <div className="billamt">
          <h4 >Enter your bill amount </h4>
          <input  type="Number" className="inputs" name="totalamt" onChange={Handleinput} />
    </div>
    <hr/>
    
    <div className="billinfo">
          <span className="ServiceName">
          How Was the service<select className="Select" name="service" onChange={Handleinput}>
          <option  selected disabled  >Choose</option>
          <option   value="20"  >Excellent-20%</option>
          <option  value="10"  >Medium-10%</option>
          <option  value="5" >bad-5%</option>
          </select>
   
          <input placeholder="Customer Name" className="CustomerName" name="name" onChange={Handleinput}/>
          <button className="btn" onClick={AddCustomer}>Add Customer</button>
      
      </span>
      <div  className="Cname">
            <h3 className="Customerlist">Customer List</h3>
            <hr/>
            <ul>
             {state.map((ele)=>(
               <li>{ele.name} {ele.tip}</li>
             ))}
             </ul>
             
            
        </div>
</div>

         <button className="btn1 " onClick={CalculateTotal}>Calculate Tip and & Customer</button>
         <div className="table">

        <table border="1"  cellpadding="3px" className="Table">
            <tr>
            <th> Total Customer </th> 
            <th>Tip</th> 
            </tr>
            <tr>
             
             {
               <td>{total} </td>
             }
           {
              <td>{totaltip} </td>

           }
            
            </tr>
        
        </table>
        </div>
        </div>
     
      
    
    )
}

export default Input

