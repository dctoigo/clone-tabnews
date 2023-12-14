function Home() {
  return (
    <>
      <div class="fade"></div>
      <section class="star-wars">
        <div class="crawl">
          <div class="title">
            <p>Episódio I</p>
            <h1>Um Novo Começo</h1>
          </div>

          <p>
            Anos após iniciar sua jornada, acumulando muitas frustrações, surge
            uma nova esperança para o aspirante a dev. Um mentor, capaz de
            elevar o ânimo, renovando a esperança de alcançar a glória.
          </p>
          <p>
            Durante o ano de 2023, ao navegar pelas terras já exploradas do
            YouTube, o aprendiz se depara com a chance de um Novo Começo como
            padawan do mestre Filipe Deschamps. Perseguido pela necessidade de
            aprender, ele se lança com coragem na nova Jornada.
          </p>
          <p>
            Aqui começa a história, em busca da senioridade na vida Dev...
            <a href="https://curso.dev">Curso.dev</a>...
          </p>
        </div>
      </section>
      <style>
      body {
              width: 100%;
              height: 100%;
              background: #000;
              overflow: hidden;
            }

            .fade {
              position: relative;
              width: 100%;
              min-height: 60vh;
              top: -25px;
              background-image: linear-gradient(0deg, transparent, black 75%);
              z-index: 1;
            }

            .star-wars {
              display: flex;
              justify-content: center;
              position: relative;
              height: 800px;
              color: #feda4a;
              font-family: "Pathway Gothic One", sans-serif;
              font-size: 500%;
              font-weight: 600;
              letter-spacing: 6px;
              line-height: 150%;
              perspective: 400px;
              text-align: justify;
            }

            .crawl {
              position: relative;
              top: 9999px;
              transform-origin: 50% 100%;
              animation: crawl 60s linear;
            }

            .crawl > .title {
              font-size: 90%;
              text-align: center;
            }

            .crawl > .title h1 {
              margin: 0 0 100px;
              text-transform: uppercase;
            }

            @keyframes crawl {
              0% {
                top: 0;
                transform: rotateX(20deg) translateZ(0);
              }
              100% {
                top: -6000px;
                transform: rotateX(25deg) translateZ(-2500px);
              }
            }

      </style>
    </>
  );
}

export default Home;
