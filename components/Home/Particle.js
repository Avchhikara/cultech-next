import Particles from "react-particles-js";

const ParticleAnime = props => {
  return (
    <div className="particle-js-homepage">
      <Particles
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            },
            color: {
              value: "#000000"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </div>
  );
};

export default ParticleAnime;
