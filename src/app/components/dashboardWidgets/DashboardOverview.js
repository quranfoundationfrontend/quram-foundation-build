"use client"
import React from 'react'

// import { WidgetConfig } from '../interfaces';
import { Box, ColumnLayout , Header, Link } from '@cloudscape-design/components';
// import { Box, ColumnLayout, Link } from '@cloudscape-design/components';


const Dashboardoverview = () => {

  return (
<div>

<Header variant="h2" description="A summary of our valued donors and their contributions.

">
The Quran Foundation&apos;s Financial <em>Overview</em>
    </Header>

    <ColumnLayout columns={5} variant="text-grid" minColumnWidth={170}>
      <div>
        <Box variant="awsui-key-label">Donors</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Running instances (14)">
          143
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Beneficiaries</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Volumes (126)">
          599
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Cash In Hand</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Security groups (116)">
          11634567₹
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Account Balance</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Load balancers (28)">
          2888868₹
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Total Balance</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Load balancers (28)">
          2888823468₹
        </Link>
      </div>
    </ColumnLayout>
    </div>

 )
}

export default Dashboardoverview;