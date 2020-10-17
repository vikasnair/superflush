import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SUPERFLUSH</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main>
        <div className="breaker" />
        <div className="page">
          <header>
            <div className="logo">
              <img src="/img/logo.png" />
            </div>
            <div className="hero">
              <h1 className="title">
                <div className="redShadows">SUPER</div>
                <div className="blueShadows">FLUSH</div>
              </h1>

              <div className="separator">
                <div className="redShadows" />
                <div className="blueShadows" />
              </div>
            </div>
          </header>
          <div className="grid">
            <div className="card" id="cardHome">
              <div className="leftCompartment">
                <div className="cardSection">
                  <ul>
                    <li><a href="#"><span className="link">YOUTUBE</span></a></li>
                    <li><a href="#"><span className="link">SPOTIFY</span></a></li>
                    <li><a href="#"><span className="link">APPLE MUSIC</span></a></li>
                    <li><a href="#"><span className="link">SOUNDCLOUD</span></a></li>
                    <li><a href="#"><span className="link">INSTAGRAM</span></a></li>
                  </ul>
                </div>
                <div className="cardSection" id="redCard">
                  {/* <ul>
                    <li><a href="#"><span className="link">ARTWORK</span></a></li>
                    <li><a href="#"><span className="link">STORE</span></a></li>
                    <li><a href="#"><span className="link">BLOG</span></a></li>
                  </ul> */}
                </div>
              </div>
              <div className="rightCompartment">
                <div className="cardSection">
                  <ul>
                    <li><a href="#aboutPage"><span className="link">&#8595;</span> <span id="about">ABOUT</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <img src="/img/california.jpg" />
          </div>
        </div>
        <div className="breaker" />
        <div className="page" id="aboutPage">
          <nav>
            <div className="navLeft">
              <div className="logo">
                <img src="/img/logo.png" />
              </div>
              <div className="title">
                SUPERFLUSH
              </div>
            </div>
            <div className="navRight">
              <a href="#"><span className="link">ARTWORK</span></a>
              <a href="#"><span className="link">STORE</span></a>
              <a href="#"><span className="link">BLOG</span></a>
            </div>
          </nav>
          <main>
            <div className="grid">
              <img src="/img/keys.jpg" />
              <div className="card" id="cardAbout">
                <div className="compartment">
                  <div className="cardSection">
                    <p><b>SUPERFLUSH</b> is a ...</p>
                  </div>
                  <div className="cardSection">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean tristique dignissim varius.
                      In hac habitasse platea dictumst.
                      Etiam eget vestibulum lorem, in vehicula tortor.
                      Aenean posuere lectus mi, ac placerat sapien blandit quis.
                      Mauris efficitur elit mollis, convallis diam et, mollis ligula.
                      Pellentesque sit amet odio et sapien pretium lobortis quis nec neque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="breaker" />
        <footer></footer>
        <div className="breaker" />

        {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <style jsx>{`
        @font-face {
          font-family: "Acens";
          src: url("/fonts/Acens.ttf") format("truetype");
        }

        @font-face {
          font-family: "Space Mono";
          src: url("/fonts/Space_Mono/SpaceMono-Regular.ttf") format("truetype");
        }

        @font-face {
          font-family: "Space Mono";
          src: url("/fonts/Space_Mono/SpaceMono-Bold.ttf") format("truetype");
          font-weight: bold;
        }

        a, p, li, h1, h2, h3, h4, h5, h6 {
          font-family: "Space Mono";
        }

        .container {
          background: #fffdd0;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          background: white;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90%;
        }

        .page {
          height: 100vh;
        }

        .breaker {
          height: 5rem;
          width: 100vw;
          background: #fffdd0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover .link {
          text-decoration: underline;
        }

        #about {
          text-decoration: none;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        li {
          margin-bottom: 1rem;
        }

        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-top: 2rem;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5rem;
        }

        .navLeft {
          display: flex;
          align-items: center;
        }
        
        .navRight {
          display: flex;
          align-items: center;
        }

        .navRight > a {
          margin-left: 1rem;
        }

        .logo {
          align-self: flex-end;
        }

        .logo > img {
          width: 3rem;
          height: 3rem;
          vertical-align: middle;
        }

        .hero {
        }

        .title {
          font-family: Acens;
        }

        header .title {
          font-size: 7rem;
          text-align: center;
          margin-top: 1rem;
        }

        nav .title {
          font-size: 1.5rem;
          margin-left: 1rem;
        }

        .title > div {
          background: none;
          display: inline-block;
        }

        .redShadows {
          background-color: rgba(255, 64, 0, 0.75);
          color: rgba(255, 64, 0, 0.75);
          filter:
            drop-shadow(-5px -5px 0 rgba(255, 128, 0, 0.75))
            drop-shadow(-5px -5px 0 rgba(255, 255, 0, 0.75));
        }

        .blueShadows {
          background-color: rgba(0, 64, 255, 0.75);
          color: rgba(0, 64, 255, 0.75);
          filter:
            drop-shadow(-5px -5px 0 rgba(0, 128, 255, 0.75))
            drop-shadow(-5px -5px 0 rgba(0, 255, 255, 0.75));
          margin: 1rem 0rem 0rem 1rem;
          vertical-align: -1rem;
        }

        .separator {
          text-align: center;
        }

        .separator > div {
          width: 150%;
          height: 10px;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          flex-direction: row;
          margin-top: 3rem;
          justify-content: space-around;
          align-items: center;
          width: 100%;
        }
        
        .grid > div {
          margin: 2rem;
          opacity: 0.75;
        }

        .grid > img {
          height: 530px;
        }

        #cardHome {
          height: 530px;
          min-width: 400px;
        }

        #cardAbout {
          height: 530px;
          min-width: 600px;
        }

        .card {
          flex: 1;
          flex-grow: 1;
          display: flex;
          justify-content: space-between;
          background: white;
        }

        .card > div {
          overflow: hidden;
        }

        .cardSection {
          padding: 1rem 2rem 1rem 2rem;
        }

        .leftCompartment {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 2;
          color: white;
        }

        .leftCompartment > div {
          height: 100%;
        }
        
        .leftCompartment > .cardSection:nth-child(1) {
          background: rgba(0, 8, 255, 1);
          flex: 2;
        }
        
        .leftCompartment > .cardSection:nth-child(2) {
          background: rgba(0, 128, 255, 0.75);
          flex: 3;
          display: flex;
          align-items: flex-end;
        }
        
        .rightCompartment {
          display: flex;
          flex-direction: column;
          background: rgba(0, 255, 255, 0.75);
          justify-content: flex-end;
          align-items: flex-end;
          margin-left: -3rem;
          flex: 1;
          text-align: right;
        }
        
        .rightCompartment > .cardSection:nth-child(1) {
          opacity: .75;
        }
        
        .compartment {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 2;
        }

        .compartment > div {
          height: 100%;
        }

        .compartment > .cardSection:nth-child(1) {
          color: white;
          flex: 2;
          background: red;
          opacity: 0.75;
        }
        
        .compartment > .cardSection:nth-child(2) {
          color: black;
          flex: 3;
          background: yellow;
          margin-top: -3rem;
          opacity: 0.55;
          padding-top: 3rem;
        }

        footer {
          background: white;
          height: 25vh;
        }

        @media (max-width: 600px) {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
