import { useEffect,useState } from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router"
export default function Home() {

  const [user,setUser] = useState(null)
  const router = useRouter()

  useEffect(()=>{
    return onAuthStateChanged(auth,user => {
      if(user){
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      }
      else{
        setUser(null)
        router.push('/login')
      }
    })
  },[])

  // const map = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: ,
  //   zoom: ,
  // });



  return (
   
        <Wrapper>
         <Map />
        <Actionitem>
        {/*Header*/}
        {/*ActionButtons*/}
        {/*input buttons*/}

        <Header>
          <G>
          <Logg src="https://drive.google.com/uc?export=view&id=1X3ejEmQwwLv5x0RGBw6c0-u4SqodjOJZ" />

          </G>
          <Profile>
            <Name>{user && user.name}</Name>
            
            <UserImage src={user && user.photoURL} onClick={() =>signOut(auth)}/>
          </Profile>
        </Header>
         <ActionButtons>
          <Link href="/search">
          <ActionButton >
            <Im1 src="https://i.ibb.co/cyvcpfF/uberx.png" />
            ride</ActionButton>
            </Link>
            
            
         </ActionButtons>
         <InputButton> Have a HAPPY ride! </InputButton> 
        </Actionitem>
        </Wrapper>
  )
}

const Im1= tw.img`
h-3/5
`
const G =tw.div`items-center w-full`
const Wrapper = tw.div`
  flex flex-col  h-screen
`
const Actionitem = tw.div`
 flex-1 flex-1 m-1 h-32 
`
const Header = tw.div`
flex justify-between items-center
`

const Logg = tw.img`
h-28 items-center mt-10 ml-20
`

const Profile= tw.div`
flex items-center
`

const Name= tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`
const ActionButtons = tw.div`
flex w-1/2 ml-20 mt-10 mb-10
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 ml-2 mr-2
`