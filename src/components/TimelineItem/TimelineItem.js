const TimelineItem = (props) => {
  return (
    <div className='timeline-item' key={props.id} data-aos="fade-up">
                <img src={props.icon} className="timeline-logo" alt="company-logo" />
                <div className="timeline-contents">
                    <h2 className='timeline-item-title'>{props.title}</h2>
                    <h3 className='timeline-item-date'>{props.date}</h3>
                    <p className='timeline-item-desc'>{props.desc}</p>
                </div>
    </div>
  )
}

export default TimelineItem