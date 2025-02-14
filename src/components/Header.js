import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({onAdd ,showAdd}) => {

    return (
    <div>
      <header className='header'>
        <h1>To Do List</h1>
        <Button 
        color= {showAdd ? "red": "green"}
         text = {showAdd ? 'Close' : 'Add'}
          onClick = {onAdd} />
      </header>
    </div>
  )
}

export default Header;
