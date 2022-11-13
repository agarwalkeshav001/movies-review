import React from "react";
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Searching({ userInput }) {

    const [snackopen, setSnackOpen] = React.useState(false);

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackOpen(false);
    };
    const getInfo = () => {
        ///const userInputInstance = innerRef.current.value;
        console.log(userInput);
        if (userInput.userInputText === '') {
            console.log("hi");
            setSnackOpen(true)
        }
        else {
            axios({
                method: "get",
                url: "http://www.omdbapi.com/?t=" + userInput.userInputText + "&apikey=df123052&plot=full",
            }).then(function (response) {
                console.log(response.data);
            });
        }
    }
    return (
        <div>
            <input type="button" value="Submit" onClick={getInfo} />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackopen}
                autoHideDuration={6000}
            >
                <Alert onClose={handleSnackClose} style={{ backgroundColor: '#21303b', boxShadow: '0px 5px 20px #0000004D' }} severity="warning">
                    <span style={{ font: 'normal normal normal 20px/24px Ubuntu', color: 'white' }}>Please enter any movie, anime or web series</span>
                </Alert>
            </Snackbar>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>


    )
};