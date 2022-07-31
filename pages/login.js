import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import {useRouter} from 'next/router'
import { signInWithPopup , onAuthStateChanged } from 'firebase/auth'
import {auth,provider} from '../firebase'
const Login=()=>{
    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{

        
        if(user){
            router.push('/')
        }
    })
    })
    return (
        <Wrapper>
            <ULOGO src="https://drive.google.com/uc?export=view&id=1X3ejEmQwwLv5x0RGBw6c0-u4SqodjOJZ" />
            <LOGIN>Login to access you account. </LOGIN>
            <Himage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SB onClick={()=> signInWithPopup(auth,provider)} >sign in button</SB>
        </Wrapper>
        
    )
}
export default Login

const Wrapper=tw.div`flex flex-col h-screen bg-gray-200 w-screen p-4`
const  LOGIN = tw.div`text-5xl pt-4 text-gray-400 `
const SB = tw.button`bg-black text-white text-center py-4 mt-8 ml-2 mr-2  self-center w-full rounded-full`
const ULOGO = tw.img`h-30 w-auto object-contain self-start justify-center mb-6 mt-6 ml-14`
const Himage = tw.img`  `
