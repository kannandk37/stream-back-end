import { SimpleButton } from "@/design/components/button/simple";
import { DesignIconsDummyOutlineIcon } from "@/design/icons/dummy/outline";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export const ButtonComponent = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px' }}>
      <div>
        <Typography>Filled button - extrasmall (based on height - 28px)</Typography>
        <div>
          <SimpleButton variant="contained" height='extraSmall' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='contained' height='extraSmall' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained" height='extraSmall' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--white-10)" />}>Button</SimpleButton>
          <SimpleButton variant='contained' height='extraSmall' disabled startIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained" height='extraSmall' disableRipple={true} endIcon={<DesignIconsDummyOutlineIcon color="var(--white-10)" />}>Button</SimpleButton>
          <SimpleButton variant='contained' height='extraSmall' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained" height='extraSmall' disableRipple={true} isLoading={true} loaderColor="teritary" loaderSize="small" ></SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='extraSmall' disableRipple={true} >Button</SimpleButton>
          <SimpleButton variant='outlined' height='extraSmall' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='extraSmall' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--secondary-30)" />}>Button</SimpleButton>
          <SimpleButton variant='outlined' height='extraSmall' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='extraSmall' disableRipple={true} isLoading={true} loaderColor="secondary" loaderSize="small"></SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='extraSmall' disableRipple={true} >Button</SimpleButton>
          <SimpleButton variant='contained-tonal' height='extraSmall' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='extraSmall' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--secondary-30)" />}>Button</SimpleButton>
          <SimpleButton variant='contained-tonal' height='extraSmall' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='extraSmall' disableRipple={true} isLoading={true} loaderColor="secondary" loaderSize="small"></SimpleButton>
        </div>
      </div>
      <div>
        <Typography>Filled button - Medium (based on height - 40px)</Typography>
        <div>
          <SimpleButton variant="contained" height='medium' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='contained' height='medium' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained" height='medium' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--white-10)" />}>Button</SimpleButton>
          <SimpleButton variant='contained' height='medium' disabled startIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='medium' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='outlined' height='medium' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='medium' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--secondary-30)" />}>Button</SimpleButton>
          <SimpleButton variant='outlined' height='medium' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant='text' height='medium' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='text' height='medium' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant='text' height='medium' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--info-dark)" />}>Button</SimpleButton>
          <SimpleButton variant='text' height='medium' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='medium' disableRipple={true} >Button</SimpleButton>
          <SimpleButton variant='contained-tonal' height='medium' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='medium' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--secondary-30)" />}>Button</SimpleButton>
          <SimpleButton variant='contained-tonal' height='medium' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='medium' disableRipple={true} isLoading={true} loaderColor="secondary" loaderSize="small"></SimpleButton>
        </div>
      </div>
      <div>
        <Typography>Filled button - Large (based on height - 48px)</Typography>
        <div>
          <SimpleButton variant="contained" height='large' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='contained' height='large' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained" height='large' disableRipple={true} endIcon={<DesignIconsDummyOutlineIcon color="var(--white-10)" />}>Button</SimpleButton>
          <SimpleButton variant='contained' height='large' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='large' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='outlined' height='large' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='large' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--secondary-30)" />}>Button</SimpleButton>
          <SimpleButton variant='outlined' height='large' disabled startIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="outlined" height='large' disableRipple={true} isLoading={true} loaderColor="secondary" loaderSize="small"></SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="text" height='large' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='text' height='large' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="text" height='large' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--info-dark)" />}>Button</SimpleButton>
          <SimpleButton variant='text' height='large' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='large' disableRipple={true}>Button</SimpleButton>
          <SimpleButton variant='contained-tonal' height='large' disabled>Button</SimpleButton>
        </div>
        <br />
        <div>
          <SimpleButton variant="contained-tonal" height='large' disableRipple={true} startIcon={<DesignIconsDummyOutlineIcon color="var(--secondary-30)" />} >Button</SimpleButton>
          <SimpleButton variant='contained-tonal' height='large' disabled endIcon={<DesignIconsDummyOutlineIcon color="var(--grey-30)" />}>Button</SimpleButton>
        </div>
      </div>
    </div>
  )
}

