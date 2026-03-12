function Hero() {
  return (
    <section
    
  className="hero-section d-flex align-items-center text-white"
>
  <div className="container">
    <div className="row align-items-center gy-5">

      {/* Left Side */}
      <div className="col-lg-6 text-center text-lg-start">
        <h1 className="display-3 fw-bold hero-title">
          Hi, I'm Pratham 👋
        </h1>

        <p className="lead mt-4 hero-subtitle">
          A Passionate Frontend Developer building modern and responsive web applications.
        </p>

        <a
          href="#projects"
          className="btn btn-primary btn-lg mt-4 px-4 hero-btn"
        >
          View My Work
        </a>
      </div>

      {/* Right Side */}
      <div className="col-lg-6 text-center">
        <img
          src="/profile.jpg"
          alt="Pratham"
          className="hero-image img-fluid"
        />
      </div>

    </div>
  </div>
</section>

  )
}

export default Hero
