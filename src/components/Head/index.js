import Head from 'next/head';
import React from 'react'

function CustomHead({title, description}) {
  return (
    <Head>
      <title>{title ? title : 'Premier Event Planning and Production Company in Beverly Hills, CA | Nexa Events'}</title>
      <meta name="description" content={description ? description : "Make your event extraordinary with Nexa Events, the leading event planning and production company in Beverly Hills, CA."} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href="https://nexaevents.com" />
    </Head>
  )
}

export default CustomHead;