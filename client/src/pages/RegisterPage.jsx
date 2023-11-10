import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm();
    const { signup, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/products");
    }, [isAuthenticated])

    console.log(user)

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={onSubmit}>

                <input type="text" {... register("first_name", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="First Name"
                />
                {errors.first_name &&  (<p className='text-red-500'>first_name is required</p>
                )}
                <input type="text"
                    {... register("last_name", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Last Name"
                />
                 {errors.last_name &&  (<p className='text-red-500'>last_name is required</p>
                )}
                <input type="email"
                    {... register("email", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                 {errors.email &&  (<p className='text-red-500'>email is required</p>
                )}
                <input type="number"
                    {... register("age", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Age"
                />
                 {errors.age &&  (<p className='text-red-500'>age is required</p>
                )}
                <input type="password"
                    {... register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                />
                 {errors.password &&  (<p className='text-red-500'>password is required</p>
                )}
                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default RegisterPage