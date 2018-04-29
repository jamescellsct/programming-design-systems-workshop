import React from 'react';
import {
  SlideSet,
  Slide,
  Image,
  CodePane,
  Appear,
  BlockQuote,
  Quote,
  Cite,
} from 'spectacle';

import { Heading, Text, List, ListItem, Emoji, Link } from 'components';
import images from 'images';

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading f="headline" margin={0}>
        Programming <Emoji v="📐✏️" />
        <br />Design Systems
      </Heading>
    </Slide>
    <Slide>
      <Heading f={1}>Slides</Heading>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link href="https://tiny.cc/animation-math">
          tiny.cc/programming-design-systems
        </Link>
      </Text>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link href="https://github.com/winkerVSbecks/programming-design-systems-workshop">
          github.com/winkerVSbecks/programming-design-systems-workshop
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading f={1}>Overview</Heading>
      <List>
        <ListItem>Design Constraints</ListItem>
        <ListItem>Design System Components</ListItem>
        <ListItem>Slicing Components</ListItem>
      </List>
    </Slide>
    <Slide bgColor="secondary">
      <Heading f={2} textColor="primary" margin="0 0 4rem 0">
        Design Constraints<br />aka Design System Variables
      </Heading>
      <Image src={images.airbnb} />
    </Slide>
    <Slide>
      <Heading f={1}>Design Constraints</Heading>
      <List marker="+ ">
        <ListItem>Colours</ListItem>
        <ListItem>Spacing: padding & margin</ListItem>
        <ListItem>Sizing: width & height</ListItem>
        <ListItem>Border: colour, size & radius</ListItem>
        <ListItem>Type-Scale, Line Height & Weight</ListItem>
        <ListItem italic>and…?</ListItem>
      </List>
    </Slide>
    <Slide margin={0}>
      <div className="flex items-center">
        <Image
          src="https://cdn.dribbble.com/users/104117/screenshots/3813751/ds3.png"
          margin="0 4rem 0 0"
          width={400}
        />
        <List>
          <ListItem>Design System</ListItem>
          <ListItem>Style Guide</ListItem>
          <ListItem>Pattern Lab</ListItem>
        </List>
      </div>
      <Text margin="4rem 0 0" textAlign="center">
        Sketch, Figma & Illustrator
      </Text>
    </Slide>
    <Slide>
      <Heading f={2} margin="0 0 4rem 0">
        CSS Class Names Based Design System
      </Heading>
      <CodePane
        textSize="1.75rem"
        lang="css"
        source={`.Card {/* */}

.Card__Header {/* */}

.Card__Body {/* */}

.Card__Action--primary {/* */}

.Card__Action--secondary {/* */}
`}
      />
    </Slide>
    <Slide>
      <Heading f={2} margin="0 0 4rem 0">
        CSS Class Names Based Design System
      </Heading>
      <CodePane
        textSize="1.5rem"
        lang="html"
        source={`<div class="Card">
  <h2 class="Card__Header">Hello</h2>

  <div class="Card__Body">Lorem ipsum dolor sit amet</div>

  <div>
    <button class="Card__Action--primary">Yes</button>
    <button class="Card__Action--secondary">No</button>
  </div>
</div>`}
      />
    </Slide>
    <Slide>
      <Heading f={1}>
        <Emoji v="🚨🚨" /> Strong Opinions Ahead <Emoji v="🚨🚨" />
      </Heading>
    </Slide>
    <Slide>
      <Heading f={1}>
        CSS Is A Problematic API<br />For Design Systems
      </Heading>
    </Slide>
    <Slide margin={0.25}>
      <Text f={2} margin="0 0 2rem">
        <Emoji v="😕" /> "Why is this here?"
      </Text>
      <Text f={2}>
        <Emoji v="😰" /> "Will this change break something else?"
      </Text>
    </Slide>
    <Slide
      bgColor="secondary"
      bgImage={images.cssWorkflow}
      bgSize="fit"
      bgRepeat="no-repeat"
    >
      <Appear>
        <div>
          <Text
            f={2}
            bgColor="primary"
            padding="2rem 1.5rem"
            margin="0 0 2rem 0"
          >
            <Emoji v="🤷🏽‍" /> Have to write CSS to prototype new UI
          </Text>
        </div>
      </Appear>
      <Appear>
        <div>
          <Text f={2} bgColor="primary" padding="2rem 1.5rem">
            <Emoji v="🔁" /> Have to keep two abstractions in sync
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote
          textColor="secondary"
          textSize="3rem"
          margin="0 0 4rem 0"
          style={{
            lineHeight: 1.5,
            borderLeft: '8px solid #fff',
          }}
        >
          You have access to a more powerful styling construct than CSS class
          names.<br />You have components!
        </Quote>
        <Cite>
          <Link href="https://medium.learnreact.com/scale-fud-and-style-components-c0ce87ec9772">
            Michael Chan
          </Link>
        </Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Text>
        You are the design system author. Your users are other developers.
      </Text>
      <Text>
        Don't make your <i>users</i> write CSS. Let them compose components.
      </Text>
    </Slide>
    <Slide>
      <Heading f={1}>Component Based Design System</Heading>
      <Image src={images.figma} />
    </Slide>
    <Slide>
      <Heading f={1}>Component Based Design System</Heading>
      <List marker="+ ">
        <ListItem>
          <Link href="https://cloudflare.github.io/cf-ui/#cf-component-modal">
            Cloudflare cf-ui
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://react.lightningdesignsystem.com">
            Salesforce Lightning Design System
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/carbon-design-system/carbon-components-react">
            IBM Carbon
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pinterest.github.io/gestalt/#/">
            Pinterest Gestalt
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://polaris.shopify.com/components/get-started">
            Shopify Polaris
          </Link>
        </ListItem>
        <ListItem>
          <Link href="http://jxnblk.com/rebass/components">Rebass</Link>
        </ListItem>
        <ListItem>
          <Link href="https://material.io/components/web">
            Google Material for Web
          </Link>
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
