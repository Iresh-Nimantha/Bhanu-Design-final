import React from "react";
import aaa from "../assets/reactions/a.jpg";
import bbb from "../assets/reactions/b.jpg";
import ccc from "../assets/reactions/c.jpg";
import ddd from "../assets/reactions/d.jpg";
import eee from "../assets/reactions/e.jpg";
import fff from "../assets/reactions/f.jpg";

export function CustomerReacts() {
  return (
    <div>
      <div className="text-center text-6xl md:text-7xl py-4  ">
        <h1 className="font-bold">Custommer Reactions</h1>
      </div>
      <div className="grid grid-cols-2 right-0 gap-4 md:grid-cols-4 mx-14 mt-20">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={aaa}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={bbb}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={ccc}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={ddd}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={eee}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={fff}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={aaa}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={bbb}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={ccc}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={ddd}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="  h-auto max-w-full rounded-lg  object-center"
              src={eee}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="  h-auto max-w-full rounded-lg  object-center"
              src={eee}
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
