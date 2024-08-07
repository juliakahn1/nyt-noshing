import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer-topper"></div>
      <footer className="footer-wrapper">
        <div className="footer-inner-wrapper">
          <div className="footer-disclaimer">
            <h3 className="footer-header">Nosh <span className="thinner-text">/näSH/</span></h3>
            <p className="footer-body">
              A snack, or the act of eating food enthusiastically, slyly, or greedily.
              Synonyms include: munch, bite. Something you eat or do when you just want <span className="emphasis">something</span>.
            </p>
          </div>
          <div className="footer-info">
            <div className="footer-info-left-column">
              <div className="footer-link-grouping">
                <h3 className="footer-header">Learn More</h3>
                <a className="footer-body footer-link" href="https://www.juliakahn.me/" target="_blank" rel="noreferrer">
                  Portfolio
                </a>
                <a className="footer-body footer-link" href="https://www.linkedin.com/in/juliakahn1/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="footer-body footer-link" href="https://github.com/juliakahn1" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
            <div className="footer-info-right-column">
              <div className="footer-link-grouping">
                <h3 className="footer-header">Other Projects</h3>
                <a className="footer-body footer-link" href="https://github.com/juliakahn1/javascriptspanish" target="_blank" rel="noreferrer">
                  JavaScriptSpanish
                </a>
                <a className="footer-body footer-link" href="https://github.com/juliakahn1/amateur-hour" target="_blank" rel="noreferrer">
                  Amateur Hour
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
