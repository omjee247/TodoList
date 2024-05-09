import {useState} from "react";

function Todo(){
   
   const [inputData, setInputData] = useState('');
   const [items, setItems] = useState([]);
  
    function AddItem(){
        if(inputData){
          setItems([...items,inputData])
          setInputData('');
        }
        else if(!inputData){
            alert("Placeholder is empty!!");
        }
    }

    function DeleteItem(idx){
        //alert('Item Deleted');
         //console.log(idx);
         const updatedItems = items.filter((items,id)=>{
           return (id!==idx)
         })
         setItems(updatedItems);
    }

    function RemoveAll(){
        setItems([]);
    }
    return (
        <div className="main-div">
            <div className="sub-div">
                <div className="addItem">
                    <input placeholder="Add item"
                    value={inputData}
                    onChange={(e)=>setInputData(e.target.value)}/>
                    <button onClick = {AddItem}> Add </button>
                </div>
                <div className="showItem">
                 {items.map((element, idx)=>{
                     return (<div className="eachElement" key={idx}>
                    <h3>{element}</h3>   
                    <button onClick={()=>DeleteItem(idx)}>Delete</button>
                    </div>
                    )})}
                </div>
                <div className="showItem">
                   <button onClick= {RemoveAll}>Remove All</button>
                </div>
            </div>
        </div>
    );
}
export default Todo;