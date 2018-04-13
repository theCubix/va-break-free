import React, { Component } from 'react';
import Helmet from 'react-helmet';

import LandingPage from '../components/LandingPage';
import SectionAppleMusicEmbed from '../components/SectionAppleMusicEmbed';
import SectionLinksToShops from '../components/SectionLinksToShops';
import SectionStory from '../components/SectionStory';
import SectionMusicIsLife from '../components/SectionMusicIsLife';

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
          src="https://tools.applemusic.com/embed/v1/album/1016210775?country=ch"
          height="500px"
          width="100%"
        />

        <SectionLinksToShops
          links={[
            { id: 1, title: 'Apple Music', url: 'https://itunes.apple.com/ch/album/nothing-but-thieves-deluxe/1016210775?app=music&ign-itsct=1016210775-1016210775&ign-itscg=0177&ign-mpt=uo%3D4' },
            { id: 2, title: 'Spotify', url: 'https://open.spotify.com/album/3q4BkDV5B7sczFcfrIl2a2' },
            { id: 3, title: 'Google Music', url: 'https://play.google.com/music/m/B3djlnmhnwf5y4zpckel5csx4ta?t=Nothing_But_Thieves_Deluxe_-_Nothing_but_Thieves' },
            { id: 4, title: 'Amazon', url: 'https://www.amazon.de/Nothing-But-Thieves-Deluxe/dp/B01125JQBK/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1523386772&sr=1-1-mp3-albums-bar-strip-0&keywords=nothing+but+thieves+deluxe' }
          ]}
        />

        <SectionStory
          imageStory={imageStory}
        />

        <SectionMusicIsLife />
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