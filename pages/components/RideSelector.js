import  React, {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'
import Link from 'next/link'


const RideSelector = (props) => {
    const [rideDuration,setRideDuration] = useState(0)

    useEffect(()=>{
        // console.log(pickupcoordinates[0]+"jj")
       //fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupcoordinates[0]},${pickupcoordinates[1]};${dropoffcoordinates[0]},${dropoffcoordinates[1]}?access_token=pk.eyJ1IjoidHJpYWx0cmlhbDEyIiwiYSI6ImNsNTczODNybTE1bzAzZG1mcTd5Z2cwbHYifQ.u42_YrelEvVx-CZkPWHGjg`)
       rideDuration= fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${props.p[0]},${props.p[1]};${props.d[0]},${props.d[1]}?approaches=unrestricted;curb&access_token=pk.eyJ1IjoidHJpYWx0cmlhbDEyIiwiYSI6ImNsNTczODNybTE1bzAzZG1mcTd5Z2cwbHYifQ.u42_YrelEvVx-CZkPWHGjg`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setRideDuration(data.routes[0].duration/100)
        })

    },[props.p,props.d])
    return (
        <Wrapper>
            <Title>Choose a car!</Title>
            <CarList>
                {carList.map((car,index)=>
                        <C key={index}>
                        <CImage src={car.imgUrl} />
                        <CardDetails>
                            <Service>
                                    {car.service}
                            </Service>
                            <Time>
                                    5 min away.
                            </Time>
                            
                        </CardDetails>
                        <Price>{'Rs'+ (rideDuration * car.multiplier*28).toFixed(2)}</Price>
                    </C>
                )}
                

            </CarList>
            
        </Wrapper>



    )
}
export default RideSelector
const Wrapper=tw.div`
flex-1 h-1/2 overflow-y-scroll
`

const C = tw.div`
flex p-4 items-center
`
const CImage = tw.img`
h-14 mr-2
`

const CarList = tw.div`

`
const Price = tw.div`
text-sm
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Time = tw.div`
text-xs text-blue-500
`
const Service = tw.div`
font-medium 
`

const CardDetails = tw.div` flex-1
`