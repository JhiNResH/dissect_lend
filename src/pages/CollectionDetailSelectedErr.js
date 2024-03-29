import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, AutoComplete, Input } from "antd";
import { ProgressBar } from "react-bootstrap";

const CollectionDetailSelectedErr = () => {
  return (
    <div className="w-full relative bg-gray1-200 h-[1283px] overflow-hidden">
      <img
        className="absolute top-[0px] left-[0px] w-[1728px] h-[1151.1px]"
        alt=""
        src="/vector.svg"
      />
      <section className="absolute top-[0px] left-[0px] bg-gray1-300 [backdrop-filter:blur(24px)] w-[1728px] h-[1283px]" />
      <main className="absolute top-[64px] left-[calc(50%_-_786px)] rounded-lg bg-main-dark [backdrop-filter:blur(24px)] flex flex-row items-start justify-start p-5 gap-[16px] text-left text-5xl text-light-grey font-h1-title-42 border-[1px] border-solid border-pale-purple">
        <section className="flex flex-col items-start justify-start gap-[8px] text-left text-5xl text-light-grey font-h1-title-42">
          <div className="self-stretch rounded bg-row flex flex-col items-start justify-start py-4 px-5 gap-[32px]">
            <div className="flex flex-row items-center justify-start">
              <h3 className="m-0 w-[1035px] relative text-inherit font-normal font-inherit inline-block shrink-0">
                Select a pool to start borrowing
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base font-medium">
              <div className="self-stretch relative font-medium">
                Pool availability
              </div>
              <nav className="m-0 w-[507px] flex flex-row items-start justify-start gap-[24px] text-left text-sm text-mid-grey font-gotham-book">
                <div className="flex flex-row items-end justify-start">
                  <div className="w-[120px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="w-9 rounded-xl bg-pale-purple h-5 overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                      <div className="w-4 relative rounded-[50%] bg-main-dark shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] h-4" />
                    </div>
                    <div className="relative"> 1% - 33%</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="w-[120px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="w-9 rounded-xl bg-accent-color h-5 overflow-hidden shrink-0 flex flex-row items-center justify-end p-0.5 box-border">
                      <div className="w-4 relative rounded-[50%] bg-main-dark shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] h-4" />
                    </div>
                    <div className="relative">34 - 66%</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="w-[120px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="w-9 rounded-xl bg-accent-color h-5 overflow-hidden shrink-0 flex flex-row items-center justify-end p-0.5 box-border">
                      <div className="w-4 relative rounded-[50%] bg-main-dark shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] h-4" />
                    </div>
                    <div className="relative">67 - 99%</div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-center text-base text-white font-gotham-book">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch bg-row h-[60px] flex flex-row items-center justify-start text-left text-light-grey">
                <div className="w-[165px] flex flex-row items-center justify-between py-0 pr-0 pl-4 box-border">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/icons-24px@2x.png"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">Pool ID</div>
                      <img
                        className="w-4 relative h-4 object-cover"
                        alt=""
                        src="/icons-16px@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/icons-24px@2x.png"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">Remaining Fraction</div>
                      <img
                        className="w-4 relative h-4 object-cover"
                        alt=""
                        src="/icons-16px@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/icons-24px@2x.png"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">Fraction Price</div>
                      <img
                        className="w-4 relative h-4 object-cover"
                        alt=""
                        src="/icons-16px@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/icons-24px@2x.png"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">APY</div>
                      <img
                        className="w-4 relative h-4 object-cover"
                        alt=""
                        src="/icons-16px@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35@2x.png"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/icons-24px@2x.png"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">Duration</div>
                      <img
                        className="w-4 relative h-4 object-cover"
                        alt=""
                        src="/icons-16px@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6"
                      alt=""
                      src="/property-1arrow-drop-down-selectedon.svg"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">Completion</div>
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/icons-16px.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain hidden"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">66</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/help.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">2%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">7 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">44%</div>
                    </div>
                    <div className="w-[101px] relative h-1.5">
                      <div className="absolute top-[0px] left-[0px] rounded-lg bg-main-dark w-[101px] h-1.5" />
                      <div className="absolute top-[0px] left-[0px] rounded-lg bg-pale-purple w-[46px] h-1.5" />
                    </div>
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">34</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6 object-cover"
                        alt=""
                        src="/help@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">3%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">14 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">17%</div>
                    </div>
                    <ProgressBar className="w-[101px] relative" />
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">99</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6 object-cover"
                        alt=""
                        src="/help@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">0.4%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">7 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">27%</div>
                    </div>
                    <ProgressBar className="w-[101px] relative" />
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">2</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6 object-cover"
                        alt=""
                        src="/help@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">2%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">7 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">99%</div>
                    </div>
                    <ProgressBar className="w-[101px] relative" />
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">25</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/help.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">11%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">7 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">24%</div>
                    </div>
                    <ProgressBar className="w-[101px] relative" />
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">88</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6 object-cover"
                        alt=""
                        src="/help@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">2%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">7 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">17%</div>
                    </div>
                    <ProgressBar className="w-[101px] relative" />
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="w-[60px] relative h-[60px] object-cover"
                        alt=""
                        src="/rectangle-59@2x.png"
                      />
                    </div>
                    <b className="relative">DeGods</b>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[180px] flex flex-row items-center justify-between p-4 box-border font-medium">
                  <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative">#rqpttD</div>
                    <img
                      className="w-6 relative h-6 hidden"
                      alt=""
                      src="/help.svg"
                    />
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[236px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-end">
                    <div className="relative">12</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[190px] flex flex-row items-center justify-end p-4 box-border gap-[16px]">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">3.2</div>
                      <img
                        className="w-6 relative h-6 object-cover"
                        alt=""
                        src="/help@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[100px] flex flex-row items-center justify-end py-4 pr-0 pl-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">2%</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="w-[164px] flex flex-row items-center justify-end p-4 box-border gap-[16px] text-light-grey">
                  <div className="h-6 flex flex-row items-center justify-start">
                    <div className="relative">7 days</div>
                  </div>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-4 text-light-grey">
                  <div className="w-[163px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="h-6 flex flex-row items-center justify-start">
                      <div className="relative">17%</div>
                    </div>
                    <div className="w-[101px] relative h-1.5">
                      <div className="absolute top-[0px] left-[0px] rounded-lg bg-main-dark w-[101px] h-1.5" />
                      <ProgressBar className="w-[46px] absolute top-[0px] left-[0px]" />
                    </div>
                  </div>
                </div>
                <div className="w-80 hidden flex-row items-center justify-start py-2.5 px-4 box-border text-xs text-lightskyblue">
                  <div className="h-[70px] flex flex-row items-end justify-start">
                    <div className="w-[242px] relative h-[41px]">
                      <div className="absolute top-[23.5px] left-[241.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[180.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[120.5px] bg-darkslategray-300 box-border w-[62px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <div className="absolute top-[23.5px] left-[59.5px] bg-darkslategray-300 box-border w-[61px] h-[25px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.2] border-[1px] border-solid border-dodgerblue" />
                      <b className="absolute top-[28px] left-[29px]">1</b>
                      <b className="absolute top-[28px] left-[86px]">3</b>
                      <b className="absolute top-[28px] left-[144px]">2</b>
                      <b className="absolute top-[28px] left-[203px]">1</b>
                      <b className="absolute top-[6px] left-[14px] text-steelblue">
                        1-30%
                      </b>
                      <b className="absolute top-[6px] left-[68px] text-steelblue">
                        31-60%
                      </b>
                      <b className="absolute top-[6px] left-[126px] text-steelblue">
                        61-90%
                      </b>
                      <b className="absolute top-[6px] left-[184px] text-steelblue">
                        91-99%
                      </b>
                    </div>
                  </div>
                </div>
                <Button className="min-w-[144px]" type="default">
                  Select
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className="rounded-lg bg-row flex flex-col items-center justify-center pt-5 px-6 pb-8 gap-[32px]">
          <div className="flex flex-col items-center justify-start gap-[8px] text-right">
            <div className="h-[176.9px] flex flex-col items-center justify-center gap-[8px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-59-1@2x.png"
              />
              <h3 className="m-0 relative text-inherit font-normal font-inherit">
                Mad Lads
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-center text-sm text-silver font-medium">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">Floor price</div>
              </div>
              <div className="h-6 flex flex-row items-center justify-start gap-[8px] text-base text-white font-gotham-book">
                <b className="relative">24.50</b>
                <img
                  className="w-[18.2px] relative h-[18.2px]"
                  alt=""
                  src="/help.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[241px] relative box-border h-px border-t-[1px] border-solid border-pale-purple" />
          <div className="relative text-base">Confirm purchase</div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-sm font-gotham-book">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-end justify-between">
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <div className="relative">Fraction amount</div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <div className="relative">7 left</div>
                </div>
              </div>
              <div className="w-60 rounded box-border flex flex-col items-start justify-center py-2.5 px-2 text-5xl text-white font-medium border-[1px] border-solid border-red">
                <div className="relative">2</div>
              </div>
              <div className="self-stretch relative text-red inline-block h-[29px] shrink-0">
                Not enough funds in your wallet
              </div>
            </div>
            <AutoComplete
              className="self-stretch"
              value="6.4"
              placeholder="Amount funded"
            />
          </div>
          <div className="w-[241px] relative box-border h-px border-t-[1px] border-solid border-pale-purple" />
          <div className="w-60 flex flex-col items-center justify-start gap-[24px] text-xs text-grey font-medium">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-1 gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative">Fraction price</div>
                <div className="relative text-light-grey text-center">
                  3 sol
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative">Loan Contribution</div>
                <div className="relative text-light-grey text-center">10%</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative">Duration</div>
                <div className="relative text-light-grey text-center">
                  7 days
                </div>
              </div>
            </div>
            <Input.TextArea
              className="self-stretch font-gotham-book text-xs text-mid-grey"
              placeholder="Past performance is not indicative of future results. There are no guarantees of profit, and you may lose your  investment. Only invest what you can afford to lose."
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <Button className="self-stretch" type="primary">
              Lend
            </Button>
            <Button className="self-stretch min-w-[144px]" type="default">
              Cancel
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollectionDetailSelectedErr;
