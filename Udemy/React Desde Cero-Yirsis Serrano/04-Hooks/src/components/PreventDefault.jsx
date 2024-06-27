const HookEffect = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.elements.exampleInputEmail.value;
        console.log({
            email
        });
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

export default HookEffect
