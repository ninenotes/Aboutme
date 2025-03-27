import { useState } from 'react';
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { MapPinIcon, BriefcaseIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/9note.png"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Thepnimit Maksawad
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">ninenotc@gmail.com</Typography>
                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Button className="bg-gray-900 w-fit lg:ml-auto">Connect</Button>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      1
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Friends
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      1
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Photos
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                     1
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Comments
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Bangkok
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Freelance programmer
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  King Mongkut's University of Technology North Bangkok
                </Typography>
              </div>
            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                 สวัสดีครับ ผม ชื่อ โน๊ตเป็นฟรีแลนซ์ที่รับออกแบบและพัฒนาเว็บไซต์ ต้องการของผู้ใช้มากที่สุด เว็บไซต์ที่ผมทำ ไม่เพียงแค่เน้นการใช้งานที่ง่าย ดูแลไม่ยาก แต่ต้องตอบโจทย์ความต้องการของผู้ใช้จริงๆ เพื่อสร้างโอกาสทำกำไรให้กับธุรกิจ เว็บไซต์ไม่ใช่แค่หน้าเว็บ คือแต่หนึ่งในเครื่องมือที่จะช่วยเพิ่มโอกาสในการขยายธุรกิจของคุณให้เติบโตมากขึ้น เว็บไซตที่ดีไม่ใช่แค่เว็บที่สวย 
                 แต่ต้องเป็นเว็บเข้าใจจริงๆว่าผู้ใช้จริงๆแล้วต้องการอะไรจากเว็บไซต์ของเรา
                </Typography>
                {showMore && (
                  <Typography className="mb-6 font-normal text-blue-gray-500">
                    This additional content is displayed when you click the "Show more" button. 
                    <iframe src="/img/resume.pdf" width="100%" height="600px"></iframe>
                  </Typography>
                )}
                <Button variant="text" onClick={handleShowMore}>
                  {showMore ? 'Show less' : 'Show more'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
