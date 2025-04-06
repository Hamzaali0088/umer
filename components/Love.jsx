import React, { useEffect, useState } from "react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import Image from "next/image";
export default function Love() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("backgroundMusic");
    if (audio) {
      const playAudio = () => {
        audio.play();
        setIsPlaying(true);
        document.removeEventListener("click", playAudio);
      };

      document.addEventListener("click", playAudio);

      return () => {
        document.removeEventListener("click", playAudio);
        audio.pause();
      };
    }
  }, []);

  const data = [
    {
      id: 1,
      text: "Do you love me? 🤗",
      text2: "Chiku is all yours",
      img: "/images/1.gif",
    },
    {
      id: 2,
      text: "Please think again 🙄",
      text2: "atni jaldi mat bolo 😢  ",
      img: "/images/2.gif",
    },
    {
      id: 3,
      text: "Ak or bar soch lo 😣",
      text2: "asa mat karo man bi jao 😣",
      img: "/images/4.gif",
    },
    {
      id: 5,
      text: "Baby man jao na or katni zid karni hai! 😭",
      text2: "Bokhet galat bat hai yar 😭",
      img: "/images/3.gif",
    },
    {
      id: 6,
      text: "Baby man jao na or katni zid karni hai! 😭",
      text2: "Bokhet galat bat hai yar 😭",
      img: "/images/5.gif",
    },
    {
      id: 7,
      text: "Baby man jao na or katni zid karni hai! 😭",
      text2: "Bokhet galat bat hai yar 😭",
      img: "/images/6.gif",
    },
    {
      id: 8,
      text: "Baby man jao na or katni zid karni hai! 😭",
      text2: "Bokhet galat bat hai yar 😭",
      img: "/images/7.gif",
    },
    {
      id: 9,
      text: "Baby man jao na or katni zid karni hai! 😭",
      text2: "Bokhet galat bat hai yar 😭",
      img: "/images/8.gif",
    },
    {
      id: 10,
      text: "Baby man jao na or katni zid karni hai! 😭",
      text2: "Bokhet galat bat hai yar 😭",
      img: "/images/7.gif",
    },
  ];

  const [whichyes, setwhichyes] = useState(true);
  const handlewhichyes = () => {
    setwhichyes(!whichyes);
  };

  const yes = [
    {
      id: 1,
      text: "I khow it! You love me a lot",
      text2: "I love you too",
      img: "/images/yes.gif",
    },
  ];

  const [visiablecount, setvisiablecount] = useState(1);
  useEffect(() => {
    if (count >= 8) {
      setvisiablecount(1);
    }
  }, [count]);
  const handleadd = () => {
    if (visiablecount === 4) {
      setvisiablecount(1);
    } else {
      setvisiablecount(visiablecount + 1);
    }
  };
  const [bg, setbg] = useState(false);

const handlebg = () => {
  setbg(true);
}

  console.log("count is ", count);
  console.log("visiablecount is ", visiablecount);
  return (
    <FullContainer className="bg-[#DD969B] flex items-center justify-center">
      <div onClick={handlebg} className={`${bg ? "hidden" : "opacity-100"}  border-2 border-white absolute top-0 left-0 w-screen h-screen z-30`}>
        <Image
          src="/images/background.png"
          height={2000}
          width={2000}
          alt="Love animation"
          className="w-screen h-screen z-30 absolute top-0 left-0"
        />
        <h1 className="text-white absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold z-40 text-center">
          Click anywhere to start
        </h1>
      </div>
      <audio id="backgroundMusic" loop>
        <source src="/music/love.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Container>
        {whichyes ? (
          <div className="flex relative flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={data[count].img}
                height={100}
                width={100}
                alt="Love animation"
                className="w-full max-w-[150px] mx-auto"
              />
              <h1 className="text-black text-3xl font-bold text-center">
                {data[count].text}
              </h1>
              <h3 className="text-black text-sm text-center ">
                {data[count].text2}
              </h3>
            </div>
            <div className="flex flex-row gap-4">
              <Button2 Text="Yes" onClick={handlewhichyes} />
              <Button1
                Text="No"
                onClick={() => setCount(count === 3 ? 0 : count + 1)}
                className={`${
                  count >= 3 ? "opacity-0 pointer-events-none" : ""
                }`}
              />
            </div>
            <Button3
              Text="no"
              onClick={() => {
                handleadd();
                setCount(5);
              }}
              className={`${
                visiablecount === 1 ? "" : " opacity-0 pointer-events-none"
              } absolute top-0 left-0 ${
                count >= 3 ? " " : "opacity-0 pointer-events-none"
              }`}
            />
            <Button3
              Text="no"
              onClick={() => {
                handleadd();
                setCount(6);
              }}
              className={`${
                visiablecount === 2 ? "" : " opacity-0 pointer-events-none"
              } absolute bottom-0 right-0 ${
                count >= 3 ? " " : "opacity-0 pointer-events-none"
              }`}
            />
            <Button3
              Text="no"
              onClick={() => {
                handleadd();
                setCount(7);
              }}
              className={`${
                visiablecount === 3 ? "" : " opacity-0 pointer-events-none"
              } absolute top-0 right-0 ${
                count >= 3 ? " " : "opacity-0 pointer-events-none"
              }`}
            />
            <Button3
              Text="no"
              onClick={() => {
                handleadd();
                setCount(8);
              }}
              className={`${
                visiablecount === 4 ? "" : " opacity-0 pointer-events-none"
              } absolute bottom-[-100px] left-0 ${
                count >= 3 ? " " : "opacity-0 pointer-events-none"
              }`}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              height={100}
              width={100}
              src={yes[0].img}
              alt="Love animation"
              className="w-full max-w-[150px] mx-auto"
            />
            <h1 className="text-black text-3xl font-bold text-center">
              {yes[0].text}
            </h1>
            <h3 className="text-black text-sm text-center">{yes[0].text2}</h3>
          </div>
        )}
      </Container>
      <button
        onClick={() => {
          const audio = document.getElementById("backgroundMusic");
          if (isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
          setIsPlaying(!isPlaying);
        }}
        className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-lg"
      >
        {isPlaying ? "🔇 Mute" : "🔊 Play"}
      </button>
    </FullContainer>
  );
}

const Button1 = ({ Text, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white text-black px-4 py-2 rounded-full w-[100px] text-center shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer ${className}`}
    >
      {Text}
    </div>
  );
};
const Button2 = ({ Text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white text-black px-4 py-2 rounded-full w-[100px] text-center shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      {Text}
    </div>
  );
};

const Button3 = ({ Text, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white text-black px-4 py-2 rounded-full w-[100px] text-center shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer ${className}`}
    >
      {Text}
    </div>
  );
};
