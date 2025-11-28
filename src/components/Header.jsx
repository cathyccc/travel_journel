import GlobeIcon from '../assets/globe.svg';

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="globe" src={GlobeIcon} alt="globe"/>
        <span>my travel journal.</span>
      </nav>
    </header>
  )
}