import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import {useEffect,useState}from 'react'
const Search=()=>{

    const [pick,setpick] = useState("")
    const [dropp,setdropp] = useState("")
    console.log(pick)
    console.log(dropp)
    return (
        <div>
            <Wrapper>

            {/*ButtonContainer*/}
            <ButtonContainer>
                <Link href="/">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            </ButtonContainer>
            

            
            {/*input container*/}
            <InputContainer>
            <FT>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
            </FT>
            <IBox>
                <Input placeholder="Enter pickup location"
                value={pick}
                onChange={(e)=>setpick(e.target.value)}
                />
            
            <Input placeholder="Enter pickup location"
                value={dropp}
                onChange={(e)=>setdropp(e.target.value)}
                />
            </IBox>
            <Plus src="https://img.icons8.com/ios/50/000000/plus-math.png" />

            
            </InputContainer> 
            {/*saved places*/}
            <Saved>
            <Star src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
            Saved Places.
            </Saved> 
             
            {/*confirm location*/}
            <Link href={
                {pathname: "/confirm",
                query:{
                    //this pickup and dropp of get written in url: http://localhost:3000/confirm?pickup=New+Delhi&dropoff=Jaipur
                    pickup: pick,
                    dropoff: dropp
                }
            }
            }>
            <Confirm>

                CONFIRM

            </Confirm></Link>
            </Wrapper>
            
        </div>
    )
}
export default Search

const Confirm = tw.div`
bg-black text-white text-center mt-2 mx-4 text-2xl cursor-pointer p-2 
`

const Saved = tw.div`
flex items-center bg-white px-4 py-2
`
const Star = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2 
`

const Wrapper = tw.div`
bg-gray-200 h-screen 
`
const BackButton = tw.img`
cursor-pointer
`

const ButtonContainer = tw.div`
bg-white px-4
`
const InputContainer = tw.div`
flex bg-white items-center mb-2
`
const FT = tw.div`
w-10 flex flex-col mr-2 ml-2 items-center
`

const Circle = tw.img`
h-2.5 
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3 
`
const IBox = tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
 flex flex-col h-10 bg-gray-200 my-2 rounded-5 p-2 outline-none border-none items-center px-4
`

const Plus=tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3 mr-2
`
