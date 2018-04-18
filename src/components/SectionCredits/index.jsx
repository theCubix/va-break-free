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
          <p>Ohne die Unterstützung und Mithilfe, die wir in den letzten Monaten erhalten haben, wäre unsere EP nie Realität geworden.</p>
          <p>Ein grosses Dankeschön geht daher an Daniel Maurer und Rapper <OutboundLink href="https://www.facebook.com/che.b.offiziell/">Che-B</OutboundLink>, die im Studio für die Abmischung, den Schnitt sowie das Mixing verantwortlich waren und uns im allgemeinen mit ihrem Know-How unterstützt haben.</p>
          <p>Ebenfalls möchten wir <OutboundLink href="https://www.facebook.com/mury0/">Caroline Laville</OutboundLink> danken, welche das Motif für das Cover entworfen und umgesetzt hat.</p>
          <p>Das Schwyzer-Örgeli-Intro in «Break Free» wurde Komponiert von Toni Bürgler. Auch ihm möchten wir ein herzliches Dankeschön aussprechen.</p>
        </div>
      </section>
    )
  }
};

export default SectionCredits;
