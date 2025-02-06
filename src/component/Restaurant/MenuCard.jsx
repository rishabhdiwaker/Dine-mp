import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

// const ingrediants = [
//     {
//         category : "Nuts & Seeds",
//         ingrediant : "cashews" 
//     },
//     {
//         category : "Protein",
//         ingrediant : "Dal" 
//     },
//     {
//         category : "Break",
//         ingrediant : "Hamburger buns" 
//     },
//     {
//         category : "Vegetables",
//         ingrediant : "Tomato" 
//     },
        
// ]

const demo = [
    {
        category : "Nuts & Seeds",
        ingrediant : ["cashews"] 
    },
    {
        category : "Protein",
        ingrediant : ["Chicken", "Dal"] 
    }
        
]

const MenuCard = () => {
    const handleCheckBoxChange = (value) => console.log(value);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className='lg:flex items- center justify-between'>
                <div className='lg:flex items-center lg:gap-5'>
                    <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/9609847/pexels-photo-9609847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''></img>
                </div>
                <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className='font-semibold text-xl'>Burger</p>
                    <p>₹499</p>
                    <p className='text-gray-400'>A hamburger or many Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim nemo aliquam ipsam suscipit magni?
                    </p>
                </div>

            </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    demo.map((item) => 
                        (<div>
                            <p>{item.category}</p>
                            <FormGroup>
                                {item.ingrediant.map((item) =>   ( <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={item} /> ))}
                            </FormGroup>
                        </div>
                    ))
                }
            </div>
            <div className='pt-5'>
                <Button variant="contained" disabled={false} type = "submit">{true ?"Add to Cart":"Out Of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MenuCard;
