
import React from "react";
import styles from  '@/styles/Home.module.scss';
import { Col} from 'react-bootstrap';
import Image from 'next/image';

interface Props{
  scrollRef: any
}
const About:React.FC<Props> = (props: any) => {
  const {scrollRef} = props;
  return (
  <div className={styles.aboutMainDiv} ref={scrollRef}>
    <div className={styles.aboutSubDiv}>
      <Col className={styles.cardDiv}>
        <Image src='/images/rakesh.jpg' alt='rakesh' width="230" height="250"/>
        <h1 className={styles.nameHeading}>Rakesh Chintada</h1>
      </Col>
      <Col>
        <p>Software Engineer, KC Overseas Education Pvt Ltd.</p>
        <p className={styles.about}>About me :</p>
        <p className={styles.aboutContent}>
          I am a Full-Stack-Developer with expertise in
          the ReactJS, NodeJS, NextJs, HTML5, CSS and JavaScript to build web pages.
        </p>
      </Col>
    </div>
    </div>
  );
};

export default About;