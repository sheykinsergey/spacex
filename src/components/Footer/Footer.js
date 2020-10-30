import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css';
import logo from '../../logo.svg'

const Footer = ({links: {elon_twitter: elonTwitter, flickr, twitter, website}, summary}) => (
    <footer className="footer">
		<Link to='/'>
			<img src={logo} alt="logo Space X" className="logo"/>
		</Link>
		<nav className="footer-nav">
			<ul className="list">
				<li className="item"><a href={elonTwitter} rel="noopener noreferrer" target='_blank' className="item-link">Elon Musk Twitter</a></li>
				<li className="item"><a href={twitter} rel="noopener noreferrer" target='_blank' className="item-link">Twitter</a></li>
				<li className="item"><a href={flickr} rel="noopener noreferrer" target='_blank' className="item-link">Flickr</a></li>
				<li className="item"><a href={website} rel="noopener noreferrer" target='_blank' className="item-link">Website</a></li>
			</ul>
		</nav>
		<p className="footer-text">
			{summary}
			For additional questions, contact
			<a className="footer-link" href="mailto:rideshare@spacex.com">rideshare@spacex.com</a>
			
		</p>

	</footer>
)
export default Footer;