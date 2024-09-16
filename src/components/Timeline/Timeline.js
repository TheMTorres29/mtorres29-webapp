import { useEffect } from 'react';
import './Timeline.css';
import TimelineItem from '../TimelineItem/TimelineItem';
import Aos from 'aos';


function Timeline() {

    // TimelineList List lol
    const timelineList = [
        {id:1, ttitle:'Corona High School', tdate:'2014', ticon:'https://drive.google.com/thumbnail?id=1Dw6wTrUaiwHV5JAzZfme8JO_EJBhgRkb', tdesc:'Graduated'},
        {id:2, ttitle:'Superior Grocers', tdate:'Aug 2014 - Jan 2015', ticon:'https://drive.google.com/thumbnail?id=1B0wnbfmsLd-uPG07gPweWhnggBNadF-e', tdesc:'Sales Associate'},
        {id:3, ttitle:'Norco Community College', tdate:'2014 - 2018', ticon:'https://drive.google.com/thumbnail?id=12sGFs3mxArHew0KawayCiFY20xr_BK1V', tdesc:'Associates of Math and Science'},
        {id:4, ttitle:'La Cenaduria', tdate:'Jan 2015 - Present', ticon:'https://drive.google.com/thumbnail?id=148PWsoDXukDYliUX4jV0Nfit352JNtJx', tdesc:'IT / Help Desk'},
        {id:5, ttitle:'Cal State University San Bernardino', tdate:'2018 - 2022', ticon:'https://drive.google.com/thumbnail?id=1CMheUs0GA-IEhykYB3d6N1kdq95WvstA', tdesc:'Bachelor of Science in Computer Science'},
        {id:6, ttitle:'GameStop', tdate:'Oct 2020 - May 2021', ticon:'https://drive.google.com/thumbnail?id=1BFft1N-g4A96n6CvwX6h57IqT_XT4AJg', tdesc:'Senior Game Advisor'},
        {id:7, ttitle:'Zumiez DTG', tdate:'Oct 2022 - Oct 2023', ticon:'https://drive.google.com/thumbnail?id=1BdqPJC4yxn6LDJiX5dfdD-GnnXhfx1Xh', tdesc:'Operator / Quality Control'},
        {id:8, ttitle:"Sam's Club", tdate:'Oct 2023 - May 2024', ticon:'https://drive.google.com/thumbnail?id=1aJeaJyTCDHCSO-PNB03nOS7VbmYKStRk', tdesc:'Fresh Dept. Associate'},
        {id:9, ttitle:"ProLogistix", tdate:'May 2024 - Present', ticon:'https://drive.google.com/thumbnail?id=1hA_U6w6V04KIn96b7I1zI6aovR0spWXu', tdesc:'Recieving Lead'},
    ]

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

  return (
    <div className='timeline-container'>
        <h1 className="timeline-title">Timeline</h1>
        {/* NEW */}
        <div className="timeline">
            {timelineList.map((timelineList) => {
                return (
                    <TimelineItem 
                        key={timelineList.id}
                        icon={timelineList.ticon}
                        title={timelineList.ttitle}
                        date={timelineList.tdate}
                        desc={timelineList.tdesc}
                    />
                )
            })}
        </div>
        
    </div>
  )
}

export default Timeline