import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TestsTable from './TestsTable';
import { BarChartOutlined, ChatRounded, ListAltOutlined, PeopleAlt, PhoneMissed, Settings } from '../../../node_modules/@mui/icons-material/index';
import Analytics from './Analytics';
import PlotView from './PlotView';
import SettingsTab from './SettingsTab';

const TTitle = ({ title }) => <Typography variant="h4" sx={{ m: 0, fontSize: 17, fontWeight: 700, p: 0 }}>{title}</Typography>
function TabPanel(props) {
    const { children, value, index, style, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: '100%', backgroundColor: 'aliceblue' }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function TabsBlock() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // flexGrow: 1,
    return (
        <Box
            sx={{ display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label={<TTitle title="Test List" />} icon={<ListAltOutlined />} sx={{ borderBottom: 1, pt: 3, pb: 3, borderColor: 'divider', ...(value == 0 && { backgroundColor: 'aliceblue' }) }} iconPosition="top" {...a11yProps(0)} />
                <Tab label={<TTitle title={"Plot View"} />} icon={<BarChartOutlined />} iconPosition="top" {...a11yProps(1)} sx={{ pt: 3, pb: 3, borderBottom: 1, borderColor: 'divider', ...(value == 1 && { backgroundColor: 'aliceblue' }) }} />
                <Tab label={<TTitle title={"Analytics"} />} icon={<PeopleAlt />} iconPosition="top" {...a11yProps(2)} sx={{ pt: 3, pb: 3, borderBottom: 1, borderColor: 'divider', ...(value == 2 && { backgroundColor: 'aliceblue' }) }} />
                <Tab label={<TTitle title={"Settings"} />} icon={<Settings />} iconPosition="top" {...a11yProps(3)} sx={{ pt: 3, pb: 3, borderBottom: 1, borderColor: 'divider', ...(value == 3 && { backgroundColor: 'aliceblue' }) }} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <TestsTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PlotView />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Analytics />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SettingsTab />
            </TabPanel>
        </Box>
    );
}