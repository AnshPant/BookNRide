import  React, {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"



const carList = [
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'White Car- Medium',
      multiplier: 1,
    },
    {
      imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
      service: 'White Car Large',
      multiplier: 1.5,
    },
    
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'Economical Car - Large',
      multiplier: 1.2,
    },
    {
      imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
      service: 'Black Car- Large',
      multiplier: 2.8,
    }
  ]

const RideSelector = (props) => {
    const [rideDuration,setRideDuration] = useState(0)

    useEffect(()=>{
        // console.log(pickupcoordinates[0]+"jj")
       //fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupcoordinates[0]},${pickupcoordinates[1]};${dropoffcoordinates[0]},${dropoffcoordinates[1]}?access_token=pk.eyJ1IjoiYW5zaGhoMTIiLCJhIjoiY2xudWJ1bG1uMGFkaDJscGtxc3MwcGN6OSJ9.p9ZD-63ZHn4oWkZmuHaVWw`)
       rideDuration= fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${props.p[0]},${props.p[1]};${props.d[0]},${props.d[1]}?approaches=unrestricted;curb&access_token=pk.eyJ1IjoiYW5zaGhoMTIiLCJhIjoiY2xudWJ1bG1uMGFkaDJscGtxc3MwcGN6OSJ9.p9ZD-63ZHn4oWkZmuHaVWw`)
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
