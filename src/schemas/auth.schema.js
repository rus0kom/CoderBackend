import {z} from 'zod'

export const registerSchema = z.object({
    first_name: z.string({
        required_error: 'Name is required'
    }),
    last_name: z.string({
        required_error: 'Lastname is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    // age: z.number({
    //     message: 'Age is required'
    // }),   /// {"error":["Expected number, received string"]}
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalid email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
        message: "Password must be a least 6 characters"
    })
})