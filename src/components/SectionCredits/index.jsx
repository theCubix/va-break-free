import React from 'react';
import Anchor from 'react-scrollable-anchor';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import './index.scss';

class SectionCredits extends React.Component {
  render() {
    return (
      <section className="credits-section">
        <div className="container">
          <h2 className="title">Danksagung</h2>
          <p className="credits-section__text">
            Ohne die Unterstützung und Mithilfe, die wir in den letzten Monaten erhalten haben, wäre unsere EP nie Realität geworden.
          </p>
          <p className="credits-section__text">
            Ein grosses Dankeschön geht daher an <OutboundLink href="https://www.facebook.com/daniel.maurer.1272">Daniel Maurer</OutboundLink> und Rapper <OutboundLink href="https://www.facebook.com/che.b.offiziell/">Che-B</OutboundLink>, die im Studio für die Abmischung, den Schnitt sowie das Mixing verantwortlich waren und uns im allgemeinen mit ihrem Know-How unterstützten.
          </p>
          <p className="credits-section__text">
            Ebenfalls möchten wir <OutboundLink href="https://www.facebook.com/mury0/">Caroline Laville</OutboundLink> danken, welche das Motif für das Cover entworfen und umgesetzt hat.
          </p>
          <p className="credits-section__text">
            Das Schwyzer-Örgeli-Intro in «Break Free» wurde Komponiert von Toni Bürgler. Auch ihm möchten wir ein herzliches Dankeschön aussprechen.
          </p>
          <p className="credits-section__text">
            Die grösste Unterstützung, von ganz am Anfang bis zum Release, erhielten wir von unserem Manager Teddy Eichenberger. Ohne ihn wären wir nie in der Lage gewesen, die Kosten für dieses unglaublich spannende und erfreuliche Projekt zu tragen und hätten die EP auch niemals innert so kurzer Zeit aufnehmen können.
          </p>
        </div>
      </section>
    )
  }
};

export default SectionCredits;
