import {useState, useEffect} from "react";

function GetLocalStoredItems(){

    let list = localStorage.getItem('ListOfItems');
    if(list){
        return JSON.parse(localStorage.getItem('ListOfItems'));
    } 
    else{
        return [];
    }
}

function Todo(){
   
   const [inputData, setInputData] = useState('');
   const [items, setItems] = useState(GetLocalStoredItems());
   const [toggleSubmit, setToggleSubmit] = useState(true);
   const [isEditItem, setIsEditItem] = useState(null);

  
    function AddItem(){
        if(inputData && toggleSubmit){
          const allInputData = { id: new Date().getTime().toString() , name: inputData }
          setItems([...items,allInputData])
          setInputData('');
        }
        else if(inputData && !toggleSubmit){
            setItems(
                items.map((element)=>{
                    if(element.id === isEditItem){
                        return {...element, name: inputData};
                    }
                    return element;
                })
            )
            setToggleSubmit(true);
            setIsEditItem(null);
            setInputData('');
;        }
        else if(!inputData){
            alert("Placeholder is empty!!");
        }
    }

    function DeleteItem(idx){
         const updatedItems = items.filter((element)=>{
           return (element.id!==idx)
         })
         setItems(updatedItems);
    }
   function EditItem(idx){
      let editedItem = items.find((element) =>{
        return (element.id === idx);
      })
      setInputData(editedItem.name);
      setIsEditItem(idx);
      setToggleSubmit(false);
   }
    function RemoveAll(){
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem('ListOfItems',JSON.stringify(items))  
    }, [items]);

    return (
        <div className="main-div">
            <div className="sub-div">
                <div className="addItem">
                    <input placeholder="Add item"
                    value={inputData}
                    onChange={(e)=>setInputData(e.target.value)}/>
                    {
                      toggleSubmit ?  <button onClick={AddItem}> Add </button>  :
                      <button onClick={AddItem}> Edit</button>  
                    }
                </div>
                <div className="showItem">
                 {items.map((element)=>{
                     return (<div className="eachElement" key={element.id}>
                    <h3>{element.name}</h3>   
                    <button onClick={()=>EditItem(element.id)}>Edit Items</button>
                    <button onClick={()=>DeleteItem(element.id)}>Delete</button>
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