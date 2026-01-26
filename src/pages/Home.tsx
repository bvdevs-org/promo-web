import { GridCell } from "../components/GridCell";

import lightning from "../assets/lightning.svg";
import shield from "../assets/shield.svg";
import cloud from "../assets/cloud.svg";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import users from "../assets/users.svg";
import progress from "../assets/progress.svg";
import infinity from "../assets/infinity.svg";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 py-40 px-50 lg:px-80">
        <div>
          <h1 className="font-medium text-6xl">End-to-End Development.</h1>
          <h1 className="font-medium text-6xl"> Zero Compromises.</h1>
        </div>
        <p className="text-gray-700">
          Got a game-changing idea? We handle the rest. From the first sketch to
          the final launch, we build precise, scalable web applications tailored
          to your vision.
        </p>
        <p className="text-gray-700">
          At BVDevs, we believe that great ideas deserve flawless execution. We
          aren’t just coders; we are your full-cycle partners. We guide you
          through every step—consultation, design, development, and long-term
          support. Our obsession? Precision. Whether you’re launching an MVP or
          digitalizing a complex process, we ensure every line of code serves a
          purpose.
        </p>
      </div>
      <div className="flex flex-col gap-24 items-center place-content-center bg-black text-white px-40 py-20">
        <h3 className="font-medium text-2xl">Powerful Tech. Human Approach.</h3>
        <div className="grid grid-cols-4 gap-12">
          <GridCell
            icon={<img src={lightning} alt="lightning" />}
            name="Lightning-Fast Interface"
            text="Your users expect speed. We deliver smooth, interactive, and responsive web experiences using top-tier modern frameworks like React and Next.js."
          ></GridCell>
          <GridCell
            icon={<img src={shield} alt="shield" />}
            name="Unbeatable Performance"
            text="Heavy traffic? No problem. We build robust backends powered by Golang to ensure your application remains stable and incredibly fast, no matter how many users join."
          ></GridCell>
          <GridCell
            icon={<img src={cloud} alt="cloud" />}
            name="Scalable Infrastructure"
            text="Start small, grow big. We deploy on Google Cloud using Docker, creating a secure environment that scales automatically as your business expands."
          ></GridCell>
          <GridCell
            icon={<img src={phone} alt="phone" />}
            name="Native Mobile Experience"
            text="Reach your customers anywhere. Whether it’s iOS or Android, we build stunning mobile apps using React Native, Swift, and Kotlin for a flawless feel on every device."
          ></GridCell>
          <GridCell
            icon={<img src={message} alt="message" />}
            name="Always Within Reach"
            text="No disappearing acts. We pride ourselves on being available when you need us. Whether you have a quick question or a new idea, we are just a message away."
          ></GridCell>
          <GridCell
            icon={<img src={users} alt="users" />}
            name="Regular Check-ins"
            text="We keep the vision aligned. Through scheduled video calls, we discuss progress, gather your feedback, and plan the next steps together. You are part of the team."
          ></GridCell>
          <GridCell
            icon={<img src={progress} alt="progress" />}
            name="Crystal Clear Progress"
            text="Watch your idea come to life. We share regular updates and demos, giving you full transparency into what we are building and how your budget is being used."
          ></GridCell>
          <GridCell
            icon={<img src={infinity} alt="infinity" />}
            name="Full-Cycle Partnership"
            text="We are more than just coders. We guide you through the entire journey—from refining your initial concept to the final launch and beyond. We care about your success."
          ></GridCell>
        </div>
      </div>
    </div>
  );
};
