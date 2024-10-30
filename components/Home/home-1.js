/**
 * Home pages
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeStyle from '../Home/styles.module.css';
import { Button } from "@nextui-org/react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { CgArrowTopRight } from "react-icons/cg";
import { BiCheckCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import Image_1 from '../Home/image-1.webp';
import { CircularProgress } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";



const Home = () => {

    return (
        <>
            <section className={HomeStyle.__headline_ground__65s}>
                <div className="custom_container">
                    <div className={HomeStyle.__grid__ground__908}>

                        {/* left part */}
                        <div className={HomeStyle.__part__730}>
                            <div className={HomeStyle.__title__9djap}>Tracking nutrition
                                <em>and building muscle</em> mass <span> 400K+ <br /> <em>Active User</em></span>
                            </div>
                            <div className={HomeStyle.btn__mum__9djh_ground}>
                                <AvatarGroup isBordered max={3} total={0}>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <Avatar src="https://hellowebhelp.com/wp-content/uploads/2024/03/1709865199512.jpeg" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                </AvatarGroup>
                                <Button className={HomeStyle.btn__908__87} endContent={<CgArrowTopRight className={HomeStyle.icon__0367} size={27} />}>
                                    Get Started
                                </Button>
                            </div>
                            <div className={HomeStyle.items__flex__98dj_hdp}>
                                <div className={HomeStyle.__items__098}>
                                    <BiCheckCircle size={18} color='#d6d6b1' />
                                    <li>Macto Targets</li>
                                </div>
                                <div className={HomeStyle.__items__098}>
                                    <BiCheckCircle size={18} color='#d6d6b1' />
                                    <li>Macto Targets</li>
                                </div>
                                <div className={HomeStyle.__items__098}>
                                    <BiCheckCircle size={18} color='#d6d6b1' />
                                    <li>Macto Targets</li>
                                </div>
                            </div>
                            <div className={HomeStyle.card_flex__ground__0970}>
                                <div className={HomeStyle.part__905__kspi}>
                                    <div className={HomeStyle.__card__1__oe0_ground}>
                                        <Card className="max-w-[400px] ">
                                            <CardHeader className="flex gap-3">
                                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                                <div className="flex flex-col">
                                                    <p className="text-md">Wooneapi </p>
                                                    <p className="text-small text-default-500">Hellowebhelp.com</p>
                                                </div>
                                            </CardHeader>
                                            <Divider />
                                            <CardBody>
                                                <h2 className={HomeStyle.title__9s087}>WEB APPLICATION</h2>
                                                <p className={HomeStyle.dec__9d077_8sk}>
                                                    Both the design and ease of use are 4. Nothing superfluous.
                                                    I haven't looked at it all yet, but I already realize that I like it.
                                                </p>
                                            </CardBody>
                                            <Divider />
                                            <CardFooter>
                                                <Progress
                                                    size="sm"
                                                    radius="sm"
                                                    classNames={{
                                                        base: "max-w-md",
                                                        track: "drop-shadow-md border border-default",
                                                        indicator: "bg-gradient-to-r from-green-500 to-green-500",
                                                        label: "tracking-wider font-medium text-default-600",
                                                        value: "text-foreground/60",
                                                    }}
                                                    label="Active 10K+"
                                                    value={90}
                                                    showValueLabel={true}
                                                />
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                                <div className={HomeStyle.part__905__kspi}>
                                    <div className={HomeStyle.__card__1__oe0_ground}>
                                        <Card className="max-w-[400px] ">
                                            <CardHeader className="flex gap-3">
                                                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                                <div className="flex flex-col">
                                                    <p className="text-md">Brooklyn Simmons</p>
                                                    <p className="text-small text-default-500">12.10.2024</p>
                                                </div>
                                            </CardHeader>
                                            <Divider />
                                            <CardBody>
                                                <h2 className={HomeStyle.title__9s087}> NUTRITION WITH THE FITTRACK</h2>
                                                <p className={HomeStyle.dec__9d077_8sk}>
                                                    Both the design and ease of use are 4. Nothing superfluous.
                                                    I haven't looked at it all yet, but I already realize that I like it.
                                                </p>
                                            </CardBody>
                                            <Divider />
                                            <CardFooter>
                                                <Progress
                                                    size="sm"
                                                    radius="sm"
                                                    classNames={{
                                                        base: "max-w-md",
                                                        track: "drop-shadow-md border border-default",
                                                        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                                                        label: "tracking-wider font-medium text-default-600",
                                                        value: "text-foreground/60",
                                                    }}
                                                    label="Active 47K+"
                                                    value={65}
                                                    showValueLabel={true}
                                                />
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className={HomeStyle.__part__730}>

                            {/* card */}
                            <div className={HomeStyle.__card__850_ground}>
                                <div className={HomeStyle.position__9grpund}>
                                    <div className={HomeStyle.title__flex__id__90}>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.__new__9smlp}>New</div>
                                        </div>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.logo__hsdw__9sjn}>
                                                <div className={HomeStyle.logo__part__0ap0_1}>
                                                    <AiFillGoogleCircle size={38} color='#000' />
                                                </div>
                                                <div className={HomeStyle.logo__part__0ap_2}>
                                                    <AiFillApple size={38} className={HomeStyle.icon__09__7nl} color='#000' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={HomeStyle.title__flex_2nd__id__91}>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.title__09__kjp}>USER-FRIENDLY <br /> WEB APPLICATION</div>
                                        </div>
                                        <div className={HomeStyle.part__908__wop}>
                                            <CgArrowTopRight className={HomeStyle.icon__03689} size={37} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* card */}
                            <div className={HomeStyle.__card__850_ground} style={{ backgroundImage: `url(${Image_1.src})` }}>
                                <div className={HomeStyle.position__9grpund_2}>
                                    <div className={HomeStyle.title__flex__id__90}>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.__title__09__plo}>QUALITY <br /> OF SLEEP</div>
                                        </div>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.score_process_bar__908}>
                                                <CircularProgress
                                                    label="Speed"
                                                    size="lg"
                                                    value={70}
                                                    color="success"
                                                    formatOptions={{ style: "unit", unit: "kilometer" }}
                                                    showValueLabel={true}

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={HomeStyle.title__flex_2nd__id__91}>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.__new__9smlp__9oip}>Week</div>
                                            <div className={HomeStyle.__title__09_yup_6}>SLEEP STATISTIC</div>
                                            <div className={HomeStyle.__title__09_yup_26}>50</div>
                                        </div>
                                        <div className={HomeStyle.part__908__wop}>
                                            <div className={HomeStyle.__profile__9sm_hrpoli}>
                                                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Home;