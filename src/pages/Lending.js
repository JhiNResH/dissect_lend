import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Lending = () => {
  const navigate = useNavigate();

  const onArrowForwardIosIconClick = useCallback(() => {
    navigate("/collection-detail");
  }, [navigate]);

  const onArrowForwardIosIcon2Click = useCallback(() => {
    navigate("/collection-detail");
  }, [navigate]);

  const onArrowForwardIosIcon3Click = useCallback(() => {
    navigate("/collection-detail");
  }, [navigate]);

  const onArrowForwardIosIcon4Click = useCallback(() => {
    navigate("/collection-detail");
  }, [navigate]);

  const onArrowForwardIosIcon5Click = useCallback(() => {
    navigate("/collection-detail");
  }, [navigate]);

  return (
    <a className="[text-decoration:none] w-full relative bg-main-dark h-[1570px] overflow-hidden text-right text-23xl text-light-grey font-h1-title-42">
      <div className="absolute top-[40px] left-[229px] flex flex-row items-start justify-start gap-[571px]">
        <img
          className="w-10 relative h-10 object-contain"
          alt=""
          src="/logowhite-1@2x.png"
        />
        <div className="flex flex-row items-center justify-start">
          <div className="rounded-sm flex flex-col items-center justify-center p-2.5 box-border gap-[8px] min-w-[128px] min-h-[50px] max-h-[50px]">
            <Button
              className="self-stretch relative"
              disableElevation={true}
              color="primary"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Lend
            </Button>
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
            <Button
              className="flex-1 relative opacity-[0.7]"
              disableElevation={true}
              color="primary"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Borrow
            </Button>
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
            <Button
              className="flex-1 relative opacity-[0.7]"
              disableElevation={true}
              color="primary"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Reform
            </Button>
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
            <Button
              className="flex-1 relative opacity-[0.7]"
              disableElevation={true}
              color="primary"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Profile
            </Button>
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
            <Button
              className="flex-1 relative opacity-[0.7]"
              disableElevation={true}
              color="primary"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Connect wallet
            </Button>
            <img
              className="w-[23.9px] relative h-[23.9px] hidden"
              alt=""
              src="/icons-24px.svg"
            />
            <img className="w-2 relative h-0" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute top-[122px] left-[229px] w-[827px] flex flex-col items-start justify-start">
        <h1 className="m-0 relative text-inherit font-normal font-inherit">
          Lending
        </h1>
      </div>
      <div className="absolute top-[1205.2px] left-[1952.1px] rounded-[50%] [background:linear-gradient(136.23deg,_#027fff,_rgba(83,_2,_255,_0))] [filter:blur(160px)] w-[980px] h-[1182px] [transform:_rotate(177.87deg)] [transform-origin:0_0] opacity-[0.05]" />
      <div className="absolute top-[193px] left-[-187px] rounded-[50%] [background:linear-gradient(136.23deg,_#027fff,_rgba(83,_2,_255,_0))] [filter:blur(160px)] w-[778px] h-[778px] opacity-[0.05]" />
      <img className="absolute top-[336px] left-[1092px] w-6 h-6" alt="" />
      <img className="absolute top-[336px] left-[1133px] w-6 h-6" alt="" />
      <div className="absolute top-[202px] left-[229px] w-[1270px] flex flex-col items-start justify-start gap-[24px] text-center text-base text-white font-gotham-book">
        <div className="self-stretch flex flex-row items-start justify-between text-right text-sm text-pale-purple">
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
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 gap-[8px]">
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
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/solana_icon@2x.png"
                />
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
                className="w-6 relative h-6 cursor-pointer"
                alt=""
                src="/arrow-forward-ios.svg"
                onClick={onArrowForwardIosIconClick}
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
                className="w-6 relative h-6 cursor-pointer"
                alt=""
                src="/arrow-forward-ios.svg"
                onClick={onArrowForwardIosIcon2Click}
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
                <img
                  className="w-6 relative h-6 object-cover"
                  alt=""
                  src="/solana_icon@2x.png"
                />
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
                className="w-6 relative h-6 cursor-pointer"
                alt=""
                src="/arrow-forward-ios.svg"
                onClick={onArrowForwardIosIcon3Click}
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
                className="w-6 relative h-6 cursor-pointer"
                alt=""
                src="/arrow-forward-ios.svg"
                onClick={onArrowForwardIosIcon4Click}
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
                className="w-6 relative h-6 cursor-pointer"
                alt=""
                src="/arrow-forward-ios.svg"
                onClick={onArrowForwardIosIcon5Click}
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
        <div className="self-stretch flex flex-row items-start justify-between pt-20 px-5 pb-10 border-t-[1px] border-solid border-pale-purple">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-light">Managed by</div>
              <h1 className="m-0 relative text-23xl font-normal font-h1-title-42 text-left">
                Dissect
              </h1>
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px] text-left text-sm text-gray-4">
              <div className="flex flex-row items-start justify-start pt-4 px-0 pb-8 gap-[29px]">
                <img
                  className="w-[30px] relative h-[30px]"
                  alt=""
                  src="/vector.svg"
                />
                <a
                  className="[text-decoration:none] w-[30px] relative h-[30px]"
                  href="https://twitter.com/dissect_app"
                  target="_blank"
                >
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </a>
                <a
                  className="[text-decoration:none] w-[30px] relative h-[30px]"
                  href="https://twitter.com/dissect_app"
                  target="_blank"
                >
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </a>
              </div>
              <div className="relative">2023-2024 Dissect.</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-left text-gray-6 font-medium">
            <div className="relative font-medium">DOCUMENTATION</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm text-gray-4 font-gotham-book">
              <div className="self-stretch relative h-[17px]">
                <div className="absolute top-[0%] left-[0%]">Whitepaper</div>
              </div>
              <div className="w-[72px] relative h-[17px]">
                <div className="absolute top-[0%] left-[0%]">Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Lending;
