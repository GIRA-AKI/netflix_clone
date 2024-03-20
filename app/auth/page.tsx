'use client'
import Input from '@/app/components/input'
import {  useCallback, useState } from 'react'


const Auth = () => {

    
    const [email , setEmail] = useState('');
    
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');

    const [varient, setVariant] = useState('login');

    const toggleVarient = useCallback(() => {
        setVariant((currentVarient) => currentVarient === 'login' ? 'register' : 'login');
    },[])

    return(
        <div className="relative h-full w-full bg-[url('../public/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black/50 w-full h-full ">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black/70 px-16   py-16 self-center mt-2 lg:w-2/6 sm:w-2/3 lg:max-w-wd rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {varient==='login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {varient === 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(ev:any)=> setName(ev.target.value)}
                                    id="name"
                                    value={name}
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev:any)=> setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="password"
                                onChange={(ev:any)=> setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}    
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {varient === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {varient === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVarient} className="text-white ml-1 hover:underline cursor-pointer">
                                {varient === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth