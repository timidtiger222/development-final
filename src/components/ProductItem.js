import React from 'react';
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import Add from '@mui/icons-material/Add';
import Clear from '@mui/icons-material/Clear';
import Favorite from '@mui/icons-material/Favorite';

/* Card template from mui/material */
export default function ProductItem(props) {

  const [currentButtonVariant, setCurrentButtonVariant] = useState('contained');
  const newList = props.favorites.filter((item) => item.name !== props.item.name);
  const [buttonText, setButtonText] = useState('Add to Team');
  const [icon, setIcon] = useState(<Add></Add>);


  const handleClick = () => {
    if (currentButtonVariant === 'contained') {
      setCurrentButtonVariant('outlined');
      if (props.favorites.includes(props.item) === false) {
        props.setTotal(Number(props.total) + Number(props.item.price));
        props.setFavorites([...props.favorites, props.item])
        setButtonText('Remove from Team');
        setIcon(<Clear></Clear>)
    }
  }
    else if (currentButtonVariant === 'outlined') {
        props.setTotal(Number(props.total) - Number(props.item.price));
        props.setFavorites(newList);
        setCurrentButtonVariant('contained');
        setButtonText('Add to Team');
        setIcon(<Add></Add>);
    }
  } 

    return (
        <Card sx={{ maxWidth: 400 } }>
          <CardContent sx={{ border: 18, borderColor: 'rgb(236, 236, 236)'} }>
            <CardMedia 
              component="img"
              height="250"
              image ={props.item.image}
            />
            </CardContent>
            <CardContent sx={{ margin: 0, backgroundColor: 'rgb(236, 236, 236)'} }>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "dogica", fontSize: 17, fontWeight: 900} }>
                {props.item.name}
                <Typography variant="h6" color="text.primary" sx={{ fontFamily: "dogica", fontSize: 15} }>
                {<Favorite style={{verticalAlign:"middle", fontSize: 18, color: "rgb(181, 16, 16)"}}></Favorite>} {props.item.price} HP
              </Typography>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "dogica", fontSize: 11} }>
                SIZE: {props.item.size}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "dogica", fontSize: 11} }>
                SPECIALTY: {props.item.bestfor}
              </Typography>
              <br></br>
              <Typography variant="body2" color="text.primary" sx={{ fontFamily: "dogica", fontSize: 10} }>
                {props.item.description}
              </Typography>
            </CardContent>
          <CardActions sx={{ backgroundColor: 'rgb(236, 236, 236)'} }>
            <Button sx={{ fontFamily: "dogica", fontSize: 11, margin: 1.5} } variant={currentButtonVariant} startIcon={icon} onClick={handleClick}> {buttonText} </Button>
          </CardActions>
        </Card>
      );
    }
