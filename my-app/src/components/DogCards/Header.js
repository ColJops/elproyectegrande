import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from '././Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h3>{title}</h3>
                <Button
                    color={showAdd ? '#39312C' : '#39312C'}
                    text={showAdd ? 'Zamknij' : 'Dodaj'}
                    onClick={onAdd}
                />
        </header>
    )
}

Header.defaultProps = {
    title: 'TWOI PSYJACIELE',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header