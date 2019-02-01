import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styles from './bio.module.css';


export default function Bio() {
    return (
        <StaticQuery
            query={graphql`
{
  nodePage(title: {eq: "Bio"}) {
    title
    relationships {
      field_image {
        relationships {
          field_media_image {
            localFile {
              childImageSharp {
                fixed(height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    body {
      processed
    }
  }
}
      `}
            render={data => (
                <div className={styles.bio}>
                    <Image
                        className={styles.avatar}
                        fixed={
                            data.nodePage.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fixed
                        }
                    />
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{
                            __html: data.nodePage.body.processed,
                        }}
                    />
                </div>
            )}
        />
    );
}