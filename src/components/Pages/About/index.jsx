import './index.css';

const About = () => {
 return (
  <section id="about">
   <div className="wrapper">
    <article>
     <div className="title">
      <h3>About me</h3>
      <p className="separator" />
     </div>
     <div className="desc full">
      <h4 className="subtitle">My name is Juan.</h4>
      <p>
       I am a <strong className="color">React Developer</strong> and Multimedia Designer based in the <strong className="color">beautiful east coast</strong> of Argentina
       in Buenos Aires called <strong className="color">Mar del Plata</strong>.
      </p>
      <p>
       I really enjoy solving problems as well as making things pretty and easy to use. I
       can't stop learning new things; the more, the better. I also love photography, a hobby
       I'm taking along since I saw beautiful places. Oh, and Basketball {'<3'} ; I love to do thing by myself.
      </p>
     </div>
     <div className="title">
      <h3>I don't know what to write here... :?</h3>
      <p className="separator" />
     </div>
     <div className="desc">
      <h4 className="subtitle">I'm a programmer.</h4>
      <p>
       For the front-end I usually work with <strong className="color">React JS</strong> (love it) with Redux (if not necessary Context).
       Also unit testing with Jest or the same library that React provides you.
      </p>
      <p>For the backend I used Node JS and Express JS (REST Api). Also I'm interested and curious about GoLang. </p>
     </div>
     <div className="desc">
      <h4 className="subtitle">Also a multimedia designer.</h4>
      <p>
       I feel comfortable working with many Adobe products. Photoshop, Illustrator,
       Lightroom or Xd are some kind of industry standards and I feel comfortable working with them. Also I love <strong className="color">Adobe After Effects</strong>.
       I usually create audiovisual compositions as a hobby or when I want to get more motivation for my day.
      </p>
     </div>
    </article>
   </div>
  </section>
 );
};

export default About;