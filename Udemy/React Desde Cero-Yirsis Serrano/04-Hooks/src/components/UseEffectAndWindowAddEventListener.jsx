import {useEffect, useState} from 'react';

const UseEffectAndWindowAddEventListener = () => {

    const [users,setUsers] = useState([]);
    const [id,setId] = useState('');
    
    //Proper implementation of useEffect cleaning the listener.
    useEffect(() => {
            // Function to handle mouse click event
            const handleMouseClick = (e) => {
                console.log("Mouse clicked at:", e.clientX, e.clientY);
            };
    
            // Adding event listener for mouse click
            window.addEventListener("click", handleMouseClick);
    
            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener("click", handleMouseClick);
            };
    }, []);

    //useEffect don't remove the listener, causing possible memory leaks.
    /*useEffect(() => {
        //Adding event listener for client browser
        window.addEventListener("click",(e)=>{console.log("mouse clicked at: ",e.clientX,e.clientY)}
    );}, []);*/

    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);
        setUsers({email: e.target.elements.exampleInputEmail.value});
        /*const email = e.target.elements.exampleInputEmail.value;
        console.log({
            email
        });*/
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="exampleInputEmail"
                    >
                        Search
                    </label>
                    <input
                        aria-describedby="emailHelp"
                        className="form-control"
                        id="exampleInputEmail"
                        type="email"
                        value={id}
                        onChange={(e)=> setId(e.target.value)}
                    />
                </div>
                <button
    className="btn btn-primary"
    type="submit"
  >
    Submit</button>
            </form>
        </>
    )
}

export default UseEffectAndWindowAddEventListener;
