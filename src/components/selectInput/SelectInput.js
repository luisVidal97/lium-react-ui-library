import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {StyledDivTitle, StyledTitle, StyledList, StyledButton} from './StyledSelectComponents';


const SelectInput = ({title, items, multiSelect = false, onSelectItems}) => {

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const showItems = () =>{
    setOpen(!open);
  }

  const handleOnClickSelect = (item)=> {
    if (selection.some(element => element.id === item.id)) {
      let array = [...selection];
      array = array.filter(
        element => element.id !== item.id
      );
      setSelection([...array]);
    } else {
      if (multiSelect) {
        setSelection([...selection, item]);
      } else {
        setSelection([item]);
      }
    }
  }

  const isSleected = (Iditem) => {
    if(selection.some(element => element.id ===Iditem)){
      return '#D1E9FF';
    }else {
      return 'white';
    }

  }



  return (
    <div style={{position:'relative', margin: '10px'}} >

      <StyledDivTitle
        onClick={()=> {
          onSelectItems(selection);
          showItems();
        }}
      >
        <StyledTitle>{title}</StyledTitle>

        <img
          height="25px"
          width="25px"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDIxMy4zMzMgMjEzLjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjAsNTMuMzMzIDEwNi42NjcsMTYwIDIxMy4zMzMsNTMuMzMzICAgIiBmaWxsPSIjY2NjY2NjIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BvbHlnb24+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
        />
      </StyledDivTitle>
        { open &&
          (
            <StyledList >
              {
                items.map( item => {
                  const selectedColor = isSleected(item.id);
                  return (
                    <li key={item.id}>
                      <StyledButton onClick={() => handleOnClickSelect(item)} color={selectedColor}>
                        <span>{item.value}</span>
                      </StyledButton>
                    </li>);
                })
              }
            </StyledList>
          )
        }

    </div>
  );
}


SelectInput.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  multiSelect: PropTypes.bool,
  onSelectItems: PropTypes.func.isRequired,
}


export default SelectInput;
