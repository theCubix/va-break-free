import React, { Component } from 'react';
import Helmet from 'react-helmet';

import LandingPage from '../components/LandingPage';
import SectionAppleMusicEmbed from '../components/SectionAppleMusicEmbed';
import SectionLinksToShops from '../components/SectionLinksToShops';
import SectionStory from '../components/SectionStory';
import SectionMusicIsLife from '../components/SectionMusicIsLife';
import SectionCredits from '../components/SectionCredits';

import './sass/index.scss'

class IndexPage extends Component {
  render() {
    const imageLq = this.props.data.landingPageBackgroundImageLowQuality.childImageSharp.resolutions;
    const imageHq = this.props.data.landingPageBackgroundImageHighQuality.childImageSharp.resolutions;
    const imageStory = this.props.data.sectionStoryImage.childImageSharp.resolutions;
    const metaImage = this.props.data.metaImage.childImageSharp.resolutions;
    const title = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet
          title={`Break Free – ${title}`}
          meta={[
            // General
            { name: 'description', content: '«Break Free» ist die erste EP von Voltage Arc. Höre dir jetzt die EP an und erfahre, wie die Studioaufnahmen entstanden sind.' },
            { name: 'keywords', content: 'Voltage Arc, Break Free, EP, Aufnahmen, Spotify, Apple Music, Google Music, Musik, Rock, Heavy Metal' },

            // OpenGraph Tags
            { property: 'og:url', content: 'https://www.voltagearc.com/break-free' },
            { property: 'og:title', content: `Break Free – ${title}` },
            { property: 'og:description', content: 'Hör dir jetzt unsere erste EP «Break Free» an.' },
            { property: 'og:image', content: `${metaImage.src}` }
          ]}
        />

        <LandingPage
          imageLq={imageLq}
          imageHq={imageHq}
        />

        <SectionAppleMusicEmbed
          title="Break Free &ndash; unsere erste EP"
          src="https://tools.applemusic.com/embed/v1/album/1372030544?country=ch"
          height="500px"
          width="100%"
        />

        <SectionLinksToShops
          links={[
            { id: 1, title: 'Apple Music', url: 'https://itunes.apple.com/ch/album/break-free-ep/1372030544?app=music' },
            { id: 2, title: 'Spotify', url: 'https://open.spotify.com/album/3hUXI0KHw81n4YD91P6Agv' },
            { id: 3, title: 'Google Music', url: 'https://play.google.com/music/m/Bxsjbp5xywdgjbjtz6qnixvcixu?t=Break_Free_-_Voltage_Arc' },
            { id: 4, title: 'YouTube', url: 'https://www.youtube.com/playlist?list=PLM1AaulkmqOJJ9Csx5OSrjq3sQ2GVBJub' }
          ]}
        />

        <SectionStory
          imageStory={imageStory}
        />

        <SectionMusicIsLife />

        <SectionCredits />
      </div>
    )
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query Default {
    site: site {
      siteMetadata {
        title
      }
    }
    metaImage: file(relativePath: {eq: "break-free-hq-v4.jpg"}) {
      childImageSharp {
        resolutions(width: 1000, height: 1000) {
          src
        }
      }
    }
    landingPageBackgroundImageLowQuality: file(relativePath: {eq: "break-free-hq-v4.jpg"}) {
      childImageSharp {
        resolutions(width: 40, height: 40, quality: 10) {
          src
        }
      }
    }
    landingPageBackgroundImageHighQuality: file(relativePath: {eq: "break-free-hq-v4.jpg"}) {
      childImageSharp {
        resolutions(width: 1000, height: 1000, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    sectionStoryImage: file(relativePath: {eq: "voltage-arc-after-recording.jpeg"}) {
      childImageSharp {
        resolutions(width: 800, height: 800, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
  `;