import React, { Fragment } from 'react'
import Head from 'next/head'

const index = () => {
    return (
        <Fragment>
            <Head>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                <meta name='description' content='Description' />
                <meta name='keywords' content='Keywords' />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000"/>
            </Head>
            <div>
                <p>Assalamualaikum</p>
            </div>
        </Fragment>
    )
}

export default index
