

// onSubmit={handelLogin}

const UpDateProfile = () => {
    return (
        <div>
            <div className="hero min">
                <div className="hero-content">
                    <div className="card shrink-0 shadow-2xl bg-base-100">
                        <h2 className="text-center mt-5 text-xl font-bold">Update Profile</h2>
                        <form  className="card-body w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input type="url" name="url" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Up Date</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpDateProfile;