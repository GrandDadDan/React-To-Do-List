import PropTypes from 'prop-types'
import Button from "./Button"

const Header = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
    <div>
      <header className='header'>
        <h1>To Do List</h1>
        <Button color= "Green" text = 'Add' onClick = {onClick} />
      </header>
    </div>
  )
}
  Header.defaultProps = {
    title: 'To Do List',
  }

  Header.propTypes = {
    title: PropTypes.string,
  }


export default Header;
