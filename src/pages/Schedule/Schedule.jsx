import React from 'react'
import './Schedule.css'
import PageHeader from '../../components/Page/PageHeader/PageHeader'
import VideoSection  from '../../components/Home/VideoSection/VideoSection'
import OurSchedule from '../../components/Home/OurSchedule/OurSchedule'
import ScheduleOrder from '../../components/Schedule/ScheduleOrder'  

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ScheduleOrder.css'
// import React from 'react';
//import './ScheduleOrder.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Schedule = () => {
  return (
    <div>
      Schedule
      <PageHeader title="OUR SCHEDULE" breadcrumb="OurSchedule"/>
      <OurSchedule/> 
          <ScheduleOrder/>     
      <VideoSection/>
    </div>
  )
}

export default Schedule
