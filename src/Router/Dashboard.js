import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment className='m-3'>
    <CardContent >
      <Typography sx={{ fontSize: 20 }} className='font-bold' color="text.secondary" gutterBottom>
        Total No:Of Interns
        
      </Typography>
      <input className='border-2'/>
      <br/>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Learn More and think wide...
      </Typography>
      <Typography variant="body2">
        Do practice with joyfull mind..
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const Dashboard = () => {
  return (
    <div className=' md:flex m-3 '>
      <Card sx={{ maxWidth: 1200 }}>
        <img src='https://media.licdn.com/dms/image/C4E12AQE3PPBHPnRvFQ/article-cover_image-shrink_720_1280/0/1581408732753?e=2147483647&v=beta&t=3UYtE25XDy3aohJ7gfL9jWwadjZQBmvTk3LNsCQljHo' alt='no' />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Intern Hub
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome to all Interns
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <div className=' ml-4 m-20'>
        <Box sx={{ textAlign: 'left', minWidth: 400 }}>
          <Card variant="outlined">{card}</Card>
        </Box></div>
    </div>
  )
}

export default Dashboard;