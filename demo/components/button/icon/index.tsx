import { IconButton } from "@/design/components/button/icon"
import { DesignIconsDummyOutlineIcon } from "@/design/icons/dummy/outline"

export const IconButtonComponent = () => {
    return (
        <>
            <div style={{padding:'20px'}}>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div>
                        <p style={{ color: 'black' }}>Standard</p>
                        <IconButton disableRipple variant="standard" style={{ marginLeft: 15 }} size="small">
                            <DesignIconsDummyOutlineIcon />
                        </IconButton>

                        <IconButton disableRipple variant="standard" disabled style={{ marginLeft: 15 }} size="small">
                            <DesignIconsDummyOutlineIcon color="var(--grey-30)" />
                        </IconButton>
                    </div>
                    <div>
                        <p style={{ color: 'black' }}>Standard</p>
                        <IconButton disableRipple variant="standard" size="large" style={{ marginLeft: 15 }}>
                            <DesignIconsDummyOutlineIcon />
                        </IconButton>

                        <IconButton disableRipple variant="standard" disabled size="large" style={{ marginLeft: 15 }}>
                            <DesignIconsDummyOutlineIcon color="var(--grey-30)" />
                        </IconButton>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div>
                        <p style={{ color: 'black' }}>outline</p>
                        <IconButton disableRipple variant="outline" style={{ marginLeft: 15 }} size="small">
                            <DesignIconsDummyOutlineIcon />
                        </IconButton>

                        <IconButton disableRipple variant="outline" disabled style={{ marginLeft: 15 }} size="small">
                            <DesignIconsDummyOutlineIcon color="var(--grey-30)" />
                        </IconButton>
                    </div>
                    <div>
                        <p style={{ color: 'black' }}>outline</p>
                        <IconButton disableRipple variant="outline" size="large" style={{ marginLeft: 15 }}>
                            <DesignIconsDummyOutlineIcon />
                        </IconButton>

                        <IconButton disableRipple variant="outline" disabled size="large" style={{ marginLeft: 15 }}>
                            <DesignIconsDummyOutlineIcon color="var(--grey-30)"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

