import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="text-4xl font-bold py-4 px-4">GAJ 2024</div>
      <div className="">
        <div className="pt-3 px-3 text-xl text-red-600">
          <strong>2024 BATCH READ CAREFULLY:</strong>
        </div>
        <div className="px-4">
          <p className="">
            This is the batch which is going to go through the most struggle to
            find a job.
          </p>
          <p className="pb-5">
            Companies are not coming for placement, mass recruitment doesn’t
            even seem like an option.
          </p>
          <p className="text-xl">
            <strong className="text-green-600">THE SOLUTION:</strong>
          </p>
          <p>
            I’m creating a group where we students will come together, build
            projects, share insights and help each other find a Job.
          </p>
          <p className="pb-5">
            {" "}
            My goal is to help everyone in the group and help myself get a job
            in the year 2024.{" "}
          </p>{" "}
          <div>
            {" "}
            <p className="text-lg font-sans">
              What we will do in the group:
            </p>{" "}
            <ul className="list-disc pl-7">
              {" "}
              <li>
                {" "}
                Each week projects will be assigned to group member. Deadline to
                complete those projects will be the end of the week i.e.
                Saturday{" "}
              </li>{" "}
              <li>
                {" "}
                Share resources - tutorials, blogs, job boards, tweets etc. etc.
              </li>
              <li>
                Become each other’s accountability partners - (idea still in
                progress, will confirm on discussion)
              </li>
              <li>
                Every Sunday there’ll be a debugging session, where projects of
                the last week will be discussed, issues will be resolved and
                projects for the next week will be assigned.
              </li>
            </ul>
          </div>
          <p className="py-5 font-bold text-zinc-400">
            LET’S GET A FUCKING JOB BY FEBRUARY 2024
          </p>
          <div className="mt-5 text-violet-700 text-xl">
            <Link href="https://discord.gg/s4Wwtat928" className="flex">
              <FaDiscord size={25} /> <p>&nbsp;Click here to join Discord</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
