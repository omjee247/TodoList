import {useState} from "react";

function Todo(){
   
   const [inputData, setInputData] = useState('');
   const [items, setItems] = useState(new Array());
  
    function AddItem(){
        if(inputData){
          setItems([...items,inputData])
          setInputData('');
        }
        else if(!inputData){
            alert("Placeholder is empty!!");
        }
    }

    function DeleteItem(){
        alert('Item Deleted');
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
                   return <div className="eachElement" key={idx}>
                    <h3>{element}</h3>
                   </div>
                 })}
                </div>
                <div className="deleteItem">
                    <button onClick = {DeleteItem}> Delete </button>
                </div>
            </div>
        </div>
    );
}
export default Todo;