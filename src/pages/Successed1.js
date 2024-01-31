import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Successed1 = () => {
  const navigate = useNavigate();

  const onButtonContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray1-200 h-[1283px] overflow-hidden text-right text-sm text-light-grey font-gotham-book">
      <div className="absolute top-[202px] left-[calc(50%_-_635px)] w-[1270px] flex flex-col items-start justify-start gap-[24px] text-pale-purple">
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="w-96 rounded box-border flex flex-row items-center justify-between p-2.5 border-[1px] border-solid border-pale-purple">
            <div className="relative">Search Collection</div>
            <img className="w-6 relative h-6" alt="" src="/icons-24px.svg" />
          </div>
          <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-center text-mid-grey">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="relative">Your Favourites</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-base text-white">
          <div className="self-stretch bg-row flex flex-row items-start justify-start py-4 px-5 text-left text-light-grey">
            <img className="w-[27px] relative h-[27px]" alt="" />
            <div className="w-[263px] flex flex-row items-center justify-between py-0 pr-0 pl-[30px] box-border">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/property-1arrow-drop-down-selectedon.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative">{`Project `}</div>
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
            <div className="w-[165px] flex flex-row items-center justify-between py-0 pr-0 pl-4 box-border">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/property-1arrow-drop-down-selectedon.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative">Liquidity</div>
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
            <div className="w-[198px] flex flex-row items-center justify-between py-0 pr-0 pl-4 box-border">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/property-1arrow-drop-down-selectedon.svg"
                />
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative">Fraction Price</div>
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
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-4 box-border gap-[16px]">
              <div className="flex flex-row items-center justify-end">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/property-1arrow-drop-down-selectedon.svg"
                />
                <div className="flex flex-row items-center justify-end gap-[8px]">
                  <div className="relative">APY</div>
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
            <div className="w-[201px] flex flex-row items-center justify-between py-0 pr-0 pl-4 box-border">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/property-1arrow-drop-down-selectedon.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative">Available Pools</div>
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
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-4">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/property-1arrow-drop-down-selectedon.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative">Pool Completion</div>
                  <img
                    className="w-4 relative h-4"
                    alt=""
                    src="/icons-16px.svg"
                  />
                </div>
              </div>
              <img className="w-0 relative h-[29px] object-contain" alt="" />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-row flex flex-row items-center justify-start py-2 px-5">
            <img
              className="w-[27px] relative h-[27px]"
              alt=""
              src="/icons-24px.svg"
            />
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[30px] gap-[66px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/rectangle-59@2x.png"
                  />
                </div>
                <div className="relative">Okay Bears</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[164px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">1998.4</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[200px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[46px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">2.45</div>
                <img className="w-6 relative h-6" alt="" src="/help.svg" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[136px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="w-[42px] h-6 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">124%</div>
                <img className="w-6 relative h-6" alt="" />
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="w-[201px] flex flex-row items-center justify-end py-0 pr-0 pl-8 box-border gap-[16px]">
              <div className="h-6 flex flex-row items-center justify-start">
                <div className="relative">19</div>
              </div>
              <img
                className="w-0 relative h-[29px] object-contain"
                alt=""
                src="/line-35.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[32px] text-light-grey">
              <div className="w-[140.7px] flex flex-row items-center justify-start gap-[24px]">
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[30%]">4</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[23.33%]">12</div>
                </div>
                <div className="w-[30px] relative h-[30px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-main-dark" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-pale-purple" />
                  <div className="absolute top-[30%] left-[33.33%]">3</div>
                </div>
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/arrow-forward-ios.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img className="absolute top-[336px] left-[1092px] w-6 h-6" alt="" />
      <img className="absolute top-[336px] left-[1133px] w-6 h-6" alt="" />
      <img
        className="absolute top-[40px] left-[268px] w-10 h-10 object-contain"
        alt=""
        src="/logowhite-1@2x.png"
      />
      <div className="absolute top-[40px] left-[821px] flex flex-row items-center justify-start text-center text-base">
        <div className="rounded-sm flex flex-col items-center justify-center p-2.5 box-border gap-[8px] min-w-[128px] min-h-[50px] max-h-[50px] text-white font-medium">
          <div className="self-stretch relative font-medium">Lend</div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/line-29.svg"
          />
        </div>
        <img
          className="w-0 relative h-[29px] object-contain"
          alt=""
          src="/line-35.svg"
        />
        <div className="rounded-sm flex flex-row items-center justify-center p-2.5 box-border min-w-[128px] min-h-[50px] max-h-[50px]">
          <div className="flex-1 relative opacity-[0.7]">Borrow</div>
          <img
            className="w-[23.9px] relative h-[23.9px] hidden"
            alt=""
            src="/icons-24px.svg"
          />
          <img className="w-2 relative h-0" alt="" />
        </div>
        <img
          className="w-0 relative h-[29px] object-contain"
          alt=""
          src="/line-35.svg"
        />
        <div className="rounded-sm flex flex-row items-center justify-center p-2.5 box-border min-w-[128px] min-h-[50px] max-h-[50px]">
          <div className="flex-1 relative opacity-[0.7]">Reform</div>
          <img
            className="w-[23.9px] relative h-[23.9px] hidden"
            alt=""
            src="/icons-24px.svg"
          />
          <img className="w-2 relative h-0" alt="" />
        </div>
        <img
          className="w-0 relative h-[29px] object-contain"
          alt=""
          src="/line-35.svg"
        />
        <div className="rounded-sm flex flex-row items-center justify-center p-2.5 box-border min-w-[128px] min-h-[50px] max-h-[50px]">
          <div className="flex-1 relative opacity-[0.7]">Profile</div>
          <img
            className="w-[23.9px] relative h-[23.9px] hidden"
            alt=""
            src="/icons-24px.svg"
          />
          <img className="w-2 relative h-0" alt="" />
        </div>
        <img
          className="w-0 relative h-[29px] object-contain"
          alt=""
          src="/line-35.svg"
        />
        <div className="rounded-sm flex flex-row items-center justify-center p-2.5 box-border min-w-[128px] min-h-[50px] max-h-[50px]">
          <div className="flex-1 relative opacity-[0.7]">Connect wallet</div>
          <img
            className="w-[23.9px] relative h-[23.9px] hidden"
            alt=""
            src="/icons-24px.svg"
          />
          <img className="w-2 relative h-0" alt="" />
        </div>
      </div>
      <div className="absolute top-[142px] left-[268px] w-[827px] flex flex-col items-start justify-start text-23xl font-h1-title-42">
        <div className="relative">LENDING</div>
      </div>
      <div className="absolute top-[273px] left-[1516px] rounded-sm bg-row w-[9px] h-[901px] flex flex-col items-center justify-start">
        <div className="w-[9px] relative rounded-sm bg-pale-purple h-[73px]" />
      </div>
      <a className="[text-decoration:none] absolute top-[324px] left-[591px] rounded-lg bg-gray1-400 [backdrop-filter:blur(24px)] box-border w-[550px] overflow-hidden flex flex-col items-center justify-start pt-5 px-10 pb-10 gap-[24px] text-lg text-[inherit] font-h1-title-42 border-[1px] border-solid border-darkslategray-100">
        <div className="flex flex-col items-center justify-start py-0 px-5 gap-[21px]">
          <img className="w-20 relative h-20" alt="" src="/check-circle.svg" />
          <div className="relative">Successfully completed</div>
        </div>
        <div className="w-[241px] relative box-border h-px border-t-[1px] border-solid border-darkslategray-100" />
        <div className="w-[376px] flex flex-col items-start justify-start pt-2.5 px-0 pb-6 box-border text-left text-sm text-mid-grey font-medium">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative">Collection name</div>
              <div className="relative text-white text-right">{`Mad Lads `}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative">Fractions</div>
              <div className="relative text-white text-center">3 sol</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative">Amount Funded</div>
              <div className="relative text-white text-center">6 SOL</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative">Duration</div>
              <div className="relative text-white text-center">7 days</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative">estimated earnings</div>
              <div className="relative text-white text-center">0.06 SOL</div>
            </div>
          </div>
        </div>
        <div className="w-[376px] flex flex-col items-center justify-start gap-[24px] text-center text-base font-gotham-book">
          <div className="self-stretch rounded box-border h-11 flex flex-row items-center justify-center p-2.5 gap-[8px] min-w-[144px] border-[1px] border-solid border-mid-grey">
            <div className="relative">Done</div>
            <img
              className="w-6 relative h-6 hidden"
              alt=""
              src="/icons-24px.svg"
            />
          </div>
          <div className="self-stretch rounded bg-primary-blue h-11 flex flex-row items-center justify-center p-2.5 box-border gap-[8px]">
            <div className="relative">{`Check my position `}</div>
            <img
              className="w-6 relative h-6 hidden"
              alt=""
              src="/icons-24px.svg"
            />
          </div>
          <div
            className="rounded h-11 flex flex-row items-center justify-center p-2.5 box-border gap-[8px] min-w-[144px] cursor-pointer"
            onClick={onButtonContainer2Click}
          >
            <div className="relative">Share it</div>
            <img className="w-6 relative h-6" alt="" src="/icons-24px.svg" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Successed1;
