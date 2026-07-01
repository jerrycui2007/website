import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-black">
      <Image
        src="/t3.jpg"
        alt="t3"
        width={225}
        height={224}
        priority
      />
      <Image
        src="/maid.png"
        alt="maid"
        width={896}
        height={1195}
      />
    </div>
  );
}
