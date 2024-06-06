import Image from "next/image";
import React from "react";
import LinkOverLogo from "../linkOverLogo";

function ClientInfo() {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center mt-8 gap-8 lg:px-0 px-5 lg:w-[60%]">
      <Image
        src={"/images/about/LauraLeeClark.webp"}
        width="440"
        height={100}
        alt="contact"
      />
      <div className="flex flex-col justify-content-center text-justify [text-align-last:center] font-semibold tracking-[2px] leading-7 lg:mt-0 mt-5 text-[13px] text-lightText">
        <h1 className="header font-palatino text-[17px] lg:tracking-[5px] tracking-[3px]">
          LAURA LEE CLARK FALCONER
        </h1>
        <p className="semi-header pt-2 font-dipotic text-[18px] font-medium">
          principal designer
        </p>

        <div className="flex justify-center p-8 ">
          <Image width="80" height="10" src="/divider.png" alt="divder" />
        </div>
        <div>

        <p className="primary-text description [word-spacing:2px] pb-5">
          Interior Designer Laura Lee Clark Falconer understands that a truly
          successful design blends a collection of high-quality pieces from
          various periods and styles, while also using tasteful restraint. “I
          find that careful editing is essential to good design,” Falconer says.
          “I like to create unexpected combinations of finishes, fabrics, and
          custom-designed furnishings while integrating antique elements, all
          the while striving for a sophisticated look.”
        </p>
        <p className="primary-text description [word-spacing:2px] pb-5">
        By listening to each client’s needs and desires, she earns their trust in order to establish the foundation and principles for successful design. This designer’s staff is as dedicated as she is to the firm’s valued clientele and they maintain a high level of organization and consistent contact with suppliers.
        </p>
        <p className="primary-text description [word-spacing:2px] pb-5">
        A student of the Parsons School of Design in Italy, she offers her clients more than 30 years of experience in high-end residential design. She is also the recipient of several ASID Silver Style awards, ASID Legacy of Design awards, ASID Design Ovation awards, Luxe RED Awards, Paper City Design Awards, and she has been named “Best Designer” by her peers in D Home magazine since 2005. Her work has been published in “Inspirations from France and Italy,” “The French Room”, both by Betty Lou Phillips, Luxe Magazine and D Home Magazine. Falconer has also been proud to serve as a Dallas Kip’s Bay Showhouse Vice Co-Chair.
        </p>
        </div>
      </div>
    </div>
  );
}

export default ClientInfo;
