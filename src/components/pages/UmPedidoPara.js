import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const padrinhos = {
  aline: { gender: "M", name: "Chequer", videoId: "wO9fflWkoRI" },
  ana: { gender: "M", name: "Ana", videoId: "wO9fflWkoRI" },
  caio: { gender: "M", name: "Caio", videoId: "wO9fflWkoRI" },
  cau: { gender: "M", name: "Cau", videoId: "wO9fflWkoRI" },
  chequer: { gender: "M", name: "Chequer", videoId: "wO9fflWkoRI" },
  jessica: { gender: "M", name: "Jessica", videoId: "wO9fflWkoRI" },
  jonas: { gender: "M", name: "Jonas", videoId: "wO9fflWkoRI" },
  julia: { gender: "M", name: "Julia", videoId: "wO9fflWkoRI" },
  laiz: { gender: "M", name: "Laiz", videoId: "wO9fflWkoRI" },
  lara: { gender: "M", name: "Lara", videoId: "wO9fflWkoRI" },
  leo: { gender: "M", name: "Leo", videoId: "wO9fflWkoRI" },
  marat: { gender: "M", name: "Marat", videoId: "wO9fflWkoRI" },
  mari: { gender: "M", name: "Mari", videoId: "wO9fflWkoRI" },
  michael: { gender: "M", name: "Michael", videoId: "wO9fflWkoRI" },
  murilo: { gender: "M", name: "Murilo", videoId: "wO9fflWkoRI" },
  rafa: { gender: "M", name: "Rafa", videoId: "wO9fflWkoRI" },
  raissa: { gender: "M", name: "Raíssa", videoId: "wO9fflWkoRI" },
  ricardo: { gender: "M", name: "Ricardo", videoId: "wO9fflWkoRI" },
  rita: { gender: "M", name: "Rita", videoId: "wO9fflWkoRI" }
};

const UmPedidoPara = ({ name }) => {
  const padrinho = padrinhos[name];
  const title = `Um pedido para ${padrinho.name} | Lunara & Hugo`;
  const description = `Querid${padrinho.gender === "M" ? "o" : "a"} ${
    padrinho.name
  }, A unica coisa melhor do que ter você como amig${padrinho.gender === "M" ? "o" : "a"} é... ❤️`;
  return (
    <MainContainer>
      <Helmet defaultTitle={title}>
        <meta name="author" content="Hugo Nogueira" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.luehugo.us/favicon.png" />
      </Helmet>
      <Envelope>
        <VideoContainer>
          <Video
            src={`https://www.youtube.com/embed/${padrinho.videoId}?controls=0&autoplay=1&loop=1&showinfo=0&rel=0&mute=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Envelope>
    </MainContainer>
  );
};

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Video = styled.iframe`
  width: 100vw;
  min-height: 100vh;
`;

const Envelope = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/img/envelope.png');
  background-position: calc(50% + 100px) 0;
  background-repeat: no-repeat;
  background-size: auto;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background-image: url('/img/background.jpeg');
  background-repeat: repeat;
  background-position: center;
`;

export default UmPedidoPara;
