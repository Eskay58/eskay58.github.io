import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>現在は機械系の開発をしています。</p>
            <p>ご連絡はこちら⇛ <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage