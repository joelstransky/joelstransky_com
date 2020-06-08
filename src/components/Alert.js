import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

function Alert(props) {
  const { site } = useStaticQuery(
    graphql`
    query AlertQuery {
        site {
          siteMetadata {
            author
            social {
              twitter
              facebook
              linkedin
              github
              email
            }
          }
        }
      }
    `
  )
  const { siteMetadata } = site
  return (
      <div className="alert">
        <p>
          I'm recently unemployed due to COVID-19 and looking for full-time
          employment.
        </p>
        <p>Currently I specialize in React and it's related technologies. </p>
        <p>Please contact me with any questions.</p>
      <footer>
        <section className="contact on-dark">
          <ul>
            {siteMetadata.social.twitter && (
              <li>
                <a
                  href={`https://twitter.com/${siteMetadata.social.twitter}`}
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.github && (
              <li>
                <a
                  href={`https://github.com/${siteMetadata.social.github}`}
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:${siteMetadata.social.email}`} target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <pre>
            Thanks - {siteMetadata.author}
        </pre>
      </footer>
      </div>
  )
}

Alert.propTypes = {}

export default Alert
