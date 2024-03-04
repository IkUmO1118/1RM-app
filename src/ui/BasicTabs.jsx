import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps({ index }) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs({ color, tabSize, tabContent }) {
  const [value, setValue] = useState(0);

  const handleChange = (value, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor={color}
          indicatorColor={color}
          aria-label="basic tabs example"
        >
          {tabContent.map((option, i) => (
            <Tab
              label={<Typography variant={tabSize}>{option.part}</Typography>}
              {...a11yProps(i)}
              key={i}
            />
          ))}
        </Tabs>
      </Box>
      {tabContent.map((option, i) => (
        <CustomTabPanel value={value} index={i} key={i}>
          {option.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default BasicTabs;
