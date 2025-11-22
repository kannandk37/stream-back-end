import { Snackbar } from '@/design/components/toast'
// import Success from '@/assets/svg/success.svg?react';
import { DesignIconsErrorFilledIcon } from '@/design/icons/error/filled';
import { DesignIconsWarningFilledIcon } from '@/design/icons/warning/filled';
import { DesignIconsInfoFilledIcon } from '@/design/icons/info/filled';
import { DesignIconsCheckCircleFilledIcon } from '@/design/icons/check-circle/filled';
import { DesignIconsCloseOutlineIcon } from '@/design/icons/close/outline';

function AlerComponent() {
  return (
    <div>
      <Snackbar
        children="{Description}"
        severity="success"
        close={() => console.log('')}
        snackOpen={{ open: true, horizontal: 'left', vertical: 'top' }}
        successIcon={<DesignIconsCheckCircleFilledIcon color='var(--successDark)'
        />
        }
        closeIcon={<DesignIconsCloseOutlineIcon />}
      />
      <Snackbar
        children="{Description}"
        severity="info"
        close={() => console.log('')}
        snackOpen={{ open: true, horizontal: 'right', vertical: 'bottom' }}
        infoIcon={<DesignIconsInfoFilledIcon color='var(--infoDark)' />}
        closeIcon={<DesignIconsCloseOutlineIcon />}

      />
      <Snackbar
        children="{Description}"
        severity="warning"
        close={() => console.log('')}
        snackOpen={{ open: true, horizontal: 'right', vertical: 'top' }}
        warningIcon={<DesignIconsWarningFilledIcon color='var(--warningDark)' />}
        closeIcon={<DesignIconsCloseOutlineIcon />}

      />
      {/* <Snackbar
        children="{Description}"
        severity="info"
        close={() => console.log('')}
        snackOpen={{ open: true, horizontal: 'center', vertical: 'top' }}
        showButton
        infoIcon={<DesignIconsInfoOutlineIcon />}
      /> */}
      {/* <Snackbar
        children="{Description}"
        severity="warning"
        close={() => console.log('')}
        snackOpen={{ open: true, horizontal: 'right', vertical: 'bottom' }}
        showButton
        warningIcon={<DesignIconsWarningOutlineIcon />}
      /> */}
      <Snackbar
        children="{Description}"
        severity="error"
        close={() => console.log('')}
        snackOpen={{ open: true, horizontal: 'left', vertical: 'bottom' }}
        errorIcon={<DesignIconsErrorFilledIcon color='var(--errorDark)' />}
        closeIcon={<DesignIconsCloseOutlineIcon />}

      />
    </div>
  )
}

export default AlerComponent