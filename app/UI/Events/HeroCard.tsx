import poster from '@/public/test/lil_peep_banner.jpeg';
import Image from 'next/image';
import locationIcon from '@/public/Images/location.svg';

export default function HeroCard  ({...props}) {
    const {eventTitle, section, genre, duration, date, location, startingPrice} = props;
    return (
        <>
            <div className="max-w-screen-lg md:mx-auto rounded-md py-6 px-4 sm:p-8 shadow-secondaryShadow">
                <div className="w-full h-72 sm:h-[390px] md:h-[450px] overflow-hidden rounded-lg justify-center items-center relative">
                    <Image quality={100} className="absolute inset-0 w-full h-full object-cover drop-shadow-md object-center" src={poster} loading="lazy" alt="Foreground Poster"/>
                </div>
                <div className=" divide-y-2 divide-[#00000033] space-y-3 mt-7">
                <div className=" flex flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                    <div className="space-y-4">
                        <p className="text-2xl md:text-4xl text-[#000000CC] font-bold">{eventTitle}</p>
                        <div className="flex items-center justify-center divide-x-2 divide-[#000000A1] text-[#000000A1]">
                            <span className="pr-3">{section}</span>
                            <span className="px-3">{genre}</span>
                            <span className="pl-3">{duration}</span>
                        </div>
                    </div>
                    <button className="bg-[#5A52FF] rounded-lg hover:shadow-sm px-5 py-3 text-white text-sm md:text-md">Login to Book</button>
                </div>
                <div className="pt-3 space-y-4 md:space-y-1">
                    <div className="text-[#000000A1] flex flex-col sm:flex-row justify-start items-start md:items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:divide-x-2 sm:divide-[#000000A1]">
                        <div className="flex justify-start items-center space-x-3">
                            <span className="">
                            {date}
                            </span>
                            <div className="flex items-center space-x-1">
                            <Image width={100} height={100} quality={100} className="w-5 h-auto" src={locationIcon} loading="lazy" alt="location-icon" />
                            <span>{location}</span>
                            </div>
                        </div>
                        <div className="sm:pl-3">{startingPrice} onwards</div>
                    </div>
                    <div>
                        <span className="whitespace-nowrap rounded-sm bg-[#FFFA7A] px-2.5 py-0.5 text-xs text-black">
                            Filling fast
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};