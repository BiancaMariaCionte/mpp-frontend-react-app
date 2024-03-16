import "./Footer.css";

export function Footer() {
  return (
    <div className='footer' data-testid='footer-test-id'>
      <span className='star'>&#9733;</span>
      <div className='inner-text'
        data-testid='footer-inner'>
        ChoreoVerse
      </div>
    </div>
  );
}


