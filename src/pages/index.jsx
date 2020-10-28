import React, { Fragment } from 'react'
import Head from 'next/head'

const index = () => {
    return (
        <Fragment>
            <Head>
            <meta charset='utf-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Next. js with PWA' />
            <meta name='keywords' content='Keywords' />
            <title>Next.js PWA</title>

            <link rel="manifest" href="/manifest.json" />
            <link href='/icon.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/icon.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <meta name="theme-color" content="#000000"/>
            </Head>
            <div>
                <p>Welcome to Next.js with next-pwa</p>
            </div>
        </Fragment>
    )
}

export default index
