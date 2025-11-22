import { UserRoles } from "@/config";
import { Text } from "@/design/components/text";
import { Box, Tab, Tabs } from "@mui/material";

export interface TabProps {
  tabs?: any,
  selectedIndex?: number,
  onChange?: (event: any, value: any) => void,
  variant?: 'rectangle'
  count: number;
  onSelect?: (option: string) => void,
  userRole?: string;
}

export const ToggleButton = ({ tabs, selectedIndex, userRole, count, onChange, variant, onSelect }: TabProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--white-10)",
        padding: variant == 'rectangle' ? "4px" : "8px",
        borderRadius: variant == 'rectangle' ? '4px' : '20px',
        border: '1px solid #ECECEC'
      }}
    >
      <Tabs
        value={selectedIndex}
        onChange={onChange}
        variant="fullWidth"
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            padding: variant == 'rectangle' ? "13px 12px !important" : "13px 12px !important",
            minHeight: variant == 'rectangle' ? "0px !important" : "0px !important",
            width: 'auto',
            display: "flex",
            alignItems: "center",
            borderRadius: variant == 'rectangle' ? '4px' : '12px'
          },
          "& .Mui-selected": {
            backgroundColor: variant == 'rectangle' ? "var(--primary-10)" : "#005E86",
          },
          "&.MuiTabs-root": {
            display: 'flex',
            minHeight: '0px !important',
            alignItems: 'center'
          },
          "& .MuiTabs-indicator": {
            display: 'none !important'
          }
        }}
      >
        {tabs.map((tab: any, index: number) => (
          <Tab
            key={index}
            disableRipple
            onClick={() => {
              console.log('tab', tab)
               onSelect(tab)}
            }
            sx={
              {
                display: 'flex',
                alignContent: 'center',
                marginRight: index !== tabs.length - 1 ? '8px' : 0,
                '&:hover': {
                  background: index !== selectedIndex && '#DBEFF8'
                },
                '&:active': {
                  background: index !== selectedIndex && '#C3DDE9'
                }
              }
            }
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: '12px', flexDirection: 'row', justifyContent: 'center' }} >

                {tab.icon}
                <Text variant={index == selectedIndex ? "title4" : 'body2'}
                  color={index == selectedIndex ? "#FFFFFF" : "#434544"}> {tab}</Text>
                {(count >=0 && userRole === UserRoles.Mentor && tab === 'Pending assistance')  &&
                  <div style={{ backgroundColor: "var(--primary-10)",padding:'6px 4px', borderRadius: '4px', justifyContent: "center", alignItems: 'center', display: 'flex', }}>
                    <Text variant="caption" color="#FFFFFF">{count}</Text>
                  </div>
                }
                {(count>=0 && userRole === UserRoles.Producer && tab === 'Ready to Work') &&
                  <div style={{ backgroundColor: "var(--primary-10)",padding:'6px 4px', borderRadius: '4px', justifyContent: "center", alignItems: 'center', display: 'flex', }}>
                    <Text variant="caption" color="#FFFFFF">{count}</Text>
                  </div>
                }
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};


