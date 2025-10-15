import dynamic from "next/dynamic";
const Hero = dynamic(() => import('../components/index/Hero'));

export default function Home() {
  return (
    <main className="antialiased">
      <div className="">

        <Hero/>
    
      </div>
    </main>
  );
}