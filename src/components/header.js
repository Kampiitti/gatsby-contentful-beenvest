import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                headerLogo: file(relativePath: { eq: "hitech.png" }) {
                    childImageSharp {
                        fixed(width:100,height:100) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <Img fixed={data.headerLogo.childImageSharp.fixed} />}
    />
) 

export default Image
