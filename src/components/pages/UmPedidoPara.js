import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const padrinhos = {
  aline: { gender: "M", name: "Chequer", videoId: "q98ojha6Nsk" },
  ana: { gender: "F", name: "Ana", videoId: "IfVyIKpVaTg" },
  caio: { gender: "M", name: "Caio", videoId: "fQaoyrViqNI" },
  cau: { gender: "F", name: "Cau", videoId: "xtSOE4XupOE" },
  chequer: { gender: "M", name: "Chequer", videoId: "NDCQGeW1AUg" },
  guto: { gender: "M", name: "Guto", videoId: "BZjfxrje0BU" },
  jessica: { gender: "F", name: "Jessica", videoId: "75d_L0T_doA" },
  jonas: { gender: "M", name: "Jonas", videoId: "bXWBIEvPtfE" },
  julia: { gender: "F", name: "Julia", videoId: "Olsw103OZ4Y" },
  laiz: { gender: "F", name: "Laiz", videoId: "rA3tfADVSY8" },
  lara: { gender: "F", name: "Lara", videoId: "Tl7FoVg-Y_U" },
  leo: { gender: "M", name: "Leo", videoId: "rA3tfADVSY8" },
  marat: { gender: "M", name: "Marat", videoId: "8J3w-fnwY5o" },
  mari: { gender: "F", name: "Mari", videoId: "-oFIQGL4BbY" },
  michael: { gender: "M", name: "Michael", videoId: "WPuS3dCZRjo" },
  murilo: { gender: "M", name: "Murilo", videoId: "pj0t4ZN00Do" },
  rafa: { gender: "M", name: "Rafa", videoId: "xtSOE4XupOE" },
  raissa: { gender: "F", name: "Raíssa", videoId: "BZjfxrje0BU" },
  ricardo: { gender: "M", name: "Ricardo", videoId: "xhIMhHx9J-M" },
  rita: { gender: "F", name: "Rita", videoId: "pj0t4ZN00Do" },
  thiago: { gender: "M", name: "Thiago", videoId: "iIrIRH4430k" },
  adriana: { gender: "F", name: "Adriana", videoId: "iIrIRH4430k" }
};

const UmPedidoPara = ({ name }) => {
  const padrinho = padrinhos[name];
  const title = `Um pedido para ${padrinho.name} | Lunara & Hugo`;
  const description = `Querid${padrinho.gender === "M" ? "o" : "a"} ${
    padrinho.name
  }, a única coisa melhor do que ter você como amig${padrinho.gender === "M" ? "o" : "a"} é... ❤️`;
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
