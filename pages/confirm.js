import {useEffect,useState}from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from './components/Map'
import {useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
const confirm =()=>{
    const [p,sp]=useState([0,0])
    const [d,sd]=useState([0,0])
    //picking pickup value and dropoff value from url of confirm page
    //this pickup and dropoff must match query:{} of search.js
    const router = useRouter()
    const {pickup,dropoff} = router.query

    console.log("pick: ",pickup)
    console.log("drop: ",dropoff)


    
    const getpickupcordinates=(pickup)=>{
        //this pickup is same parameters of usereffect and is getting used in the api below
          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
            new URLSearchParams({
                access_token:"pk.eyJ1IjoidHJpYWx0cmlhbDEyIiwiYSI6ImNsNTczODNybTE1bzAzZG1mcTd5Z2cwbHYifQ.u42_YrelEvVx-CZkPWHGjg",
                limit: 1
            })
          )
          .then(response=>response.json())
          .then(data=>{
            //console.log(data.features[0].center)
            sp(data.features[0].center)
          })
    }
    const getdropoffcordinates=(dropoff)=>{
        //this dropoff is same parameters of usereffect and is getting used in the api below
          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token:"pk.eyJ1IjoidHJpYWx0cmlhbDEyIiwiYSI6ImNsNTczODNybTE1bzAzZG1mcTd5Z2cwbHYifQ.u42_YrelEvVx-CZkPWHGjg",
                limit: 1
            })
          )
          .then(response=>response.json())
          .then(data=>{
            //console.log(data.features[0].center)
            sd(data.features[0].center)

          })
    }
    useEffect(()=>{

        getpickupcordinates(pickup);
        getdropoffcordinates(dropoff);
        },[pickup,dropoff])


    return (<Wrapper>
      
        <Map
        p={p}
        d={d}
         
        
        />
        <RideSelector
        p={p}
        d={d}
        />
            <ConfirmB>
              <CB>BookNRide</CB>
            </ConfirmB>

        {/* bnejamin */}
    </Wrapper>
    )
}

export default confirm

const Wrapper=tw.div`
flex h-screen flex-col
`

const ConfirmB = tw.div`

`
const CB = tw.div`bg-black-600 text-white my-4 mx-4 text-center rounded-full cursor-pointer w-1/2`
