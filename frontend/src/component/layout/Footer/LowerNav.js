import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className='container'>
      <Box sx={{ position: 'fixed', bottom: 0, width: 1.0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to='/'
            label='Home'
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to='/listcategory'
            label='Categories'
            icon={<CategoryIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to='/account'
            label='Profile'
            icon={<PersonIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to='/orders'
            label='Orders'
            icon={<InventoryIcon />}
          />
          <BottomNavigationAction
            href='tel:18003094131'
            label='Help'
            icon={<LocalLibraryIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
