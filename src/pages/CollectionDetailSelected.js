import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Menu, Button, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ProgressBar } from "react-bootstrap";

const CollectionDetailSelected = () => {
  return (
    <div className="w-full relative [background:linear-gradient(rgba(24,_24,_24,_0.2),_rgba(24,_24,_24,_0.2)),_#131313] [backdrop-filter:blur(24px)] h-[1283px] overflow-hidden flex flex-col items-center justify-start">
      <img
        className="w-[1728px] relative h-[1151.1px]"
        alt=""
        src="/vector.svg"
      />
      <main className="rounded-lg bg-main-dark [backdrop-filter:blur(24px)] flex flex-row items-start justify-start p-4 gap-[24px] mt-[-1087px] text-left text-5xl text-light-grey font-h1-title-42 border-[1px] border-solid border-pale-purple">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch rounded bg-row flex flex-col items-start justify-start py-4 px-5 gap-[32px]">
            <div className="flex flex-row items-center justify-start">
              <h3 className="m-0 w-[1035px] relative text-inherit font-normal font-inherit inline-block shrink-0">
                Select a pool to start Lending
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base font-medium">
              <div className="self-stretch relative font-medium">
                Pool availability
              </div>
              <div className="w-[507px] flex flex-row items-start justify-start gap-[24px] text-sm text-mid-grey font-gotham-book">
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
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-center text-base text-white font-gotham-book">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch bg-row h-[60px] flex flex-row items-center justify-start text-left text-light-grey">
                <div className="w-[165px] flex flex-row items-center justify-between py-0 pr-0 pl-4 box-border">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-6 relative h-6"
                      alt=""
                      src="/icons-24px.svg"
                    />
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative">Pool ID</div>
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/icons-16px.svg"
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
                  <Dropdown
                    overlay={
                      <Menu>
                        {[].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Fraction Price `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <Dropdown
                    overlay={
                      <Menu>
                        {[].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`APY `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <Dropdown
                    overlay={
                      <Menu>
                        {[].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Duration `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                  <img
                    className="w-0 relative h-[29px] object-contain"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[16px]">
                  <Dropdown
                    overlay={
                      <Menu>
                        {[].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Completion `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                  <img
                    className="w-0 relative h-[29px] object-contain hidden"
                    alt=""
                    src="/line-35.svg"
                  />
                </div>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0 border-[1px] border-solid border-pale-purple">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                    <div className="w-[101px] rounded-lg bg-main-dark flex flex-col items-start justify-center">
                      <div className="w-[46px] relative rounded-lg bg-pale-purple h-1.5" />
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
                <Button
                  className="w-36"
                  style={{ width: "144px" }}
                  type="default"
                >
                  Selected
                </Button>
              </div>
              <div className="rounded bg-row overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="w-[300px] hidden flex-row items-center justify-between py-2.5 px-4 box-border">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                    <div className="w-[101px] rounded-lg bg-main-dark flex flex-col items-start justify-center">
                      <div className="w-[46px] relative rounded-lg bg-pale-purple h-1.5" />
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
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                    <div className="w-[101px] rounded-lg bg-main-dark flex flex-col items-start justify-center">
                      <div className="w-[46px] relative rounded-lg bg-pale-purple h-1.5" />
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
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                      <div className="relative">99%</div>
                    </div>
                    <ProgressBar className="w-[101px]" />
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
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                    <div className="w-[101px] rounded-lg bg-main-dark flex flex-col items-start justify-center">
                      <div className="w-[46px] relative rounded-lg bg-pale-purple h-1.5" />
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
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                      <div className="relative">17%</div>
                    </div>
                    <ProgressBar className="w-[101px]" />
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
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/frame-2271@2x.png"
                    />
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
                      <div className="relative">17%</div>
                    </div>
                    <div className="w-[101px] rounded-lg bg-main-dark flex flex-col items-start justify-center">
                      <div className="w-[46px] relative rounded-lg bg-pale-purple h-1.5" />
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
        </div>
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
              <Input
                className="bg-[transparent] w-60 font-gotham-book text-sm text-pale-purple"
                placeholder="Set amount"
                style={{ width: "240px" }}
                bordered={true}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-6 px-1 gap-[24px] text-base text-mid-grey">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="relative">Amount funded</div>
                  <div className="flex flex-row items-center justify-start gap-[4px] text-light-grey">
                    <div className="relative">6.4</div>
                    <img className="w-4 relative h-4" alt="" src="/help.svg" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="relative">You earn</div>
                  <div className="flex flex-row items-center justify-start gap-[4px] text-light-grey">
                    <div className="relative">0.16</div>
                    <img className="w-4 relative h-4" alt="" src="/help.svg" />
                  </div>
                </div>
              </div>
            </div>
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

export default CollectionDetailSelected;
