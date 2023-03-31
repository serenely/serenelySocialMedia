import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <ul className='nav__ul'>
                <li className='nav__li'>Calendar</li>
                <li className='nav__li'>Team</li>
                <li className='nav__li'>Documents</li>
                <li className='nav__li'>Reports</li>
                <li className='nav__li'>Something else</li>
            </ul>
        </div>
    )
}

export default Nav