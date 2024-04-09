import React from "react";
import { Button, FileUpload, Text, Img, Heading } from "./..";

export default function Parent({
  chid1,
  child2 = "ai",
  link = "Talent Finder",
  link2 = "For Recruiters",
  link3 = "For Employers",
  child3 = "images/img_vector_451.png",
  link4 = "About Us",
  link5 = "Company",
  ...props
}) {
  return (
    <header {...props}>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[65%] items-center justify-between gap-5 md:w-full md:flex-col">
          <div className="flex items-center gap-1 rounded-tr-[5px] bg-deep_purple-600 pr-1.5">
            <Button className="h-[40px] min-w-[117px] rounded-[5px] border border-solid border-deep_purple-600 pl-[7px] font-outfit text-[35.5px] font-semibold tracking-[-0.71px] text-white-A700_01">
              {chid1}
            </Button>
            <Text size="xs" as="p" className="mb-1 self-end !font-gilroyregular !text-[11.43px] !text-white-A700_01">
              {child2}
            </Text>
          </div>
          <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch sm:flex-col">
            <Text as="p" className="self-start text-center !text-blue_gray-400">
              {link}
            </Text>
            <a href="#" className="self-start">
              <Text as="p" className="text-center !text-blue_gray-400">
                {link2}
              </Text>
            </a>
            <div className="flex flex-col items-center">
              <Heading size="xs" as="h6" className="text-center">
                {link3}
              </Heading>
              <Img src={child3} alt="vector451_one" className="h-px object-cover" />
            </div>
            <Text as="p" className="self-start text-center !text-blue_gray-400">
              {link4}
            </Text>
            <a href="Company" target="_blank" rel="noreferrer">
              <Text as="p" className="text-center !text-blue_gray-400">
                {link5}
              </Text>
            </a>
          </div>
        </div>
        <div className="flex gap-[17px]">
          <FileUpload
            allowMultiple
            preview
            name="login"
            Thumbnail={FileUpload.PreviewItem}
            onUpload={(files) => console.log({ files })}
            placeholder={() => <></>}
            className="flex h-[44px] items-center justify-center rounded-[10px] border-2 border-solid border-deep_purple-600 px-[35px] text-lg font-medium text-deep_purple-600 sm:px-5"
          />
          <Button size="sm" shape="round" className="min-w-[152px] font-medium !text-white-A700_01 sm:px-5">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
