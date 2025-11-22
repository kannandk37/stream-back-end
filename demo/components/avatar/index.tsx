// import { Avatar } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Theme } from '@mui/material/styles';
import { Avatar } from "@/design/components/avatar";


export interface AvatarProps {
  value?: string;
  image?: string;
}

export const AvatarComponent = () => {
  return (
    <>
      <div style={{ height: 200, backgroundColor: 'red', margin: 10, display: 'flex' , padding:10}}
      >
        <div>
        <h3 style={{color: 'white'}}>1 string</h3>

          <Avatar name="K" />
        </div>
        <div style={{marginLeft: 30}}>
        <h3 style={{color: 'white'}}>2 string </h3>

          <Avatar name="Kumar Maja" />
        </div>
        <div style={{marginLeft: 30}}>
          <h3 style={{color: 'white'}}>Image</h3>
          <Avatar name="siva Sankar"  image={"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740"}/>
        </div>
      </div>
      <div style={{ height: 200, backgroundColor: 'var(--black-10)', margin: 10, display: 'flex' , padding:10}}
      >
        <div>
        <h3 style={{color: 'white'}}>1 string</h3>

          <Avatar name="K" size="small"/>
        </div>
        <div style={{marginLeft: 30}}>
        <h3 style={{color: 'white'}}>2 string </h3>

          <Avatar name="Kumar Raja"  size="small"/>
        </div>
        <div style={{marginLeft: 30}}>
          <h3 style={{color: 'white'}}>Image</h3>
          <Avatar name="siva Sankar"  size="small" image={"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740"}/>
        </div>
      </div>
    </>
  )
}

export const useStyles = makeStyles()((theme: Theme) => ({
  profileAvatar: {
    backgroundColor: 'var(--white-10)',
    color: 'var(--black-10)',
    width: 40,
    height: 40,
    alignSelf: 'center',
    justifySelf: 'center',
    fontFamily: 'Plusjakartasans',
    fontSize: '14px',
    fontWeight: 700,
    fontStyle: 'normal',
    [theme.breakpoints.down('md')]: {
      color: 'var(--black-10)',
      width: 30,
      height: 30,
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
      fontFamily: 'ZenMaruGothicMedium',
    },
  },
}));