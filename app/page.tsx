import ParticleAnimation from "@/app/_components/particle-animation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className=" w-full h-full max-w-2xl  gap-4 px-5 lg:px-10">
        <ParticleAnimation  />
      </main>
    </div>
  );
}
