import { BsGithub, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
export default function Footer() {
  return (
    <section className="footer pt-8 pb-8 border-t-2 w-full flex justify-center">
      <ul className="icons flex flex-row text-3xl w-40 justify-between">
        <li>
          <BsGithub />
        </li>
        <li>
          <BsTwitter />
        </li>
        <li>
          <MdMail />
        </li>
      </ul>
    </section>
  );
}
