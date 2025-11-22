import { Profile } from "@/design/components/profile"
import { DesignIconsLogoutOutlineIcon } from "@/design/icons/logout/outline"


export const ProfileComponent= ()=> {
    return(
           <div style={{padding: '20px', backgroundColor: 'red'}}>

               <Profile mode="light" name="Kannan Rajaguru" designation="Team Lead" isSignout signoutIcon={<DesignIconsLogoutOutlineIcon color="var(--infoDark)"/>}/>
           </div>
    )
}