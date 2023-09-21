import Image from "next/image";
import MiainC from "./corasel/MiainC";
import HeroContext from "./hero/HeroContext";
import { FiUserCheck } from "react-icons/fi";
import Button from "./Button";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <div className="flex justify-center items-center p-6 rounded-lg font-bold text-2xl text-cyan-600">
      Hello {user?.name}!&nbsp;
      <FiUserCheck />
    </div>
  ) : null;

  return (
    <section className="flex flex-col gap-4 px-4">
      {greeting}

      <section className="pb-10 mb-[9rem]">
        <HeroContext />
      </section>
      <section className="mb-[5rem]">
        <MiainC />
      </section>
      <section>
        <Button />
      </section>
    </section>
  );
}
