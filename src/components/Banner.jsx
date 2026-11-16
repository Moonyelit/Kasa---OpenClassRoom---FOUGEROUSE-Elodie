import './Banner.scss'

function Banner({ image, title }) {
  // Le voile est plus sombre quand il y a un texte, pour qu'il reste lisible
  const bannerClass = title ? 'banner banner--with-title' : 'banner'

  return (
    <section className={bannerClass}>
      <img className="banner__image" src={image} alt="" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner
