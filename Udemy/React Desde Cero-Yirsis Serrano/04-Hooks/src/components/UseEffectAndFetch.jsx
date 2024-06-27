import {useEffect, useState} from 'react';

const UseEffectAndFetch = () => {

    const [users,setUsers] = useState([]);
    const [id,setId] = useState('');
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response)=>response.json())
        .then(data =>{ setUsers(data); });                
    }, []);

    useEffect((e) => {
        console.log(users,"useEffect after setUsers changed his value",id);
    },[id]);


    /*useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);*/

    
    /*useEffect(()=>{
        getUsuarios();
    },[]);

    const getUsuarios = async () => {
        const resource = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resource.json();
        console.log(data);

        setUsers(data);
    };*/

    
    
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

export default UseEffectAndFetch
