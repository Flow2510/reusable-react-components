import { NavLink } from 'react-router-dom';
import './hoverbutton.scss';

export default function HoverButton() {
    let text = "Link Text"
    
    return(
        <NavLink to={'/'} className={"hover-button"}>
            <div className='hover-button__text-wrapper'>
                <span className='hover-button__text hover-button__text--initial'>{text}</span>
                <span className='hover-button__text hover-button__text--hovered'>{text}</span>
            </div>
            <div className='hover-button__border'></div>
            <div className='hover-button__arrow-wrapper'>
                <span className='hover-button__arrow hover-button__arrow--hovered'>→</span>
                <span className='hover-button__arrow hover-button__arrow--initial'>→</span>
            </div>
        </NavLink>
    )
}