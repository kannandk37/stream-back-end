import { Chip } from "@/design/components/chip"
import { DesignIconsDummyOutlineIcon } from "@/design/icons/dummy/outline"

export const ChipComponent = () => {

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', }}>
          <div>
            <Chip label="Chip" size="large" />
          </div>
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon />} label="Chip" size="large" />
          </div>
          <div>
            <Chip deleteIcon={<DesignIconsDummyOutlineIcon />} onDelete={() => { }} label="Chip" size="large" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip deleteIcon={<DesignIconsDummyOutlineIcon />} starticon={<DesignIconsDummyOutlineIcon />} onDelete={() => { }} label="Chip" size="large" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip color='success' label="Chip" size="large" />
          </div>
          <div>
            <Chip color='info' label="Chip" size="large" />
          </div>
          <div>
            <Chip color='warning' label="Chip" size="large" />
          </div>
          <div>
            <Chip color='error' label="Chip" size="large" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip color='success' starticon={<DesignIconsDummyOutlineIcon color="var(--successDark)" />} label="Chip" size="large" />
          </div>
          <div>
            <Chip color='info' starticon={<DesignIconsDummyOutlineIcon color="var(--infoDark)" />} label="Chip" size="large" />
          </div>
          <div>
            <Chip color='warning' starticon={<DesignIconsDummyOutlineIcon color="var(--warningDark)" />} label="Chip" size="large" />
          </div>
          <div>
            <Chip color='error' starticon={<DesignIconsDummyOutlineIcon color="var(--errorDark)" />} label="Chip" size="large" />
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', gap: '20px', }}>
          <div>
            <Chip label="Chip" size="small" />
          </div>
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon />} label="Chip" size="small" />
          </div>
          <div>
            <Chip deleteIcon={<DesignIconsDummyOutlineIcon />} onDelete={() => { }} label="Chip" size="small" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip deleteIcon={<DesignIconsDummyOutlineIcon />} starticon={<DesignIconsDummyOutlineIcon />} onDelete={() => { }} label="Chip" size="small" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip color='success' label="Chip" size="small" />
          </div>
          <div>
            <Chip color='info' label="Chip" size="small" />
          </div>
          <div>
            <Chip color='warning' label="Chip" size="small" />
          </div>
          <div>
            <Chip color='error' label="Chip" size="small" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip color='success' starticon={<DesignIconsDummyOutlineIcon color="var(--successDark)" />} label="Chip" size="small" />
          </div>
          <div>
            <Chip color='info' starticon={<DesignIconsDummyOutlineIcon color="var(--infoDark)" />} label="Chip" size="small" />
          </div>
          <div>
            <Chip color='warning' starticon={<DesignIconsDummyOutlineIcon color="var(--warningDark)" />} label="Chip" size="small" />
          </div>
          <div>
            <Chip color='error' starticon={<DesignIconsDummyOutlineIcon color="var(--errorDark)" />} label="Chip" size="small" />
          </div>
        </div>
        <br /><br />
        <div style={{ display: 'flex', gap: '20px', }}>
          <div>
            <Chip label="Chip" />
          </div>
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon />} label="Chip" />
          </div>
          <div>
            <Chip deleteIcon={<DesignIconsDummyOutlineIcon />} onDelete={() => { }} label="Chip" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip deleteIcon={<DesignIconsDummyOutlineIcon />} starticon={<DesignIconsDummyOutlineIcon />} onDelete={() => { }} label="Chip" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip color='success' label="Chip" />
          </div>
          <div>
            <Chip color='info' label="Chip" />
          </div>
          <div>
            <Chip color='warning' label="Chip" />
          </div>
          <div>
            <Chip color='error' label="Chip" />
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip color='success' starticon={<DesignIconsDummyOutlineIcon color="var(--successDark)" />} label="Chip" />
          </div>
          <div>
            <Chip color='info' starticon={<DesignIconsDummyOutlineIcon color="var(--infoDark)" />} label="Chip" />
          </div>
          <div>
            <Chip color='warning' starticon={<DesignIconsDummyOutlineIcon color="var(--warningDark)" />} label="Chip" />
          </div>
          <div>
            <Chip color='error' starticon={<DesignIconsDummyOutlineIcon color="var(--errorDark)" />} label="Chip" />
          </div>

        </div>
        <br />
       
        <br />
        <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <Chip  label="Chip" className="small" />
        </div>
          <div>
            <Chip label="Chip" className="successsmall" />
          </div>
          <br />
          <div>
            <Chip label="Chip" className="errorsmall" />
          </div>
          <br />
          <div>
            <Chip label="Chip" className="infosmall" />
          </div>
          <br />
          <div>
            <Chip label="Chip" className="warningsmall" />
          </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon color="var(--successDark)" height="16px" width="16px" />} label="Chip" className="successmedium" />
          </div>
          <br />
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon color="var(--errorDark)" height="16px" width="16px" />} label="Chip" className="errormedium" />
          </div>
          <br />
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon color="var(--infoDark)" height="16px" width="16px" />} label="Chip" className="infomedium" />
          </div>
          <br />
          <div>
            <Chip starticon={<DesignIconsDummyOutlineIcon color="var(--warningDark)" height="16px" width="16px" />} label="Chip" className="warningmedium" />
          </div>
        </div>

      </div>
    </>
  )
}