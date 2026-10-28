const logo = "/images/portfolio.png";


const HeroImage = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        loading="eager"
        height={1000}
        width={1000}
      />
    </>
  );
};

export { HeroImage };
