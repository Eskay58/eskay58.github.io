import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
             <h1>Hello.</h1>
             <h2>I'm Seiya,aming to become Web developer.</h2>
             <p>ご連絡はこちら⇛ <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage