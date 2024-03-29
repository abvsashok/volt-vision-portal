import * as React from 'react';
import { Box, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VButton from 'components/VButton';
import { PresentToAllRounded, ViewAgendaRounded } from '../../../node_modules/@mui/icons-material/index';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = ({ title, description }) => {
    return <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 20, fontWeight: '900' }} color="text.primary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" component="div">
                {bull} Note : {description}
            </Typography>

        </CardContent>
        <CardActions>
            <Grid sx={{ display: 'flex', justifyContent: 'end' }}>
                <Link variant="h6" component={RouterLink} to="/admin/project-view" color="text.primary">
                    <VButton variant="outlined" size="small" >View</VButton>
                </Link>
            </Grid>
        </CardActions>
    </React.Fragment>
};

export default function ProjectCard({ item }) {
    return (
        <Box >
            <Card variant="outlined" sx={{ backgroundColor: 'aliceblue', cursor: 'pointer' }}>{card(item)}</Card>
        </Box>
    );
}