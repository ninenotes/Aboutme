import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData } from "@/data";

export function Home() {
  // State สำหรับควบคุมข้อความ
  const [message, setMessage] = useState("");

  // ฟังก์ชันสลับแสดง/ซ่อนข้อความ
  const toggleMessage = () => {
    setMessage((prev) => (prev ? "" : "คนเป็น DEV ชีวิต ไม่ได้ง่าย ต้องวุ่นวาย เขียนโค้ด แก้ Error บางครั้งเก็บไปฝัน จะละเมอ นั่งเบลอๆ ขอบตาดำ เพราะทำงาน"));
  };

  return (
    <>
      {/* Section Hero */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Welcome to My Portfolio
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                ยินดีต้อนรับสู่พอร์ตโฟลิโอของฉัน! ที่นี่คุณจะได้รู้จักฉันมากขึ้น และพบกับโครงการที่สร้างขึ้นเพื่อประสบการณ์ที่ยอดเยี่ยม
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Section Features */}
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, { className: "w-5 h-5 text-white" })}
                description={description}
              />
            ))}
          </div>

          {/* Section About Me */}
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                ผลลัพธ์ที่คุณต้องการคือผลงานของผม
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                ถ้าคุณต้องการเว็บไซต์ หรือสนใจแอปพลิเคชัน ติดต่อผมได้เลย แค่บอกขอบเขตงานและแนวทางที่ต้องการ เราก็เริ่มงานกันได้ทันที!
              </Typography>

              {/* ปุ่ม Read More + ข้อความ Hello, World! */}
              <Button variant="filled" onClick={toggleMessage}>
                {message ? "Hide" : "Read More"}
              </Button>
              {message && <p className="mt-4 text-lg font-bold text-blue-500">{message}</p>}
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-54">
                  <img alt="Card Image" src="/img/Me1.jpg" className="h-full w-full" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
                    รับทำโมบายล์แอปพลิเคชัน
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    ให้เราช่วยสร้างเว็บไซต์ หรือโมบายล์แอปพลิเคชันที่คุณต้องการ
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section My Work */}
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="My Work" heading="Work that has already been done" />
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <Button key={name} color={color} variant="text">
                        {/* <i className={`fa-brands text-xl fa-${name}`} /> */}
                      </Button>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
