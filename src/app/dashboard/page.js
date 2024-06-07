"use client"
import { BreadcrumbGroup , Container, Button, Grid, Header, Link, SpaceBetween} from '@cloudscape-design/components'
import React from 'react'



// import widgets from " components / dashboard widgets"
import Dashboardoverview from "../components/dashboardWidgets/DashboardOverview"
import TempWidget from '../components/dashboardWidgets/TempWidget'


// importin charts from components / charts
import DashboardMonth from '../components/charts/DashboardMonth'
const Page = () => {
  return (
    <div>
    <BreadcrumbGroup items={[{ text: 'Home', href: '#/' }, { text: 'Dashboard', href: '#/' }]} />

<div className='mb-4'>
    <Header  variant='h2' 
    info={
        <Link>info</Link>
    }
    actions={
            <SpaceBetween size="xs" direction="horizontal">
                <Button >Reset to default layout</Button>
                <Button iconName="add-plus" >
                    Add widget
                </Button>
            </SpaceBetween>
        }
   >
    Dashboard Overview

    </Header>
    </div>
   

    <Grid
gridDefinition={[
{ colspan: { l: 12, m: 12, default: 12 } },
{ colspan: { l: 12, m: 12, default: 12 } },
{ colspan: { l: 12, m: 8, default: 12 } },
{ colspan: { l: 4, m: 4, default: 12 } },
{ colspan: { l: 4, m: 4, default: 4 } },
{ colspan: { l: 4, m: 4, default: 4 } },
{ colspan: { l: 4, m: 4, default: 4 } },
{ colspan: { l: 6, m: 6, default: 12 } },
{ colspan: { l: 8, m: 8, default: 12 } },
{ colspan: { l: 4, m: 4, default: 12 } },
]}
> 
{/* col 1 */}
<div className='mt-2'>

<Container description="A summary of our valued donors and their contributions." 
// header={<Header variant='h2'>The Quran Foundation's Financial Overview</Header>} 
fitHeight={true}>
<Dashboardoverview/>
</Container>
</div>
{/* col 2 */}
<Container fitHeight={true}>
<TempWidget/>
</Container>

{/* col 3 */}
<Container header={<Header variant='h2'>Raised By Month</Header>} fitHeight={true}>
<DashboardMonth/>
</Container>

{/* col 4 */}
<Container header={<Header variant='h2'>Raised By Type</Header>}  fitHeight={true}>
{/* <RaisedTypesCharts/> */}
</Container>


{/* col 5 , 6 , 7 */}
<Container header={<Header variant='h2'>Donors By Type</Header>}>
{/* <Volunteer/> */}
</Container>

<Container header={<Header variant='h2'>Beneficiaries by Type
</Header>}>
{/* <Volunteer/> */}
</Container>
<Container header={<Header variant='h2'>Volunteer by Type

</Header>}>
{/* <Volunteer/> */}
</Container>

</Grid>
</div>
  )
}

export default Page