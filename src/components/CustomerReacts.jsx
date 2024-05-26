import aaa from "../assets/servicesImges/b.jpg";
import bbb from "../assets/servicesImges/c.jpg";
import ccc from "../assets/servicesImges/d.jpg";
import ddd from "../assets/servicesImges/e.jpg";
import eee from "../assets/servicesImges/f.jpg";
import fff from "../assets/servicesImges/a.jpg";

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
