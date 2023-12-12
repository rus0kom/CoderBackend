import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { registerRequest } from '../api/auth';

function RegisterPage() {
    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm();
    
    const { signup, user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/products");
    }, [isAuthenticated]);

    console.log(user)

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        signup(values);
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit = {onSubmit}>

                <input type="text" {... register("first_name", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="First Name"
                />
                {errors.first_name &&  (<p className='text-red-500'>First name is required</p>
                )}
                <input type="text"
                    {... register("last_name", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Last Name"
                />
                 {errors.last_name &&  (<p className='text-red-500'>Last name is required</p>
                )}
                <input type="email"
                    {... register("email", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                 {errors.email &&  (<p className='text-red-500'>Email is required</p>
                )}
                <input type="number"
                    {... register("age", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Age"
                />
                 {errors.age &&  (<p className='text-red-500'>Age is required</p>
                )}
                <input type="password"
                    {... register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                />
                 {errors.password &&  (<p className='text-red-500'>Password is required</p>
                )}
                <input type="password"
                    {... register("confirm password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Confirm Password"
                />
                 {errors.password &&  (<p className='text-red-500'>Password is required</p>
                )}
                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default RegisterPage