import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <Image
        src="/t3.jpg"
        alt="t3"
        width={225}
        height={224}
        priority
      />
    </div>
  );
}
