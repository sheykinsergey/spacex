import React from 'react';
import {Link} from 'react-router-dom';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches'
import './calendar.css';



const Calendar = () => {

	const { data } = useLaunches();
	console.log(data);
	
	return (
		<>
			<Main name='Календарь SpaceX'/>
			<section className="calendar">
			<div className="container">
				<ul className="calendar-list">
				{
					data.map(e => (
							<li className="calendar-item" key={e.id}>
								<article className="launches">
									<div className="launches-image">
										<img src={e.links.patch.small} alt=""/>
										
									</div>
									<div className="launches-content">
										<h2 className="launches-title">{e.name}</h2>
										<Link to={`/details/${e.id}`} className="button launches-details">Подробнее</Link>
									</div>
								</article>
							</li>	
					))
				}
					
					
	
					
	
				</ul>
			</div>
		</section>
		</>
	);
}

export default Calendar;