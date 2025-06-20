import Image from "next/image";

export default function Home() {
  const images = [
    "/gallery/baby-daisy_in_crowncity001.png",
    "/gallery/baby-daisy_in_crowncity002.png",
    "/gallery/baby-daisy_in_crowncity003.png",
    "/gallery/baby-luigi_bowserscastle001.png",
    "/gallery/baby-luigi_rainbowroad001.png",
  ];

  return (
    <main>
      <h1>Oh bordel, je ne sais plus coder.</h1>
      <div className="gallery">
        {images.map((src, index) => (
          <div key={index}>
            <a href={src} target="_blank">
              {" "}
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={533}
                height={300}
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
